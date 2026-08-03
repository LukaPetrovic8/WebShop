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
    <link rel="stylesheet" href="/WebShop/css/admin.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="icon" href="../../assets/images/favicon/favicon.ico" type="image/x-icon">
    <title>Log In | Shop</title>
</head>
<body>

    <form id="admin-login-form">
        <h3>Log In</h3>
        <input type="text" name="username" placeholder="Username">
        <p class="username-error"></p>
        <div class="password-wrapper">
            <input type="password" name="password" placeholder="Password">
            <i class="fa-solid fa-eye"></i>
            <i class="fa-solid fa-eye-slash"></i>
        </div>
        <p class="password-error"></p>
        <button type="submit" name="admin-login-button">Log In</button>
    </form>

    <div class="popup-blur form-sent-blur">
        <div class="failed-form-sent">
            <i class="fa-regular fa-circle-xmark"></i>
            <h2>Request Failed!</h2>
            <p>An error occurred while sending your form.</p>
        </div>
    </div>

    <script src="../../js/admin.js"></script>

</body>
</html>