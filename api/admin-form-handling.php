<?php

include('../includes/dbconnection.php');

/** @var mysqli $connection */

/* |||||||||||||||||||||||||||||||||||||||||||||||||| Admin Login Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['admin-login-button'])) {
    $username = trim($_POST["username"] ?? '');
    $password = trim($_POST["password"] ?? '');

    if ($username === 'shopAdmin' && $password === 'Admin_Shop1') {
        $_SESSION['user-role'] = "Admin";
        $_SESSION['last_activity'] = time();
        echo "Admin";
        exit;
    } else if ($username === 'shopModerator' && $password === 'Moderator_Shop2') {
        $_SESSION['user-role'] = "Moderator";
        $_SESSION['last_activity'] = time();
        echo "Moderator";
        exit;
    } else {
        echo "error";
        exit;
    }
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Session Check |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (!isset($_SESSION['user-role'])) {
    echo "session_expired";
    exit;
}

if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > 1800)) {
    session_unset();
    session_destroy();

    echo "session_expired";
    exit;
}

$_SESSION['last_activity'] = time();


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Update Category |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['category-update-button'])) {
    $slug = $_POST['category'] ?? '';
    $name = trim($_POST['name'] ?? '');
    $image = trim($_POST['image'] ?? '');

    $stmt = mysqli_prepare($connection, "UPDATE product_categories SET name = ?, image = ? WHERE slug = ?");
    mysqli_stmt_bind_param($stmt, 'sss', $name, $image, $slug);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    echo 'success';
    exit;
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Add Product |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['product-add-button'])) {
    $allowedCategories = ['products1', 'products2', 'products3'];

    $category = $_POST['category'] ?? '';
    $name = trim($_POST['name'] ?? '');
    $image = trim($_POST['image'] ?? '');
    $price = trim($_POST['price'] ?? '');
    $discount_price = trim($_POST['discount_price'] ?? '');

    if (!in_array($category, $allowedCategories, true)) {
        echo 'error';
        exit;
    }

    if ($discount_price === '') {
        $sql = "INSERT INTO `$category` (image, name, price, discount_price) VALUES (?, ?, ?, NULL)";
        $stmt = mysqli_prepare($connection, $sql);
        mysqli_stmt_bind_param($stmt, "sss", $image, $name, $price);
    } else {
        $sql = "INSERT INTO `$category` (image, name, price, discount_price) VALUES (?, ?, ?, ?)";
        $stmt = mysqli_prepare($connection, $sql);
        mysqli_stmt_bind_param($stmt, "ssss", $image, $name, $price, $discount_price);
    }

    if (!$stmt) {
        echo 'error';
        exit;
    }

    mysqli_stmt_execute($stmt);

    $newId = mysqli_insert_id($connection);
    mysqli_stmt_close($stmt);

    echo $newId;
    exit;
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Update Product |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['product-update-button'])) {
    $allowedCategories = ['products1', 'products2', 'products3'];

    $category = $_POST['category'] ?? '';
    $id = (int) ($_POST['id'] ?? 0);

    $name = trim($_POST['name'] ?? '');
    $image = trim($_POST['image'] ?? '');
    $price = trim($_POST['price'] ?? '');
    $discount_price = trim($_POST['discount_price'] ?? '');

    if (!in_array($category, $allowedCategories, true) || $id <= 0) {
        echo 'error';
        exit;
    }

    if ($discount_price === '') {
        $sql = "UPDATE `$category` SET name = ?, image = ?, price = ?, discount_price = NULL WHERE id = ?";
        $stmt = mysqli_prepare($connection, $sql);
        mysqli_stmt_bind_param($stmt, "sssi", $name, $image, $price, $id);
    } else {
        $sql = "UPDATE `$category` SET name = ?, image = ?, price = ?, discount_price = ? WHERE id = ?";
        $stmt = mysqli_prepare($connection, $sql);
        mysqli_stmt_bind_param($stmt, "ssssi", $name, $image, $price, $discount_price, $id);
    }

    if (!$stmt) {
        echo 'error';
        exit;
    }

    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    echo 'success';
    exit;
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Delete Product |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['product-delete-button'])) {
    $allowedCategories = ['products1', 'products2', 'products3'];

    $category = $_POST['category'] ?? '';
    $id = (int) ($_POST['id'] ?? 0);

    if (!in_array($category, $allowedCategories, true) || $id <= 0) {
        echo 'error';
        exit;
    }

    $stmt = mysqli_prepare($connection, "DELETE FROM `$category` WHERE id = ?");
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    echo 'success';
    exit;
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Add Blog |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['blog-add-button'])) {
    $title = trim($_POST['title'] ?? '');
    $excerpt = trim($_POST['excerpt'] ?? '');
    $content = trim($_POST['content'] ?? '');
    $image = trim($_POST['image'] ?? '');

    $sql = "INSERT INTO blog (title, excerpt, content, image) VALUES (?, ?, ?, ?)";
    $stmt = mysqli_prepare($connection, $sql);
    mysqli_stmt_bind_param($stmt, "ssss", $title, $excerpt, $content, $image);

    if (!$stmt) {
        echo 'error';
        exit;
    }

    mysqli_stmt_execute($stmt);

    $newId = mysqli_insert_id($connection);
    mysqli_stmt_close($stmt);

    echo $newId;
    exit;
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Update Blog |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['blog-update-button'])) {
    $id = (int) ($_POST['id'] ?? 0);

    $title = trim($_POST['title'] ?? '');
    $excerpt = trim($_POST['excerpt'] ?? '');
    $content = trim($_POST['content'] ?? '');
    $image = trim($_POST['image'] ?? '');

    $sql = "UPDATE blog SET title = ?, excerpt = ?, content = ?, image = ? WHERE id = ?";
    $stmt = mysqli_prepare($connection, $sql);
    mysqli_stmt_bind_param($stmt, "ssssi", $title, $excerpt, $content, $image, $id);

    if (!$stmt) {
        echo 'error';
        exit;
    }

    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    echo 'success';
    exit;
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Delete Blog |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['blog-delete-button'])) {
    $id = (int) ($_POST['id'] ?? 0);

    $stmt = mysqli_prepare($connection, "DELETE FROM blog WHERE id = ?");
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    echo 'success';
    exit;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||| File Name Function |||||||||||||||||||||||||||||||||||||||||||||||||| */

function getUniqueFileName($directory, $fileName) {
    $info = pathinfo($fileName);

    $name = preg_replace('/[^A-Za-z0-9 _-]/', '', $info['filename']);
    $extension = strtolower($info['extension']);

    $newName = $name . '.' . $extension;
    $counter = 1;

    while (file_exists($directory . $newName)) {
        $newName = $name . ' (' . $counter . ').' . $extension;
        $counter++;
    }

    return $newName;
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Products Images Upload |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['auto-upload']) && isset($_FILES['products-images'])) {
    $allowed = ['jpg', 'jpeg', 'png'];
    $uploadDir = '../assets/images/products/';

    $count = count($_FILES['products-images']['name']);
    $uploaded = 0;

    for ($i = 0; $i < $count; $i++) {
        $name = $_FILES['products-images']['name'][$i];
        $tmp = $_FILES['products-images']['tmp_name'][$i];
        $err = $_FILES['products-images']['error'][$i];

        if ($err !== UPLOAD_ERR_OK) {
            continue;
        }

        $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));

        if (!in_array($ext, $allowed)) {
            continue;
        }

        $newName = getUniqueFileName($uploadDir, $name);
        $target = $uploadDir . $newName;

        if (move_uploaded_file($tmp, $target)) {
            $uploaded++;
        }
    }

    echo 'success';
    exit;
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Blog Images Upload |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['auto-upload']) && isset($_FILES['blog-images'])) {
    $allowed = ['jpg', 'jpeg', 'png'];
    $uploadDir = '../assets/images/blog/';

    $count = count($_FILES['blog-images']['name']);
    $uploaded = 0;

    for ($i = 0; $i < $count; $i++) {
        $name = $_FILES['blog-images']['name'][$i];
        $tmp = $_FILES['blog-images']['tmp_name'][$i];
        $err = $_FILES['blog-images']['error'][$i];

        if ($err !== UPLOAD_ERR_OK) {
            continue;
        }

        $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));

        if (!in_array($ext, $allowed)) {
            continue;
        }

        $newName = getUniqueFileName($uploadDir, $name);
        $target = $uploadDir . $newName;

        if (move_uploaded_file($tmp, $target)) {
            $uploaded++;
        }
    }

    echo 'success';
    exit;
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Reset Tables |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['confirmation-reset'])) {
    $table = $_POST['table'] ?? '';

    if ($table === 'contact_requests' || $table === 'career_applications' || $table === 'reviews') {
        mysqli_query($connection, "TRUNCATE TABLE $table");
        echo "success";
        exit;
    }

    if ($table === 'orders') {
        mysqli_query($connection, "TRUNCATE TABLE orders");
        mysqli_query($connection, "UPDATE boroughs SET order_count = 0");
        mysqli_query($connection, "UPDATE products1 SET order_count = 0");
        mysqli_query($connection, "UPDATE products2 SET order_count = 0");
        mysqli_query($connection, "UPDATE products3 SET order_count = 0");
        mysqli_query($connection, "UPDATE product_categories SET order_count = 0");
        echo "success";
        exit;
    }

    if ($table === 'boroughs') {
        mysqli_query($connection, "UPDATE $table SET order_count = 0");
        echo "success";
        exit;
    }

    if ($table === 'product_stats') {
        mysqli_query($connection, "UPDATE products1 SET order_count = 0");
        mysqli_query($connection, "UPDATE products2 SET order_count = 0");
        mysqli_query($connection, "UPDATE products3 SET order_count = 0");

        echo 'success';
        exit;
    }

    if ($table === 'product_categories') {
        mysqli_query($connection, "UPDATE product_categories SET order_count = 0");
        echo "success";
        exit;
    }

    echo "error";
    exit;
}

?>