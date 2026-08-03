<?php

require_once(__DIR__ . '/../../includes/dbconnection.php');

if (!isset($_GET['id'])) {
    header("Location: blog.php");
    exit();
}

$id = (int)$_GET['id'];

$stmt = $connection->prepare("SELECT * FROM blog WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows === 0) {
    header("Location: blog.php");
    exit();
}

$blog = $result->fetch_assoc();

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
    <link rel="icon" href="../../assets/images/favicon/favicon.ico">
    <title>Shop | <?php echo htmlspecialchars($blog['title']); ?></title>
</head>
<body>

    <?php include('../../includes/header.php'); ?>

    <main>
        <div class="container">
            <div class="breadcrumbs">
                <div>
                    <a href="../content/home.php">Home</a>
                    <span>/</span>
                    <a href="../content/about-us.php">About Us</a>
                    <span>/</span>
                    <a href="../content/blog.php">Blog</a>
                    <span>/</span>
                    <p class="article-title"><?php echo htmlspecialchars($blog['title']); ?></p>
                </div>
                <h1 class="article-title"><?php echo htmlspecialchars($blog['title']); ?></h1>
            </div>
            <div class="blog-content-section">
                <?php echo $blog['content']; ?>
            </div>

        </div>
    </main>

    <?php include('../../includes/footer.php'); ?>

    <script src="../../js/functions.js"></script>
    <script src="../../js/order.js"></script>
    <script src="../../js/validations.js"></script>

</body>
</html>