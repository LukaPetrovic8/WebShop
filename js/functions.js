/* |||||||||||||||||||||||||||||||||||||||||||||||||| Clear Errors |||||||||||||||||||||||||||||||||||||||||||||||||| */

function clearErrorOnInput(inputField, errorElement) {
    let previousValue = inputField.value;

    inputField.addEventListener("input", function () {
        if (inputField.value.trim() === "") {
            previousValue = inputField.value;
            return;
        }
        
        if (inputField.value !== previousValue) {
            errorElement.style.display = "none";
            inputField.classList.remove("error-border");
        }

        previousValue = inputField.value;
    });
}

function clearErrorOnChange(inputField, errorElement) {
    inputField.addEventListener("change", function() {
        errorElement.style.display = "none";
        inputField.classList.remove("error-border");
    });
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Form Submit Popups |||||||||||||||||||||||||||||||||||||||||||||||||| */

const formSentBlur = document.querySelector(".form-sent-blur");
const successFormSent = document.querySelector(".success-form-sent");
const failedFormSent = document.querySelector(".failed-form-sent");

function showSuccessPopup() {
    formSentBlur.classList.add("active-blur");
    successFormSent.classList.add("active-box");
    setTimeout(() => {
        formSentBlur.classList.remove("active-blur");
        successFormSent.classList.remove("active-box");
    }, 2000);
}

function showFailedPopup() {
    formSentBlur.classList.add("active-blur");
    failedFormSent.classList.add("active-box");
    setTimeout(() => {
        formSentBlur.classList.remove("active-blur");
        failedFormSent.classList.remove("active-box");
    }, 2000);
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| FAQ's |||||||||||||||||||||||||||||||||||||||||||||||||| */

const FAQquestionsWrapper = document.querySelector(".faq-questions");

if (FAQquestionsWrapper) {
    const FAQicons = FAQquestionsWrapper.querySelectorAll(".fa-plus");

    FAQicons.forEach((icon) => {
        icon.addEventListener("click", (event) => {
            event.stopPropagation();
            const faq = icon.closest(".faq");
            faq.classList.toggle("drop");
        });
    });
}

const FAQtype = document.getElementById("faq-type");
const FAQquestions = document.querySelectorAll(".questions");

function showSelectedFaq() {
    const FAQtypeValue = FAQtype.value.toLowerCase();
    FAQquestions.forEach((section) => {
        section.classList.remove("faq-visible");

        if (section.classList.contains(`questions-${FAQtypeValue}-type`)) {
            section.style.display = "block";
            requestAnimationFrame(() => {
                section.classList.add("faq-visible");
            });
        } else {
            section.style.display = "none";
        }
    });
}

if (FAQquestions.length > 0) {
    showSelectedFaq();
    FAQtype.addEventListener("change", function() {
        if (!FAQquestionsWrapper) {
            showSelectedFaq();
            return;
        }

        FAQquestionsWrapper.classList.add("filter-changing");

        setTimeout(() => {
            showSelectedFaq();
            FAQquestionsWrapper.classList.remove("filter-changing");
        }, 220);
    });
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Home Intro Reveal |||||||||||||||||||||||||||||||||||||||||||||||||| */

const homeIntroRows = document.querySelectorAll(".home-intro-row");

if (homeIntroRows.length > 0) {
    if (window.innerWidth < 1400) {
        homeIntroRows.forEach((section) => {
            section.classList.add("slide-in");
        });
    } else {
        const homeIntroObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("slide-in");
                    homeIntroObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.25,
        });

        homeIntroRows.forEach((section) => {
            homeIntroObserver.observe(section);
        });
    }
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Quick Stats Counter |||||||||||||||||||||||||||||||||||||||||||||||||| */

const counters = document.querySelectorAll(".counter");
const quickStatsRow = document.querySelector(".quick-stats-row");
let started = false;

function animateCounters() {
    counters.forEach((counter) => {
        const target = +counter.dataset.target;
        const steps = 100;
        const increment = target / steps;
        let count = 0;
        let currentStep = 0;

        function update() {
            if (currentStep < steps) {
                count += increment;
                counter.textContent = Math.round(count);
                currentStep++;
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        }

        update();
    });
}

if (quickStatsRow && counters.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting && !started) {
                started = true;
                animateCounters();
                observer.disconnect();
            }
        },
        {
            threshold: 0.3,
        }
    );

    window.addEventListener("load", () => {
        observer.observe(quickStatsRow);

        const rect = quickStatsRow.getBoundingClientRect();

        if (
            rect.top < window.innerHeight &&
            rect.bottom > 0 &&
            !started
        ) {
            started = true;
            animateCounters();
            observer.disconnect();
        }
    });
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||| Burger Menu Animation |||||||||||||||||||||||||||||||||||||||||||||||||| */

const burgerMenu = document.querySelector(".burger-menu");
const headerMenu = document.querySelector(".header-small-menu ul");

if (burgerMenu) {
    burgerMenu.addEventListener("click", () => {
        headerMenu.classList.toggle("slide");
        burgerMenu.classList.toggle("open");
    });
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Gallery |||||||||||||||||||||||||||||||||||||||||||||||||| */

const galleryTrack = document.querySelector(".gallery-track");
const galleryRow = document.querySelector(".gallery-row");
const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");

if (galleryTrack && galleryPrev && galleryNext && galleryRow) {
    const originalSlides = Array.from(galleryTrack.querySelectorAll(".gallery-slide"));
    const originalCount = originalSlides.length;

    originalSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        clone.classList.remove("active");
        galleryTrack.appendChild(clone);
    });

    originalSlides
        .slice()
        .reverse()
        .forEach((slide) => {
            const clone = slide.cloneNode(true);
            clone.classList.remove("active");
            galleryTrack.prepend(clone);
        });

    let gallerySlides = Array.from(galleryTrack.querySelectorAll(".gallery-slide"));
    let galleryIndex = originalCount + 1;
    let isMoving = false;

    function updateGallery(animate = true) {
        if (animate) {
            galleryTrack.classList.remove("no-transition");
        } else {
            galleryTrack.classList.add("no-transition");
        }

        gallerySlides.forEach((slide) => {
            slide.classList.remove("active");
        });

        gallerySlides[galleryIndex].classList.add("active");

        const activeSlide = gallerySlides[galleryIndex];
        const wrapperWidth = galleryRow.offsetWidth;
        const slideCenter = activeSlide.offsetLeft + activeSlide.offsetWidth / 2;

        galleryTrack.style.transform = `translateX(${wrapperWidth / 2 - slideCenter}px)`;

        if (!animate) {
            galleryTrack.offsetHeight;

            requestAnimationFrame(() => {
                galleryTrack.classList.remove("no-transition");
            });
        }
    }

    galleryNext.addEventListener("click", () => {
        if (isMoving) return;

        isMoving = true;
        galleryIndex++;
        updateGallery(true);
    });

    galleryPrev.addEventListener("click", () => {
        if (isMoving) return;

        isMoving = true;
        galleryIndex--;
        updateGallery(true);
    });

    galleryTrack.addEventListener("transitionend", (event) => {
        if (event.target !== galleryTrack || event.propertyName !== "transform") {
            return;
        }

        if (galleryIndex >= originalCount * 2) {
            galleryIndex = originalCount;
            updateGallery(false);
        }

        if (galleryIndex < originalCount) {
            galleryIndex = originalCount * 2 - 1;
            updateGallery(false);
        }

        isMoving = false;
    });

    window.addEventListener("resize", () => {
        updateGallery(false);
    });

    updateGallery(false);
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


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Cookies |||||||||||||||||||||||||||||||||||||||||||||||||| */

const cookiesBlur = document.querySelector(".cookies-blur");
const cookiesWrapper = document.querySelector(".cookies-wrapper");

const acceptBtn = document.getElementById("accept");
const rejectBtn = document.getElementById("reject");
const moreInfoBtn = document.getElementById("more-information");

function closeCookiesPopup() {
    cookiesWrapper.classList.remove("active-box");

    setTimeout(() => {
        cookiesBlur.classList.remove("active-blur");
    }, 300);
}

function cookiesPopup() {
    if (!localStorage.getItem("cookieConsent")) {
        setTimeout(() => {
            cookiesBlur.classList.add("active-blur");
            cookiesWrapper.classList.add("active-box");
        }, 2000);
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted");
        closeCookiesPopup();
    });

    rejectBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "rejected");
        closeCookiesPopup();
    });

    moreInfoBtn.addEventListener("click", () => {
        closeCookiesPopup();

        setTimeout(() => {
            window.location.href = "/WebShop/pages/legal/cookies.php";
        }, 100);
    });
}

if (cookiesBlur && cookiesWrapper) {
    cookiesPopup();
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Filters |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Search ######################################## */

const searchWrapper = document.querySelector(".search-wrapper");
const searchIcon = document.querySelector(".search-wrapper i");
const searchInput = document.querySelector(".search-wrapper input");
const sortBy = document.querySelector("#sort-by");
const productsRow = document.querySelector(".products-row");

const initialButton = document.querySelector(".product-button-wrapper button");
const productTable = initialButton ? initialButton.getAttribute("data-table") : null;

let searchTimeout;

function loadProducts() {
    if (!productsRow || !productTable) {
        return;
    }

    const sortValue = sortBy ? sortBy.value : "newest";
    const searchValue = searchInput ? searchInput.value.trim() : "";

    productsRow.classList.remove("filter-loaded");
    productsRow.classList.add("filter-changing");

    setTimeout(() => {
        fetch(`/WebShop/api/sort-products.php?table=${productTable}&sort=${sortValue}&search=${encodeURIComponent(searchValue)}`)
            .then((response) => response.text())
            .then((html) => {
                productsRow.innerHTML = html;
                productsRow.classList.remove("filter-changing");
                productsRow.classList.add("filter-loaded");
            })
            .catch(() => {
                productsRow.classList.remove("filter-changing");
                console.log("Products loading failed.");
            });
    }, 220);
}

if (searchInput) {
    searchInput.addEventListener("input", function() {
        if (searchInput.value !== "") {
            searchIcon.classList.add("active");
        } else {
            searchIcon.classList.remove("active");
        }

        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(() => {
            loadProducts();
        }, 500);
    });
}

if (sortBy) {
    sortBy.addEventListener("change", loadProducts);
}