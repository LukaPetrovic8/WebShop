<?php

require_once(__DIR__ . '/../includes/dbconnection.php');

$allowedTables = ['products1', 'products2', 'products3'];

$table = $_GET['table'] ?? '';
$sort = $_GET['sort'] ?? 'newest';
$search = trim($_GET['search'] ?? '');

if (!in_array($table, $allowedTables)) {
    echo '';
    exit;
}

switch ($sort) {
    case 'popular':
        $orderBy = "order_count DESC, id DESC";
        break;

    case 'discount':
        $orderBy = "
            CASE WHEN discount_price IS NULL THEN 1 ELSE 0 END ASC,
            CASE 
                WHEN discount_price IS NOT NULL 
                THEN ((price - discount_price) / price) 
                ELSE 0 
            END DESC,
            price ASC
        ";
        break;

    case 'price-high-low':
        $orderBy = "COALESCE(discount_price, price) DESC";
        break;

    case 'price-low-high':
        $orderBy = "COALESCE(discount_price, price) ASC";
        break;

    case 'newest':
    default:
        $orderBy = "id DESC";
        break;
}

$sql = "SELECT * FROM $table";

if (!empty($search)) {
    $safeSearch = mysqli_real_escape_string($connection, $search);
    $sql .= " WHERE name LIKE '%$safeSearch%'";
}

$sql .= " ORDER BY $orderBy";

$result = mysqli_query($connection, $sql);

if ($result && mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $imageName = $row['image'];
        $imagePath = "../../assets/images/products/" . $imageName;
        $defaultImage = "../../assets/images/products/image-not-found.png";

        if (!file_exists(__DIR__ . "/../assets/images/products/" . $imageName) || empty($imageName)) {
            $imagePath = "../../assets/images/products/image-not-found.png";
        }

        $finalPrice = ($row['discount_price'] !== null) ? $row['discount_price'] : $row['price']; ?>

        <div class="product-wrapper">
            <div class="product-image" style="background-image: url('<?php echo $imagePath; ?>');"></div>
            <div class="product-info">
                <h5><?php echo htmlspecialchars($row['name']); ?></h5>
                <?php if ($row['discount_price'] === null) { ?>
                    <span class="product-price">$<?php echo $row['price']; ?></span>
                <?php } else { ?>
                    <div>
                        <span>$<?php echo $row['price']; ?></span>
                        <span>$<?php echo $row['discount_price']; ?></span>
                    </div>
                <?php } ?>
            </div>
            <div class="product-button-wrapper">
                <button class="button-primary"
                    data-table="<?php echo $table; ?>"
                    data-id="<?php echo $row['id']; ?>"
                    data-name="<?php echo htmlspecialchars($row['name']); ?>"
                    data-price="<?php echo $finalPrice; ?>"
                    data-regular-price="<?php echo $row['price']; ?>"
                    data-discount-price="<?php echo $row['discount_price'] !== null ? $row['discount_price'] : ''; ?>"
                    data-image="<?php echo htmlspecialchars($row['image']); ?>">
                    <span>Add to Cart</span>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-box"></i>
                </button>
            </div> <?php 
            if ($row['discount_price'] !== null) {
                $discountPercent = round((($row['price'] - $row['discount_price']) / $row['price']) * 100); ?>
                <div class="sale-label">
                    <span>-<?php echo $discountPercent; ?>%</span>
                </div>
            <?php } ?>
        </div> <?php
    }
} else { ?>
    <div class="no-data-row">
        <img src="../../assets/images/main/no-products-found.png">
        <h4>No Products Found</h4>
        <p>We couldn't find any products matching your filters. Clear or adjust your filters to see more products.</p>
    </div> <?php
}

?>