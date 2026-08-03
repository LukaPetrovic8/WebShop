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
    <title>By Car | Shop</title>
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
                    <p>By Car</p>
                </div>
                <h1>By Car</h1>
            </div>
            <p class="page-intro">At Shop, we understand that speed and flexibility matter - especially when it comes to reaching customers across wider areas. That's why we rely on car delivery to handle medium-distance orders efficiently and reliably. Our car couriers ensure safe, timely transport of your items while navigating city streets and suburbs with ease. This method allows us to serve more neighborhoods without compromising quality or speed, making sure your delivery arrives on time, every time.</p>
        </div>
        <section class="delivery-video-section">
            <div class="delivery-video-info">
                <div class="container">
                    <h5>Delivery Benefits:</h5>
                    <ul>
                        <li>Ideal for longer distances</li>
                        <li>Weather-protected transport</li>
                        <li>Faster delivery for multiple items</li>
                        <li>Flexible for various package sizes</li>
                    </ul>
                    <h5>Estimated Delivery Time:</h5>
                    <ul>
                        <li><span>Workdays: </span>45min</li>
                        <li><span>Weekend: </span>60min</li>
                    </ul>
                    <h5>Delivery Area:</h5>
                    <ul>
                        <li>Anywhere in Belgrade</li>
                    </ul>
                </div>
                <div class="shape"></div>
            </div>
            <video autoplay muted loop playsinline class="delivery-video">
                <source src="../../assets/videos/car-delivery.mp4" type="video/mp4">
            </video>
        </section>
        <div class="container">
            <section>
                <h2>Delivery Performance</h2>
                <div class="delivery-ratings-wrapper">
                    <img src="../../assets/images/main/car-illustration.png">
                    <div class="delivery-ratings">
                        <div class="delivery-rating-info">
                            <div>
                                <i class="fa-solid fa-gauge"></i>
                                <span>Speed</span>
                            </div>
                            <span>9/10</span>
                        </div>
                        <div class="rating-bar">
                            <div style="right: 10%;"></div>
                        </div>
                        <div class="delivery-rating-info">
                            <div>
                                <i class="fa-solid fa-box-open"></i>
                                <span>Capacity</span>
                            </div>
                            <span>7/10</span>
                        </div>
                        <div class="rating-bar">
                            <div style="right: 30%;"></div>
                        </div>
                        <div class="delivery-rating-info">
                            <div>
                                <i class="fa-solid fa-map-location-dot"></i>
                                <span>Range</span>
                            </div>
                            <span class="perfect-rating">10/10</span>
                        </div>
                        <div class="rating-bar">
                            <div style="right: 0%;"></div>
                        </div>
                        <div class="delivery-rating-info">
                            <div>
                                <i class="fa-solid fa-handshake"></i>
                                <span>Reliability</span>
                            </div>
                            <span>8/10</span>
                        </div>
                        <div class="rating-bar">
                            <div style="right: 20%;"></div>
                        </div>
                        <div class="delivery-rating-info">
                            <div>
                                <i class="fa-solid fa-leaf"></i>
                                <span>Eco Friendly</span>
                            </div>
                            <span>6/10</span>
                        </div>
                        <div class="rating-bar">
                            <div style="right: 40%;"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="courier-section">
            <h2>Meet Our Courier</h2>
            <div class="container">
                <div class="courier-wrapper">
                    <img src="../../assets/images/main/worker7.png">
                    <div class="courier-info">
                        <h3>Henry Foster</h3>
                        <div class="courier-details-wrapper">
                            <div class="courier-details">
                                <div>
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div>
                                    <span>Age</span>
                                    <p>47</p>
                                </div>
                            </div>
                            <div class="courier-details">
                                <div>
                                    <i class="fa-solid fa-car-side"></i>
                                </div>
                                <div>
                                    <span>Vehicle</span>
                                    <p>Car</p>
                                </div>
                            </div>
                            <div class="courier-details">
                                <div>
                                    <i class="fa-solid fa-briefcase"></i>
                                </div>
                                <div>
                                    <span>Experience</span>
                                    <p>6 yrs</p>
                                </div>
                            </div>
                            <div class="courier-details">
                                <div>
                                    <i class="fa-solid fa-globe"></i>
                                </div>
                                <div>
                                    <span>Languages</span>
                                    <p>EN, SR</p>
                                </div>
                            </div>
                        </div>
                        <div class="courier-strengths">
                            <span>FRIENDLY</span>
                            <span>CONFIDENT</span>
                            <span>ORGANIZED</span>
                            <span>PROFESSIONAL</span>
                        </div>
                        <h5>Biography</h5>
                        <p>Henry is a dependable car delivery driver with a strong commitment to safety and customer satisfaction. Skilled at planning optimal routes and managing tight schedules, he delivers every order with careful attention and professionalism. With a calm approach and reliable work ethic, he ensures each delivery arrives on time and with consistently excellent service.</p>
                        <div class="courier-ratings-wrapper">
                            <div>
                                <h5>Skills</h5>
                                <div class="courier-rating">
                                    <p>Efficiency</p>
                                    <div>
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                    </div>
                                    <p class="perfect-rating">10/10</p>
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
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span class="empty-step"></span>
                                    </div>
                                    <p>9/10</p>
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
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                    </div>
                                    <p class="perfect-rating">10/10</p>
                                </div>
                                <div class="courier-rating">
                                    <p>Dedication</p>
                                    <div>
                                        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span class="empty-step"></span>
                                    </div>
                                    <p>9/10</p>
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