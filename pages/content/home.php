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
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Manrope:wght@200;300;400;500;600;700&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/WebShop/css/variables.css">
    <link rel="stylesheet" href="/WebShop/css/style.css">
    <link rel="stylesheet" href="/WebShop/css/responsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/intl-tel-input@18.3.0/build/js/intlTelInput.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.3.0/css/intlTelInput.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="icon" href="../../assets/images/favicon/favicon.ico" type="image/x-icon">
    <title>Freshness You Can Taste, Quality You Can Trust</title>
</head>
<body>

    <div class="home-header">
        <?php include('../../includes/header.php'); ?>
    </div>
	
    <main>
        <section class="hero-section">
            <div class="container">
                <div class="hero-wrapper">
                    <h1>Freshness You Can Taste, Quality You Can Trust</h1>
                    <p>Explore our carefully selected range of premium products, chosen for their freshness and quality. Your neighborhood grocery store, bringing the very best to your table</p>
                    <a href="products.php" class="button button-secondary">Start Shopping<i class="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>
        </section>
        <div class="container">
            <p class="page-intro">At Shop, we're passionate about providing high-quality products that make every shopping experience enjoyable and convenient. 
                                  Our store is your local destination for carefully selected essentials, chosen to deliver outstanding quality and value. Whether you're planning a family meal, stocking up for the week, or picking up everyday necessities, we've got everything you need under one roof. 
                                  We're proud to serve our community with reliable products and friendly service, all in a welcoming and comfortable environment.</p>
            <section>
                <div class="home-intro-row">
                    <img src="../../assets/images/main/home-intro1.jpg">
                    <div>
                        <p>Welcome to Shop, where quality meets community! We're a locally owned grocery store dedicated to providing our customers with a carefully selected range of high-quality products for every household. 
                           At Shop, we believe that what you bring home matters, which is why we take great care in choosing products that meet our high standards. From everyday essentials to trusted household favorites, every item in our store is selected with your satisfaction, convenience, and value in mind.</p>
                        <p>But we're more than just a grocery store - we're a part of the neighborhood. Whether it's through friendly service, supporting local farmers, or hosting community events, we strive to make Shop a welcoming place for everyone. 
                            When you shop with us, you're not just getting fresh food - you're supporting a business that cares about the people it serves.</p>
                    </div>
                </div>
                <div class="home-intro-row">
                    <div>
                        <p>From the moment you step into Shop, you'll notice the difference. Our store is thoughtfully organized and stocked with a carefully selected range of high-quality products from trusted suppliers and well-known brands. 
                           We take pride in offering a wide variety of everyday essentials and household favorites, ensuring you always have access to the products you need. 
                           Whether you're shopping for a quick stop or a full weekly restock, you'll find everything you're looking for in a clean, welcoming, and convenient environment.</p>
                        <p>Beyond the freshness, it's the care we put into every detail that sets us apart. Our team is always nearby with a smile, ready to offer tips on what's in season or how to pick the perfect produce. 
                            We believe shopping for groceries should feel personal, not rushed - like you're visiting a neighbor, not just a store.</p>
                    </div>
                    <img src="../../assets/images/main/home-intro2.jpg">
                </div>
            </section>
            <section class="products-section">
                <h2>What We Offer</h2>
                <p>Discover the difference that quality makes at Shop. Our products are carefully sourced from trusted suppliers who share our commitment to excellence and value. 
                   From everyday essentials to household favorites, we have everything you need to make shopping simple and convenient. 
                   Whether you're stocking up for the week, planning a family meal, or picking up a few daily necessities, you'll find a wide selection of quality products at competitive prices. Come explore our aisles and discover your new favorites!</p>
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
                <p>At Shop, we believe that great products come from passionate people. Our team works tirelessly every day to ensure that every customer enjoys a reliable and satisfying shopping experience. 
                   From the moment products arrive at our store until they reach your hands, our dedicated staff carefully inspects, organizes, and stocks every item to maintain the highest standards of quality, freshness, and presentation.</p>
            </section>
            <section class="services-section">
                <h2>Our Services</h2>
                <p>We take pride in offering a wide range of fresh, high-quality products that meet your everyday needs. Carefully selected and responsibly sourced, our items reflect our promise of quality and care. 
                    And when it comes to getting your order to you, our fast and reliable delivery service ensures everything arrives on time and in perfect condition. Your convenience is always our priority.</p>
                <div class="services-row">
                    <div class="service-wrapper">
                        <div class="service-image" style="background-image: url('../../assets/images/svgs/service-job.svg');"></div>
                        <div class="service-wave"></div>
                        <div class="service-info">
                            <h4>Job Opportunity</h4>
                            <p>We're always looking for passionate people to help us deliver great experiences. Explore roles and become a part of something fresh.</p>
                            <a href="career.php" class="button button-inverse button-arrow">Read More
                                <i class="fa-solid fa-angle-right first-arrow"></i>
                                <i class="fa-solid fa-angle-right second-arrow"></i>
                            </a>
                        </div>
                    </div>
                    <div class="service-wrapper">
                        <div class="service-image" style="background-image: url('../../assets/images/svgs/service-contact.svg');"></div>
                        <div class="service-wave"></div>
                        <div class="service-info">
                            <h4>Customer Support</h4>
                            <p>Questions, issues, or feedback? Our friendly support team is ready to help you get the answers and assistance you deserve.</p>
                            <a href="contact.php" class="button button-inverse button-arrow">Read More
                                <i class="fa-solid fa-angle-right first-arrow"></i>
                                <i class="fa-solid fa-angle-right second-arrow"></i>
                            </a>
                        </div>
                    </div>
                    <div class="service-wrapper">
                        <div class="service-image" style="background-image: url('../../assets/images/svgs/service-products.svg');"></div>
                        <div class="service-wave"></div>
                        <div class="service-info">
                            <h4>Fresh Products</h4>
                            <p>From trusted suppliers to your doorstep, we carefully select high-quality products so you can shop with confidence every time.</p>
                            <a href="products.php" class="button button-inverse button-arrow">Read More
                                <i class="fa-solid fa-angle-right first-arrow"></i>
                                <i class="fa-solid fa-angle-right second-arrow"></i>
                            </a>
                        </div>
                    </div>
                    <div class="service-wrapper">
                        <div class="service-image" style="background-image: url('../../assets/images/svgs/service-delivery.svg');"></div>
                        <div class="service-wave"></div>
                        <div class="service-info">
                            <h4>Fast Delivery</h4>
                            <p>Get your groceries delivered straight to your door in no time. Packed with great care and delivered with precision and speed.</p>
                            <a href="delivery.php" class="button button-inverse button-arrow">Read More
                                <i class="fa-solid fa-angle-right first-arrow"></i>
                                <i class="fa-solid fa-angle-right second-arrow"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <p>At the heart of everything we do is a commitment to our community. Whether you're exploring new career opportunities with us or reaching out for assistance, we're here to help. 
                    Our team is built on friendly, dependable service and a dedication to making every interaction meaningful. From job seekers to loyal customers, we value every connection and work hard to support you at every step.</p>
            </section>
            <section>
                <h2>Success in Numbers</h2>
                <div class="quick-stats-row">
                    <div class="quick-stat-wrapper">
                        <div class="stat">
                            <div>
                                <span class="counter" data-target="10">0</span><span>+</span>
                            </div>
                            <p>Years in Business</p>
                        </div>
                        <p>We've been proudly serving our community with dedication and care for over a decade, building trust every single step of the way with pride.</p>
                    </div>
                    <div class="quick-stat-wrapper">
                        <div class="stat">
                            <div>
                                <span class="counter" data-target="9000">0</span><span>+</span>
                            </div>
                            <p>Products Sold</p>
                        </div>
                        <p>From essentials to specialty items, our shelves have stocked over 9,000 products delivered to happy homes.</p>
                    </div>
                    <div class="quick-stat-wrapper">
                        <div class="stat">
                            <div>
                                <span class="counter" data-target="2500">0</span><span>+</span>
                            </div>
                            <p>Happy Customers</p>
                        </div>
                        <p>Our commitment to quality and service has earned us the smiles and loyalty of over 2,500 satisfied customers.</p>
                    </div>
                </div>
            </section>
        </div>
        <section class="faq-section">
            <div class="faq-wrapper">
                <div class="faq-top">
                    <h3>Frequently Asked Questions</h3>
                    <div class="select-wrapper">
                        <select id="faq-type">
                            <option value="General">General</option>
                            <option value="Assistance">Assistance</option>
                            <option value="Order">Order</option>
                            <option value="Delivery">Delivery</option>
                            <option value="Company">Company</option>
                            <option value="Offers">Offers</option>
                            <option value="Collaboration">Collaboration</option>
                            <option value="Opportunities">Opportunities</option>
                            <option value="Security">Security</option>
                            <option value="Blog">Blog</option>
                        </select>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>
                </div>
                <div class="faq-questions">
                    <div class="questions-general-type questions">
                        <div class="faq">
                            <div class="question">
                                <p>How can I subscribe to your newsletter?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>You can subscribe to our newsletter by entering your email in the subscription box. You'll receive updates on new products, special offers, and exclusive content.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Do you have a mobile app?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Currently, we don't have a mobile app, but our website is fully optimized for mobile devices. You can access all features seamlessly from your smartphone or tablet.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Can I request a custom order or special service?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Yes! If you need a custom product or special service, please reach out via our <a href="contact.php">contact page</a> with details, and we'll do our best to accommodate your request.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Do you have a loyalty program?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We are working on a loyalty program that will offer discounts, rewards, and special perks for our returning customers. Stay tuned for updates on our website!</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>How can I leave feedback about my experience?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We'd love to hear from you! You can leave feedback via:</p>
                                <ul>
                                    <li>Review Form after order is placed</li>
                                    <li>Google Reviews</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="questions-assistance-type questions">
                        <div class="faq">
                            <div class="question">
                                <p>How long does it take to receive a response?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We aim to respond to all inquiries within 24 hours on business days. For urgent matters, please call us directly.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>I didn't receive a confirmation email. What should I do?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Please check your spam/junk folder first. If you still don't see it, contact us at <a href="mailto:shop@gmail.com">shop@gmail.com</a>, and we'll assist you.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>How can I contact customer support?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>All information you need for contacting us is shown on our <a href="contact.php">contact page</a>.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>How can I request data deletion from your system?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>If you wish to delete your personal data, send us an email at <a href="mailto:shop@gmail.com">shop@gmail.com</a> with the subject "Data Deletion Request" and we will process it as soon as possible.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>What are your working hours for customer support?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Our support team is available:</p>
                                <ul>
                                    <li>Monday - Saturday: 7:00 - 21:00</li>
                                    <li>Sunday: Closed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="questions-order-type questions">
                        <div class="faq">
                            <div class="question">
                                <p>How can I place an order at your store?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Placing an order at our store is simple!  Select the items you'd like, and proceed to checkout. If you need assistance, feel free to contact us!</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Can I change or cancel my order after it's placed?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>If you need to change or cancel your order, please contact us as soon as possible. We will do our best to accommodate any changes before the order is processed or dispatched. Once an order has been shipped, we may not be able to make modifications.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>What payment methods do you accept for orders?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We accept a variety of payment methods for your convenience, including credit and debit cards and cash on delivery. During checkout, you can choose the payment option that best suits you.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>What if an item I ordered is out of stock?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>If an item is out of stock, we will notify you immediately and offer you the option to choose a replacement or cancel the item. You'll always be updated on the status of your order.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>What should I do if there's a problem with my order?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>If there's any issue with your order, such as missing items or incorrect products, please contact our customer support team immediately. We will resolve the issue as quickly as possible by either providing a replacement or refunding the item.</p>
                            </div>
                        </div>
                    </div>
                    <div class="questions-delivery-type questions">
                        <div class="faq">
                            <div class="question">
                                <p>How long does it take for my delivery to arrive?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Delivery times vary based on your location, but we typically aim to deliver within 1-2 business days. You will be provided with an estimated delivery time during checkout.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Can I change the delivery address after my order has been placed?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>If your order hasn't been processed yet, we may be able to update the delivery address. Please contact us immediately if you need to make any changes.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>What happens if I'm not home when my delivery arrives?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>If you're not home when the delivery arrives, the delivery team will usually leave a notice or attempt to redeliver at a later time. In some cases, you may need to pick up your package from a nearby location, depending on the courier's policy.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Do you offer same-day delivery?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>es, you can choose same-day delivery during checkout if you'd like your order to arrive as soon as possible. Alternatively, you can select a standard delivery date that best fits your schedule. Our goal is to provide a flexible and convenient delivery experience for every customer..</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Can I choose a specific delivery time?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Yes, during checkout, you can choose a preferred time window for delivery. We will do our best to accommodate your preferences based on availability.</p>
                            </div>
                        </div>
                    </div>
                    <div class="questions-company-type questions">
                        <div class="faq">
                            <div class="question">
                                <p>How long has your company been in business?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We have been proudly serving our customers for 10 years. Over time, we have built a reputation for quality products, friendly service, and commitment to our community.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Do you support local farmers and suppliers?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Absolutely! We believe in supporting local businesses, so we source many of our fresh products from local farmers and suppliers whenever possible.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Do you have multiple locations?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Currently, we operate in Zemun, Belgrade. However, we are always looking for opportunities to expand and bring our great products and services to more customers.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Who owns the store?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Our store is independently owned and operated by a dedicated team passionate about providing top-quality groceries and excellent customer service to our community.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>What makes your grocery store different?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We prioritize freshness, quality, and customer service. From trusted suppliers to your home, our commitment to excellence sets us apart. Visit our <a href="../content/about-us.php">about us page</a> to learn more about our values and vision.</p>
                            </div>
                        </div>
                    </div>
                    <div class="questions-offers-type questions">
                        <div class="faq">
                            <div class="question">
                                <p>How can I stay updated on upcoming offers?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>You can stay informed about our latest offers by subscribing to our newsletter or checking the Offers section on our website.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>How often do you update your offers?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We regularly update our product selection to ensure you always have access to quality products and seasonal items. Be sure to check back often to see what's new in store.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Can I find international products at your store?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Yes, we offer a range of international products. Our carefully selected collection includes quality items from around the world, giving you access to unique choices from a variety of countries and cultures.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Are your products locally sourced?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Many of our products are carefully selected from trusted suppliers who share our commitment to quality. We strive to offer products that meet high standards of freshness, reliability, and value.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Are your products organic?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Many of our products are organic and sustainably sourced. Look for the organic label on specific items for more details.</p>
                            </div>
                        </div>
                    </div>
                    <div class="questions-collaboration-type questions">
                        <div class="faq">
                            <div class="question">
                                <p>What types of collaborations do you usually engage in?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We collaborate on product promotions, giveaways, exclusive collections, and brand partnerships. We're also open to new and creative collaboration ideas!</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Do you work with small businesses or only large brands?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We welcome collaborations with businesses of all sizes. Whether you're a startup or an established brand, we believe in growing together and creating value for both sides.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Is there a minimum requirement for partnership opportunities?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>There's no strict requirement - each collaboration is considered based on mutual benefits and goals. If the idea aligns with our brand, we're open to exploring it!</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Can influencers or bloggers collaborate with you?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Absolutely! If you're an influencer or blogger, we'd love to hear from you. Send us an email with your social media links and collaboration ideas, and we'll get back to you.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Can I become an affiliate and earn commissions?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We are working on an affiliate program where you can earn commissions for referrals. Stay tuned for updates on our website!</p>
                            </div>
                        </div>
                    </div>
                    <div class="questions-opportunities-type questions">
                        <div class="faq">
                            <div class="question">
                                <p>How can I apply for a job at your store?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>To apply, simply fill out the career form on our <a href="career.php">start a career page</a>. Make sure to include all necessary details such as your name, contact information, education, and the position you're interested in. We'll review your application and reach out to you if we find a good match.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>What can I expect after submitting my application?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>After you submit your application, our HR team will review it and get in touch with you if you're shortlisted for an interview. We value all applications and ensure that we communicate with each candidate about the status of their submission.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>What are the working hours for the available positions?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We offer flexible working hours to accommodate different schedules. Whether you're looking for part-time, full-time, or student work, we aim to provide a balance that suits your personal and professional commitments.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Do I need any previous experience to apply for a position?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>While experience in the grocery or retail industry is a plus, it's not a requirement. We value enthusiasm, a strong work ethic, and a willingness to learn. If you're eager to join our team, we encourage you to apply, regardless of your background!</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>What positions are available at your grocery store?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We are currently looking to fill two positions: Delivery Driver and Cashier. Both roles offer unique opportunities to grow and be part of our dynamic team. If you're passionate about providing excellent service and contributing to a positive customer experience, we'd love to hear from you!</p>
                            </div>
                        </div>
                    </div>
                    <div class="questions-security-type questions">
                        <div class="faq">
                            <div class="question">
                                <p>How do you protect my personal information?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We use secure encryption protocols (SSL) and follow strict data protection policies to keep your personal information safe. Your data is never shared with third parties without your consent.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>What should I do if I suspect unauthorized access to my account?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>If you notice any suspicious activity on your account, change your password immediately and contact our support team at <a href="mailto:shop@gmail.com">shop@gmail.com</a> for further assistance.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Is my payment information secure?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Yes! We process payments through trusted payment gateways that use advanced encryption to protect your financial information. We do not store your credit card details.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Do you store my personal data after I make a purchase?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We only store necessary details for order processing and customer support. You can request the deletion of your personal data at any time by emailing <a href="mailto:shop@gmail.com">shop@gmail.com</a></p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Do you offer two-factor authentication?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Currently, we do not have two-factor authentication, but we highly recommend using a strong password and enabling extra security features on your email account. We may introduce 2FA in the future.</p>
                            </div>
                        </div>
                    </div>
                    <div class="questions-blog-type questions">
                        <div class="faq">
                            <div class="question">
                                <p>What kind of topics do you cover on your blog?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Our blog covers a variety of topics, including grocery shopping tips, healthy eating, recipe ideas, seasonal food guides, special promotions, and updates about our store.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>How often do you publish new blog posts?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We regularly update our blog with fresh content, typically posting new articles every week or two. Stay tuned for exciting updates!</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Can I suggest a topic for your blog?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Yes! We love hearing from our customers. If you have a topic you'd like us to cover, feel free to contact us, and we might feature it in an upcoming post.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Can I share your blog posts on social media?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>Of course! We encourage you to share our posts with friends and family. You can find social media sharing buttons on each blog post for easy sharing.</p>
                            </div>
                        </div>
                        <div class="faq">
                            <div class="question">
                                <p>Are your blog posts based on expert advice?</p>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="answer">
                                <p>We strive to provide well-researched content. Many of our posts are created with input from food experts, nutritionists, and experienced chefs to ensure accuracy and quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="container">
            <section>
                <h2>Customer Reviews</h2>
                <div class="customer-reviews-row">
                    <div class="customer-review-wrapper">
                        <div class="customer-review-info">
                            <div class="review-customer">
                                <div style="background-image: url('../../assets/images/main/customer1.jpg');"></div>
                                <div>
                                    <span>Emma Jones</span>
                                    <span>via Google</span>
                                </div>
                            </div>
                            <img src="../../assets/images/svgs/google.svg">
                        </div>
                        <p>“I can't express enough how much I enjoy shopping here. The store is clean, well-organized, and welcoming. The staff are always friendly and eager to help. I appreciate the wide variety, from fresh produce to unique international items. It's clear they take pride in quality and customer satisfaction. This is my go-to grocery store, every time.”</p>
                        <div class="customer-review-stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>
                    <div class="customer-review-wrapper">
                        <div class="customer-review-info">
                            <div class="review-customer">
                                <div style="background-image: url('../../assets/images/main/customer2.jpg');"></div>
                                <div>
                                    <span>Nikola Jovic</span>
                                    <span>via Facebook</span>
                                </div>
                            </div>
                            <i class="fa-brands fa-square-facebook"></i>
                        </div>
                        <p>“This store has completely changed my grocery shopping experience. It's spotless, well laid out, and the attention to detail is impressive. The products are always fresh, and the staff is friendly, treating every customer like a regular. It's rare to find a place where you feel valued and at ease.”</p>
                        <div class="customer-review-stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div class="customer-review-wrapper">
                        <div class="customer-review-info">
                            <div class="review-customer">
                                <div style="background-image: url('../../assets/images/main/customer3.jpg');"></div>
                                <div>
                                    <span>John Adams</span>
                                    <span>via Website</span>
                                </div>
                            </div>
                            <i class="fa-solid fa-globe"></i>
                        </div>
                        <p>“One of the best shopping experiences I've had. The selection is amazing, and I always find what I need. The prices are great, and I love how they support local producers. Customer service is always on point, and they genuinely care about feedback. Whether it's a quick stop or a full shopping trip, this place delivers every time.”</p>
                        <div class="customer-review-stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>          
            </section>
            <?php
            $sql = "SELECT * FROM blog ORDER BY created_at DESC LIMIT 3";
            $result = mysqli_query($connection, $sql);
            if (mysqli_num_rows($result) > 0) { ?> 
                <section class="blog-section">
                    <h2>Latest Articles</h2>
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
                    <a href="blog.php" class="button button-primary">View All Articles<i class="fa-solid fa-newspaper"></i></a>
                </section> <?php 
            } ?>
        </div>
        <section class="partners-section">
            <h2>Our Trusted Partners</h2>
            <div class="container">
                <div class="partners-row">
                    <div style="background-image: url('../../assets/images/main/partner1.jpg');"></div>
                    <div style="background-image: url('../../assets/images/main/partner2.png');"></div>
                    <div style="background-image: url('../../assets/images/main/partner3.jpg');"></div>
                    <div style="background-image: url('../../assets/images/main/partner4.jpg');"></div>
                    <div style="background-image: url('../../assets/images/main/partner5.png');"></div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="newsletter-wrapper">
                    <h3>Join Our Newsletter</h3>
                    <p>Subscribe for exclusive deals, new arrivals, and the latest updates!</p>
                    <form method="post" id="newsletter-form" novalidate>
                        <input type="email" name="newsletter-email" placeholder="Email">
                        <p class="newsletter-email-error"></p>
                        <button type="submit" class="button-primary" name="newsletter-button">Subscribe<i class="fa-solid fa-envelope"></i></button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <div class="newsletter-footer">
        <?php include('../../includes/footer.php'); ?>
    </div>

    <script src="../../js/functions.js"></script>
    <script src="../../js/order.js"></script>
    <script src="../../js/validations.js"></script>

</body>
</html>