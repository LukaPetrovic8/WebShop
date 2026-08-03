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
    <title>Delivery | Shop</title>
</head>
<body>

    <?php include('../../includes/header.php'); ?>	
        
    <main>
        <div class="container">
            <div class="breadcrumbs">
                <div>
                    <a href="home.php">Home</a>
                    <span>/</span>
                    <p>Delivery</p>
                </div>
                <h1>Delivery</h1>
            </div>
            <p class="page-intro">At Shop, we understand that life can get busy, and finding time to shop isn't always easy. That's why we're here to bring everything you need right to your doorstep. Our delivery service makes it simple to enjoy high quality products without leaving the comfort of your home. 
                                  Whether you're planning a family dinner, preparing for the week ahead, or simply restocking your essentials, we've got you covered. With reliable delivery and exceptional service, shopping has never been more convenient.</p>
            <section>
                <div class="delivery-type-row">
                    <div class="delivery-type-info">
                        <div>
                            <i class="fa-solid fa-bicycle"></i>
                            <h4>Bicycle Delivery</h4>
                        </div> 
                        <p>At our shop, we're dedicated to serving the Zemun community with convenience and care. That's why we offer free bicycle delivery for all orders within Zemun. When your order isn't too large, we'll deliver it by bicycle, providing a fast, efficient, and eco-friendly service. 
                           By using bicycles whenever possible, we help reduce traffic and pollution while ensuring your order arrives quickly. It's our way of supporting a greener, healthier neighborhood while making shopping more convenient for you.</p>
                        <a href="bicycle.php" class="button button-primary button-arrow">Read More
                            <i class="fa-solid fa-angle-right"></i> 
                            <i class="fa-solid fa-angle-right"></i>
                        </a>
                    </div> 
                    <img src="../../assets/images/main/bicycle.jpg">
                </div>
                <div class="delivery-type-row">
                    <img src="../../assets/images/main/car.jpg">
                    <div class="delivery-type-info">
                        <div>
                            <i class="fa-solid fa-car-side"></i>
                            <h4>Car Delivery</h4>
                        </div>
                        <p>We offer convenient car delivery to every part of Belgrade, ensuring your order reaches you quickly and safely. Whether you're in Zemun, Novi Beograd, or any other part of the city, we've got you covered. 
                           Our reliable delivery service is designed to bring your order directly to your doorstep with care and efficiency. Delivery fees are based on your location, allowing us to provide fair pricing while maintaining a fast, dependable, and professional service from start to finish.</p>
                        <a href="car.php" class="button button-primary button-arrow">Read More
                            <i class="fa-solid fa-angle-right"></i>
                            <i class="fa-solid fa-angle-right"></i>
                        </a>
                    </div>
                </div>   
                <div class="delivery-type-row">
                    <div class="delivery-type-info">     
                        <div>
                            <i class="fa-solid fa-truck"></i>
                            <h4>Truck Delivery</h4>
                        </div>
                        <p>We offer truck delivery to every part of Belgrade for large orders. This service is designed to handle bulk deliveries, ensuring that your bigger purchases arrive safely and efficiently, no matter where you're located in the city. 
                        Whether you're stocking up for your business or placing a large personal order, our truck delivery service guarantees a smooth and reliable experience. Simply make a big order, and we'll bring it straight to your door, carefully unloading and delivering everything securely and on schedule.</p>
                        <a href="truck.php" class="button button-primary button-arrow">Read More
                            <i class="fa-solid fa-angle-right"></i>
                            <i class="fa-solid fa-angle-right"></i>
                        </a>
                    </div> 
                    <img src="../../assets/images/main/truck.jpg">
                </div>
            </section>
            <section class="order-process-section">
                <h2>Order Process</h2>
                <p>Shopping with us is simple, fast, and convenient. Our streamlined ordering process is designed to save you time while ensuring you receive the freshest products possible. Follow these four easy steps to place your order, and we'll take care of everything else - from carefully selecting and packing your groceries to delivering them fresh and on time, right to your doorstep.</p>
                <div class="order-process-row">
                    <div class="order-process-wrapper">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                        </div>
                        <h5>Pick What You Need</h5>
                        <p>Browse through our selection and choose exactly what you want - fresh groceries, daily essentials, and more, all in a few clicks.</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                    <div class="order-process-wrapper">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>
                        </div>
                        <h5>Review & Confirm</h5>
                        <p>Double-check your cart, adjust quantities, and confirm your order. It's quick, simple, and secure.</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                    <div class="order-process-wrapper">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>
                        </div>
                        <h5>We Prepare Your Delivery</h5>
                        <p>We pack your order with care, making sure everything stays fresh, safe, and ready for delivery.</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                    <div class="order-process-wrapper">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <h5>We Deliver to Your Door</h5>
                        <p>Sit back and relax while we bring your order straight to your doorstep, right on time.</p>
                    </div>
                </div>
            </section>
            <section class="delivery-table-section">
                <h2>Delivery Information</h2>
                <p>At Shop, we are proud to offer convenient delivery to a wide range of locations so you can enjoy high quality products without leaving your home. Below, you'll find a detailed table of the areas we serve and the delivery fee for each zone. We strive to make the delivery process simple, reliable, and affordable. 
                   If you don't see your location listed, feel free to contact us - we may still be able to deliver to your area.</p>
                <div class="delivery-table-row">
                    <table>
                        <tr>
                            <th>Borough</th>
                            <th>Delivery Fee</th>
                            <th>Minimum Order</th>
                        </tr>
                        <tr>
                            <th>Barajevo</th>
                            <th>$8.00</th>
                            <th>$50.00</th>
                        </tr>
                        <tr>
                            <th>Čukarica</th>
                            <th>$3.00</th>
                            <th>$10.00</th>
                        </tr>
                        <tr>
                            <th>Grocka</th>
                            <th>$8.00</th>
                            <th>$50.00</th>
                        </tr>
                        <tr>
                            <th>Lazarevac</th>
                            <th>$8.00</th>
                            <th>$50.00</th>
                        </tr>
                        <tr>
                            <th>Mladenovac</th>
                            <th>$8.00</th>
                            <th>$50.00</th>
                        </tr>
                        <tr>
                            <th>Novi Beograd</th>
                            <th>$2.00</th>
                            <th>$5.00</th>
                        </tr>
                        <tr>
                            <th>Obrenovac</th>
                            <th>$8.00</th>
                            <th>$50.00</th>
                        </tr>
                        <tr>
                            <th>Palilula</th>
                            <th>$4.00</th>
                            <th>$12.00</th>
                        </tr>
                        <tr>
                            <th>Rakovica</th>
                            <th>$5.00</th>
                            <th>$15.00</th>
                        </tr>
                        <tr>
                            <th>Savski Venac</th>
                            <th>$3.00</th>
                            <th>$10.00</th>
                        </tr>
                        <tr>
                            <th>Sopot</th>
                            <th>$8.00</th>
                            <th>$50.00</th>
                        </tr>
                        <tr>
                            <th>Stari Grad</th>
                            <th>$3.00</th>
                            <th>$8.00</th>
                        </tr>
                        <tr>
                            <th>Surčin</th>
                            <th>$2.00</th>
                            <th>$8.00</th>
                        </tr>
                        <tr>
                            <th>Voždovac</th>
                            <th>$4.00</th>
                            <th>$12.00</th>
                        </tr>
                        <tr>
                            <th>Vračar</th>
                            <th>$4.00</th>
                            <th>$12.00</th>
                        </tr>
                        <tr>
                            <th>Zemun</th>
                            <th>$1.00</th>
                            <th>$5.00</th>
                        </tr>
                        <tr>
                            <th>Zvezdara</th>
                            <th>$5.00</th>
                            <th>$15.00</th>
                        </tr>
                    </table>
                    <div>
                        <h5>Table Guide:</h5>
                        <ul>
                            <li><span>Borough </span> - Refers to the specific area within Belgrade where we provide delivery. We cover all boroughs citywide.</li>
                            <li><span>Delivery Fee </span>- Refers to the fixed delivery charge applied based on the selected borough. Each borough has its own delivery fee determined by distance and service area.</li>
                            <li><span>Minimun Order </span>- Shows the minimum order amount required to avoid a small order fee. Orders below this amount will have a small order fee applied.</li>
                        </ul>
                    </div>
                </div>
            </section>   
        </div>
    </main>

    <?php include('../../includes/footer.php'); ?>

    <script src="../../js/functions.js"></script>
    <script src="../../js/order.js"></script>
    <script src="../../js/validations.js"></script>
    
</body>
</html>