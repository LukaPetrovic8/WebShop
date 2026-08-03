<?php

require_once(__DIR__ . '/dbconnection.php');

$productNames = [];

$productCategorySlugs = ['products1', 'products2', 'products3'];

foreach ($productCategorySlugs as $productCategorySlug) {
    $productCategoryResult = mysqli_query(
        $connection,
        "SELECT name FROM product_categories WHERE slug = '$productCategorySlug'"
    );

    if ($productCategoryResult && $productCategoryRow = mysqli_fetch_assoc($productCategoryResult)) {
        $productNames[$productCategorySlug] = $productCategoryRow['name'];
    }
}

$currentPage = basename($_SERVER['PHP_SELF']);

?>

<header>
    <div class="header-row">
        <div class="container">
            <div class="header-top-wrapper">
                <a href="/WebShop/pages/content/home.php">
                    <img src="/WebShop/assets/images/main/logo.png">
                </a>
                <nav class="header-big-menu">
                    <ul>
                        <li><a href="/WebShop/pages/content/products.php" class="<?php if ($currentPage == 'products.php') {echo 'active';} ?>">Products</a></li>
                        <li><a href="/WebShop/pages/content/about-us.php" class="<?php if ($currentPage == 'about-us.php') {echo 'active';} ?>">About Us</a></li>
                        <li><a href="/WebShop/pages/content/delivery.php" class="<?php if ($currentPage == 'delivery.php') {echo 'active';} ?>">Delivery</a></li>
                        <li><a href="/WebShop/pages/content/contact.php" class="<?php if ($currentPage == 'contact.php') {echo 'active';} ?>">Contact</a></li>
                    </ul>
                    <div class="header-icons">
                        <div>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <i class="fa-solid fa-circle-exclamation"></i>
                        </div>
                    </div>
                    <div class="burger-menu">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            </div>
            <nav class="header-small-menu">
                <ul>
                    <li><a href="/WebShop/pages/content/products.php">Products</a></li>
                    <li><a href="/WebShop/pages/content/about-us.php">About Us</a></li>
                    <li><a href="/WebShop/pages/content/delivery.php">Delivery</a></li>
                    <li><a href="/WebShop/pages/content/contact.php">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<div class="popup-blur shopping-cart-blur">
    <i class="fa-solid fa-circle-left"></i>
    <i class="fa-solid fa-circle-xmark"></i>
    <div class="shopping-cart-wrapper"></div>
    <div class="order-wrapper">
        <div class="order-title">
            <h3>Place Your Order</h3>
            <i class="fa-solid fa-clipboard-list"></i>
        </div>
        <form id="order-form" class="form" novalidate>
            <div class="order-inner-wrapper">
                <div class="double-input-wrapper">
                    <input type="text" name="name" placeholder="Name" maxlength="30">
                    <input type="text" name="surname" placeholder="Surname" maxlength="30">
                </div>
                <p class="name-error"></p>
                <p class="surname-error"></p>
                <input type="email" name="email" placeholder="Email" maxlength="254">
                <p class="email-error"></p>
                <div class="phone-custom-wrapper">
                    <input id="order-dial-codes" name="phone" type="tel" placeholder="Phone Number" maxlength="20">
                </div>
                <p class="phone-error"></p>
                <div class="select-wrapper">
                    <select name="delivery-option">
                        <option value="" hidden>Delivery Option</option>
                        <option>Standard Delivery</option>
                        <option>Same-Day Delivery</option>
                        <option>Scheduled Delivery</option>
                        <option>In-Store Pickup</option>
                    </select>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <p class="delivery-option-error"></p>
                <span id="in-store-pickup">Your order will be ready for pickup 1 hour after it's placed.</span>
                <div id="order-delivery-wrapper">
                    <div id="scheduled-delivery-wrapper">
                        <div class="day-time-wrapper">
                            <div class="delivery-day-wrapper">
                                <span class="delivery-day-display">Delivery Day</span>
                                <input type="date" name="delivery-day" min="">
                                <i class="fa-solid fa-calendar-days"></i>
                            </div>
                            <p class="delivery-day-error"></p>
                            <div class="delivery-time-wrapper">
                                <span class="delivery-time-display">Delivery Time</span>
                                <input type="time" name="delivery-time">
                                <i class="fa-solid fa-clock"></i>
                            </div>
                            <p class="delivery-time-error"></p>
                        </div>
                    </div>
                    <div class="select-wrapper">
                        <select name="borough">
                            <option value="" hidden>Borough</option>
                            <option>Barajevo</option>
                            <option>Batajnica</option>
                            <option>Borča</option>
                            <option>Čukarica</option>
                            <option>Grocka</option>
                            <option>Lazarevac</option>
                            <option>Mladenovac</option>
                            <option>Novi Beograd</option>
                            <option>Obrenovac</option>
                            <option>Palilula</option>
                            <option>Rakovica</option>
                            <option>Savski venac</option>
                            <option>Sopot</option>
                            <option>Stari grad</option>
                            <option>Surčin</option>
                            <option>Voždovac</option>
                            <option>Vračar</option>
                            <option>Zemun</option>
                            <option>Zvezdara</option>
                        </select>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <p class="borough-error"></p>
                    <span id="minimum-order"></span>
                    <input type="text" name="address" placeholder="Address" maxlength="100">
                    <p class="address-error"></p>
                    <div class="select-wrapper">
                        <select name="location-type">
                            <option value="" hidden>Location Type</option>
                            <option>House</option>
                            <option>Apartment</option>
                            <option>Office</option>
                            <option>Other</option>
                        </select>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <p class="location-type-error"></p>
                    <div id="location-type-wrapper">
                        <div id="apartment-wrapper">
                            <input type="text" name="floor-number" placeholder="Floor Number" maxlength="2">
                            <p class="floor-number-error"></p>
                            <input type="text" name="apartment-number" placeholder="Apartment Number" maxlength="4">
                            <p class="apartment-number-error"></p>
                        </div>
                        <div id="office-wrapper">
                            <input type="text" name="office-name" placeholder="Building Name" maxlength="50">
                            <p class="office-name-error"></p>
                            <span class="delivery-place">Where should we bring the delivery?</span>
                            <div class="office-reception-wrapper">
                                <label>
                                    <input type="radio" name="office-reception" value="To the Reception">To the Reception
                                </label>
                                <label>
                                    <input type="radio" name="office-reception" value="To the Office">To the Office
                                </label>
                            </div>
                            <p class="office-reception-error"></p>
                        </div>
                        <div id="other-wrapper">
                            <input type="text" name="address-details" placeholder="Address Details" maxlength="100">
                            <p class="address-details-error"></p>
                        </div>
                    </div>
                </div>
                <div id="payment-wrapper">
                    <div class="select-wrapper">
                        <select name="payment">
                            <option hidden value="">Payment Method</option>
                            <option>Cash</option>
                            <option>Card</option>
                        </select>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>
                    <p class="payment-error"></p>
                    <div id="cash-payment-wrapper">
                        <span class="cash-total">Your total order is</span><span class="total-price"></span>
                        <div class="cash-option-wrapper">
                            <label>
                                <input type="radio" id="cash-exact" name="cash-option" value="Exact">I have exactly<span class="total-price"></span>
                            </label>
                            <label>
                                <input type="radio" id="cash-not-exact" name="cash-option" value="Not Exact">I don't have exact amount
                            </label>
                        </div>
                        <p class="cash-option-error"></p>
                        <div id="cash-amount-wrapper">
                            <input type="text" name="cash-amount" placeholder="Cash Amount" maxlength="9">
                            <p class="cash-amount-error"></p>
                        </div>
                    </div>
                    <div id="card-payment-wrapper">
                        <input type="text" name="card-name" placeholder="Name on Card" maxlength="50">
                        <p class="card-name-error"></p>
                        <input type="text" name="card-number" maxlength="19" placeholder="Card Number" inputmode="numeric">
                        <p class="card-number-error"></p>
                        <div class="double-input-wrapper">
                            <div>
                                <input type="text" name="expiry-date" placeholder="Expiry Date" inputmode="numeric" maxlength="5" />
                                <p class="expiry-date-error"></p>
                            </div>
                            <div>
                                <input type="text" name="cvv" placeholder="CVV" maxlength="4" inputmode="numeric">
                                <p class="cvv-error"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" name="promo-code" placeholder="PROMO Code" maxlength="50">
                    <span id="wrong-promo">Sorry, that promo code isn't recognized. Please try again.</span>
                    <span id="right-promo">Congratulations! You've successfully applied the promo code and received a 10% discount on your items.</span>
                </div>
                <textarea name="message" placeholder="Additional Information" maxlength="1000"></textarea>
                <div class="order-summary">
                    <h5>Summary</h5>
                    <div class="subtotal-wrapper">
                        <span>Subtotal</span>
                        <div>
                            <span id="subtotal"></span><span id="subtotal-promo"></span>
                            <input type="hidden" name="subtotal">
                        </div>
                    </div>
                    <div id="delivery-fee-wrapper">
                        <div>
                            <span>Delivery Fee</span><span id="delivery-fee"></span>
                            <input type="hidden" name="delivery-fee">
                        </div>
                    </div>
                    <div id="same-day-wrapper">
                        <div>
                            <span>Same-Day Delivery Fee</span><span>$1.00</span>
                            <input type="hidden" name="same-day-fee">
                        </div>
                    </div>
                    <div id="small-order-wrapper">
                        <div>
                            <span>Small Order Fee</span><span>$2.00</span>
                            <input type="hidden" name="small-order-fee">
                        </div>
                    </div>
                    <div class="order-price-wrapper">
                        <span>Total</span><span class="total-price"></span>
                        <input type="hidden" name="total-price">
                    </div>
                </div>
                <span class="privacy-policy">By placing your order, you agree to our <a href="/WebShop/pages/legal/terms-and-conditions.php">Terms & Conditions</a>.</span>
            </div>
            <button type="submit" class="button-primary" name="order-button">Confirm Order<i class="fa-solid fa-check-circle"></i></button>
        </form>
    </div>
</div>

<div class="popup-blur cookies-blur">
    <div class="cookies-wrapper">
        <img src="/WebShop/assets/images/main/cookies.png">
        <h3>We Use Cookies</h3>
        <p>This website uses cookies to make sure you get the best experience. By clicking “Accept", you consent to the use of cookies.</p>
        <div class="cookies-buttons">
            <div>
                <button class="button-primary" id="accept">Accept</button>
                <button class="button-primary" id="reject">Reject</button>
            </div>
            <button class="button-white" id="more-information">More Information</button>
        </div>
    </div>
</div>

<div class="popup-blur review-blur">
    <div class="review-wrapper">
        <h3>Rate Your Experience</h3>
        <p class="feedback">We'd love your feedback! Rate your experience and let us know what you think.</p>
        <form id="review-form" class="form">
            <div class="review-stars">
                <div class="empty-stars">
                    <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                </div>
                <div class="filled-stars">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>
            <input type="hidden" name="rating">
            <textarea name="review-message" placeholder="Leave a Review" maxlength="1000"></textarea>
            <p class="review-error"></p>
            <button type="submit" name="review-button" class="button-primary">Send<i class="fa-solid fa-paper-plane"></i></button>
        </form>
    </div>
    <i class="fa-solid fa-circle-xmark"></i>
</div>

<div class="popup-blur loader-blur">
    <div class="loader-wrapper">
        <div>
            <span class="loader-dot1"></span>
            <span class="loader-dot2"></span>
            <span class="loader-dot3"></span>
            <span class="loader-dot4"></span>
            <span class="loader-dot5"></span>
            <span class="loader-dot6"></span>
            <span class="loader-dot7"></span>
            <span class="loader-dot8"></span>
            <span class="loader-dot9"></span>
            <span class="loader-dot10"></span>
        </div>
    </div>
    <div class="success-wrapper">
        <img src="/WebShop/assets/images/main/order-placed.png" class="img-responsive">
        <h3>Order Placed <span>Successfully</span></h3>
        <p>Your order was successfully placed. We're getting it ready and will update you once it's on the way!</p>
        <button class="button-primary" name="continue-shopping">Continue Shopping<i class="fa-solid fa-cart-shopping"></i></button>
    </div>
</div>

<div class="popup-blur form-sent-blur">
    <div class="success-form-sent">
        <i class="fa-regular fa-circle-check"></i>
        <h3>Thank You!</h3>
        <p>Everything has been submitted successfully</p>
    </div>
    <div class="failed-form-sent">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <h3>Request Failed!</h3>
        <p>An error occurred while sending your form</p>
    </div>
</div>