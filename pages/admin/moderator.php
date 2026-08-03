<?php

require_once(__DIR__ . '/../../includes/dbconnection.php'); 

if (!isset($_SESSION['user-role']) || ($_SESSION['user-role'] !== 'Admin' && $_SESSION['user-role'] !== 'Moderator')) {
    header("Location: admin-login.php");
    exit;
}


if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > 1800)) {
    session_unset();
    session_destroy();

    header("Location: admin-login.php");
    exit;
}

$_SESSION['last_activity'] = time();


if (isset($_GET['fetch_product']) && isset($_GET['category']) && isset($_GET['id'])) {
    header('Content-Type: application/json; charset=utf-8');

    $category = $_GET['category'];
    $id = (int) $_GET['id'];

    if ($category === 'products1') {
        $stmt = mysqli_prepare($connection, "SELECT id AS id, image, name, price, discount_price FROM products1 WHERE id=?");
    } else if ($category === 'products2') {
        $stmt = mysqli_prepare($connection, "SELECT id AS id, image, name, price, discount_price FROM products2 WHERE id=?");
    } else if ($category === 'products3') {
        $stmt = mysqli_prepare($connection, "SELECT id AS id, image, name, price, discount_price FROM products3 WHERE id=?");
    } else {
        echo json_encode([]);
        exit;
    }

    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    echo json_encode(mysqli_fetch_assoc($result) ?: []);
    exit;
}


$productNames = [];

$categorySlugs = ['products1', 'products2', 'products3'];

foreach ($categorySlugs as $categorySlug) {
    $categoryResult = mysqli_query($connection, "SELECT name FROM product_categories WHERE slug = '$categorySlug'");

    if ($categoryResult && $categoryRow = mysqli_fetch_assoc($categoryResult)) {
        $productNames[$categorySlug] = $categoryRow['name'];
    }
}

if (isset($_GET['fetch_category']) && isset($_GET['category'])) {
    header('Content-Type: application/json; charset=utf-8');

    $category = $_GET['category'];

    $stmt = mysqli_prepare($connection, "SELECT id, slug, name, image FROM product_categories WHERE slug = ?");
    mysqli_stmt_bind_param($stmt, "s", $category);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    echo json_encode(mysqli_fetch_assoc($result) ?: []);
    exit;
}


if (isset($_GET['fetch_blog']) && isset($_GET['id'])) {
    header('Content-Type: application/json; charset=utf-8');

    $id = (int) $_GET['id'];

    $stmt = mysqli_prepare($connection, "SELECT id AS id, title, excerpt, content, image, created_at FROM blog WHERE id=?");

    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    echo json_encode(mysqli_fetch_assoc($result) ?: []);
    exit;
}

if (isset($_GET['fetch_content']) && isset($_GET['id'])) {
    header('Content-Type: application/json; charset=utf-8');

    $id = (int) $_GET['id'];

    $stmt = mysqli_prepare($connection, "SELECT id AS id, title, content FROM blog WHERE id=?");

    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    echo json_encode(mysqli_fetch_assoc($result) ?: []);
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
    <title>Moderator | Shop</title>
</head>
<body>

    <div class="container">
        <section>
            <div class="section-title-wrapper">
                <h2>Products</h2>
                <form id="products-images-form" class="images-upload-form" enctype="multipart/form-data">
                    <div class="file-wrapper">
                        <input type="file" name="products-images[]" accept=".jpg,.jpeg,.png" multiple>
                        <label for="products-images">
                            <div class="upload-content">
                                <span>Upload Images</span>
                                <i class="fa-solid fa-upload"></i>
                            </div>
                            <div class="upload-success">
                                <span>Success</span>
                                <i class="fa-solid fa-circle-check"></i>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
            <div class="category-update">
                <h3 data-category="products1"><?php echo $productNames['products1']; ?></h3><span data-category="products1">EDIT<i class="fa-solid fa-pen-to-square"></i></span>
            </div>
            <div class="table-wrapper">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discount Price</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr> <?php
                    $sql = "SELECT * FROM products1";
                    $result = mysqli_query($connection, $sql);
                    if (mysqli_num_rows($result) > 0) {
                        while($row = mysqli_fetch_assoc($result)) { ?> 
                            <tr>
                                <td class="long-content"><?php echo $row['name']; ?></td>
                                <td>$<?php echo $row['price']; ?></td>
                                <td> <?php 
                                    if ($row['discount_price'] === null) { ?>
                                        <i class="fa-solid fa-circle-xmark"></i> <?php 
                                    } else { 
                                        echo '$' . $row['discount_price'];
                                    } ?>
                                </td>
                                <td><a href="#" class="product-image-link" data-category="products1" data-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-image"></i></a></td>
                                <td><a href="#" class="product-update-link" data-category="products1" data-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-pen-to-square"></i></a></td>
                                <td><a href="#" class="product-delete-link" data-category="products1" data-id="<?php echo $row['id']; ?>"><i class="fa-regular fa-trash-can"></i></a></td>
                            </tr> <?php
                        }
                    } else { ?>
                        <tr class="empty-row">
                            <td colspan="6">No data available</td>
                        </tr> <?php
                    } ?>
                    <tr class="add-new-row">
                        <td colspan="6"><a href="#" class="product-add-link" data-category="products1"><i class="fa-solid fa-circle-plus"></i></a></td>
                    </tr>
                </table>
            </div>
            <div class="category-update">
                <h3 data-category="products2"><?php echo $productNames['products2']; ?></h3><span data-category="products2">EDIT<i class="fa-solid fa-pen-to-square"></i></span>
            </div>
            <div class="table-wrapper">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discount Price</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr> <?php
                    $sql = "SELECT * FROM products2";
                    $result = mysqli_query($connection, $sql);
                    if (mysqli_num_rows($result) > 0) {
                        while($row = mysqli_fetch_assoc($result)) { ?> 
                            <tr>
                                <td class="long-content"><?php echo $row['name']; ?></td>
                                <td>$<?php echo $row['price']; ?></td>
                                <td> <?php 
                                    if ($row['discount_price'] === null) { ?>
                                        <i class="fa-solid fa-circle-xmark"></i> <?php 
                                    } else { 
                                        echo '$' . $row['discount_price'];
                                    } ?>
                                </td>
                                <td><a href="#" class="product-image-link" data-category="products2" data-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-image"></i></a></td>
                                <td><a href="#" class="product-update-link" data-category="products2" data-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-pen-to-square"></i></a></td>
                                <td><a href="#" class="product-delete-link" data-category="products2" data-id="<?php echo $row['id']; ?>"><i class="fa-regular fa-trash-can"></i></a></td>
                            </tr> <?php
                        }
                    } else { ?>
                        <tr class="empty-row">
                            <td colspan="6">No data available</td>
                        </tr> <?php
                    } ?>
                    <tr class="add-new-row">
                        <td colspan="6"><a href="#" class="product-add-link" data-category="products2"><i class="fa-solid fa-circle-plus"></i></a></td>
                    </tr>
                </table>
            </div>
            <div class="category-update">
                <h3 data-category="products3"><?php echo $productNames['products3']; ?></h3><span data-category="products3">EDIT<i class="fa-solid fa-pen-to-square"></i></span>
            </div>
            <div class="table-wrapper">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Discount Price</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr> <?php
                    $sql = "SELECT * FROM products3";
                    $result = mysqli_query($connection, $sql);
                    if (mysqli_num_rows($result) > 0) {
                        while($row = mysqli_fetch_assoc($result)) { ?> 
                            <tr>
                                <td class="long-content"><?php echo $row['name']; ?></td>
                                <td>$<?php echo $row['price']; ?></td>
                                <td> <?php 
                                    if ($row['discount_price'] === null) { ?>
                                        <i class="fa-solid fa-circle-xmark"></i> <?php 
                                    } else { 
                                        echo '$' . $row['discount_price'];
                                    } ?>
                                </td>
                                <td><a href="#" class="product-image-link" data-category="products3" data-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-image"></i></a></td>
                                <td><a href="#" class="product-update-link" data-category="products3" data-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-pen-to-square"></i></a></td>
                                <td><a href="#" class="product-delete-link" data-category="products3" data-id="<?php echo $row['id']; ?>"><i class="fa-regular fa-trash-can"></i></a></td>
                            </tr> <?php
                        }
                    } else { ?>
                        <tr class="empty-row">
                            <td colspan="6">No data available</td>
                        </tr> <?php
                    } ?>
                    <tr class="add-new-row">
                        <td colspan="6"><a href="#" class="product-add-link" data-category="products3"><i class="fa-solid fa-circle-plus"></i></a></td>
                    </tr>
                </table>
            </div>
        </section>
        <section>
            <div class="section-title-wrapper">
                <h2>Blog</h2>
                <form id="blog-images-form" class="images-upload-form" enctype="multipart/form-data">
                    <div class="file-wrapper">
                        <input type="file" name="blog-images[]" accept=".jpg,.jpeg,.png" multiple>
                        <label for="blog-images">
                            <div class="upload-content">
                                <span>Upload Images</span>
                                <i class="fa-solid fa-upload"></i>
                            </div>
                            <div class="upload-success">
                                <span>Success</span>
                                <i class="fa-solid fa-circle-check"></i>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
            <div class="table-wrapper">
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Excerpt</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Created At</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr> <?php
                    $sql = "SELECT * FROM blog";
                    $result = mysqli_query($connection, $sql);
                    if (mysqli_num_rows($result) > 0) {
                        while($row = mysqli_fetch_assoc($result)) { ?> 
                            <tr>
                                <td class="long-content"><?php echo $row['title']; ?></td>
                                <td class="long-content"><?php echo $row['excerpt']; ?></td>
                                <td><a href="#" class="blog-content-link" data-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-file-lines"></i></a></td>
                                <td><a href="#" class="blog-image-link"  data-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-image"></i></a></td>
                                <td><?php echo date('m.d.Y', strtotime($row['created_at'])); ?></td>
                                <td><a href="#" class="blog-update-link" data-id="<?php echo $row['id']; ?>"><i class="fa-solid fa-pen-to-square"></i></a></td>
                                <td><a href="#" class="blog-delete-link" data-id="<?php echo $row['id']; ?>"><i class="fa-regular fa-trash-can"></i></a></td>
                            </tr> <?php
                        }
                    } else { ?>
                        <tr class="empty-row">
                            <td colspan="7">No data available</td>
                        </tr> <?php
                    } ?>
                    <tr class="add-new-row">
                        <td colspan="7"><a href="#" class="blog-add-link"><i class="fa-solid fa-circle-plus"></i></a></td>
                    </tr>
                </table>
            </div>
        </section>
        <div class="admin-links"> <?php
            if ($_SESSION['user-role'] === 'Admin') { ?> 
                <a href="admin.php" class="button">Admin Panel<i class="fa-solid fa-user-shield"></i></a> <?php
            } ?>
            <a href="../content/home.php" class="button">View Shop<i class="fa-solid fa-store"></i></a>
        </div>
    </div>

    <div class="popup-blur category-update-blur">
        <i class="fa-solid fa-circle-xmark"></i>
        <div class="popup-wrapper">
            <h3>Edit</h3>
            <form id="category-update-form" autocomplete="off">
                <input type="hidden" name="category-update-category">
                <input type="text" name="category-update-name" placeholder="Name" maxlength="50">
                <p class="category-update-name-error"></p>
                <div class="select-wrapper">
                    <select name="category-update-image"> <?php
                        $folder = "../../assets/images/products/";
                        $images = array_diff(scandir($folder), ['.', '..']);

                        foreach ($images as $image) {
                            if (preg_match('/\.(jpg|jpeg|png)$/i', $image)) {
                                echo "<option value=\"$image\">$image</option>";
                            }
                        } ?>
                    </select>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <p class="category-update-image-error"></p>
                <button type="submit" name="category-update-button">Update</button>
            </form>
        </div>
    </div>

    <div class="popup-blur product-update-blur">
        <i class="fa-solid fa-circle-xmark"></i>
        <div class="popup-wrapper">
            <h3>Edit</h3>
            <form id="product-update-form" autocomplete="off">
                <input type="hidden" name="product-update-category">
                <input type="hidden" name="product-update-id">
                <input type="text" name="product-update-name" placeholder="Name" maxlength="40">
                <p class="product-update-name-error"></p>
                <div class="select-wrapper">
                    <select name="product-update-image"> <?php
                        $folder = "../../assets/images/products/";
                        $images = array_diff(scandir($folder), ['.', '..']);

                        foreach ($images as $image) {
                            if (preg_match('/\.(jpg|jpeg|png)$/i', $image)) {
                                echo "<option value=\"$image\">$image</option>";
                            }
                        } ?>
                    </select>
                    <i class="fa-solid fa-caret-down"></i>
                </div> 
                <p class="product-update-image-error"></p>
                <input type="text" name="product-update-price" placeholder="Price">
                <p class="product-update-price-error"></p>
                <input type="text" name="product-update-discount-price" placeholder="Discount Price">
                <p class="product-update-discount-error"></p>
                <button type="submit" name="product-update-button">Update</button>
            </form>
        </div>
    </div>

    <div class="popup-blur product-add-blur">
        <i class="fa-solid fa-circle-xmark"></i>
        <div class="popup-wrapper">
            <h3>New Product</h3>
            <form id="product-add-form" autocomplete="off">
                <input type="hidden" name="product-add-category">
                <input type="text" name="product-add-name" placeholder="Name" maxlength="50">
                <p class="product-add-name-error"></p>
                <div class="select-wrapper">
                    <select name="product-add-image">
                        <option value="" hidden>Select Image</option> <?php
                        $folder = "../../assets/images/products/";
                        $images = array_diff(scandir($folder), ['.', '..']);

                        foreach ($images as $image) {
                            if (preg_match('/\.(jpg|jpeg|png)$/i', $image)) {
                                echo "<option value=\"$image\">$image</option>";
                            }
                        } ?>
                    </select>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <p class="product-add-image-error"></p>
                <input type="text" name="product-add-price" placeholder="Price">
                <p class="product-add-price-error"></p>
                <input type="text" name="product-add-discount-price" placeholder="Discount Price">
                <p class="product-add-discount-error"></p>
                <button type="submit" name="product-add">Add</button>
            </form>
        </div>
    </div>

    <div class="popup-blur blog-add-blur">
        <i class="fa-solid fa-circle-xmark"></i>
        <div class="popup-wrapper">
            <h3>New Blog</h3>
            <form id="blog-add-form" autocomplete="off">
                <input type="text" name="blog-add-title" placeholder="Title" maxlength="70">
                <p class="blog-add-title-error"></p>
                <input type="text" name="blog-add-excerpt" placeholder="Excerpt" maxlength="300">
                <p class="blog-add-excerpt-error"></p>
                <textarea id="blog-add-content" name="blog-add-content"></textarea>
                <p class="blog-add-content-error"></p>
                <div class="select-wrapper">
                    <select name="blog-add-image">
                        <option value="" hidden>Select Image</option> <?php
                        $folder = "../../assets/images/blog/";
                        $images = array_diff(scandir($folder), ['.', '..']);

                        foreach ($images as $image) {
                            if (preg_match('/\.(jpg|jpeg|png)$/i', $image)) {
                                echo "<option value=\"$image\">$image</option>";
                            }
                        } ?>
                    </select>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <p class="blog-add-image-error"></p>
                <button type="submit" name="blog-add-button">Add</button>
            </form>
        </div>
    </div>

    <div class="popup-blur blog-update-blur">
        <i class="fa-solid fa-circle-xmark"></i>
        <div class="popup-wrapper">
            <h3></h3>
            <form id="blog-update-form" autocomplete="off">
                <input type="hidden" name="blog-update-id">
                <input type="text" name="blog-update-title" placeholder="Title" maxlength="70">
                <p class="blog-update-title-error"></p>
                <input type="text" name="blog-update-excerpt" placeholder="Excerpt" maxlength="300">
                <p class="blog-update-excerpt-error"></p>
                <textarea id="blog-update-content" name="blog-update-content"></textarea>
                <p class="blog-update-content-error"></p>
                <div class="select-wrapper">
                    <select name="blog-update-image"> <?php
                        $folder = "../../assets/images/blog/";
                        $images = array_diff(scandir($folder), ['.', '..']);

                        foreach ($images as $image) {
                            if (preg_match('/\.(jpg|jpeg|png)$/i', $image)) {
                                echo "<option value=\"$image\">$image</option>";
                            }
                        } ?>
                    </select>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <p class="blog-update-image-error"></p>
                <button type="submit" name="blog-update-button">Update</button>
            </form>
        </div>
    </div>

    <div class="popup-blur product-image-blur">
        <i class="fa-solid fa-circle-xmark"></i>
        <div class="popup-wrapper">
            <h3></h3>
            <div class="product-image"></div>
        </div>
    </div>

    <div class="popup-blur blog-image-blur">
        <i class="fa-solid fa-circle-xmark"></i>
        <div class="popup-wrapper">
            <h3></h3>
            <div class="blog-image"></div>
        </div>
    </div>

    <div class="popup-blur blog-content-blur">
        <i class="fa-solid fa-circle-xmark"></i>
        <div class="popup-wrapper">
            <h3></h3>
            <div class="blog-content"></div>
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

    <script src="../../js/tinymce/tinymce.min.js"></script>
    <script src="../../js/admin.js"></script>

</body>
</html>