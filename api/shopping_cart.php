<?php

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

header('Content-Type: application/json');

$sessionKey = 'orders-info';

if (!isset($_SESSION[$sessionKey])) {
    $_SESSION[$sessionKey] = [];
}

function normalizeImages($cart) {
    foreach ($cart as &$item) {
        $imageName = $item['item_image'];
        $defaultImage = "/WebShop/assets/images/products/image-not-found.png";

        if (empty($imageName)) {
            $item['item_image'] = $defaultImage;
            continue;
        }

        $fullPath = $_SERVER['DOCUMENT_ROOT'] . "/WebShop/assets/images/products/" . $imageName;

        $item['item_image'] = file_exists($fullPath)
            ? "/WebShop/assets/images/products/" . $imageName
            : $defaultImage;
    }

    unset($item);

    return $cart;
}

$action = $_REQUEST['action'] ?? '';

if ($action === 'fetch') {
    $cart = normalizeImages(array_values($_SESSION[$sessionKey]));
    echo json_encode($cart);
    exit;
}

if ($action === 'add') {
    $id = $_POST['id'] ?? '';
    $table = $_POST['table'] ?? '';
    $name = $_POST['name'] ?? '';
    $price = $_POST['price'] ?? '';
    $regular_price = $_POST['regular_price'] ?? '';
    $discount_price = $_POST['discount_price'] ?? '';
    $image = $_POST['image'] ?? '';

    $found = false;

    foreach ($_SESSION[$sessionKey] as &$item) {
        if (
            (string) $item['item_id'] === (string) $id &&
            (string) $item['item_table'] === (string) $table
        ) {
            $item['item_quantity'] += 1;
            $found = true;
            break;
        }
    }
    unset($item);

    if (!$found) {
        $_SESSION[$sessionKey][] = [
            'item_id' => $id,
            'item_table' => $table,
            'item_name' => $name,
            'item_price' => $price,
            'item_regular_price' => $regular_price,
            'item_discount_price' => $discount_price !== '' ? $discount_price : null,
            'item_image' => $image,
            'item_quantity' => 1
        ];
    }

    $cart = normalizeImages(array_values($_SESSION[$sessionKey]));
    echo json_encode($cart);
    exit;
}

if ($action === 'remove') {
    if (isset($_POST['id'], $_POST['table'])) {
        $id = $_POST['id'];
        $table = $_POST['table'];

        $_SESSION[$sessionKey] = array_filter($_SESSION[$sessionKey], function ($item) use ($id, $table) {
            return !(
                (string) $item['item_id'] === (string) $id &&
                (string) $item['item_table'] === (string) $table
            );
        });

        $_SESSION[$sessionKey] = array_values($_SESSION[$sessionKey]);
    }

    $cart = normalizeImages(array_values($_SESSION[$sessionKey]));
    echo json_encode($cart);
    exit;
}

if ($action === 'update_quantity') {
    if (isset($_POST['id'], $_POST['table'], $_POST['quantity'])) {
        $id = $_POST['id'];
        $table = $_POST['table'];
        $quantity = (int) $_POST['quantity'];

        if ($quantity < 1) {
            $quantity = 1;
        }

        foreach ($_SESSION[$sessionKey] as &$item) {
            if (
                (string) $item['item_id'] === (string) $id &&
                (string) $item['item_table'] === (string) $table
            ) {
                $item['item_quantity'] = $quantity;
                break;
            }
        }
        unset($item);
    }

    $cart = normalizeImages(array_values($_SESSION[$sessionKey]));
    echo json_encode($cart);
    exit;
}

echo json_encode([
    'status' => 'error',
    'message' => 'Invalid cart action.'
]);

exit;

?>