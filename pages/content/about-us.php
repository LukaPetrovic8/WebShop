<?php
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
    <title>Shop | About Us</title>
</head>
<body>

    <?php include('../../includes/header.php'); ?>

    <main>
        <div class="container">
            <div class="breadcrumbs">
                <div>
                    <a href="home.php">Home</a>
                    <span>/</span>
                    <p>About Us</p>
                </div>
                <h1>About Us</h1>
            </div>
            <p class="page-intro">Welcome to Shop! Located in the heart of Zemun, Belgrade, Shop has been proudly serving the local community with fresh, high-quality groceries for many years. We are committed to providing a wide variety of products, from everyday essentials to unique specialty items, all carefully selected to meet the needs of our valued customers. 
                                  At Shop, we believe in more than just offering great products-we strive to create an exceptional shopping experience. Whether you're picking up ingredients for a family meal or exploring new culinary discoveries, our goal is to make your grocery shopping easy, enjoyable, and convenient. Come visit us today and discover the difference!</p>
            <section>
                <div class="story-row">
                    <div>
                        <h3>Our Story</h3>
                        <p>Welcome to Shop, where freshness meets community. Our story began with a passion for healthy living and high-quality food. Dragan, a strong supporter of locally sourced produce, recognized the need for a grocery store that offered more than everyday essentials. He envisioned a place where customers could enjoy fresh fruits and vegetables, carefully selected drinks, and a shopping experience that felt personal and welcoming.</p>                
                        <p>Over time, that simple idea became the foundation of Shop. We partnered with trusted local suppliers, focused on quality, and built a place where people feel welcome. What began as a vision grew into a community centered on fresh products, friendly service, and genuine connection.</p>
                    </div>
                    <img src="../../assets/images/main/our-story.jpg">
                </div>
                <div class="story-row">
                    <img src="../../assets/images/main/our-values.jpg">
                    <div>
                        <h3>Our Values</h3>
                        <p>We believe that great shopping begins with great products. That's why we're committed to offering only high-quality items carefully selected from trusted suppliers. Every product is chosen to meet our standards, ensuring you receive exceptional quality and value every time you shop with us. No matter what you're looking for, you can always count on a reliable selection and an outstanding shopping experience.</p>               
                        <p>Quality, however, is only one part of what we value. At Shop, we believe in honesty, transparency, and treating every customer with care. Our team works daily to maintain clean standards, reliable sourcing, and fair prices, because we want you to feel confident in everything you bring home. </p>
                    </div>
                </div>
                <p>At Shop, quality is at the heart of everything we do. We carefully select our products to ensure freshness, great taste, and the best value for our customers. As we continue to grow, our focus remains on bringing you even more high-quality goods, expanding our selection, and improving your shopping experience. 
                   Looking ahead, we are committed to innovation and sustainability, always striving to serve our community better. Whether it's introducing new products, enhancing customer service, or supporting local suppliers, our goal is to make Shop your go-to destination for top-quality groceries-today and in the future.</p>
            </section>
        </div>
        <section class="gallery-section">
            <h2>Inside Our Store</h2>
            <div class="gallery-row">
                <button class="gallery-btn gallery-prev"><i class="fa-solid fa-angle-left"></i></button>
                <div class="gallery-track">
                    <div class="gallery-slide">
                        <img src="../../assets/images/gallery/gallery1.jpg">
                    </div>
                    <div class="gallery-slide active">
                        <img src="../../assets/images/gallery/gallery2.jpg">
                    </div>
                    <div class="gallery-slide">
                        <img src="../../assets/images/gallery/gallery3.jpg">
                    </div>
                    <div class="gallery-slide">
                        <img src="../../assets/images/gallery/gallery4.jpg">
                    </div>
                    <div class="gallery-slide">
                        <img src="../../assets/images/gallery/gallery5.jpg">
                    </div>
                </div>
                <button class="gallery-btn gallery-next"><i class="fa-solid fa-angle-right"></i></button>
            </div>
        </section>       
        <div class="container">
            <section>
                <h2>Why us?</h2>
                <div class="why-us-row">
                    <div class="why-us-wrapper">
                        <div>
                            <i class="fa-solid fa-lightbulb"></i>
                        </div>
                        <h3>Innovative Solutions</h3>
                        <p>We embrace creativity and cutting-edge technology to craft unique, forward-thinking solutions that set us apart from the competition. By continuously staying ahead of industry trends, we ensure our clients receive modern, efficient, and impactful results that are perfectly tailored to meet their specific needs and challenges.</p>
                    </div>
                    <div class="why-us-wrapper">
                        <div>
                            <i class="fa-solid fa-coins"></i>
                        </div>
                        <h3>Budget Friendly</h3>
                        <p>We pride ourselves on delivering high-quality solutions at competitive prices, making sure you get the best possible value. Our cost-effective approach ensures that great results are accessible to all, without sacrificing performance, design, or the long-term success of your project. We make smart solutions within reach for every budget.</p>
                    </div>
                    <div class="why-us-wrapper">
                        <div>
                            <i class="fa-solid fa-medal"></i>
                        </div>
                        <h3>Premium Quality</h3>
                        <p>We take pride in offering products of the highest standard, each chosen for exceptional freshness and taste. Our focus on quality ensures that every item meets strict expectations and delivers consistent value. With Shop, you can trust that premium ingredients and great flavor are always guaranteed, bringing the best to every meal you prepare.</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Welcome to Shop</h2>
                <video class="about-us-video" controls loop autoplay muted src="../../assets/videos/shop-video.mp4"></video>
            </section>
        </div>
    </main>

    <?php include('../../includes/footer.php'); ?>

    <script src="../../js/functions.js"></script>
    <script src="../../js/order.js"></script>
    <script src="../../js/validations.js"></script>
    
</body>
</html>