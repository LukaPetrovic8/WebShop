/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||| Validations |||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* |||||||||||||||||||||||||||||||||||||||||||||||||| Clear Errors |||||||||||||||||||||||||||||||||||||||||||||||||| */

function clearErrorOnInput(inputField, errorElement) {
    inputField.addEventListener("input", function () {
        if (inputField.value.trim() === "") return;

        errorElement.style.display = "none";
        inputField.classList.remove("error-border");
    });
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Session Check |||||||||||||||||||||||||||||||||||||||||||||||||| */

const formSentBlur = document.querySelector(".form-sent-blur");
const failedFormSent = document.querySelector(".failed-form-sent");

const failedRequestTitle = document.querySelector(".form-sent-blur h3");
const failedRequestText = document.querySelector(".form-sent-blur p");

function sessionExpired(response) {
    if ($.trim(response) !== "session_expired") return false;

    if (formSentBlur && failedFormSent) {
        failedRequestTitle.textContent = "Session Expired!";
        failedRequestText.textContent = "Your session has expired. Please log in again.";

        formSentBlur.classList.add("active-blur");
        failedFormSent.classList.add("active-box");

        setTimeout(() => {
            window.location.href = "/WebShop/pages/admin/admin-login.php";
        }, 2500);
    } else {
        window.location.href = "/WebShop/pages/admin/admin-login.php";
    }

    return true;
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Failed Request Popup |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Form Submit ######################################## */

function failedRequestPopup() {
    if (formSentBlur && failedFormSent) {
        formSentBlur.classList.add("active-blur");
        failedFormSent.classList.add("active-box");

        setTimeout(() => {
            formSentBlur.classList.remove("active-blur");
            failedFormSent.classList.remove("active-box");
        }, 2500);
    }
}


/* ######################################## Popup Opening ######################################## */

function failedPopupOpening() {
    if (formSentBlur && failedFormSent) {
        failedRequestTitle.textContent = "Session Expired!";
        failedRequestText.textContent = "Your session has expired. Please log in again.";

        formSentBlur.classList.add("active-blur");
        failedFormSent.classList.add("active-box");

        setTimeout(() => {
            window.location.href = "/WebShop/pages/admin/admin-login.php";
        }, 2000);
    }
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Admin Login Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Form Fields ######################################## */

const username = document.querySelector('input[name="username"]');
const usernameError = document.querySelector(".username-error");

if (username && usernameError) {
    clearErrorOnInput(username, usernameError);
}


const password = document.querySelector('input[name="password"]');
const passwordError = document.querySelector(".password-error");

const openEye = document.querySelector(".fa-eye");
const closedEye = document.querySelector(".fa-eye-slash");

if (password) {
    password.addEventListener("input", function () {
        passwordError.style.display = "none";
        password.classList.remove("error-border");

        if (password.value !== '') {
            openEye.style.color = "black";
            closedEye.style.color = "black";
        } else {
            openEye.style.color = "lightgrey";
            closedEye.style.color = "lightgrey";
        }
    });
}


/* ######################################## Form Submit ######################################## */

const adminLoginForm = document.getElementById("admin-login-form");

function loginSubmit(e) {
    e.preventDefault();
    let isValid = true;

    if (username.value.trim() === "") {
        usernameError.textContent = "Please enter your username!";
        usernameError.style.display = "block";
        username.classList.add("error-border");
        isValid = false;
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "Please enter your password!";
        passwordError.style.display = "block";
        password.classList.add("error-border");
        isValid = false;
    }

    if (isValid) {
        $.ajax({
            url: "/WebShop/api/admin-form-handling.php",
            type: "POST",
            data: {
                "admin-login-button": 1,
                username: username.value,
                password: password.value,
            },
            success: function(response) {
                response = $.trim(response);
                if (response === "Admin") {
                    passwordError.style.display = "none";
                    window.location.href = "/WebShop/pages/admin/admin.php";
                    setTimeout(() => {
                        adminLoginForm.reset();
                        openEye.style.color = 'lightgrey';
                        openEye.style.display = 'block';
                        closedEye.style.color = 'black';
                        closedEye.style.display = 'none'
                    }, 300);
                } else if (response === "Moderator") {
                    passwordError.style.display = "none";
                    window.location.href = "/WebShop/pages/admin/moderator.php";
                     setTimeout(() => {
                        adminLoginForm.reset();
                        openEye.style.color = 'lightgrey';
                        openEye.style.display = 'block';
                        closedEye.style.color = 'black';
                        closedEye.style.display = 'none'
                    }, 300);
                } else {
                    passwordError.textContent = "Invalid username or password. Please try again.";
                    passwordError.style.display = "block";
                }
            },
            error: function() {
                failedRequestPopup();
            },
        });
    }
}

if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", loginSubmit);
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Category Update |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Popup ######################################## */

const categoryUpdateBlur = document.querySelector(".category-update-blur");
const categoryUpdateBox = document.querySelector(".category-update-blur .popup-wrapper");
const categoryUpdateTitle = document.querySelector(".category-update-blur h3");
const categoryUpdateClose = document.querySelector(".category-update-blur .fa-circle-xmark");

function categoryUpdatePopup() {
    $(document)
        .off("click", ".category-update span")
        .on("click", ".category-update span", function (event) {
            event.preventDefault();

            const category = this.dataset.category;

            fetch(`moderator.php?fetch_category=1&category=${category}`)
                .then((res) => res.json())
                .then((data) => {
                    categoryUpdateCategory.value = data.slug;
                    categoryUpdateName.value = data.name;
                    categoryUpdateTitle.textContent = `${data.name}`;
                    categoryUpdateImage.value = data.image;


                    categoryUpdateBlur.classList.add("active-blur");
                    categoryUpdateBox.classList.add("active-box");
                })
            .catch(() => {
                failedPopupOpening();
            });
            
    });

    if (categoryUpdateClose) {
        categoryUpdateClose.addEventListener("click", function () {
            categoryUpdateBox.classList.remove("active-box");
            categoryUpdateBlur.classList.remove("active-blur");
        });
    }
}

if (categoryUpdateBlur) {
    categoryUpdatePopup();
}


/* ######################################## Form Fields ######################################## */

const categoryUpdateCategory = document.querySelector('input[name="category-update-category"]');

const categoryUpdateName = document.querySelector('input[name="category-update-name"]');
const categoryUpdateNameError = document.querySelector('.category-update-name-error');

if (categoryUpdateName && categoryUpdateNameError) {
    clearErrorOnInput(categoryUpdateName, categoryUpdateNameError);
}


const categoryUpdateImage = document.querySelector('select[name="category-update-image"]');
const categoryUpdateImageError = document.querySelector('.category-update-image-error');

if (categoryUpdateImage && categoryUpdateImageError) {
    clearErrorOnInput(categoryUpdateImage, categoryUpdateImageError);
}


/* ######################################## Form Submit ######################################## */

const categoryUpdateForm = document.querySelector("#category-update-form");

function categoryUpdateSubmit(e) {
    e.preventDefault();
    let isValid = true;

    const category = categoryUpdateCategory.value;
    const name = categoryUpdateName.value.trim();
    const image = categoryUpdateImage.value.trim();

    if (name === "") {
        categoryUpdateNameError.textContent = "Please enter the category name!";
        categoryUpdateNameError.style.display = "block";
        categoryUpdateName.classList.add("error-border");
        isValid = false;
    }

    if (image === "") {
        categoryUpdateImageError.textContent = "Please enter the category image name!";
        categoryUpdateImageError.style.display = "block";
        categoryUpdateImage.classList.add("error-border");
        isValid = false;
    }

    if (isValid) {
        $.ajax({
            url: "/WebShop/api/admin-form-handling.php",
            type: "POST",
            data: {
                "category-update-button": 1,
                category: category,
                name: name,
                image: image,
            },
            success: function (response) {
                response = $.trim(response);
                if (sessionExpired(response)) return;
                if (response === "success") {
                    const tableTitle = document.querySelector(`.category-update h3[data-category="${category}"]`);
                    if (tableTitle) tableTitle.textContent = name;

                    categoryUpdateBlur.classList.remove("active-blur");
                    categoryUpdateBox.classList.remove("active-box");
                    setTimeout(() => {
                        categoryUpdateForm.reset();
                        categoryUpdateTitle.textContent = `${name}`;
                    }, 400);
                } else {
                    failedRequestPopup();
                }
            },
            error: function() {
                failedRequestPopup();
            }
        });
    }
}

if (categoryUpdateForm) {
    categoryUpdateForm.addEventListener("submit", categoryUpdateSubmit);
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Product Update |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Popup ######################################## */

const productUpdateBlur = document.querySelector(".product-update-blur");
const productUpdateBox = document.querySelector(".product-update-blur .popup-wrapper");
const productUpdateTitle = document.querySelector(".product-update-blur .popup-wrapper h3");
const productUpdateClose = document.querySelector(".product-update-blur .fa-circle-xmark");

function productUpdatePopup() {
    $(document)
        .off("click", ".product-update-link")
        .on("click", ".product-update-link", function(event) {
            event.preventDefault();

            const category = this.dataset.category;
            const id = this.dataset.id;

            fetch(`moderator.php?fetch_product=1&category=${category}&id=${id}`)
                .then((res) => res.json())
                .then((product) => {
                    productUpdateCategory.value = category;
                    productUpdateID.value = product.id;

                    productUpdateName.value = product.name;
                    productUpdatePrice.value = product.price;
                    productUpdateImage.value = product.image;

                    productUpdateDiscountPrice.value = product.discount_price === null || product.discount_price === "0.00" || product.discount_price === 0 || product.discount_price === "0" ? "" : product.discount_price;
                    productUpdateDiscountPrice.classList.remove("error-border");
                    productUpdateDiscountError.style.display = "none";

                    productUpdateTitle.textContent = `${product.name}`;

                    productUpdateBlur.classList.add("active-blur");
                    productUpdateBox.classList.add("active-box");
                })
            .catch(() => {
                failedPopupOpening();
            });
        });

    if (productUpdateClose) {
        productUpdateClose.addEventListener('click', function() {
            productUpdateBox.classList.remove("active-box");
            productUpdateBlur.classList.remove("active-blur");
        })
    }
}

if (productUpdateBlur) {
    productUpdatePopup();
}


/* ######################################## Form Fields ######################################## */

const productUpdateCategory = document.querySelector('input[name="product-update-category"]');
const productUpdateID = document.querySelector('input[name="product-update-id"]');

const productUpdateName = document.querySelector('input[name="product-update-name"]');
const productUpdateNameError = document.querySelector('.product-update-name-error');

if (productUpdateName && productUpdateNameError) {
    clearErrorOnInput(productUpdateName, productUpdateNameError);
}


const productUpdateImage = document.querySelector('select[name="product-update-image"]');
const productUpdateImageError = document.querySelector('.product-update-image-error');

if (productUpdateImage && productUpdateImageError) {
    clearErrorOnInput(productUpdateImage, productUpdateImageError);
}


const productUpdatePrice = document.querySelector('input[name="product-update-price"]');
const productUpdatePriceError = document.querySelector('.product-update-price-error');

if (productUpdatePrice && productUpdatePriceError) {
    clearErrorOnInput(productUpdatePrice, productUpdatePriceError);
}


const productUpdateDiscountPrice = document.querySelector('input[name="product-update-discount-price"]');
const productUpdateDiscountError = document.querySelector(".product-update-discount-error");

if (productUpdateDiscountPrice && productUpdateDiscountError) {
    clearErrorOnInput(productUpdateDiscountPrice, productUpdateDiscountError);
}


/* ######################################## Form Submit ######################################## */

const productUpdateForm = document.querySelector("#product-update-form");

function productUpdateSubmit(e) {
    e.preventDefault();
    let isValid = true;

    const category = productUpdateCategory.value;
    const id = productUpdateID.value;
    const name = productUpdateName.value.trim();
    const image = productUpdateImage.value.trim();
    const price = toMoneyFixed(productUpdatePrice.value.trim());
    const discountPrice = toMoneyFixed(productUpdateDiscountPrice.value.trim());

    if (name === "") {
        productUpdateNameError.textContent = "Please enter the product name!";
        productUpdateNameError.style.display = "block";
        productUpdateName.classList.add("error-border");
        isValid = false;
    }

    if (image === "") {
        productUpdateImageError.textContent = "Please enter the product image name!";
        productUpdateImageError.style.display = "block";
        productUpdateImage.classList.add("error-border");
        isValid = false;
    }

    if (price === "") {
        productUpdatePriceError.textContent = "Please enter the product price!";
        productUpdatePriceError.style.display = "block";
        productUpdatePrice.classList.add("error-border");
        isValid = false;
    }

    if (discountPrice !== "" && parseFloat(discountPrice) >= parseFloat(price)) {
        productUpdateDiscountError.textContent = "Discount price must be lower than the regular price!";
        productUpdateDiscountError.style.display = "block";
        productUpdateDiscountPrice.classList.add("error-border");
        isValid = false;
    }

    if (isValid) {
        $.ajax({
            url: "/WebShop/api/admin-form-handling.php",
            type: "POST",
            data: {
                "product-update-button": 1,
                category: category,
                id: id,
                name: name,
                image: image,
                price: price,
                discount_price: discountPrice,
            },
            success: function (response) {
                response = $.trim(response);
                if (sessionExpired(response)) return;
                if (response === "success") {
                    const editBtn = document.querySelector(`.product-update-link[data-category="${category}"][data-id="${id}"]`);
                    const row = editBtn ? editBtn.closest("tr") : null;

                    if (row) {
                        row.children[0].textContent = name;
                        row.children[1].textContent = "$" + price;

                        if (discountPrice === "") {
                            row.children[2].innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
                        } else {
                            row.children[2].textContent = "$" + discountPrice;
                        }
                        applyOverflowTitles();
                    }

                    productUpdateBlur.classList.remove("active-blur");
                    productUpdateBox.classList.remove("active-box");
                    setTimeout(() => {
                        productUpdateForm.reset();
                    }, 300);
                } else {
                    failedRequestPopup();
                }
            },
            error: function() {
                failedRequestPopup();
            }
        });
    }
}

if (productUpdateForm) {
    productUpdateForm.addEventListener("submit", productUpdateSubmit);
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Add Product |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Popup ######################################## */

const productAddBlur = document.querySelector(".product-add-blur");
const productAddBox = document.querySelector(".product-add-blur .popup-wrapper");
const productAddTitle = document.querySelector(".product-add-blur .popup-wrapper h3");
const productAddClose = document.querySelector(".product-add-blur .fa-circle-xmark");
const productAddCategory = document.querySelector('input[name="product-add-category"]');

function productAddPopup() {
    $(document)
        .off("click", ".product-add-link")
        .on("click", ".product-add-link", function(event) {
            event.preventDefault();

            if (productAddForm) productAddForm.reset();
            productAddImage.style.color = "#cbcaca";
            productAddImage.parentElement.querySelector('.fa-caret-down').style.color = "#cbcaca";

            const category = this.dataset.category;
            productAddCategory.value = category;

            productAddBlur.classList.add("active-blur");
            productAddBox.classList.add("active-box");
    });

    if (productAddClose) {
        productAddClose.addEventListener("click", function() {
            productAddBox.classList.remove("active-box");
            productAddBlur.classList.remove("active-blur");
        });
    }
}

if (productAddBlur) {
    productAddPopup();
}


/* ######################################## Form Fields ######################################## */

const productAddName = document.querySelector('input[name="product-add-name"]');
const productAddNameError = document.querySelector(".product-add-name-error");

if (productAddName && productAddNameError) {
    clearErrorOnInput(productAddName, productAddNameError);
}


const productAddImage = document.querySelector('select[name="product-add-image"]');
const productAddImageError = document.querySelector(".product-add-image-error");

if (productAddImage && productAddImageError) {
    clearErrorOnInput(productAddImage, productAddImageError);
}


const productAddPrice = document.querySelector('input[name="product-add-price"]');
const productAddPriceError = document.querySelector(".product-add-price-error");

if (productAddPrice && productAddPriceError) {
    clearErrorOnInput(productAddPrice, productAddPriceError);
}

const productAddDiscountPrice = document.querySelector('input[name="product-add-discount-price"]');
const productAddDiscountError = document.querySelector(".product-add-discount-error");

if (productAddDiscountPrice && productAddDiscountError) {
    clearErrorOnInput(productAddDiscountPrice, productAddDiscountError);
}


/* ######################################## Prices Input ######################################## */

function sanitizeMoneyInput(raw) {
    let s = (raw || "").toString();

    s = s.replace(/[^\d.,]/g, "");
    s = s.replace(/,/g, ".");

    const firstDot = s.indexOf(".");
    if (firstDot !== -1) {
        s = s.slice(0, firstDot + 1) + s.slice(firstDot + 1).replace(/\./g, "");
    }

    const parts = s.split(".");
    parts[0] = parts[0].slice(0, 4);

    if (parts.length > 1) {
        parts[1] = parts[1].slice(0, 2);
        s = parts[0] + "." + parts[1];
    } else {
        s = parts[0];
    }

    const n = parseFloat(s);
    if (!isNaN(n) && n > 9999.99) s = "9999.99";

    return s;
}

function toMoneyFixed(raw) {
    const cleaned = sanitizeMoneyInput(raw);

    if (cleaned === "") return "";

    let n = parseFloat(cleaned);
    if (isNaN(n)) n = 0;

    if (n > 9999.99) n = 9999.99;
    if (n < 0) n = 0;

    return n.toFixed(2);
}

function attachMoneyGuard(inputEl) {
    if (!inputEl) return;

    inputEl.addEventListener("beforeinput", (e) => {
        if (e.inputType && e.inputType.startsWith("insert")) {
            const allowed = /^[0-9.,]+$/;
            if (e.data && !allowed.test(e.data)) {
                e.preventDefault();
            }
        }
    });

    inputEl.addEventListener("input", () => {
        const cleaned = sanitizeMoneyInput(inputEl.value);
        if (inputEl.value !== cleaned) inputEl.value = cleaned;
    });

    inputEl.addEventListener("blur", () => {
        const fixed = toMoneyFixed(inputEl.value);
        inputEl.value = fixed;
    });
}

attachMoneyGuard(productAddPrice);
attachMoneyGuard(productAddDiscountPrice);

attachMoneyGuard(productUpdatePrice);
attachMoneyGuard(productUpdateDiscountPrice);


/* ######################################## Form Submit ######################################## */

const productAddForm = document.querySelector("#product-add-form");

function productAddSubmit(e) {
    e.preventDefault();
    let isValid = true;

    const category = productAddCategory.value;
    const name = productAddName.value.trim();
    const image = productAddImage.value.trim();
    const price = toMoneyFixed(productAddPrice.value.trim());
    const discountPrice = toMoneyFixed(productAddDiscountPrice.value.trim());

    if (name === "") {
        productAddNameError.textContent = "Please enter a product name!";
        productAddNameError.style.display = "block";
        productAddName.classList.add("error-border");
        isValid = false;
    }

    if (image === "") {
        productAddImageError.textContent = "Please enter the product image name!";
        productAddImageError.style.display = "block";
        productAddImage.classList.add("error-border");
        isValid = false;
    }

    if (price === "") {
        productAddPriceError.textContent = "Please enter a product price!";
        productAddPriceError.style.display = "block";
        productAddPrice.classList.add("error-border");
        isValid = false;
    }

    if (discountPrice !== "" && parseFloat(discountPrice) >= parseFloat(price)) {
        productAddDiscountError.textContent = "Discount price must be lower than the regular price!";
        productAddDiscountError.style.display = "block";
        productAddDiscountPrice.classList.add("error-border");
        isValid = false;
    }

    if (isValid) {
        $.ajax({
            url: "/WebShop/api/admin-form-handling.php",
            type: "POST",
            data: {
                "product-add-button": 1,
                category: category,
                name: name,
                image: image,
                price: price,
                discount_price: discountPrice,
            },
            success: function(response) {
                if (sessionExpired(response)) return;

                const newId = $.trim(response);
                if (newId === "error" || newId === "") {
                    failedRequestPopup();
                    return;
                }

                const table = document.querySelector(`.product-add-link[data-category="${category}"]`).closest("table");
                const addRow = table.querySelector(".add-new-row");
                const tr = document.createElement("tr");

                tr.innerHTML = `
                    <td>${name}</td>
                    <td>$${price}</td>
                    <td> ${discountPrice === "" ? '<i class="fa-solid fa-circle-xmark"></i>' : "$" + discountPrice}</td>
                    <td><a href="#" class="product-image-link" data-category="${category}" data-id="${newId}"><i class="fa-solid fa-image"></i></a></td>
                    <td><a href="#" class="product-update-link" data-category="${category}" data-id="${newId}"><i class="fa-solid fa-pen-to-square"></i></a></td>
                    <td><a href="#" class="product-delete-link" data-category="${category}" data-id="${newId}"><i class="fa-regular fa-trash-can"></i></a></td>
                `;

                const emptyRow = table.querySelector(".empty-row");
                if (emptyRow) {emptyRow.remove();}

                table.tBodies[0].insertBefore(tr, addRow);

                productAddBlur.classList.remove("active-blur");
                productAddBox.classList.remove("active-box");
                setTimeout(() => {
                    productAddForm.reset();
                }, 300);
            },
            error: function() {
                failedRequestPopup();
            }
        });
    }
}

if (productAddForm) {
    productAddForm.addEventListener("submit", productAddSubmit);
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Blog Update |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Popup ######################################## */

const blogUpdateBlur = document.querySelector(".blog-update-blur");
const blogUpdateBox = document.querySelector(".blog-update-blur .popup-wrapper");
const blogUpdateBoxTitle = document.querySelector(".blog-update-blur .popup-wrapper h3");
const blogUpdateClose = document.querySelector(".blog-update-blur .fa-circle-xmark");

function blogUpdatePopup() {
    $(document)
        .off("click", ".blog-update-link")
        .on("click", ".blog-update-link", function(event) {
            event.preventDefault();

            const id = this.dataset.id;

            fetch(`moderator.php?fetch_blog=1&id=${id}`)
                .then((res) => res.json())
                .then((blog) => {
                    blogUpdateID.value = blog.id;

                    blogUpdateTitle.value = blog.title;
                    blogUpdateExcerpt.value = blog.excerpt
                    tinymce.get("blog-update-content").setContent(blog.content);
                    blogUpdateImage.value = blog.image;

                    blogUpdateBoxTitle.textContent = `${blog.title}`;

                    blogUpdateBlur.classList.add("active-blur");
                    blogUpdateBox.classList.add("active-box");
                })
            .catch(() => {
                failedPopupOpening();
            });
        });

    if (blogUpdateClose) {
        blogUpdateClose.addEventListener('click', function() {
            blogUpdateBox.classList.remove("active-box");
            blogUpdateBlur.classList.remove("active-blur");
        })
    }
}

if (blogUpdateBlur) {
    blogUpdatePopup();
}


/* ######################################## Form Fields ######################################## */

const blogUpdateID = document.querySelector('input[name="blog-update-id"]');

const blogUpdateTitle = document.querySelector('input[name="blog-update-title"]');
const blogUpdateTitleError = document.querySelector('.blog-update-title-error');

if (blogUpdateTitle && blogUpdateTitleError) {
    clearErrorOnInput(blogUpdateTitle, blogUpdateTitleError);
}


const blogUpdateExcerpt = document.querySelector('input[name="blog-update-excerpt"]');
const blogUpdateExcerptError = document.querySelector('.blog-update-excerpt-error');

if (blogUpdateExcerpt && blogUpdateExcerptError) {
    clearErrorOnInput(blogUpdateExcerpt, blogUpdateExcerptError);
}


const blogUpdateContent = document.querySelector('textarea[name="blog-update-content"]');
const blogUpdateContentError = document.querySelector('.blog-update-content-error');


const blogUpdateImage = document.querySelector('select[name="blog-update-image"]');
const blogUpdateImageError = document.querySelector('.blog-update-image-error');

if (blogUpdateImage && blogUpdateImageError) {
    clearErrorOnInput(blogUpdateImage, blogUpdateImageError);
}


/* ######################################## Form Submit ######################################## */

const blogUpdateForm = document.querySelector("#blog-update-form");

function blogUpdateSubmit(e) {
    e.preventDefault();
    let isValid = true;

    const id = blogUpdateID.value;
    const title = blogUpdateTitle.value.trim();
    const excerpt = blogUpdateExcerpt.value.trim();
    const content = tinymce.get("blog-update-content").getContent().trim();
    const image = blogUpdateImage.value.trim();

    if (title === "") {
        blogUpdateTitleError.textContent = "Please enter the blog title!";
        blogUpdateTitleError.style.display = "block";
        blogUpdateTitle.classList.add("error-border");
        isValid = false;
    }

    if (excerpt === "") {
        blogUpdateExcerptError.textContent = "Please enter the blog excerpt!";
        blogUpdateExcerptError.style.display = "block";
        blogUpdateExcerpt.classList.add("error-border");
        isValid = false;
    }

    if (content === "") {
        blogUpdateContentError.textContent = "Please enter the content of the blog!";
        blogUpdateContentError.style.display = "block";
        tinymce.get("blog-update-content").getContainer().classList.add("error-border");
        isValid = false;
    }

    if (image === "") {
        blogUpdateImageError.textContent = "Please enter the blog image name!";
        blogUpdateImageError.style.display = "block";
        blogUpdateImage.classList.add("error-border");
        isValid = false;
    }

    if (isValid) {
        $.ajax({
            url: "/WebShop/api/admin-form-handling.php",
            type: "POST",
            data: {
                "blog-update-button": 1,
                id: id,
                title: title,
                content: content,
                excerpt: excerpt,
                image: image,
            },
            success: function(response) {
                response = $.trim(response);
                if (sessionExpired(response)) return;
                if (response === "success") {
                    const editBtn = document.querySelector(`.blog-update-link[data-id="${id}"]`);
                    const row = editBtn ? editBtn.closest("tr") : null;

                    if (row) {
                        row.children[0].textContent = title;
                        row.children[1].textContent = excerpt;
                        applyOverflowTitles();
                    }

                    blogUpdateBlur.classList.remove("active-blur");
                    blogUpdateBox.classList.remove("active-box");
                    setTimeout(() => {
                        blogUpdateForm.reset();
                        tinymce.get("blog-update-content").setContent("");
                    }, 300);
                } else {
                    failedRequestPopup();
                }
            },
            error: function() {
                failedRequestPopup();
            }
        });
    }
}

if (blogUpdateForm) {
    blogUpdateForm.addEventListener("submit", blogUpdateSubmit);
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Add Blog |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Popup ######################################## */

const blogAddBlur = document.querySelector(".blog-add-blur");
const blogAddBox = document.querySelector(".blog-add-blur .popup-wrapper");
const blogAddBoxTitle = document.querySelector(".blog-add-blur .popup-wrapper h3");
const blogAddClose = document.querySelector(".blog-add-blur .fa-circle-xmark");

function blogAddPopup() {
    $(document)
        .off("click", ".blog-add-link")
        .on("click", ".blog-add-link", function (event) {
            event.preventDefault();

            if (blogAddForm) blogAddForm.reset();
            blogAddImage.style.color = "#cbcaca";
            blogAddImage.parentElement.querySelector('.fa-caret-down').style.color = "#cbcaca";

            blogAddBlur.classList.add("active-blur");
            blogAddBox.classList.add("active-box");

            blogAddForm.scrollTop = 0;
    });

    if (blogAddClose) {
        blogAddClose.addEventListener("click", function() {
            blogAddBox.classList.remove("active-box");
            blogAddBlur.classList.remove("active-blur");
        });
    }
}

if (blogAddBlur) {
    blogAddPopup();
}


/* ######################################## Form Fields ######################################## */

const blogAddTitle = document.querySelector('input[name="blog-add-title"]');
const blogAddTitleError = document.querySelector(".blog-add-title-error");

if (blogAddTitle && blogAddTitleError) {
    clearErrorOnInput(blogAddTitle, blogAddTitleError);
}


const blogAddExcerpt = document.querySelector('input[name="blog-add-excerpt"]');
const blogAddExcerptError = document.querySelector('.blog-add-excerpt-error');

if (blogAddExcerpt && blogAddExcerptError) {
    clearErrorOnInput(blogAddExcerpt, blogAddExcerptError);
}


const blogAddContent = document.querySelector('textarea[name="blog-add-content"]');
const blogAddContentError = document.querySelector(".blog-add-content-error");


const blogAddImage = document.querySelector('select[name="blog-add-image"]');
const blogAddImageError = document.querySelector(".blog-add-image-error");

if (blogAddImage && blogAddImageError) {
    clearErrorOnInput(blogAddImage, blogAddImageError);
}


/* ######################################## Form Submit ######################################## */

const blogAddForm = document.querySelector("#blog-add-form");

function blogAddSubmit(e) {
    e.preventDefault();
    let isValid = true;

    const title = blogAddTitle.value.trim();
    const excerpt = blogAddExcerpt.value.trim();
    const content = tinymce.get("blog-add-content").getContent().trim();
    const image = blogAddImage.value.trim();

    if (title === "") {
        blogAddTitleError.textContent = "Please enter the blog title!";
        blogAddTitleError.style.display = "block";
        blogAddTitle.classList.add("error-border");
        isValid = false;
    }

    if (excerpt === "") {
        blogAddExcerptError.textContent = "Please enter the blog excerpt!";
        blogAddExcerptError.style.display = "block";
        blogAddExcerpt.classList.add("error-border");
        isValid = false;
    }

    if (content === "") {
        blogAddContentError.textContent = "Please enter the content of the blog!";
        blogAddContentError.style.display = "block";
        tinymce.get("blog-add-content").getContainer().classList.add("error-border");
        isValid = false;
    }

    if (image === "") {
        blogAddImageError.textContent = "Please enter the blog image name!";
        blogAddImageError.style.display = "block";
        blogAddImage.classList.add("error-border");
        isValid = false;
    }

    if (isValid) {
        $.ajax({
            url: "/WebShop/api/admin-form-handling.php",
            type: "POST",
            data: {
                "blog-add-button": 1,
                title: title,
                content: content,
                excerpt: excerpt,
                image: image,
            },
            success: function(response) {
                if (sessionExpired(response)) return;

                const newId = $.trim(response);
                if (newId === "error" || newId === "") {
                    failedRequestPopup();
                    return;
                }

                const table = document.querySelector(`.blog-add-link`).closest("table");
                const addRow = table.querySelector(".add-new-row");
                const tr = document.createElement("tr");

                const today = new Date();
                const month = String(today.getMonth() + 1).padStart(2, "0");
                const day = String(today.getDate()).padStart(2, "0");
                const year = today.getFullYear();
                const formattedDate = `${month}.${day}.${year}`;

                tr.innerHTML = `
                    <td class="long-content">${title}</td>
                    <td class="long-content">${excerpt}</td>
                    <td><a href="#" class="blog-content-link" data-id="${newId}"><i class="fa-solid fa-file-lines"></i></a></td>
                    <td><a href="#" class="blog-image-link" data-id="${newId}"><i class="fa-solid fa-image"></i></a></td>
                    <td>${formattedDate}</td>
                    <td><a href="#" class="blog-update-link" data-id="${newId}"><i class="fa-solid fa-pen-to-square"></i></a></td>
                    <td><a href="#" class="blog-delete-link" data-id="${newId}"><i class="fa-regular fa-trash-can"></i></a></td>
                `;

                const emptyRow = table.querySelector(".empty-row");
                if (emptyRow) {emptyRow.remove();}

                table.tBodies[0].insertBefore(tr, addRow);

                blogAddBlur.classList.remove("active-blur");
                blogAddBox.classList.remove("active-box");
                setTimeout(() => {
                    blogAddForm.reset();
                    tinymce.get("blog-add-content").setContent("");
                }, 300);
            },
            error: function() {
                failedRequestPopup();
            }
        });
    }
}

if (blogAddForm) {
    blogAddForm.addEventListener("submit", blogAddSubmit);
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Confirmation Popup |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Popup ######################################## */

const tableResetButtons = document.querySelectorAll(".table-title-wrapper span");
const productDeleteLinks = document.querySelectorAll(".product-delete-link");
const blogDeleteLinks = document.querySelectorAll(".blog-delete-link");

const confirmationBlur = document.querySelector(".confirmation-blur");
const confirmationWrapper = document.querySelector(".confirmation-wrapper");
const confirmationClose = document.querySelector(".confirmation-blur .fa-circle-xmark");
const confirmationText = document.querySelector(".confirmation-blur p");
const confirmationCancel = document.querySelector(".confirmation-cancel");
const confirmationConfirm = document.querySelector(".confirmation-confirm");

let confirmationAction = null;

let tableForReset = null;
let tableWrapperForReset = null;
let tableResetButton = null;

let pendingProductCategory = null;
let pendingProductId = null;
let pendingProductRow = null;

let pendingBlogId = null;
let pendingBlogRow = null;

function openConfirmationPopup() {
    confirmationBlur.classList.add("active-blur");
    confirmationWrapper.classList.add("active-box");
}

function closeConfirmationPopup() {
    confirmationBlur.classList.remove("active-blur");
    confirmationWrapper.classList.remove("active-box");

    confirmationAction = null;

    tableForReset = null;
    tableWrapperForReset = null;
    tableResetButton = null;

    pendingProductCategory = null;
    pendingProductId = null;
    pendingProductRow = null;

    let pendingBlogId = null;
    let pendingBlogRow = null;
}

if (confirmationClose) {
    confirmationClose.addEventListener("click", closeConfirmationPopup);
}

if (confirmationCancel) {
    confirmationCancel.addEventListener("click", closeConfirmationPopup);
}


/* ######################################## Form Submit ######################################## */


function confirmationSubmit() {
    $(document)
        .off("click", ".confirmation-confirm")
        .on("click", ".confirmation-confirm", function() {
            if (confirmationAction === "table") {
                $.ajax({
                    url: "/WebShop/api/admin-form-handling.php",
                    type: "POST",
                    data: {
                        "confirmation-reset": 1,
                        table: tableForReset
                    },
                    success: function(response) {
                        if (sessionExpired(response)) return;

                        if (response === "success") {
                            const currentTable = tableForReset;
                            const currentWrapper = tableWrapperForReset;
                            const currentButton = tableResetButton;

                            closeConfirmationPopup();

                            currentButton.style.display = "none";

                            const loadRowsControls = currentWrapper.querySelectorAll(".load-rows-wrapper");
                            loadRowsControls.forEach((controls) => controls.remove());

                            const productCategoriesButton = document.querySelector('[data-table="product_categories"]');
                            const productCategoriesTable = document.querySelector(".product-categories");
                            const boroughsButton = document.querySelector('[data-table="boroughs"]');
                            const boroughsTable = document.querySelector(".boroughs-stats");
                            const productStatsButton = document.querySelector('[data-table="product_stats"]');
                            const productStatsTable = document.querySelector(".product-stats");

                            const totalRevenue = document.getElementById("total-revenue");
                            const averageOrderValue = document.getElementById("average-order-value");
                            const totalOrders = document.getElementById("total-orders");
                            const totalProductsSold = document.getElementById("total-products-sold");
                            const averageRating = document.getElementById("average-rating");

                            const rows = currentWrapper.querySelectorAll("table tr");

                            if (currentTable === "contact_requests" || currentTable === "career_applications" || currentTable === "orders" || currentTable === "reviews") {
                                rows.forEach((row, index) => {
                                    if (index !== 0) {
                                        row.remove();
                                    }
                                });

                                if (currentTable === "reviews" && averageRating) {
                                    averageRating.textContent = "0";
                                }

                                if (currentTable === "orders") {
                                    if (productCategoriesButton) productCategoriesButton.style.display = "none";
                                    if (productStatsButton) productStatsButton.style.display = "none";
                                    if (boroughsButton) boroughsButton.style.display = "none";

                                    if (totalOrders) totalOrders.textContent = "0";
                                    if (averageOrderValue) averageOrderValue.textContent = "$0";
                                    if (totalRevenue) totalRevenue.textContent = "$0";
                                    if (totalProductsSold) totalProductsSold.textContent = "0";

                                    if (boroughsTable) {
                                        boroughsTable.querySelectorAll("tr").forEach((row, index) => {
                                            if (index !== 0) {
                                                const cells = row.querySelectorAll("th, td");
                                                if (cells.length > 1) cells[1].textContent = "0";
                                            }
                                        });
                                    }

                                    if (productStatsTable) {
                                        productStatsTable.querySelectorAll("tr").forEach((row, index) => {
                                            if (index !== 0) {
                                                const cells = row.querySelectorAll("th, td");
                                                if (cells.length > 1) cells[1].textContent = "0";
                                            }
                                        });
                                    }

                                    if (productCategoriesTable) {
                                        productCategoriesTable.querySelectorAll("tr").forEach((row, index) => {
                                            if (index !== 0) {
                                                const cells = row.querySelectorAll("th, td");
                                                if (cells.length > 1) cells[1].textContent = "0";
                                            }
                                        });
                                    }
                                }

                                const tbody = currentWrapper.querySelector("table tbody") || currentWrapper.querySelector("table");
                                const headerCells = currentWrapper.querySelectorAll("tr:first-child th").length;

                                const emptyRow = document.createElement("tr");
                                emptyRow.className = "empty-row";
                                emptyRow.innerHTML = `<td colspan="${headerCells}">No data available</td>`;
                                tbody.appendChild(emptyRow);
                            }

                            if (currentTable === "boroughs") {
                                rows.forEach((row, index) => {
                                    if (index !== 0) {
                                        const cells = row.querySelectorAll("th, td");
                                        if (cells.length > 1) cells[1].textContent = "0";
                                    }
                                });
                            }

                            if (currentTable === "product_stats") {
                                if (productStatsButton) productStatsButton.style.display = "none";
                                if (totalProductsSold) totalProductsSold.textContent = "0";

                                if (productStatsTable) {
                                    productStatsTable.querySelectorAll("tr").forEach((row, index) => {
                                        if (index !== 0) {
                                            const cells = row.querySelectorAll("th, td");
                                            if (cells.length > 1) cells[1].textContent = "0";
                                        }
                                    });
                                }
                            }

                            if (currentTable === "product_categories") {
                                if (productCategoriesButton) productCategoriesButton.style.display = "none";

                                if (productCategoriesTable) {
                                    productCategoriesTable.querySelectorAll("tr").forEach((row, index) => {
                                        if (index !== 0) {
                                            const cells = row.querySelectorAll("th, td");
                                            if (cells.length > 1) cells[1].textContent = "0";
                                        }
                                    });
                                }
                            }
                        } else {
                            failedRequestPopup();
                        }
                    },
                    error: function() {
                        failedRequestPopup();
                    }
                });
            }

            if (confirmationAction === "product-delete") {
                if (!pendingProductId || !pendingProductCategory) return;

                $.ajax({
                    url: "/WebShop/api/admin-form-handling.php",
                    type: "POST",
                    data: {
                        "product-delete-button": 1,
                        category: pendingProductCategory,
                        id: pendingProductId
                    },
                    success: function(response) {
                        if (sessionExpired(response)) return;

                        if ($.trim(response) === "success") {
                            if (pendingProductRow) {
                                const tbody = pendingProductRow.parentElement;
                                pendingProductRow.remove();
                                const remainingRows = tbody.querySelectorAll("tr:not(.add-new-row):not(.empty-row)");

                                if (remainingRows.length === 1) {
                                    const addNewRow = tbody.querySelector(".add-new-row");
                                    const headerCells = tbody.querySelector("tr").children.length;

                                    const emptyRow = document.createElement("tr");
                                    emptyRow.className = "empty-row";
                                    emptyRow.innerHTML = `<td colspan="${headerCells}">No data available</td>`;

                                    addNewRow.before(emptyRow);
                                }
                            }

                            closeConfirmationPopup();
                        } else {
                            failedRequestPopup();
                        }
                    },
                    error: function() {
                        failedRequestPopup();
                    }
                });
            }

            if (confirmationAction === "blog-delete") {
                if (!pendingBlogId) return;

                $.ajax({
                    url: "/WebShop/api/admin-form-handling.php",
                    type: "POST",
                    data: {
                        "blog-delete-button": 1,
                        id: pendingBlogId
                    },
                    success: function(response) {
                        if (sessionExpired(response)) return;

                        if ($.trim(response) === "success") {
                            if (pendingBlogRow) {
                                const tbody = pendingBlogRow.parentElement;
                                pendingBlogRow.remove();
                                const remainingRows = tbody.querySelectorAll("tr:not(.add-new-row):not(.empty-row)");

                                if (remainingRows.length === 1) {
                                    const addNewRow = tbody.querySelector(".add-new-row");
                                    const headerCells = tbody.querySelector("tr").children.length;

                                    const emptyRow = document.createElement("tr");
                                    emptyRow.className = "empty-row";
                                    emptyRow.innerHTML = `<td colspan="${headerCells}">No data available</td>`;

                                    addNewRow.before(emptyRow);
                                }
                            }

                            closeConfirmationPopup();
                        } else {
                            failedRequestPopup();
                        }
                    },
                    error: function() {
                        failedRequestPopup();
                    }
                });
            }
        });
}

if (confirmationConfirm) {
    confirmationSubmit();
}


/* ######################################## Product Delete ######################################## */

$(document).on("click", ".product-delete-link", function(e) {
    e.preventDefault();

    confirmationAction = "product-delete";

    pendingProductCategory = this.dataset.category;
    pendingProductId = this.dataset.id;
    pendingProductRow = this.closest("tr");

    confirmationText.textContent = "This action will permanently delete this product. This cannot be undone.";
    confirmationConfirm.textContent = "Delete";

    openConfirmationPopup();
});


/* ######################################## Blog Delete ######################################## */

$(document).on("click", ".blog-delete-link", function(e) {
    e.preventDefault();

    confirmationAction = "blog-delete";

    pendingBlogId = this.dataset.id;
    pendingBlogRow = this.closest("tr");

    confirmationText.textContent = "This action will permanently delete this blog. This cannot be undone.";
    confirmationConfirm.textContent = "Delete";

    openConfirmationPopup();
});


/* ######################################## Table Reset ######################################## */

if (tableResetButtons.length > 0) {
    tableResetButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const table = this.dataset.table;
            const action = this.dataset.action;

            confirmationAction = "table";
            tableForReset = table;
            tableWrapperForReset = this.closest(".table-action-wrapper");
            tableResetButton = this;

            if (action === "clear") {
                if (table === "orders" || table === "reviews") {
                    confirmationText.textContent = "This will permanently delete all orders and reset all related analytics. This cannot be undone!";
                } else {
                    confirmationText.textContent = "This will permanently delete all records from this table. This action cannot be undone!";
                }

                confirmationConfirm.textContent = "Clear";
            }

            if (action === "reset") {
                if (table === "product_stats" || table === "product_categories") {
                    confirmationText.textContent = "This will reset all values in this table to 0 and reset all related analytics. This action cannot be undone!";
                } else {
                    confirmationText.textContent = "This will reset all values in this table to 0. This action cannot be undone!";
                }

                confirmationConfirm.textContent = "Reset";
            }

            openConfirmationPopup();
        });
    });
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Products Images Upload |||||||||||||||||||||||||||||||||||||||||||||||||| */

const productsImagesWrapper = document.querySelector("#products-images-form .file-wrapper");
const productsImagesInput = document.querySelector("#products-images-form input");
const productsImagesLabel = document.querySelector("#products-images-form label");
const productsImagesContent = document.querySelector("#products-images-form .upload-content");
const productsImagesSuccess = document.querySelector("#products-images-form .upload-success");

if (productsImagesWrapper && productsImagesInput) {
    productsImagesWrapper.addEventListener("click", () => productsImagesInput.click());

    productsImagesInput.addEventListener("change", function() {
        if (!this.files.length) return;

        const formData = new FormData();
        formData.append("auto-upload", "1");

        for (const file of this.files) {
            formData.append("products-images[]", file);
        }

        fetch("/WebShop/api/admin-form-handling.php", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.text())
            .then((response) => {
                if (sessionExpired(response)) return;

                if ($.trim(response) === "success") {
                    productsImagesContent.classList.add("file-uploaded1");
                    productsImagesSuccess.classList.add("file-uploaded2");
                    productsImagesWrapper.classList.add("file-uploading");
                    productsImagesLabel.classList.add("file-uploading");
                    setTimeout(() => {
                        productsImagesContent.classList.remove("file-uploaded1");
                        productsImagesSuccess.classList.remove("file-uploaded2");
                        productsImagesWrapper.classList.remove("file-uploading");
                        productsImagesLabel.classList.remove("file-uploading");
                    }, 4100);
                } else {
                    failedRequestPopup();
                }
            })
        .catch(() => {
            failedPopupOpening();
        });
    });
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Blog Images Upload |||||||||||||||||||||||||||||||||||||||||||||||||| */

const blogImagesWrapper = document.querySelector("#blog-images-form .file-wrapper");
const blogImagesInput = document.querySelector("#blog-images-form input");
const blogImagesLabel = document.querySelector("#blog-images-form label");
const blogImagesContent = document.querySelector("#blog-images-form .upload-content");
const blogImagesSuccess = document.querySelector("#blog-images-form .upload-success");

if (blogImagesWrapper && blogImagesInput) {
    blogImagesWrapper.addEventListener("click", () => blogImagesInput.click());

    blogImagesInput.addEventListener("change", function() {
        if (!this.files.length) return;

        const formData = new FormData();
        formData.append("auto-upload", "1");

        for (const file of this.files) {
            formData.append("blog-images[]", file);
        }

        fetch("/WebShop/api/admin-form-handling.php", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.text())
            .then((response) => {
                if (sessionExpired(response)) return;

                if ($.trim(response) === "success") {
                    blogImagesContent.classList.add("file-uploaded1");
                    blogImagesSuccess.classList.add("file-uploaded2");
                    blogImagesWrapper.classList.add("file-uploading");
                    blogImagesLabel.classList.add("file-uploading");
                    setTimeout(() => {
                        blogImagesContent.classList.remove("file-uploaded1");
                        blogImagesSuccess.classList.remove("file-uploaded2");
                        blogImagesWrapper.classList.remove("file-uploading");
                        blogImagesLabel.classList.remove("file-uploading");
                    }, 4100);
                } else {
                    failedRequestPopup();
                }
            })
        .catch(() => {
            failedPopupOpening();
        });
    });
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||| Functions |||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* |||||||||||||||||||||||||||||||||||||||||||||||||| Image Popups |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Preload Images ######################################## */

const imagePopupCache = new Map();

function preloadPopupImage(src) {
    if (imagePopupCache.has(src)) {
        return imagePopupCache.get(src);
    }

    const imagePromise = new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = async () => {
            if (image.decode) {
                await image.decode().catch(() => {});
            }

            resolve(src);
        };

        image.onerror = () => reject(new Error("Could not load popup image"));
        image.src = src;
    });

    imagePopupCache.set(src, imagePromise);
    imagePromise.catch(() => imagePopupCache.delete(src));
    return imagePromise;
}


/* ######################################## Product Image ######################################## */

const productImageBlur = document.querySelector(".product-image-blur");
const productImageBox = document.querySelector(".product-image-blur .popup-wrapper");
const productImage = document.querySelector(".product-image-blur .popup-wrapper div");
const productImageTitle = document.querySelector(".product-image-blur .popup-wrapper h3");
const productImageClose = document.querySelector(".product-image-blur .fa-circle-xmark");

function fetchProductPopupData(category, id) {
    const cacheKey = `product:${category}:${id}`;

    if (imagePopupCache.has(cacheKey)) {
        return imagePopupCache.get(cacheKey);
    }

    const productPromise = fetch(`moderator.php?fetch_product=1&category=${category}&id=${id}`)
        .then((res) => {
            if (!res.ok) throw new Error("Could not load product");
            return res.json();
        })
        .then(async (product) => ({
            product,
            imagePath: await preloadPopupImage(`/WebShop/assets/images/products/${product.image}`),
        }));

    imagePopupCache.set(cacheKey, productPromise);
    productPromise.catch(() => imagePopupCache.delete(cacheKey));
    return productPromise;
}

function productImagePopup() {
    $(document)
        .off("click", ".product-image-link")
        .on("click", ".product-image-link", function(event) {
            event.preventDefault();

            const category = this.dataset.category;
            const id = this.dataset.id;

            fetchProductPopupData(category, id)
                .then(({ product, imagePath }) => {
                    productImageTitle.textContent = product.image;
                    productImage.style.backgroundImage = `url('${imagePath}')`;

                    productImageBlur.classList.add("active-blur");
                    productImageBox.classList.add("active-box");
                })
            .catch(() => {
                failedPopupOpening();
            });
        });

    $(document)
        .off("mouseenter focusin", ".product-image-link")
        .on("mouseenter focusin", ".product-image-link", function() {
            fetchProductPopupData(this.dataset.category, this.dataset.id).catch(() => {});
        });

    if (productImageClose) {
        productImageClose.addEventListener('click', function() {
            productImageBox.classList.remove("active-box");
            productImageBlur.classList.remove("active-blur");
        })
    }
}

if (productImageBlur) {
    productImagePopup();
}


/* ######################################## Blog Image ######################################## */

const blogImageBlur = document.querySelector(".blog-image-blur");
const blogImageBox = document.querySelector(".blog-image-blur .popup-wrapper");
const blogImage = document.querySelector(".blog-image-blur .popup-wrapper div:last-child");
const blogImageTitle = document.querySelector(".blog-image-blur .popup-wrapper h3");
const blogImageClose = document.querySelector(".blog-image-blur .fa-circle-xmark");

function fetchBlogPopupData(id) {
    const cacheKey = `blog:${id}`;

    if (imagePopupCache.has(cacheKey)) {
        return imagePopupCache.get(cacheKey);
    }

    const blogPromise = fetch(`moderator.php?fetch_blog=1&id=${id}`)
        .then((res) => {
            if (!res.ok) throw new Error("Could not load blog");
            return res.json();
        })
        .then(async (blog) => ({
            blog,
            imagePath: await preloadPopupImage(`/WebShop/assets/images/blog/${blog.image}`),
        }));

    imagePopupCache.set(cacheKey, blogPromise);
    blogPromise.catch(() => imagePopupCache.delete(cacheKey));
    return blogPromise;
}

function blogImagePopup() {
    $(document)
        .off("click", ".blog-image-link")
        .on("click", ".blog-image-link", function(event) {
            event.preventDefault();

            const id = this.dataset.id;

            fetchBlogPopupData(id)
                .then(({ blog, imagePath }) => {
                    blogImageTitle.textContent = blog.image;
                    blogImage.style.backgroundImage = `url('${imagePath}')`;

                    blogImageBlur.classList.add("active-blur");
                    blogImageBox.classList.add("active-box");
                })
            .catch(() => {
                failedPopupOpening();
            });
        });

    $(document)
        .off("mouseenter focusin", ".blog-image-link")
        .on("mouseenter focusin", ".blog-image-link", function() {
            fetchBlogPopupData(this.dataset.id).catch(() => {});
        });

    if (blogImageClose) {
        blogImageClose.addEventListener('click', function() {
            blogImageBox.classList.remove("active-box");
            blogImageBlur.classList.remove("active-blur");
        })
    }
}

if (blogImageBlur) {
    blogImagePopup();
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Message Popup |||||||||||||||||||||||||||||||||||||||||||||||||| */

const messageBlur = document.querySelector(".message-blur");
const messageBox = document.querySelector(".message-blur .popup-wrapper");
const messageTitle = document.querySelector(".message-blur .popup-wrapper h3");
const messageScrollWrapper = document.querySelector(".message-blur .popup-wrapper div");
const messageContent = document.querySelector(".message-blur .popup-wrapper div p");
const messageClose = document.querySelector(".message-blur .fa-circle-xmark");

function messagePopup() {
    $(document)
        .off("click", ".fetch-message")
        .on("click", ".fetch-message", function(event) {
            event.preventDefault();

            const careerId = this.getAttribute("data-career-id");
            const contactId = this.getAttribute("data-contact-id");
            const reviewId = this.getAttribute("data-review-id");
            const orderId = this.getAttribute("data-order-id");

            let url = "admin.php?fetch_message=1";

            if (careerId) {
                url += `&career_id=${careerId}`;
                messageTitle.textContent = "Application Message";
            } 
            
            if (contactId) {
                url += `&contact_id=${contactId}`;
                messageTitle.textContent = "Contact Message";
            } 
            
            if (reviewId) {
                url += `&review_id=${reviewId}`;
                messageTitle.textContent = "Review Message";
            } 
            
            if (orderId) {
                url += `&order_id=${orderId}`;
                messageTitle.textContent = "Additional Information";
            }

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    messageContent.innerHTML = data.message;
                    messageBlur.classList.add("active-blur");
                    messageBox.classList.add("active-box");
                })
            .catch(() => {
                failedPopupOpening();
            });

            messageScrollWrapper.scrollTop = 0;
    });

    if (messageClose) {
        messageClose.addEventListener("click", function() {
            messageBox.classList.remove("active-box");
            messageBlur.classList.remove("active-blur");
        });
    }
}

if (messageBox) {
    messagePopup();
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Blog Content Popup |||||||||||||||||||||||||||||||||||||||||||||||||| */

const blogContentBlur = document.querySelector(".blog-content-blur");
const blogContentBox = document.querySelector(".blog-content-blur .popup-wrapper");
const blogContentClose = document.querySelector(".blog-content-blur .fa-circle-xmark");
const blogContentTitle = document.querySelector(".blog-content-blur .popup-wrapper h3");
const blogContent = document.querySelector(".blog-content");

function contentPopup() {
    $(document)
        .off("click", ".blog-content-link")
        .on("click", ".blog-content-link", function(event) {
            event.preventDefault();

            const id = this.getAttribute("data-id");

            fetch(`moderator.php?fetch_content=1&id=${id}`)
                .then((response) => response.json())
                .then((data) => {
                    blogContent.innerHTML = data.content;
                    blogContentTitle.innerHTML = data.title;
                    blogContentBlur.classList.add("active-blur");
                    blogContentBox.classList.add("active-box");
                })
            .catch(() => {
                failedPopupOpening();
            });

            blogContent.scrollTop = 0;
    });

    if (blogContentClose) {
        blogContentClose.addEventListener("click", function() {
            blogContentBox.classList.remove("active-box");
            blogContentBlur.classList.remove("active-blur");
        });
    }
}

if (blogContentBox) {
    contentPopup();
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Order Details Popups |||||||||||||||||||||||||||||||||||||||||||||||||| */

const orderDetailsBlur = document.querySelector(".order-details-blur");
const orderDetailsBox = document.querySelector(".order-details-blur .popup-wrapper");
const orderDetailsClose = document.querySelector(".order-details-blur .fa-circle-xmark");
const orderDetailsTitle = document.querySelector(".order-details-blur .popup-wrapper h3");
const orderDetailsTable = document.querySelector(".order-details-blur .popup-wrapper table");
const detailsScrollWrapper = document.querySelector(".order-details-blur .popup-wrapper div");

if (orderDetailsClose) {
    orderDetailsClose.addEventListener("click", function() {
        orderDetailsBox.classList.remove("active-box");
        orderDetailsBlur.classList.remove("active-blur");
    });
}


/* ######################################## Order Delivery Details ######################################## */

const orderDetailsDelivery = document.querySelectorAll(".order-details-delivery");

if (orderDetailsDelivery.length > 0) {
    orderDetailsDelivery.forEach((link) => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const id = this.getAttribute("data-order-id");

            fetch(`admin.php?fetch_order_delivery=1&order_id=${id}`)
                .then((res) => res.json())
                .then((order) => {
                    orderDetailsTitle.textContent = `Delivery Details`;
                    if (order.delivery_option === "Scheduled Delivery" && order.location_type === "House") {
                        orderDetailsTable.innerHTML = `<tr>
                                                            <th>Day</th>
                                                            <th>Time</th>
                                                            <th>Borough</th>
                                                            <th>Address</th>
                                                            <th>Location Type</th>
                                                        </tr>
                                                        <tr>
                                                            <td>${order.delivery_day}</td>
                                                            <td>${order.delivery_time}</td>
                                                            <td>${order.borough}</td>
                                                            <td class="long-content">${order.address}</td>
                                                            <td>${order.location_type}</td>
                                                        </tr>`;
                    } else if (order.delivery_option === "Scheduled Delivery" && order.location_type === "Apartment") {
                        orderDetailsTable.innerHTML = `<tr>
                                                            <th>Day</th>
                                                            <th>Time</th>
                                                            <th>Borough</th>
                                                            <th>Address</th>
                                                            <th>Location Type</th>
                                                            <th>Floor</th>
                                                            <th>Apartment</th>
                                                        </tr>
                                                        <tr>
                                                            <td>${order.delivery_day}</td>
                                                            <td>${order.delivery_time}</td>
                                                            <td>${order.borough}</td>
                                                            <td class="long-content">${order.address}</td>
                                                            <td>${order.location_type}</td>
                                                            <td>${order.floor_number}</td>
                                                            <td>${order.apartment_number}</td>
                                                        </tr>`;
                    } else if (order.delivery_option === "Scheduled Delivery" && order.location_type === "Office") {
                        orderDetailsTable.innerHTML = `<tr>
                                                            <th>Day</th>
                                                            <th>Time</th>
                                                            <th>Borough</th>
                                                            <th>Address</th>
                                                            <th>Location Type</th>
                                                            <th>Office Name</th>
                                                            <th>Deliver To</th>
                                                        </tr>
                                                        <tr>
                                                            <td>${order.delivery_day}</td>
                                                            <td>${order.delivery_time}</td>
                                                            <td>${order.borough}</td>
                                                            <td class="long-content">${order.address}</td>
                                                            <td>${order.location_type}</td>
                                                            <td>${order.office_name}</td>
                                                            <td>${order.office_reception}</td>
                                                        </tr>`;
                    } else if (order.delivery_option === "Scheduled Delivery" && order.location_type === "Other") {
                        orderDetailsTable.innerHTML = `<tr>
                                                            <th>Day</th>
                                                            <th>Time</th>
                                                            <th>Borough</th>
                                                            <th>Address</th>
                                                            <th>Location Type</th>
                                                            <th>Address Details</th>
                                                        </tr>
                                                        <tr>
                                                            <td>${order.delivery_day}</td>
                                                            <td>${order.delivery_time}</td>
                                                            <td>${order.borough}</td>
                                                            <td class="long-content">${order.address}</td>
                                                            <td>${order.location_type}</td>
                                                            <td class="long-content">${order.address_details}</td>
                                                        </tr>`;
                    } else if (order.delivery_option !== "Scheduled Delivery" && order.location_type === "House") {
                        orderDetailsTable.innerHTML = `<tr>
                                                            <th>Borough</th>
                                                            <th>Address</th>
                                                            <th>Location Type</th>
                                                        </tr>
                                                        <tr>
                                                            <td>${order.borough}</td>
                                                            <td class="long-content">${order.address}</td>
                                                            <td>${order.location_type}</td>
                                                        </tr>`;
                    } else if (order.delivery_option !== "Scheduled Delivery" && order.location_type === "Apartment") {
                        orderDetailsTable.innerHTML = `<tr>
                                                            <th>Borough</th>
                                                            <th>Address</th>
                                                            <th>Location Type</th>
                                                            <th>Floor</th>
                                                            <th>Apartment</th>
                                                        </tr>
                                                        <tr>
                                                            <td>${order.borough}</td>
                                                            <td class="long-content">${order.address}</td>
                                                            <td>${order.location_type}</td>
                                                            <td>${order.floor_number}</td>
                                                            <td>${order.apartment_number}</td>
                                                        </tr>`;
                    } else if (order.delivery_option !== "Scheduled Delivery" && order.location_type === "Office") {
                        orderDetailsTable.innerHTML = `<tr>
                                                            <th>Borough</th>
                                                            <th>Address</th>
                                                            <th>Location Type</th>
                                                            <th>Office Name</th>
                                                            <th>Deliver To</th>
                                                        </tr>
                                                        <tr>
                                                            <td>${order.borough}</td>
                                                            <td class="long-content">${order.address}</td>
                                                            <td>${order.location_type}</td>
                                                            <td>${order.office_name}</td>
                                                            <td>${order.office_reception}</td>
                                                        </tr>`;
                    } else if (order.delivery_option !== "Scheduled Delivery" && order.location_type === "Other") {
                        orderDetailsTable.innerHTML = `<tr>
                                                            <th>Borough</th>
                                                            <th>Address</th>
                                                            <th>Location Type</th>
                                                            <th>Address Details</th>
                                                        </tr>
                                                        <tr>
                                                            <td>${order.borough}</td>
                                                            <td class="long-content">${order.address}</td>
                                                            <td>${order.location_type}</td>
                                                            <td class="long-content">${order.address_details}</td>
                                                        </tr>`;
                    }

                    orderDetailsBox.classList.remove("order-products");
                    orderDetailsBox.classList.remove("order-payment");
                    orderDetailsBlur.classList.add("active-blur");
                    orderDetailsBox.classList.add("active-box");
                    detailsScrollWrapper.scrollLeft = 0;
                    applyOverflowTitles();
                })
            .catch(() => {
                failedPopupOpening();
            });
        });
    });
}


/* ######################################## Order Payment Details ######################################## */

const orderDetailsPayment = document.querySelectorAll(".order-details-payment");

if (orderDetailsPayment.length > 0) {
    orderDetailsPayment.forEach((link) => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const id = this.getAttribute("data-order-id");

            fetch(`admin.php?fetch_order_payment=1&order_id=${id}`)
                .then((res) => res.json())
                .then((order) => {
                    orderDetailsTitle.textContent = `Payment Details`;
                    if (order.payment === "Cash") {
                        let changeCell = '<i class="fa-solid fa-circle-xmark"></i>';
                        if (order.cash_option === "Not Exact" && order.cash_amount) {
                            const change = order.cash_amount - order.total_price;
                            changeCell = "$" + change.toFixed(2);
                        }

                        orderDetailsTable.innerHTML = ` <tr><th>Total Price</th>
                                                            <th>Cash Amount</th>
                                                            <th>Change</th>
                                                        </tr>
                                                        <tr>
                                                            <td>$${order.total_price}</td>
                                                            <td>$${order.cash_amount === null ? order.total_price : order.cash_amount}</td>
                                                            <td>${changeCell}</td>
                                                        </tr>`;
                    } else {
                        orderDetailsTable.innerHTML = ` <tr>
                                                            <th>Card Name</th>
                                                            <th>Card Number</th>
                                                            <th>Expiry Date</th>
                                                        </tr>
                                                        <tr>
                                                            <td class="long-content">${order.card_name}</td>
                                                            <td class="long-content">${order.card_number}</td>
                                                            <td>${order.expiry_date}</td>
                                                        </tr>`;
                    }

                    orderDetailsBox.classList.remove("order-products");
                    orderDetailsBox.classList.add("order-payment");
                    orderDetailsBlur.classList.add("active-blur");
                    orderDetailsBox.classList.add("active-box");
                    detailsScrollWrapper.scrollLeft = 0;
                    applyOverflowTitles();
                })
            .catch(() => {
                failedPopupOpening();
            });
        });
    });
}


/* ######################################## Order Product Details ######################################## */

const orderDetailsProducts = document.querySelectorAll(".order-details-products");

if (orderDetailsProducts.length > 0) {
    orderDetailsProducts.forEach((link) => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const id = this.getAttribute("data-order-id");

            fetch(`admin.php?fetch_order_products=1&order_id=${id}`)
                .then((res) => res.json())
                .then((order) => {
                    orderDetailsTitle.textContent = `Products`;
                    orderDetailsTable.innerHTML = ` <tr>
                                                        <th>Product</th>
                                                        <th>Quantity</th>
                                                    </tr>`;

                    const products = order.products.split(",").map((p) => p.trim());
                    const quantities = order.quantities.split(",").map((q) => q.trim());

                    products.forEach((product, index) => {
                        const quantity = quantities[index] || "";

                        orderDetailsTable.innerHTML += `<tr class="order-products-row">
                                                            <td class="long-content">${product}</td>
                                                            <td>${quantity}</td>
                                                        </tr>`;
                    });

                    orderDetailsBlur.classList.add("active-blur");
                    orderDetailsBox.classList.add("active-box");
                    orderDetailsBox.classList.add("order-products");
                    orderDetailsBox.classList.remove("order-payment");
                    detailsScrollWrapper.scrollLeft = 0;
                    detailsScrollWrapper.scrollTop = 0;
                    applyOverflowTitles();
                })
            .catch(() => {
                failedPopupOpening();
            });
        });
    });
}


/* ######################################## Order Summary Details ######################################## */

const orderDetailsSummary = document.querySelectorAll(".order-details-summary");

if (orderDetailsSummary.length > 0) {
    orderDetailsSummary.forEach((link) => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const id = this.getAttribute("data-order-id");

            fetch(`admin.php?fetch_order_summary=1&order_id=${id}`)
                .then((res) => res.json())
                .then((order) => {
                    let subtotalDiscount = '<i class="fa-solid fa-circle-xmark"></i>';
                    if (order.promo_code === "shop11080") {
                        subtotalDiscount = "-10%";
                    }

                    orderDetailsTitle.textContent = `Summary`;
                    orderDetailsTable.innerHTML = ` <tr>
                                                        <th>Total</th>
                                                        <th>Subtotal</th>
                                                        <th>Subtotal Discount</th>
                                                        <th>Delivery Fee</th>
                                                        <th>Small Order Fee</th>
                                                        <th>Same Day Fee</th>
                                                    </tr>
                                                    <tr>
                                                        <td>$${order.total_price}</td>
                                                        <td>$${order.subtotal}</td>
                                                        <td>${subtotalDiscount}</td>
                                                        <td>${order.delivery_fee === null ? '<i class="fa-solid fa-circle-xmark"></i>' : "$" + order.delivery_fee}</td>
                                                        <td>${order.small_order_fee === null ? '<i class="fa-solid fa-circle-xmark"></i>' : "$" + order.small_order_fee}</td>
                                                        <td>${order.same_day_fee === null ? '<i class="fa-solid fa-circle-xmark"></i>' : "$" + order.same_day_fee}</td>
                                                    </tr>`;

                    orderDetailsBox.classList.remove("order-products");
                    orderDetailsBox.classList.remove("order-payment");
                    orderDetailsBlur.classList.add("active-blur");
                    orderDetailsBox.classList.add("active-box");
                    detailsScrollWrapper.scrollLeft = 0;
                })
            .catch(() => {
                failedPopupOpening();
            });
        });
    });
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Password Visibility |||||||||||||||||||||||||||||||||||||||||||||||||| */

function passwordVisibility() {
    openEye.addEventListener("click", function() {
        openEye.style.display = "none";
        closedEye.style.display = "block";
        password.type = "text";
    });
    closedEye.addEventListener("click", function() {
        closedEye.style.display = "none";
        openEye.style.display = "block";
        password.type = "password";
    });
}

if (closedEye && openEye && password) {
    passwordVisibility();
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Select Fields |||||||||||||||||||||||||||||||||||||||||||||||||| */

const selectFields = document.querySelectorAll("select");

if (selectFields.length > 0) {
    selectFields.forEach((select) => {
        select.addEventListener("mouseover", function(e) {
            e.target.querySelectorAll("option").forEach((option) => {
                option.style.color = "black";
            });
        });
        select.addEventListener("change", function(e) {
            e.target.style.color = "black";
        });
    });
}

const selectWrappers = document.querySelectorAll(".select-wrapper");

if (selectWrappers.length > 0) {
    selectWrappers.forEach((wrapper) => {
        const select = wrapper.querySelector("select");
        const icon = wrapper.querySelector(".fa-caret-down");

        select.addEventListener("change", () => {
            if (select.selectedOptions[0].hidden) {
                icon.style.color = "lightgrey";
            } else {
                icon.style.color = "black";
                icon.classList.remove("rotated");
            }
        });
        select.addEventListener("mousedown", () => {
            icon.classList.toggle("rotated");
            icon.style.color = "black";
        });
        select.addEventListener("blur", () => {
            icon.classList.remove("rotated");
            if (select.selectedOptions[0].hidden) {
                icon.style.color = "lightgrey";
            } else {
                icon.style.color = "black";
            }
        });
    });
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Table Rows Display |||||||||||||||||||||||||||||||||||||||||||||||||| */

const tableWrappers = document.querySelectorAll(".table-wrapper");

function tableRowsDisplay() {
    const rowsPerClick = 20;

    tableWrappers.forEach((wrapper) => {
        const table = wrapper.querySelector("table");
        const allRows = table.querySelectorAll("tr");

        if (allRows.length <= 1) return;

        const dataRows = Array.from(allRows).slice(1).filter(row => !row.classList.contains("empty-row"));

        if (dataRows.length <= rowsPerClick) return;

        let visibleCount = rowsPerClick;

        dataRows.forEach((row, index) => {
            if (index >= rowsPerClick) {
                row.style.display = "none";
            }
        });

        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.className = "load-rows-wrapper";

        const loadMoreBtn = document.createElement("button");
        loadMoreBtn.className = "blue-submit load-more-button";
        loadMoreBtn.innerHTML = 'Show More<i class="fa-solid fa-angles-down"></i>'

        const showLessBtn = document.createElement("button");
        showLessBtn.className = "blue-submit show-less-button";
        showLessBtn.innerHTML = 'Show Less<i class="fa-solid fa-angles-up"></i>';
        showLessBtn.style.display = "none";

        buttonsWrapper.appendChild(loadMoreBtn);
        buttonsWrapper.appendChild(showLessBtn);

        wrapper.insertAdjacentElement("afterend", buttonsWrapper);

        loadMoreBtn.addEventListener("click", function() {
            visibleCount += rowsPerClick;

            dataRows.forEach((row, index) => {
                if (index < visibleCount) {
                    row.style.display = "";
                }
            });

            applyOverflowTitles();

            if (visibleCount >= dataRows.length) {
                loadMoreBtn.style.display = "none";
            }

            if (visibleCount > rowsPerClick) {
                showLessBtn.style.display = "inline-block";
            }
        });

        showLessBtn.addEventListener("click", function() {
            visibleCount -= rowsPerClick;

            if (visibleCount < rowsPerClick) {
                visibleCount = rowsPerClick;
            }

            dataRows.forEach((row, index) => {
                if (index >= visibleCount) {
                    row.style.display = "none";
                }
            });

            if (visibleCount <= rowsPerClick) {
                showLessBtn.style.display = "none";
            }

            if (visibleCount < dataRows.length) {
                loadMoreBtn.style.display = "inline-block";
            }
        });
    });
}

if (tableWrappers.length > 0) {
    tableRowsDisplay();
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Long Column Hover Titles |||||||||||||||||||||||||||||||||||||||||||||||||| */

function applyOverflowTitles() {
    const longContents = document.querySelectorAll(".long-content");
    longContents.forEach((content) => {
        if (content.scrollWidth > content.clientWidth) {
            content.title = content.textContent.trim();
            content.style.cursor = "pointer";
        } else {
            content.title = "";
            content.style.cursor = "";
        }
    });
}

applyOverflowTitles();
window.addEventListener("resize", applyOverflowTitles);


/* |||||||||||||||||||||||||||||||||||||||||||||||||| TinyMCE |||||||||||||||||||||||||||||||||||||||||||||||||| */

const editors = [
    "#blog-add-content",
    "#blog-update-content"
];

editors.forEach((selector) => {
    if (document.querySelector(selector)) {
        tinymce.init({
            selector: selector,
            license_key: "gpl",
            placeholder: "Content",
            height: 300,
            menubar: false,
            branding: false,
            promotion: false,
            content_style: "body {font-family: Manrope, sans-serif; font-size: 16px; font-weight: 400; padding: 8px 10px 8px 15px; margin: 0; box-sizing: border-box; } .mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {color: rgb(210, 210, 210); font-size: 16px; font-weight: 400; left: 15px !important; top: 8px !important;} body p {margin: 0 !important;}",

            plugins: [
                "lists",
                "link",
                "code",
                "preview",
                "searchreplace",
                "wordcount",
                "autolink"
            ],

            toolbar: [
                "undo redo | " +
                "blocks | " +
                "bold italic underline strikethrough link removeformat |" +
                "outdent indent alignleft aligncenter alignright alignjustify bullist numlist code preview |"
            ],

            setup: function (editor) {
                editor.on("input keyup change", function () {
                    const textarea = editor.getElement();
                    const error = textarea.parentElement.querySelector(
                        `.${textarea.name}-error`
                    );

                    if (error) {
                        error.style.display = "none";
                    }

                    editor.getContainer().classList.remove("error-border");
                });
            }          
        });
    }
});
