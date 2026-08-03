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
    <title>By Bicycle | Shop</title>
</head>
<body>

    <?php include('../../includes/header.php'); ?>	
        
    <main>
        <div class="container">
            <div class="breadcrumbs">
                <div>
                    <a href="home.php">Home</a>
                    <span>/</span>
                    <a href="delivery.php">Delivery</a>
                    <span>/</span>
                    <p>By Bicycle</p>
                </div>
                <h1>By Bicycle</h1>
            </div>
            <p class="page-intro">At Shop, we are deeply committed to eco-friendly practices and building a cleaner, healthier future for everyone. To actively reduce pollution and minimize our environmental impact, we proudly deliver all orders within the Zemun borough exclusively by bicycle. By choosing bicycle delivery, we not only cut down on emissions but also promote sustainable urban living. This approach allows us to provide faster, greener, and more responsible service, while contributing to the well-being of our community and setting a new standard for environmentally conscious deliveries. </p>
        </div>
        <section class="delivery-video-section">
            <div class="delivery-video-info">
                <div class="container">
                    <h5>Delivery Benefits:</h5>
                    <ul>
                        <li>No traffic delays</li>
                        <li>Safe for the environment</li>
                        <li>Lower noise pollution</li>
                        <li>Friendly local rider</li>
                    </ul>
                    <h5>Estimated Delivery Time:</h5>
                    <ul>
                        <li><span>Workdays: </span>30min</li>
                        <li><span>Weekend: </span>45min</li>
                    </ul>
                    <h5>Delivery Area:</h5>
                    <ul>
                        <li>Zemun</li>
                    </ul>
                </div>
                <div class="shape"></div>
            </div>
            <video autoplay muted loop playsinline>
                <source src="../../assets/videos/bicycle-delivery.mp4" type="video/mp4">
            </video>
        </section>
        <div class="container">
            <section>
                <h2>Delivery Performance</h2>
                <div class="delivery-ratings-wrapper">
                    <img src="../../assets/images/main/bicycle-illustration.jpg">
                    <div class="delivery-ratings">
                        <div class="delivery-rating-info">
                            <div>
                                <i class="fa-solid fa-gauge"></i>
                                <span>Speed</span>
                            </div>
                            <span>4.5/10</span>
                        </div>
                        <div class="rating-bar">
                            <div style="right: 55%;"></div>
                        </div>
                        <div class="delivery-rating-info">
                            <div>
                                <i class="fa-solid fa-box-open"></i>
                                <span>Capacity</span>
                            </div>
                            <span>4/10</span>
                        </div>
                        <div class="rating-bar">
                            <div style="right: 60%;"></div>
                        </div>
                        <div class="delivery-rating-info">
                            <div>
                                <i class="fa-solid fa-map-location-dot"></i>
                                <span>Range</span>
                            </div>
                            <span>3/10</span>
                        </div>
                        <div class="rating-bar">
                            <div style="right: 70%;"></div>
                        </div>
                        <div class="delivery-rating-info">
                            <div>
                                <i class="fa-solid fa-handshake"></i>
                                <span>Reliability</span>
                            </div>
                            <span>9.5/10</span>
                        </div>
                        <div class="rating-bar">
                            <div style="right: 5%;"></div>
                        </div>
                        <div class="delivery-rating-info">
                            <div>
                                <i class="fa-solid fa-leaf"></i>
                                <span>Eco Friendly</span>
                            </div>
                            <span class="perfect-rating">10/10</span>
                        </div>
                        <div class="rating-bar">
                            <div style="right: 0%;"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="courier-section">
            <h2>Meet Our Courier</h2>
            <div class="container">
                <div class="courier-wrapper">
                    <img src="../../assets/images/main/worker5.png">
                    <div class="courier-info">
                        <h3>Omar Hassan</h3>
                        <div class="courier-details-wrapper">
                            <div class="courier-details">
                                <div>
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div>
                                    <span>Age</span>
                                    <p>26</p>
                                </div>
                            </div>
                            <div class="courier-details">
                                <div>
                                    <i class="fa-solid fa-bicycle"></i>
                                </div>
                                <div>
                                    <span>Vehicle</span>
                                    <p>Bicycle</p>
                                </div>
                            </div>
                            <div class="courier-details">
                                <div>
                                    <i class="fa-solid fa-briefcase"></i>
                                </div>
                                <div>
                                    <span>Experience</span>
                                    <p>2 yr</p>
                                </div>
                            </div>
                            <div class="courier-details">
                                <div>
                                    <i class="fa-solid fa-globe"></i>
                                </div>
                                <div>
                                    <span>Languages</span>
                                    <p>AR, EN</p>
                                </div>
                            </div>
                        </div>
                        <div class="courier-strengths">
                            <span>RESPONSIBLE</span>
                            <span>ADAPTABLE</span>
                            <span>MOTIVATED</span>
                            <span>PUNCTUAL</span>
                        </div>
                        <h5>Biography</h5>
                        <p>Omar is a dedicated and agile bicycle courier known for his precision and excellent customer care. Navigating busy streets with ease, he handles every delivery with focus and responsibility, always ensuring orders stay secure and arrive promptly. With an energetic attitude and a passion for smooth service, he brings fast, friendly, and dependable delivery to every customer.</p>
                        <div class="courier-ratings-wrapper">
                            <div>
                                <h5>Skills</h5>
                                <div class="courier-rating">
                                    <p>Efficiency</p>
                                    <div>
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span class="empty-step"></span><span class="empty-step"></span>
                                    </div>
                                    <p>8/10</p>
                                </div>
                                <div class="courier-rating">
                                    <p>Navigation</p>
                                    <div>
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span class="empty-step"></span>
                                    </div>
                                    <p>9/10</p>
                                </div>
                                <div class="courier-rating">
                                    <p>Planning</p>
                                    <div>
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span class="empty-step"></span><span class="empty-step"></span>
                                    </div>
                                    <p>8/10</p>
                                </div>
                            </div>
                            <div>
                                <h5>Personality</h5>
                                <div class="courier-rating">
                                    <p>Work Ethic</p>
                                    <div>
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                    </div>
                                    <p class="perfect-rating">10/10</p>
                                </div>
                                <div class="courier-rating">
                                    <p>Reliability</p>
                                    <div>
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span class="empty-step"></span><span class="empty-step"></span>
                                    </div>
                                    <p>8/10</p>
                                </div>
                                <div class="courier-rating">
                                    <p>Dedication</p>
                                    <div>
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span class="empty-step"></span><span class="empty-step"></span>
                                    </div>
                                    <p>8/10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include('../../includes/footer.php'); ?>

    <script src="../../js/functions.js"></script>
    <script src="../../js/order.js"></script>
    <script src="../../js/validations.js"></script>
    
</body>
</html>