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
    <title>Author | Shop</title>
</head>
<body>

    <?php include('../../includes/header.php'); ?>

    <main>
        <div class="container">
            <div class="breadcrumbs">
                <div>
                    <a href="home.php">Home</a>
                    <span>/</span>
                    <p>Author</p>
                </div>
                <h1>Author</h1>
            </div>
            <section class="author-section">
                <p>I'm Luka Petrovic, a 23 year old web developer based in Belgrade, Serbia, passionate about creating modern, high quality websites. I believe a website should not only look great but also be fast, functional, and easy to navigate. I focus on writing clean, maintainable code, meeting deadlines, and developing solutions tailored to each client's goals. 
                   By combining creativity with practical problem solving, I build websites that deliver a smooth user experience, perform efficiently, and leave a lasting impression. My user focused approach and commitment to quality ensure every project is reliable, effective, and built to the highest standard.</p>
                <h2>What I Offer</h2>
                <ul>
                    <li><span>Front-End Development: </span>Creating visually engaging and responsive designs using HTML, CSS, JavaScript, and frameworks like React</li>
                    <li><span>Back-End Development: </span>Building secure, efficient server-side applications using PHP.</li>
                    <li><span>WordPress Development: </span>Creating custom themes, optimizing site performance, and building tailored solutions using WordPress.</li>
                    <li><span>Database Management: </span>Database Management: Integrating databases to ensure your site's data is stored, managed, and accessible, using MySQL.</li>
                    <li><span>Testing & Quality Assurance: </span>Conducting extensive testing to guarantee your site functions smoothly and efficiently across all platforms and browsers.</li>
                    <li><span>SEO Optimization: </span>Making sure your site ranks well on search engines to reach the widest audience possible.</li>
                    <li><span>Maintenance & Support: </span>Offering ongoing updates, troubleshooting, and support to keep your site current and fully functional.</li>
                </ul>
                <h2>Get in Touch</h2>
                <p>Have a website idea or a digital project you'd like to bring to life? I'm here to help turn that vision into something real, functional, and impactful. Whether you're starting from scratch, need a redesign, want ongoing support for an existing site, or need help solving technical issues, I offer personalized solutions tailored to your goals. 
                   From developing new features and fixing bugs to improving performance and functionality, I'm committed to delivering reliable results across a wide range of web related projects. From the first consultation to final deployment and beyond, my focus is on making the process smooth and completely tailored to your needs. Reach out to discuss your project, ask questions, or simply start a conversation. I'd be happy to connect.</p>
                <div class="author-links">
                    <a href="tel:+381611132494">
                        <div>
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <span>+381 61 113 2494</span>
                    </a>
                    <a href="../../files/CV.pdf" download>
                        <div>
                            <i class="fa-solid fa-file"></i>
                        </div>
                        <span>My CV</span>
                    </a>
                    <a href="mailto:luka8petrovic8@gmail.com">
                        <div>
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <span>luka8petrovic8@gmail.com</span>
                    </a>
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