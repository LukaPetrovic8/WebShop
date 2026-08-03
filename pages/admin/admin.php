<?php

require_once(__DIR__ . '/../../includes/dbconnection.php'); 

if (isset($_GET['fetch_message'])) {
    header('Content-Type: application/json; charset=utf-8');

    if (isset($_GET['career_id'])) {
        $id = (int) $_GET['career_id'];
        $sql = "SELECT message FROM career_applications WHERE id = $id";
    } else if (isset($_GET['contact_id'])) {
        $id = (int) $_GET['contact_id'];
        $sql = "SELECT message FROM contact_requests WHERE id = $id";
    } else if (isset($_GET['review_id'])) {
        $id = (int) $_GET['review_id'];
        $sql = "SELECT message FROM reviews WHERE id = $id";
    } else if (isset($_GET['order_id'])) {
        $id = (int) $_GET['order_id'];
        $sql = "SELECT message FROM orders WHERE id = $id";
    }
    
    if (isset($sql)) {
        $result = mysqli_query($connection, $sql);
        if ($row = mysqli_fetch_assoc($result)) {
            echo json_encode(["message" => nl2br(htmlspecialchars($row['message']))]);
        }
    }

    exit;
}


$isFetchRequest =
    isset($_GET['fetch_message']) ||
    isset($_GET['fetch_order_delivery']) ||
    isset($_GET['fetch_order_products']) ||
    isset($_GET['fetch_order_payment']) ||
    isset($_GET['fetch_order_summary']);

if (!isset($_SESSION['user-role']) || $_SESSION['user-role'] !== 'Admin') {
    if ($isFetchRequest) {
        echo 'session_expired';
    } else {
        header("Location: admin-login.php");
    }
    exit;
}


if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > 1800)) {
    session_unset();
    session_destroy();

    header("Location: admin-login.php");
    exit;
}

$_SESSION['last_activity'] = time();


if (isset($_GET['fetch_order_delivery']) && isset($_GET['order_id'])) {
    header('Content-Type: application/json; charset=utf-8');

    $id = (int) $_GET['order_id'];

    $stmt = $connection->prepare("SELECT delivery_option, borough, address, location_type, delivery_day, delivery_time, floor_number, apartment_number, office_name, office_reception, address_details FROM orders WHERE id = ? LIMIT 1");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result ? $result->fetch_assoc() : null;
    $stmt->close();

    echo json_encode($row ? $row : []);
    exit;
}

if (isset($_GET['fetch_order_products']) && isset($_GET['order_id'])) {
    header('Content-Type: application/json; charset=utf-8');

    $id = (int) $_GET['order_id'];

    $stmt = $connection->prepare("SELECT products, quantities FROM orders WHERE id = ? LIMIT 1");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result ? $result->fetch_assoc() : null;
    $stmt->close();

    echo json_encode($row ? $row : []);
    exit;
}

if (isset($_GET['fetch_order_payment']) && isset($_GET['order_id'])) {
    header('Content-Type: application/json; charset=utf-8');

    $id = (int) $_GET['order_id'];

    $stmt = $connection->prepare("SELECT payment, cash_option, cash_amount, promo_code, card_name, card_number, expiry_date, total_price, delivery_fee, small_order_fee, same_day_fee FROM orders WHERE id = ? LIMIT 1");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result ? $result->fetch_assoc() : null;
    $stmt->close();

    echo json_encode($row ? $row : []);
    exit;
}

if (isset($_GET['fetch_order_summary']) && isset($_GET['order_id'])) {
    header('Content-Type: application/json; charset=utf-8');

    $id = (int) $_GET['order_id'];

    $stmt = $connection->prepare("SELECT total_price, subtotal, promo_code, delivery_fee, small_order_fee, same_day_fee FROM orders WHERE id = ? LIMIT 1");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result ? $result->fetch_assoc() : null;
    $stmt->close();

    echo json_encode($row ? $row : []);
    exit;
}

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
    <title>Admin | Shop</title>
</head>
<body>

    <div class="container">
        <section>
            <h2>Customer Interactions</h2>
            <div class="table-action-wrapper">
                <div class="table-title-wrapper">
                    <h3>Contact Requests</h3> <?php
                    $sql = "SELECT * FROM contact_requests ORDER BY id DESC";
                    $result = mysqli_query($connection, $sql);
                    if (mysqli_num_rows($result) > 0) {
                        ?> <span data-table="contact_requests" data-action="clear">CLEAR TABLE<i class="fa-regular fa-trash-can"></i></span> <?php
                    } ?>
                </div>
                <div class="table-wrapper">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                        </tr> <?php
                        if (mysqli_num_rows($result) > 0) {
                            while($row = mysqli_fetch_assoc($result)) { ?> 
                                <tr>
                                    <td class="long-content"><?php echo $row['name']; ?></td>
                                    <td class="long-content"><a href="mailto:<?php echo htmlspecialchars($row['email']) ?>"><?php echo htmlspecialchars($row['email']); ?></a></td>
                                    <td><a href="tel:<?php echo $row['phone']; ?>"><?php echo $row['phone']; ?></a></td>
                                    <td> <?php
                                        if ($row['message'] === null) {
                                            ?> <span><i class="fa-solid fa-circle-xmark"></i></span> <?php
                                        } else {
                                            ?> <a href="#" class="fetch-message" data-contact-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-message"></i></a> <?php
                                        } ?>
                                    </td>
                                </tr> <?php
                            }
                        } else { ?>
                            <tr class="empty-row">
                                <td colspan="4">No data available</td>
                            </tr> <?php
                        }
                        ?>
                    </table>
                </div>
            </div>
            <div class="table-action-wrapper">
                <div class="table-title-wrapper">
                    <h3>Career Applications</h3>  <?php
                    $sql = "SELECT * FROM career_applications ORDER BY id DESC";
                    $result = mysqli_query($connection, $sql);  
                    if (mysqli_num_rows($result) > 0) {
                        ?> <span data-table="career_applications" data-action="clear">CLEAR TABLE<i class="fa-regular fa-trash-can"></i></span> <?php
                    } ?>
                </div>
                <div class="table-wrapper">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Education</th>
                            <th>Career</th>
                            <th>Experience</th>
                            <th>Start Date</th>
                            <th>CV</th>
                            <th>Message</th>
                        </tr> <?php                             
                        if (mysqli_num_rows($result) > 0) {
                            while($row = mysqli_fetch_assoc($result)) { ?> 
                                <tr>
                                    <td class="long-content"><?php echo $row['name']; ?></td>
                                    <td class="long-content"><?php echo $row['surname']; ?></td>
                                    <td class="long-content"><a href="mailto:<?php echo htmlspecialchars($row['email']) ?>"><?php echo htmlspecialchars($row['email']); ?></a></td>
                                    <td class="long-content"><a href="tel:<?php echo $row['phone']; ?>"><?php echo $row['phone']; ?></a></td>
                                    <td class="long-content"><?php echo $row['education']; ?></td>
                                    <td class="long-content"style="overflow: visible;"><?php if ($row['career'] === 'Driver') { ?> 
                                        <span class="tooltip-wrap">Driver
                                            <span class="tooltip-bubble"> <?php
                                                if ($row['license'] !== null) {
                                                    $licenses = explode(',', $row['license']);
                                                    $licenses = array_filter(array_map('trim', $licenses));
                                                    $count = count($licenses);
                                                    echo '<span>' . ($count === 1 ? 'License:' : 'Licenses:') . '</span>';
                                                } else {
                                                    echo '<span>License:</span>';
                                                } ?>

                                                <div class="tooltip-icons"> <?php
                                                    if ($row['license'] !== null) {
                                                        foreach ($licenses as $license) {
                                                            if ($license === 'Car') {
                                                                echo '<i class="fa-solid fa-car" title="Car"></i>';
                                                            } else if ($license === 'Truck') {
                                                                echo '<i class="fa-solid fa-truck" title="Truck"></i>';
                                                            } else if ($license === 'Motorcycle') {
                                                                echo '<i class="fa-solid fa-motorcycle" title="Motorcycle"></i>';
                                                            }
                                                        }
                                                    } else {
                                                        echo '<i class="fa-solid fa-circle-xmark"></i>';
                                                    } ?>
                                                </div>
                                            </span>
                                        </span> <?php 
                                        } else {
                                            echo $row['career'];
                                        } ?>
                                    </td>
                                    <td> <?php 
                                        if ($row['experience'] === '0-1') {
                                            echo $row['experience'] . ' year';
                                        } else {
                                            echo $row['experience'] . ' years';
                                        } ?> 
                                    </td>
                                    <td class="long-content"> <?php echo $row['start_date']; ?> </td>
                                    <td><a href="../../files/uploads/<?php echo $row['cv_file']; ?>" target="_blank"><i class="fa-solid fa-file"></i></a></td>
                                    <td><a href="#" class="fetch-message" data-career-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-message"></i></a></td>
                                </tr> <?php
                            }
                        } else { ?>
                            <tr class="empty-row">
                                <td colspan="10">No data available</td>
                            </tr> <?php
                        } ?>
                    </table>
                </div>
            </div>
            <div class="table-action-wrapper">
                <div class="table-title-wrapper">
                    <h3>Order History</h3> <?php
                    $sql = "SELECT * FROM orders ORDER BY id DESC";
                    $result = mysqli_query($connection, $sql);
                    if (mysqli_num_rows($result) > 0) {
                        ?> <span data-table="orders" data-action="clear">CLEAR TABLE<i class="fa-regular fa-trash-can"></i></span> <?php
                    } ?>
                </div>
                <div class="table-wrapper">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Delivery</th>
                            <th>Products</th>
                            <th>Payment</th>
                            <th>Message</th>
                            <th>Summary</th>
                        </tr> <?php
                        if (mysqli_num_rows($result) > 0) {
                            while($row = mysqli_fetch_assoc($result)) { ?> 
                                <tr>
                                    <td class="long-content"><?php echo $row['name']; ?></td>
                                    <td class="long-content"><?php echo $row['surname']; ?></td>
                                    <td class="long-content"><a href="mailto:<?php echo $row['email']; ?>"><?php echo $row['email']; ?></a></td>
                                    <td class="long-content"><a href="tel:<?php echo $row['phone']; ?>"><?php echo $row['phone']; ?></a></td>
                                    <td class="long-content"> <?php 
                                        if ($row['delivery_option'] === 'In-Store Pickup') {
                                            echo $row['delivery_option'];
                                        } else { ?> 
                                            <a href="#" class="order-details-delivery" data-order-id="<?php echo $row['id']; ?>"><?php echo $row['delivery_option']; ?></a> <?php
                                        } ?>
                                    </td>
                                    <td><a href="#" class="order-details-products" data-order-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-cart-shopping"></i></a></td>
                                    <td><a href="#" class="order-details-payment" data-order-id="<?php echo $row['id']; ?>"> <?php if ($row['payment'] === 'Cash') { ?> <i class="fa-solid fa-money-bill-wave"></i> <?php } else { ?> <i class="fa-solid fa-credit-card"></i> <?php } ?></a></td>
                                    <td> <?php
                                        if ($row['message'] === null) {
                                            ?> <span><i class="fa-solid fa-circle-xmark"></i></span> <?php
                                        } else {
                                            ?> <a href="#" class="fetch-message" data-order-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-message"></i></a> <?php
                                        } ?>
                                    </td>
                                    <td><a href="#" class="order-details-summary" data-order-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-receipt"></i></a></td>
                                </tr> <?php
                            }
                        } else { ?>
                            <tr class="empty-row">
                                <td colspan="9">No data available</td>
                            </tr> <?php
                        } ?>
                    </table>
                </div>
            </div>
            <div class="table-action-wrapper">
                <div class="table-title-wrapper">
                    <h3>Reviews</h3> <?php
                    $sql = "SELECT * FROM reviews ORDER BY id DESC";
                    $result = mysqli_query($connection, $sql);
                    if (mysqli_num_rows($result) > 0) {
                        ?> <span data-table="reviews" data-action="clear">CLEAR TABLE<i class="fa-regular fa-trash-can"></i></span> <?php
                    } ?>
                </div>
                <div class="table-wrapper">
                    <table class="admin-table reviews-table">
                        <tr>
                            <th>Rating</th>
                            <th>Message</th>
                        </tr> <?php
                        if (mysqli_num_rows($result) > 0) {
                            while($row = mysqli_fetch_assoc($result)) { ?> 
                                <tr>
                                    <td> <?php 
                                        if ($row['rating'] === null) { ?> <i class="fa-solid fa-circle-xmark"></i> <?php }
                                        else if ($row['rating'] === '1') { ?> <i class="fa-solid fa-star"></i> <?php }
                                        else if ($row['rating'] === '2') { ?> <div class="table-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div> <?php }
                                        else if ($row['rating'] === '3') { ?> <div class="table-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div> <?php }
                                        else if ($row['rating'] === '4') { ?> <div class="table-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div> <?php }
                                        else if ($row['rating'] === '5') { ?> <div class="table-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div> <?php } ?>
                                    </td>
                                    <td> <?php
                                        if (empty($row['message'])) {
                                            ?> <span><i class="fa-solid fa-circle-xmark"></i></span> <?php
                                        } else {
                                            ?> <a href="#" class="fetch-message" data-review-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-message"></i></a> <?php
                                        } ?>
                                    </td>
                                </tr> <?php
                            }
                        } else { ?>
                            <tr class="empty-row">
                                <td colspan="2">No data available</td>
                            </tr> <?php
                        } ?>
                    </table>
                </div>
            </div>
        </section>
        <section>
            <h2>Store Analytics</h2>
            <div class="small-tables-wrapper">
                <div class="table-action-wrapper">
                    <div class="table-title-wrapper">
                        <h3>Borough Stats</h3> <?php
                        $check = mysqli_query($connection, "SELECT 1 FROM boroughs WHERE order_count != 0 LIMIT 1");
                        $hasValues = mysqli_num_rows($check) > 0;
                        if ($hasValues) { 
                            ?> <span data-table="boroughs" data-action="reset">RESET TABLE<i class="fa-regular fa-trash-can"></i></span> <?php
                        } ?>
                    </div>
                    <div class="table-wrapper">
                        <table class="admin-table boroughs-stats">
                            <tr>
                                <th>Borough</th>
                                <th>Order Count</th>
                            </tr> <?php
                            $sql = "SELECT * FROM boroughs ORDER BY order_count DESC";
                            $result = mysqli_query($connection, $sql);
                            if (mysqli_num_rows($result) > 0) {
                                while($row = mysqli_fetch_assoc($result)) { ?> 
                                    <tr>
                                        <td><?php echo $row['borough']; ?></td>
                                        <td><?php echo $row['order_count']; ?></td>
                                    </tr> <?php
                                }
                            } ?>
                        </table>
                    </div>
                </div>
                <div class="table-action-wrapper">
                    <div class="table-title-wrapper">
                        <h3>Product Stats</h3> <?php
                        $check = mysqli_query($connection, "SELECT 1 FROM (SELECT order_count FROM products1 UNION ALL SELECT order_count FROM products2 UNION ALL SELECT order_count FROM products3) AS products_counts WHERE order_count != 0 LIMIT 1");
                        $hasValues = mysqli_num_rows($check) > 0;
                        if ($hasValues) { 
                            ?> <span data-table="product_stats" data-action="reset">RESET TABLE<i class="fa-regular fa-trash-can"></i></span> <?php
                        } ?>
                    </div>
                    <div class="table-wrapper">
                        <table class="admin-table product-stats">
                            <tr>
                                <th>Product</th>
                                <th>Order Count</th>
                            </tr> <?php
                            $sql = "SELECT id, name, order_count, 'products1' AS category FROM products1 UNION ALL
                                    SELECT id, name, order_count, 'products2' AS category FROM products2 UNION ALL
                                    SELECT id, name, order_count, 'products3' AS category FROM products3
                                    ORDER BY order_count DESC, name ASC";
                            $result = mysqli_query($connection, $sql);
                            if (mysqli_num_rows($result) > 0) {
                                while($row = mysqli_fetch_assoc($result)) { ?> 
                                    <tr>
                                        <td class="long-content"><?php echo $row['name']; ?></td>
                                        <td><?php echo $row['order_count']; ?></td>
                                    </tr> <?php
                                }
                            } ?>
                        </table>
                    </div>
                </div>   
                <div class="table-action-wrapper">
                    <div class="table-title-wrapper">
                        <h3>Category Stats</h3> <?php
                        $check = mysqli_query($connection, "SELECT 1 FROM product_categories WHERE order_count != 0 LIMIT 1");
                        $hasValues = mysqli_num_rows($check) > 0;
                        if ($hasValues) { 
                            ?> <span data-table="product_categories" data-action="reset">RESET TABLE<i class="fa-regular fa-trash-can"></i></span> <?php
                        } ?>
                    </div>
                    <div class="table-wrapper">
                        <table class="admin-table product-categories">
                            <tr>
                                <th>Category</th>
                                <th>Order Count</th>
                            </tr> <?php
                            $sql = "SELECT name AS category_name, order_count FROM product_categories ORDER BY order_count DESC, name ASC";
                            $result = mysqli_query($connection, $sql);
                            if (mysqli_num_rows($result) > 0) {
                                while ($row = mysqli_fetch_assoc($result)) { ?>
                                    <tr>
                                        <td><?php echo htmlspecialchars($row['category_name']); ?></td>
                                        <td><?php echo (int) $row['order_count']; ?></td>
                                    </tr> <?php
                                }
                            } ?>
                        </table>
                    </div>
                </div>
            </div>
            <div class="table-action-wrapper">
                <h3>Overview</h3>
                <div class="table-wrapper">
                    <table class="admin-table overview-table">
                        <tr>
                            <th>Metric</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>Total Revenue</td>
                            <td id="total-revenue"> <?php
                                $sql = "SELECT COALESCE(SUM(total_price), 0) AS total_revenue FROM orders";
                                $result = mysqli_query($connection, $sql);
                                $row = mysqli_fetch_assoc($result);
                                echo "$" . $row['total_revenue']; ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Average Order Value</td>
                            <td id="average-order-value"> <?php
                                $sql = "SELECT COALESCE(ROUND(SUM(total_price) / NULLIF(COUNT(*), 0), 2), 0) AS avg_order_value FROM orders;";
                                $result = mysqli_query($connection, $sql);
                                $row = mysqli_fetch_assoc($result);
                                echo "$" . $row['avg_order_value']; ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Total Orders</td>
                            <td id="total-orders"> <?php
                                $sql = "SELECT COUNT(*) AS total_orders FROM orders;";
                                $result = mysqli_query($connection, $sql);
                                $row = mysqli_fetch_assoc($result);
                                echo $row['total_orders']; ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Total Products Sold</td>
                            <td id="total-products-sold"> <?php
                                $sql = "SELECT COALESCE(SUM(order_count), 0) AS total_products_sold FROM (SELECT order_count FROM products1 UNION ALL SELECT order_count FROM products2 UNION ALL SELECT order_count FROM products3) AS all_products";
                                $result = mysqli_query($connection, $sql);
                                $row = mysqli_fetch_assoc($result);
                                echo $row['total_products_sold']; ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Average Rating</td>
                            <td id="average-rating"> <?php
                                $sql = "SELECT ROUND(COALESCE(AVG(rating), 0), 2) AS average_rating FROM reviews WHERE rating IS NOT NULL;";
                                $result = mysqli_query($connection, $sql);
                                $row = mysqli_fetch_assoc($result);
                                echo $row['average_rating']; ?>
                            </td>
                        </tr>
                        <tr>
                            <td>Newsletter Subscribers</td>
                            <td> <?php
                                $sql = "SELECT COUNT(*) AS newsletter_subscribers FROM newsletter;";
                                $result = mysqli_query($connection, $sql);
                                $row = mysqli_fetch_assoc($result);
                                echo $row['newsletter_subscribers']; ?>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
        <div class="admin-links">
            <a href="moderator.php" class="button">Moderator Panel<i class="fa-solid fa-user-gear"></i></a>
            <a href="../content/home.php" class="button">View Shop<i class="fa-solid fa-shop"></i></a>
        </div>          
    </div>

    <div class="popup-blur message-blur">
        <i class="fa-solid fa-circle-xmark"></i>
        <div class="popup-wrapper">
            <h3>Message</h3>
            <div>
                <p></p>
            </div>
        </div>
    </div>

    <div class="popup-blur order-details-blur">
        <i class="fa-solid fa-circle-xmark"></i>
        <div class="popup-wrapper">
            <h3></h3>
            <div>
                <table></table>
            </div>
        </div>
    </div>

    <div class="popup-blur confirmation-blur">
        <i class="fa-solid fa-circle-xmark"></i>
        <div class="confirmation-wrapper">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <h3>Are You Sure?</h3>
            <p></p>
            <div>
                <button class="confirmation-cancel">Cancel</button>
                <button class="confirmation-confirm"></button>
            </div>
        </div>
    </div>

    <div class="popup-blur form-sent-blur">
        <div class="failed-form-sent">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <h3>Request Failed!</h3>
            <p>An error occurred while sending your form.</p>
        </div>
    </div>

    <script src="../../js/admin.js"></script>

</body>
</html>