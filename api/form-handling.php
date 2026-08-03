<?php

require_once(__DIR__ . '/../includes/dbconnection.php'); 

/* |||||||||||||||||||||||||||||||||||||||||||||||||| Contact Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['contact-button'])) {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $dial_code = $_POST['dial_code'];
    $phone = trim($_POST['phone']);
    $phone = '+' . $dial_code . ' ' . $phone;
    $message = trim($_POST['message'] ?? '') ?: null;


    $stmt = $connection->prepare("INSERT INTO contact_requests (name, email, phone, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param('ssss', $name, $email, $phone, $message);
    $stmt->execute();
    $stmt->close();

    echo 'success';
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Career Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['career-button'])) {
    $name = trim($_POST['name']);
    $surname = trim($_POST['surname']);
    $email = trim($_POST['email']);
    $dial_code = $_POST['dial_code'];
    $phone = trim($_POST['phone']);
    $phone = '+' . $dial_code . ' ' . $phone;
    $education = $_POST['education'];
    $employment = $_POST['employment'];
    $career = $_POST['career'];
    $experience = $_POST['experience'] ?? '';
    $licenseArray = $_POST['license'] ?? [];
    $license = !empty($licenseArray) ? implode(', ', $licenseArray) : null;
    $start_date = $_POST['start_date'];
    $message = trim($_POST['message']);

    $uploadDir = __DIR__ . '/../files/uploads/';
    $originalName = $_FILES['cv_file']['name'];
    $tmpName = $_FILES['cv_file']['tmp_name'];
    $extension = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
    $newFileName = uniqid('cv_', true) . '.' . $extension;
    $targetPath = $uploadDir . $newFileName;
    if (move_uploaded_file($tmpName, $targetPath)) {
        $cv_file = $newFileName;
    }

    $stmt = $connection->prepare("INSERT INTO career_applications (name, surname, email, phone, education, employment, career, experience, license, start_date, message, cv_file) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param('ssssssssssss', $name, $surname, $email, $phone, $education, $employment, $career, $experience, $license, $start_date, $message, $cv_file);
    $stmt->execute();
    $stmt->close();

    echo 'success';
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Newsletter Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['newsletter-button'])) {
    $email = trim($_POST['email']);

    $stmt = $connection->prepare("SELECT email FROM newsletter WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo 'exists';
        exit;
    }

    $stmt = $connection->prepare("INSERT INTO newsletter (email) VALUES (?)");
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $stmt->close();

    echo 'success';
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Review Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['review-button'])) {
    $rating = $_POST['rating'];
    $message = trim($_POST['message']);

    $stmt = $connection->prepare("INSERT INTO reviews (rating, message) VALUES (?, ?)");
    $stmt->bind_param('ss', $rating, $message);
    $stmt->execute();
    $stmt->close();

    echo 'success';
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Order Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

if (isset($_POST['order-button'])) {
    $name = trim($_POST['name']);
    $surname = trim($_POST['surname']);
    $email = trim($_POST['email']);
    $dial_code = $_POST['dial_code'];
    $phone = trim($_POST['phone']);
    $phone = '+' . $dial_code . ' ' . $phone;

    $delivery_option = $_POST['delivery_option'];
    $delivery_day = trim($_POST['delivery_day'] ?? '') ?: null;
    $delivery_time = trim($_POST['delivery_time'] ?? '') ?: null;
    $borough = trim($_POST['borough'] ?? '') ?: null;
    $address = trim($_POST['address'] ?? '') ?: null;
    $location_type = trim($_POST['location_type'] ?? '') ?: null;
    $floor_number = trim($_POST['floor_number'] ?? '') !== '' ? (int) $_POST['floor_number'] : null;
    $apartment_number = trim($_POST['apartment_number'] ?? '') !== '' ? (int) $_POST['apartment_number'] : null;
    $office_name = trim($_POST['office_name'] ?? '') ?: null;
    $office_reception = trim($_POST['office_reception'] ?? '') ?: null;
    $address_details = trim($_POST['address_details'] ?? '') ?: null;

    $payment = $_POST['payment'];
    $cash_option = trim($_POST['cash_option'] ?? '') ?: null;
    $cash_amount = trim($_POST['cash_amount'] ?? '') !== '' ? (float) $_POST['cash_amount'] : null;
    $card_name = trim($_POST['card_name'] ?? '') ?: null;
    $card_number = trim($_POST['card_number'] ?? '') ?: null;
    $expiry_date = trim($_POST['expiry_date'] ?? '') ?: null;

    $promo_code = trim($_POST['promo_code'] ?? '') ?: null;
    $message = trim($_POST['message'] ?? '') ?: null;

    $subtotal = (float) $_POST['subtotal'];
    $delivery_fee = (float) $_POST['delivery_fee'] ?: null;
    $small_order_fee = (float) $_POST['small_order_fee'] ?: null;
    $same_day_fee = (float) $_POST['same_day_fee'] ?: null;
    $total_price = (float) $_POST['total_price'];

    $products = [];
    $quantities = [];

    foreach ($_SESSION['orders-info'] as $item) {
        $products[] = $item['item_name'];
        $quantities[] = $item['item_quantity'];
    }

    $products = implode(", ", $products);
    $quantities = implode(", ", $quantities);

    if ($borough !== null) {
        $stmt = $connection->prepare("UPDATE boroughs SET order_count = order_count + 1 WHERE borough = ?");
        $stmt->bind_param("s", $borough);
        $stmt->execute();
        $stmt->close();
    }

    $allowedProductTables = ['products1', 'products2', 'products3'];

    foreach ($_SESSION['orders-info'] as $item) {
        $product_id = (int) $item['item_id'];
        $product_table = trim($item['item_table']);
        $product_quantity = (int) $item['item_quantity'];

        if (!in_array($product_table, $allowedProductTables, true)) {
            continue;
        }

        $sql = "UPDATE {$product_table} SET order_count = order_count + ? WHERE id = ?";
        $stmt2 = $connection->prepare($sql);
        $stmt2->bind_param("ii", $product_quantity, $product_id);
        $stmt2->execute();
        $stmt2->close();

        $stmt3 = $connection->prepare("UPDATE product_categories SET order_count = order_count + ? WHERE slug = ?");
        $stmt3->bind_param("is", $product_quantity, $product_table);
        $stmt3->execute();
        $stmt3->close();
    }


    $stmt4 = $connection->prepare("INSERT INTO orders (products, quantities, name, surname, email, phone, delivery_option, delivery_day, delivery_time, borough, address, location_type, floor_number, apartment_number, office_name, office_reception, address_details, payment, card_name, card_number, expiry_date, cash_option, cash_amount, promo_code, message, subtotal, delivery_fee, small_order_fee, same_day_fee, total_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?, ?, ?, ? ,? ,? ,? ,?, ?, ?)");
    $stmt4->bind_param("ssssssssssssiissssssssdssddddd", $products, $quantities, $name, $surname, $email, $phone, $delivery_option, $delivery_day, $delivery_time, $borough, $address, $location_type, $floor_number, $apartment_number, $office_name, $office_reception, $address_details, $payment, $card_name, $card_number, $expiry_date, $cash_option, $cash_amount, $promo_code, $message, $subtotal, $delivery_fee, $small_order_fee, $same_day_fee, $total_price);
    $stmt4->execute();
    $stmt4->close();
    

    if (isset($_SESSION['orders-info'])) {
        $_SESSION['orders-info'] = [];
    }

    echo 'success';
}

?>