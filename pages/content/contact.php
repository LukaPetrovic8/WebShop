<?php
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
    <title>Contact | Shop</title>
</head>
<body>

    <?php include('../../includes/header.php'); ?>
	        
    <main>
        <div class="container">
            <div class="breadcrumbs">
                <div>
                    <a href="home.php">Home</a>
                    <span>/</span>
                    <p>Contact</p>
                </div>
                <h1>Contact</h1>
            </div>
            <p class="page-intro">Have a question about our products, services, or your recent order? Looking for more information or need support with something specific? Our team is here to assist you. Whether you prefer to fill out the contact form, send us an email, or give us a call, we're always ready to listen and respond. Your feedback and inquiries matter to us, and we aim to make every interaction as helpful and friendly as possible.</p>
            <section class="contact-section">
                <div class="contact-info">
                    <div>
                        <p>Company Information:</p>
                        <p>Shop d.o.o.</p>
                        <p>Jovana Stoisavljevica 24</p>
                        <p>Belgrade, Zemun</p>
                    </div>
                    <div>
                        <p>Contact Us:</p>
                        <a href="tel:+381611108084"><i class="fa-solid fa-phone"></i>+381 61 11 08 084</a>
                        <a href="mailto:shop@gmail.com"><i class="fa-solid fa-envelope"></i>shop@gmail.com</a>
                    </div>
                    <div>
                        <p>Work Hours:</p>
                        <p>Monday - Saturday: 7:00 - 21:00</p>
                        <p>Sunday: <span>Closed</span></p>
                    </div>
                </div>
                <form id="contact-form" class="form" novalidate>
                    <h3>Contact form</h3>
                    <p class="form-intro">Contact us and we will answer you as soon as possible.</p>
                    <input type="text" name="contact-name" placeholder="Name *" maxlength="60">
                    <p class="contact-name-error"></p>
                    <input type="text" name="contact-email" placeholder="Email *" maxlength="254">
                    <p class="contact-email-error"></p>
                    <div class="phone-custom-wrapper">
                        <input id="contact-dial-codes" name="contact-phone" type="tel" placeholder="Phone Number *" maxlength="20">
                    </div>
                    <p class="contact-phone-error"></p>
                    <textarea name="contact-message" placeholder="Message" maxlength="1000"></textarea>
                    <p class="mandatory-fields">Fields marked with * are mandatory!</p>
                    <div class="checkbox-wrapper">
                        <label>
                            <input type="checkbox" class="privacy-checkbox">
                            <p>I agree that Shop d.o.o. keeps the personal data on the form for internal use and communication with me for the purposes of the submitted request. The user can request deletion of personal data by email at shop@gmail.com</p>
                        </label>
                    </div>
                    <p class="privacy-error"></p>
                    <button type="submit" class="button-primary" name="contact-button" style="margin-top: 10px;">Send<i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </section>
        </div>
        <section class="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.0734312037134!2d20.36983747607023!3d44.860799871070476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a66808ac89f7b%3A0xa674418e21d9ed3!2sJovana%20Stojisavljevi%C4%87a%2024%2C%20Beograd!5e0!3m2!1sen!2srs!4v1725726529600!5m2!1sen!2srs" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </main>

    <div class="google-footer">
        <?php include('../../includes/footer.php'); ?>
    </div>
    
    <script src="../../js/functions.js"></script>
    <script src="../../js/order.js"></script>
    <script src="../../js/validations.js"></script>

</body>
</html>