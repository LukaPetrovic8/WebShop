<?php

require_once(__DIR__ . '/../../includes/dbconnection.php'); 

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
    <title>Shop | Blog</title>
</head>
<body>

    <?php include('../../includes/header.php'); ?>

    <main>
        <div class="container">
            <div class="breadcrumbs">
                <div>
                    <a href="home.php">Home</a>
                    <span>/</span>
                    <a href="about-us.php">About Us</a>
                    <span>/</span>
                    <p>Blog</p>
                </div>
                <h1>Blog</h1>
            </div> <?php
            $sql = "SELECT * FROM blog ORDER BY created_at DESC";
            $result = mysqli_query($connection, $sql);
            if (mysqli_num_rows($result) > 0) { ?>
                <section>
                    <div class="blog-row"> <?php
                    while($row = mysqli_fetch_assoc($result)) {
                        $imageName = $row['image'];
                        $imagePath = "../../assets/images/blog/" . $imageName;
                        $defaultImage = "../../assets/images/products/image-not-found.png";
                        if (!file_exists($imagePath) || empty($imageName)) {
                            $imagePath = $defaultImage;
                        } ?>                       
                        <div class="blog-wrapper">
                            <a href="article.php?id=<?php echo $row['id']; ?>" class="blog-image" style="background-image: url(<?php echo $imagePath; ?>);"></a>
                            <div>
                                <span><?php echo date('m.d.Y', strtotime($row['created_at'])); ?></span>
                                <h4><a href="article.php?id=<?php echo $row['id']; ?>"><?php echo $row['title']; ?></a></h4>
                                <p><?php echo $row['excerpt']; ?></p>
                                <a href="article.php?id=<?php echo $row['id']; ?>" class="button button-primary button-arrow">Read More
                                    <i class="fa-solid fa-angle-right"></i>
                                    <i class="fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                        </div> <?php 
                    } ?>
                    </div>
                </section> <?php
            } else { ?>
                <div class="no-data-row">
                    <img src="../../assets/images/main/no-blogs-available.png">
                    <h4>No Blog Posts Available</h4>
                    <p>There are no blog posts to display at the moment. Please check back later.</p>
                </div> <?php
            } ?>
        </div>
    </main>

    <?php include('../../includes/footer.php'); ?>

    <script src="../../js/functions.js"></script>
    <script src="../../js/order.js"></script>
    <script src="../../js/validations.js"></script>
    
</body>
</html>