<?php 

require_once(__DIR__ . '/../../includes/dbconnection.php'); 

$productNames = [];

$productCategorySlugs = ['products1', 'products2', 'products3'];

foreach ($productCategorySlugs as $productCategorySlug) {
    $productCategoryResult = mysqli_query(
        $connection,
        "SELECT name FROM product_categories WHERE slug = '$productCategorySlug'"
    );

    if ($productCategoryResult && $productCategoryRow = mysqli_fetch_assoc($productCategoryResult)) {
        $productNames[$productCategorySlug] = $productCategoryRow['name'];
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/WebShop/css/variables.css">
    <link rel="stylesheet" href="/WebShop/css/style.css">
    <link rel="stylesheet" href="/WebShop/css/responsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/intl-tel-input@18.3.0/build/js/intlTelInput.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.3.0/css/intlTelInput.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="icon" href="../../assets/images/favicon/favicon.ico" type="image/x-icon">
    <title><?php echo $productNames['products1']; ?> | Shop</title>
</head>

<body>

    <?php require_once(__DIR__ . '/../../includes/header.php'); ?>

    <main>
        <div class="container">
            <div class="breadcrumbs">
                <div>
                    <a href="../content/home.php">Home</a>
                    <span>/</span>
                    <a href="../content/products.php">Products</a>
                    <span>/</span>
                    <p><?php echo $productNames['products1']; ?></p>
                </div>
                <h1><?php echo $productNames['products1']; ?></h1>
            </div> <?php
            $productTable = "products1";
            $result = mysqli_query($connection, "SELECT * FROM $productTable ORDER BY id DESC");
            $num_rows = mysqli_num_rows($result);
            if (mysqli_num_rows($result) > 0) { ?>
                <section class="filters-section">
                    <div class="search-wrapper">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search" maxlength="50">
                    </div>
                    <div class="sort-wrapper">
                        <span>Sort By</span>
                        <div class="select-wrapper">
                            <select id="sort-by">
                                <option value="newest">Newest</option>
                                <option value="popular">Most Popular</option>
                                <option value="discount">Biggest Discounts</option>
                                <option value="price-high-low">Price: High-Low</option>
                                <option value="price-low-high">Price: Low-High</option>
                            </select>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="products-row"> <?php
                        while ($row = mysqli_fetch_array($result)) { ?>
                        <div class="product-wrapper"> <?php
                            $imageName = $row['image'];
                            $imagePath = "../../assets/images/products/" . $imageName;
                            $defaultImage = "../../assets/images/products/image-not-found.png";
                            if (!file_exists($imagePath) || empty($imageName)) {
                                $imagePath = $defaultImage;
                            }                       
                            $finalPrice = ($row['discount_price'] !== null) ? $row['discount_price'] : $row['price']; ?>
                            <div class="product-image" style="background-image: url('<?php echo $imagePath; ?>');"></div>
                            <div class="product-info">
                                <h5><?php echo $row['name']; ?></h5> <?php
                                if ($row['discount_price'] === null) { ?>
                                    <span class="product-price">$<?php echo $row['price']; ?></span> <?php
                                } else { ?>
                                    <div>
                                        <span>$<?php echo $row['price']; ?></span>
                                        <span>$<?php echo $row['discount_price']; ?></span>
                                    </div> <?php
                                } ?>
                            </div>
                            <div class="product-button-wrapper">
                                <button class="button-primary"
                                    data-table="<?php echo $productTable; ?>"
                                    data-id="<?php echo $row['id']; ?>"
                                    data-name="<?php echo $row['name']; ?>"
                                    data-price="<?php echo $finalPrice; ?>"
                                    data-regular-price="<?php echo $row['price']; ?>"
                                    data-discount-price="<?php echo $row['discount_price'] !== null ? $row['discount_price'] : ''; ?>"
                                    data-image="<?php echo $row['image']; ?>">
                                    <span>Add to Cart</span>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <i class="fa-solid fa-box"></i>
                                </button>
                            </div> <?php
                            if ($row['discount_price'] !== null) {
                                $discountPercent = round((($row['price'] - $row['discount_price']) / $row['price']) * 100); ?>
                                <div class="sale-label">
                                    <span>-<?php echo $discountPercent; ?>%</span>
                                </div> <?php
                            } ?>
                        </div> <?php
                        } ?>
                    </div>
                </section> <?php
            } else { ?>
                <div class="no-data-row">
                    <img src="../../assets/images/main/no-products-available.png">
                    <h4></h4>
                    <p></p>
                </div> <?php
            } ?>
        </div>
    </main>

    <?php include('../../includes/footer.php'); ?>

    <script src="/WebShop/js/functions.js"></script>
    <script src="/WebShop/js/order.js"></script>
    <script src="/WebShop/js/validations.js"></script>

</body>
</html>