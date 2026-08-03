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
    <title>Cookies | Shop</title>
</head>
<body>

    <div class="cookies-header">
        <?php include('../../includes/header.php'); ?>
    </div>

    <main>
        <div class="container">
            <div class="breadcrumbs">
                <div>
                    <a href="home.php">Home</a>
                    <span>/</span>
                    <p>Cookies</p>
                </div>
                <h1>Cookies</h1>
            </div>
            <section class="cookies-section">
                <h3>Legal basis</h3>
                <p>The basis for the cookie notification is the amended Electronic Communications Act (Official Gazette No. 109/2012; ZEKom-1 for short), which entered into force at the beginning of 2013 and brought new rules regarding the use of cookies and similar technologies for storing information or access to information stored on the user's computer or mobile device.</p>
                <h3>What are cookies and why the website needs them</h3>
                <p>A cookie is a small text file that is transferred to the user's computer when he visits a website and usually contains:</p>
                <ul>
                    <li>The name of the server from which the cookie was sent</li>
                    <li>Lifetime of the cookie</li>
                    <li>Value - a simple randomly generated unique number</li>
                </ul>
                <p>The cookie itself does not contain or collect information. However, if it is read by the server together with the web browser, it can help the website provide more user-friendly services - for example, by remembering previous purchases or the user's account information. Only the server that sent the cookie can read and use this cookie.</p>
                <p>On a trusted website, cookies can thus enrich the experience. However, cookies can also be used in ways that represent an invasion of an individual's privacy. Cookies can be stored for different lengths of time, only for the duration of the browsing session or much longer.</p>
                <h3>Which cookies we use on the site and why</h3>
                <p>On the website, we only use cookies that are permitted in accordance with the ZEKom-1 law. Only cookies that are absolutely necessary for the operation of this website are used. To record page visit statistics, we use a system that only records the session cookie and does not track your further behavior on the website or in connection with other sites.</p>
            </section>
        </div>
    </main>

    <?php include('../../includes/footer.php'); ?>

    <script src="../../js/functions.js"></script>
    <script src="../../js/order.js"></script>
    <script src="../../js/validations.js"></script>

</body>
</html>