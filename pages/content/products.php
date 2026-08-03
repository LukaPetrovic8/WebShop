<?php

require_once(__DIR__ . '/../../includes/dbconnection.php'); 

$productCategoryResult = mysqli_query(
    $connection,
    "SELECT slug, name, image FROM product_categories"
);

$productCategoryData = [];

while ($row = mysqli_fetch_assoc($productCategoryResult)) {
    $productCategoryData[$row['slug']] = $row;
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
    <title>Products | Shop</title>
</head>
<body>

    <?php include('../../includes/header.php'); ?>
	
    <main>
        <div class="container">
            <div class="breadcrumbs">
                <div>
                    <a href="home.php">Home</a>
                    <span>/</span>
                    <p>Products</p>
                </div>
                <h1>Products</h1>
            </div>
            <section class="products-section">
                <p>At Shop, we're committed to making it easy for you to find exactly what you need. Explore our carefully selected collection of high quality products, organized into convenient categories for a faster and more enjoyable shopping experience. 
                   Whether you're placing a small order or stocking up on everyday essentials, you can count on reliable quality, competitive prices, and products chosen to meet the highest standards.</p>
                <div>
                    <a href="../products/products1.php" style="background-image: url('../../assets/images/products/<?php echo $productCategoryData['products1']['image']; ?>');">
                        <h3><?php echo $productCategoryData['products1']['name']; ?></h3>
                    </a>
                    <a href="../products/products2.php" style="background-image: url('../../assets/images/products/<?php echo $productCategoryData['products2']['image']; ?>');">
                        <h3><?php echo $productCategoryData['products2']['name']; ?></h3>
                    </a>
                    <a href="../products/products3.php" style="background-image: url('../../assets/images/products/<?php echo $productCategoryData['products3']['image']; ?>');">
                        <h3><?php echo $productCategoryData['products3']['name']; ?></h3>
                    </a>
                </div>
                <p>We regularly update our selection to provide outstanding quality, excellent value, and dependable availability. Every product is carefully chosen to meet our high standards, ensuring you receive the best with every order. 
                   Whether you're shopping for everyday essentials or searching for something special, you'll find a wide variety of products designed to make every purchase simple, convenient, and enjoyable. At Shop, we're committed to delivering a reliable shopping experience you can count on every time you visit.</p>
            </section>
        </div>
    </main>

    <?php include('../../includes/footer.php'); ?>

    <script src="../../js/functions.js"></script>
    <script src="../../js/order.js"></script>
    <script src="../../js/validations.js"></script>
    
</body>
</html>