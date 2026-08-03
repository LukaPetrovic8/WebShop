/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||| Validations ||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* |||||||||||||||||||||||||||||||||||||||||||||||||| Order Form Fields |||||||||||||||||||||||||||||||||||||||||||||||||| */

const orderForm = document.getElementById("order-form");
const orderInnerWrapper = document.querySelector(".order-inner-wrapper");

/* ######################################## First Name ######################################## */

const name = document.querySelector('input[name="name"]');
const nameError = document.querySelector(".name-error");

function validateNameInput() {
    const nameValue = name.value.trim();
    let isValid = true;

    if (nameValue === "") {
        nameError.style.display = "none";
        name.classList.remove("error-border");
    }

    for (let i = nameValue.length - 1; i >= 0; i--) {
        const char = nameValue[i];
        if (/\d/.test(char)) {
            nameError.style.display = "block";
            nameError.innerHTML = "Name cannot contain numbers! Please enter a valid name.";
            name.classList.add("error-border");
            isValid = false;
            break;
        }
        if (/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(char)) {
            nameError.style.display = "block";
            nameError.innerHTML = "Name cannot contain special characters! Please enter a valid name.";
            name.classList.add("error-border");
            isValid = false;
            break;
        }
        if (char === " ") {
            nameError.style.display = "block";
            nameError.innerHTML = "Please enter just your name!";
            name.classList.add("error-border");
            isValid = false;
            break;
        }

        if (isValid) {
            nameError.style.display = "none";
            name.classList.remove("error-border");
        }
    }

    return isValid;
}

if (name && nameError) {
    name.addEventListener("input", validateNameInput);
}


/* ######################################## Last Name ######################################## */

const surname = document.querySelector('input[name="surname"]');
const surnameError = document.querySelector(".surname-error");

function validateSurnameInput() {
    const surnameValue = surname.value.trim();
    let isValid = true;

    if (surnameValue === "") {
        surnameError.style.display = "none";
        surname.classList.remove("error-border");
    }

    for (let i = surnameValue.length - 1; i >= 0; i--) {
        const char = surnameValue[i];
        if (/\d/.test(char)) {
            surnameError.style.display = "block";
            surnameError.innerHTML = "Surname cannot contain numbers! Please enter a valid surname.";
            surname.classList.add("error-border");
            isValid = false;
            break;
        }
        if (/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(char)) {
            surnameError.style.display = "block";
            surnameError.innerHTML = "Surname cannot contain special characters! Please enter a valid surname.";
            surname.classList.add("error-border");
            isValid = false;
            break;
        }
        if (char === " ") {
            surnameError.style.display = "block";
            surnameError.innerHTML = "Please enter just your surname!";
            surname.classList.add("error-border");
            isValid = false;
            break;
        }
    }

    if (isValid) {
        surnameError.style.display = "none";
        surname.classList.remove("error-border");
    }

    return isValid;
}

if (surname && surnameError) {
    surname.addEventListener("input", validateSurnameInput);
}


/* ######################################## Email ######################################## */

const email = document.querySelector('input[name="email"]');
const emailError = document.querySelector(".email-error");

function validateEmailInput() {
    const emailValue = email.value.trim();
    const atCount = (emailValue.match(/@/g) || []).length;
    let isValid = true;

    if (emailValue === "") {
        emailError.style.display = "none";
        email.classList.remove("error-border");
    }

    for (let i = emailValue.length - 1; i >= 0; i--) {
        const char = emailValue[i];
        if (char === " ") {
            emailError.style.display = "block";
            emailError.innerHTML = "Email cannot contain spaces! Please enter a valid email.";
            email.classList.add("error-border");
            isValid = false;
            break;
        }
        if (char === "@" && atCount > 1) {
            emailError.style.display = "block";
            emailError.innerHTML = "Email can only contain one '@' symbol! Please enter a valid email";
            email.classList.add("error-border");
            isValid = false;
            break;
        }
        if (/[^a-zA-Z0-9._%+-@]/.test(char) || /[\/;:=]/.test(char)) {
            emailError.style.display = "block";
            emailError.innerHTML = "Invalid email format!! Please enter a valid email.";
            email.classList.add("error-border");
            isValid = false;
            break;
        }
    }

    if (isValid) {
        emailError.style.display = "none";
        email.classList.remove("error-border");
    }

    return isValid;
}

function validateEmailChange() {
    const emailValue = email.value.trim();
    const atCount = (emailValue.match(/@/g) || []).length;
    let isValid = true;

    if (emailValue === "") {
        emailError.style.display = "none";
        email.classList.remove("error-border");
    } else if (!emailValue.includes("@")) {
        emailError.innerHTML = "Email must contain '@'! Please enter a valid email";
        emailError.style.display = "block";
        email.classList.add("error-border");
        isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@/.test(emailValue)) {
        emailError.innerHTML = "Invalid email format before '@'! Please enter a valid email";
        emailError.style.display = "block";
        email.classList.add("error-border");
        isValid = false;
    } else if (!/@[a-zA-Z0-9.-]+$/.test(emailValue)) {
        emailError.innerHTML = "Email must contain a domain name (e.g., '@example')! Please enter a valid email";
        emailError.style.display = "block";
        email.classList.add("error-border");
        isValid = false;
    } else if (!/\.[a-zA-Z]{2,}$/.test(emailValue)) {
        emailError.innerHTML = "Email must contain a valid domain extension (e.g., '.com')! Please enter a valid email";
        emailError.style.display = "block";
        email.classList.add("error-border");
        isValid = false;
    } else {
        emailError.style.display = "none";
        email.classList.remove("error-border");
    }

    for (let i = emailValue.length - 1; i >= 0; i--) {
        const char = emailValue[i];
        if (char === " ") {
            emailError.style.display = "block";
            emailError.innerHTML = "Email cannot contain spaces! Please enter a valid email.";
            email.classList.add("error-border");
            isValid = false;
            break;
        }
        if (char === "@" && atCount > 1) {
            emailError.style.display = "block";
            emailError.innerHTML = "Email can only contain one '@' symbol! Please enter a valid email";
            email.classList.add("error-border");
            isValid = false;
            break;
        }
        if (/[^a-zA-Z0-9._%+-@]/.test(char) || /[\/;:=]/.test(char)) {
            emailError.style.display = "block";
            emailError.innerHTML = "Invalid email format!! Please enter a valid email.";
            email.classList.add("error-border");
            isValid = false;
            break;
        }
    }

    return isValid;
}

if (email && emailError) {
    email.addEventListener("input", validateEmailInput);
    email.addEventListener("change", validateEmailChange);
    email.addEventListener("blur", validateEmailChange);
}


/* ######################################## Phone ######################################## */

const phone = document.querySelector('input[name="phone"]');
const phoneError = document.querySelector(".phone-error");

function validatePhoneInput() {
    const phoneValue = phone.value.trim();
    let isValid = true;

    if (phoneValue === "") {
        phoneError.style.display = "none";
        phone.classList.remove("error-border");
    }

    for (let i = phoneValue.length - 1; i >= 0; i--) {
        const char = phoneValue[i];
        if (/[a-zA-Z]/.test(char)) {
            phoneError.style.display = "block";
            phoneError.innerHTML = "Phone numbers cannot contain letters! Please enter a valid phone number.";
            phone.classList.add("error-border");
            isValid = false;
            break;
        }
        if (/[^0-9\s\-\(\)]/.test(char)) {
            phoneError.style.display = "block";
            phoneError.innerHTML = "Invalid phone number format! Please enter a valid phone number.";
            phone.classList.add("error-border");
            isValid = false;
            break;
        }
    }

    if (isValid) {
        phoneError.style.display = "none";
        phone.classList.remove("error-border");
    }

    return isValid;
}

function validatePhoneChange() {
    const phoneValue = phone.value.trim();
    const digitCount = (phoneValue.match(/\d/g) || []).length;
    let isValid = true;

    if (phoneValue === "") {
        phoneError.style.display = "none";
        phone.classList.remove("error-border");
    } else if (digitCount < 7) {
        phoneError.innerHTML = "Phone number is too short! Please enter a valid phone number!";
        phoneError.style.display = "block";
        phone.classList.add("error-border");
        isValid = false;
    } else if (digitCount > 20) {
        phoneError.innerHTML = "Phone number is too long! Please enter a valid phone number!";
        phoneError.style.display = "block";
        phone.classList.add("error-border");
        isValid = false;
    } else {
        phoneError.style.display = "none";
        phone.classList.remove("error-border");
    }

    for (let i = phoneValue.length - 1; i >= 0; i--) {
        const char = phoneValue[i];
        if (/[a-zA-Z]/.test(char)) {
            phoneError.style.display = "block";
            phoneError.innerHTML = "Phone numbers cannot contain letters! Please enter a valid phone number.";
            phone.classList.add("error-border");
            isValid = false;
            break;
        }
        if (/[^0-9\s\-\(\)]/.test(char)) {
            phoneError.style.display = "block";
            phoneError.innerHTML = "Invalid phone number format! Please enter a valid phone number.";
            phone.classList.add("error-border");
            isValid = false;
            break;
        }
    }

    return isValid;
}

if (phone && phoneError) {
    phone.addEventListener("input", validatePhoneInput);
    phone.addEventListener("change", validatePhoneChange);
}


/* ######################################## Dial Codes ######################################## */

const orderDialCodes = document.querySelector("#order-dial-codes");
let orderItiPhone;

if (orderDialCodes) {
    orderItiPhone = window.intlTelInput(orderDialCodes, {
        initialCountry: "rs",
        preferredCountries: ["rs", "hr", "si", "ba", "mk", "me"],
        separateDialCode: true,
    });

    orderDialCodes.addEventListener("open:countrydropdown", function() {
        const dropdown = document.querySelector(".iti__country-list");
        if (dropdown) dropdown.scrollTop = 0;
    });

    setTimeout(() => {
        document.querySelectorAll(".iti__country-name").forEach((el) => {
            el.textContent = el.textContent.replace(/\s*\(.*?\)/, "");
        });
    }, 500);
}


/* ######################################## Delivery Option ######################################## */

const deliveryOption = document.querySelector('select[name="delivery-option"]');
const deliveryOptionError = document.querySelector(".delivery-option-error");

const sameDayWrapper = document.getElementById("same-day-wrapper");
const inStoreDelivery = document.getElementById("in-store-pickup");
const scheduledDeliveryWrapper = document.getElementById("scheduled-delivery-wrapper");

const orderDeliveryWrapper = document.getElementById("order-delivery-wrapper");
const orderDeliveryInputs = orderDeliveryWrapper.querySelectorAll("input");
const orderDeliverySelects = orderDeliveryWrapper.querySelectorAll("select");
const orderDeliveryIcons = orderDeliveryWrapper.querySelectorAll("i");
const orderDeliveryErrors = orderDeliveryWrapper.querySelectorAll('p[class*="error"]');

function validateDeliveryOptionChange() {
    if (deliveryDay) {
        deliveryDay.value = "";
    }
    if (deliveryTime) {
        deliveryTime.value = "";
    }

    deliveryDayDisplay.textContent = "Delivery Day";
    deliveryDayDisplay.style.color = "lightgrey";
    deliveryTimeDisplay.textContent = "Delivery Time";
    deliveryTimeDisplay.style.color = "lightgrey";
    deliveryDayCalendar.style.color = "lightgrey";
    deliveryTimeClock.style.color = "lightgrey";
    deliveryDayWrapper.classList.remove("active-border");
    deliveryTimeWrapper.classList.remove("active-border");

    orderDeliveryErrors.forEach((error) => {
        error.style.display = "none";
    });
    orderDeliveryInputs.forEach((input) => {
        input.value = "";
        input.classList.remove("error-border");
    });
    orderDeliverySelects.forEach((select) => {
        select.value = "";
        select.style.color = "lightgrey";
        select.classList.remove("error-border");
    });
    orderDeliveryIcons.forEach((icon) => {
        icon.style.color = "lightgrey";
    });
    officeReception.forEach((radio) => {
        radio.checked = false;
    });

    apartmentWrapper.style.display = "none";
    officeWrapper.style.display = "none";
    otherWrapper.style.display = "none";

    deliveryFeeWrapper.style.display = "none";
    deliveryFeeHidden.value = 0;
    deliveryFeeVisible.value = 0;

    if (deliveryOption.value === "Standard Delivery") {
        sameDayWrapper.style.display = "none";
        sameDayWrapper.classList.remove("active-class");
        scheduledDeliveryWrapper.style.display = "none";
        inStoreDelivery.style.display = "none";
        orderDeliveryWrapper.style.display = "block";
        orderDeliveryWrapper.classList.add("input-popout");
    } else if (deliveryOption.value === "Same-Day Delivery") {
        sameDayWrapper.style.display = "block";
        sameDayWrapper.classList.add("active-class");
        scheduledDeliveryWrapper.style.display = "none";
        inStoreDelivery.style.display = "none";
        orderDeliveryWrapper.style.display = "block";
        orderDeliveryWrapper.classList.add("input-popout");
    } else if (deliveryOption.value === "Scheduled Delivery") {
        sameDayWrapper.style.display = "none";
        sameDayWrapper.classList.remove("active-class");
        scheduledDeliveryWrapper.style.display = "block";
        scheduledDeliveryWrapper.classList.add("input-popout");
        inStoreDelivery.style.display = "none";
        orderDeliveryWrapper.style.display = "block";
        orderDeliveryWrapper.classList.add("input-popout");
    } else if (deliveryOption.value === "In-Store Pickup") {
        sameDayWrapper.style.display = "none";
        sameDayWrapper.classList.remove("active-class");
        scheduledDeliveryWrapper.style.display = "none";
        inStoreDelivery.style.display = "block";
        orderDeliveryWrapper.style.display = "none";
        orderDeliveryInputs.forEach((input) => {
            input.value = "";
            input.classList.remove("error-border");
        });
        orderDeliverySelects.forEach((select) => {
            select.value = "";
            select.style.color = "lightgrey";
            select.classList.remove("error-border");
        });
        orderDeliveryErrors.forEach((error) => {
            error.style.display = "none";
        });
        officeReception.forEach((radio) => {
            radio.checked = false;
        });
    }
}

if (deliveryOption && deliveryOptionError) {
    deliveryOption.addEventListener("change", validateDeliveryOptionChange);
    deliveryOption.addEventListener("change", updateTotalPrice);
    deliveryOption.addEventListener("change", validateCashAmountChange);
    clearErrorOnChange(deliveryOption, deliveryOptionError);
}


/* ######################################## Delivery Day ######################################## */

const deliveryDay = document.querySelector("input[name='delivery-day']");
const deliveryDayError = document.querySelector(".delivery-day-error");
const deliveryDayDisplay = document.querySelector(".delivery-day-display");

if (deliveryDay && deliveryDayError) {
    deliveryDay.addEventListener("input", function() {
        if (deliveryDay.value) {
            deliveryDayDisplay.textContent = deliveryDay.value;
            deliveryDayDisplay.style.color = "black";
            deliveryDayCalendar.style.color = "black";
        } else {
            deliveryDayDisplay.textContent = "Delivery Day";
            deliveryDayDisplay.style.color = "lightgrey";
            deliveryDayCalendar.style.color = "lightgrey";
            deliveryDayWrapper.classList.remove("active-border");
        }
    });

    clearErrorOnChange(deliveryDay, deliveryDayError);
}

const deliveryDayWrapper = document.querySelector(".delivery-day-wrapper");
const deliveryDayCalendar = deliveryDayWrapper.querySelector(".fa-calendar-days");

if (deliveryDay) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const minDate = `${yyyy}-${mm}-${dd}`;

    deliveryDay.min = minDate;
}

if (deliveryDayWrapper && deliveryDay) {
    deliveryDayWrapper.addEventListener("click", function() {
        deliveryDay.showPicker();
        deliveryDayCalendar.style.color = "black";
        deliveryDayWrapper.classList.add("active-border");
    })
}

if (deliveryDayCalendar) {
    deliveryDayCalendar.addEventListener("click", function() {
        deliveryDayCalendar.style.color = "black";
        const deliveryDayWrapper = deliveryDayCalendar.closest(".delivery-day-wrapper");
        deliveryDayWrapper.classList.add("active-border");
    });

    document.addEventListener("click", (e) => {
        const deliveryDayCalendar = deliveryDayWrapper.querySelector(".fa-calendar-days");
        const deliveryDay = deliveryDayWrapper.querySelector("input[name='delivery-day']");

        if (!deliveryDayWrapper.contains(e.target)) {
            if (deliveryDay.value) {
                deliveryDayCalendar.style.color = "black";
            } else {
                deliveryDayCalendar.style.color = "lightgrey";
            }

            deliveryDayWrapper.classList.remove("active-border");
        }
    });
}


/* ######################################## Delivery Time ######################################## */

const deliveryTime = document.querySelector("input[name='delivery-time']");
const deliveryTimeError = document.querySelector(".delivery-time-error");

const deliveryTimeWrapper = document.querySelector(".delivery-time-wrapper");
const deliveryTimeDisplay = document.querySelector(".delivery-time-display");
const deliveryTimeClock = deliveryTimeWrapper.querySelector(".fa-clock");

if (deliveryTime && deliveryTimeError) {
    deliveryTime.addEventListener("input", function() {
        if (deliveryTime.value) {
            deliveryTimeDisplay.textContent = deliveryTime.value;
            deliveryTimeDisplay.style.color = "black";
            deliveryTimeClock.style.color = "black";
        } else {
            deliveryTimeDisplay.textContent = "Delivery Time";
            deliveryTimeDisplay.style.color = "lightgrey";
            deliveryTimeClock.style.color = "lightgrey";
            deliveryTimeWrapper.classList.remove("active-border");
        }
    });

    clearErrorOnChange(deliveryTime, deliveryTimeError);
}

if (deliveryTime && deliveryTimeWrapper) {
    deliveryTimeWrapper.addEventListener("click", function() {
        deliveryTime.showPicker();
        deliveryTimeClock.style.color = "black";
        deliveryTimeWrapper.classList.add("active-border");
    })
}

if (deliveryTimeClock) {
    document.addEventListener("click", (e) => {
        const deliveryTimeClock = deliveryTimeWrapper.querySelector(".fa-clock");
        const deliveryTime = deliveryTimeWrapper.querySelector("input[name='delivery-time']");

        if (!deliveryTimeWrapper.contains(e.target)) {
            if (deliveryTime.value) {
                deliveryTimeClock.style.color = "black";
            } else {
                deliveryTimeClock.style.color = "lightgrey";
            }

            deliveryTimeWrapper.classList.remove("active-border");
        }
    });
}


/* ######################################## Borough ######################################## */

const borough = document.querySelector('select[name="borough"]');
const boroughError = document.querySelector(".borough-error");

const deliveryFeeWrapper = document.getElementById("delivery-fee-wrapper");

function validateBoroughChange() {
    if (borough.value === "") {
        deliveryFeeWrapper.style.display = "none";
    } else {
        deliveryFeeWrapper.style.display = "block";
    }

    address.value = "";
    locationType.value = "";
    locationType.style.color = "lightgrey";
    locationType.nextElementSibling.style.color = "lightgrey";
    locationTypeInputs.forEach((input) => {
        input.value = "";
        input.classList.remove("error-border");
    });
    locationTypeErrors.forEach((error) => {
        error.style.display = "none";
    });
    officeReception.forEach((radio) => {
        radio.checked = false;
    });
    apartmentWrapper.style.display = "none";
    officeWrapper.style.display = "none";
    otherWrapper.style.display = "none";
}

if (borough && boroughError) {
    borough.addEventListener("change", validateBoroughChange);
    borough.addEventListener("change", updateDeliveryFee);
    clearErrorOnChange(borough, boroughError);
}


/* ######################################## Address ######################################## */

const address = document.querySelector('input[name="address"]');
const addressError = document.querySelector(".address-error");

if (address && addressError) {
    clearErrorOnInput(address, addressError);
}


/* ######################################## Location ######################################## */

const locationType = document.querySelector('select[name="location-type"]');
const locationTypeError = document.querySelector(".location-type-error");
const locationTypeWrapper = document.getElementById("location-type-wrapper");
const locationTypeErrors = locationTypeWrapper.querySelectorAll('p[class*="error"]');
const locationTypeInputs = locationTypeWrapper.querySelectorAll("input");

const apartmentWrapper = document.getElementById("apartment-wrapper");
const officeWrapper = document.getElementById("office-wrapper");
const otherWrapper = document.getElementById("other-wrapper");

function validateLocationChange() {
    locationTypeInputs.forEach((input) => {
        input.value = "";
        input.classList.remove("error-border");
    });
    locationTypeErrors.forEach((error) => {
        error.style.display = "none";
    });
    officeReception.forEach((radio) => {
        radio.checked = false;
    });

    if (locationType.value === "Apartment") {
        apartmentWrapper.style.display = "block";
        apartmentWrapper.classList.add("input-popout");
        officeWrapper.style.display = "none";
        otherWrapper.style.display = "none";
    } else if (locationType.value === "Office") {
        apartmentWrapper.style.display = "none";
        officeWrapper.style.display = "block";
        officeWrapper.classList.add("input-popout");
        otherWrapper.style.display = "none";
    } else if (locationType.value === "Other") {
        apartmentWrapper.style.display = "none";
        officeWrapper.style.display = "none";
        otherWrapper.style.display = "block";
        otherWrapper.classList.add("input-popout");
    } else {
        apartmentWrapper.style.display = "none";
        officeWrapper.style.display = "none";
        otherWrapper.style.display = "none";
    }
}

if (locationType && locationTypeError) {
    locationType.addEventListener("change", validateLocationChange);
    clearErrorOnChange(locationType, locationTypeError);
}


/* ######################################## Floor Number ######################################## */

const floorNumber = document.querySelector('input[name="floor-number"]');
const floorNumberError = document.querySelector(".floor-number-error");

function validateFloorNumberInput() {
    const floorNumberValue = floorNumber.value.trim();
    const floorNumberPattern = /^[0-9]+$/;
    let isValid = true;

    if (floorNumberValue === "") {
        floorNumberError.style.display = "none";
        floorNumber.classList.remove("error-border");
    } else if (!floorNumberPattern.test(floorNumberValue)) {
        floorNumberError.innerHTML = "Please use just numbers for entering a floor number!";
        floorNumberError.style.display = "block";
        floorNumber.classList.add("error-border");
        isValid = false;
    } else {
        floorNumberError.style.display = "none";
        floorNumber.classList.remove("error-border");
    }

    if (isValid) {
        floorNumberError.style.display = "none";
        floorNumber.classList.remove("error-border");
    }

    return isValid;
}

if (floorNumber && floorNumberError) {
    floorNumber.addEventListener("input", validateFloorNumberInput);
}


/* ######################################## Apartment Number ######################################## */

const apartmentNumber = document.querySelector('input[name="apartment-number"]');
const apartmentNumberError = document.querySelector(".apartment-number-error");

function validateApartmentNumberInput() {
    const apartmentNumberValue = apartmentNumber.value.trim();
    const apartmentNumberPattern = /^[0-9]+$/;
    let isValid = true;

    if (apartmentNumberValue === "") {
        apartmentNumberError.style.display = "none";
        apartmentNumber.classList.remove("error-border");
    } else if (!apartmentNumberPattern.test(apartmentNumberValue)) {
        apartmentNumberError.innerHTML = "Please use just numbers for entering an apartment number!";
        apartmentNumberError.style.display = "block";
        apartmentNumber.classList.add("error-border");
        isValid = false;
    } else {
        apartmentNumberError.style.display = "none";
        apartmentNumber.classList.remove("error-border");
    }

    if (isValid) {
        apartmentNumberError.style.display = "none";
        apartmentNumber.classList.remove("error-border");
    }

    return isValid;
}

if (apartmentNumber && apartmentNumberError) {
    apartmentNumber.addEventListener("input", validateApartmentNumberInput);
}


/* ######################################## Office Name ######################################## */

const officeName = document.querySelector('input[name="office-name"]');
const officeNameError = document.querySelector(".office-name-error");

if (officeName && officeNameError) {
    clearErrorOnInput(officeName, officeNameError);
}


/* ######################################## Office-Reception ######################################## */

const officeReception = document.querySelectorAll('input[name="office-reception"]');
const officeReceptionError = document.querySelector(".office-reception-error");

if (officeReception.length > 0) {
    officeReception.forEach((radio) => {
        radio.addEventListener("change", function() {
            if (radio.checked) {
                officeReceptionError.style.display = "none";
            }
        });
    });
}


/* ######################################## Address Details ######################################## */

const addressDetails = document.querySelector('input[name="address-details"]');
const addressDetailsError = document.querySelector(".address-details-error");

if (addressDetails && addressDetailsError) {
    clearErrorOnInput(addressDetails, addressDetailsError);
}


/* ######################################## Payment ######################################## */

const payment = document.querySelector('select[name="payment"]');
const paymentError = document.querySelector(".payment-error");
const paymentWrapper = document.getElementById("payment-wrapper");
const paymentErrors = paymentWrapper.querySelectorAll('p[class*="error"]');
const paymentInputs = paymentWrapper.querySelectorAll("input");

const cardPaymentWrapper = document.getElementById("card-payment-wrapper");
const cashPaymentWrapper = document.getElementById("cash-payment-wrapper");

function validatePaymentChange() {
    const paymentValue = payment.value.trim();

    paymentInputs.forEach((input) => {
        input.value = "";
        input.classList.remove("error-border");
    });
    paymentErrors.forEach((error) => {
        error.style.display = "none";
    });
    cashExact.checked = false;
    cashNotExact.checked = false;
    cashAmountWrapper.style.display = "none";
    expiryDate.value = "";

    if (paymentValue === "Cash") {
        cardPaymentWrapper.style.display = "none";
        cashPaymentWrapper.style.display = "block";
        cashPaymentWrapper.classList.add("input-popout");
    } else if (paymentValue === "Card") {
        cardPaymentWrapper.style.display = "block";
        cardPaymentWrapper.classList.add("input-popout");
        cashPaymentWrapper.style.display = "none";
    } else {
        cardPaymentWrapper.style.display = "none";
        cashPaymentWrapper.style.display = "none";
    }
}

if (payment && paymentError) {
    payment.addEventListener("change", validatePaymentChange);
    clearErrorOnChange(payment, paymentError);
}


/* ######################################## Cash Option ######################################## */

const cashExact = document.getElementById("cash-exact");
const cashNotExact = document.getElementById("cash-not-exact");
const cashOptionError = document.querySelector(".cash-option-error");

function validateCashOptionChange() {
    cashAmount.value = "";
    if (cashExact.checked) {
        cashAmountError.style.display = "none";
        cashAmount.classList.remove("error-border");
        cashAmountWrapper.style.display = "none";
        cashOptionError.style.display = "none";
    } else if (cashNotExact.checked) {
        cashAmountWrapper.style.display = "block";
        cashAmountWrapper.classList.add("input-popout");
        cashOptionError.style.display = "none";
    }
}

if (cashExact && cashNotExact) {
    cashExact.addEventListener("change", validateCashOptionChange);
    cashNotExact.addEventListener("change", validateCashOptionChange);
}


/* ######################################## Cash Amount ######################################## */

const cashAmount = document.querySelector('input[name="cash-amount"]');
const cashAmountError = document.querySelector(".cash-amount-error");
const cashAmountWrapper = document.getElementById("cash-amount-wrapper");

function validateCashAmountInput() {
    let cashAmountValue = cashAmount.value;
    cashAmountValue = cashAmountValue.replace(/[^0-9.]/g, "");

    if (cashAmount.value.trim() === "") {
        cashAmountError.style.display = "none";
        cashAmount.classList.remove("error-border");
    }

    const firstDot = cashAmountValue.indexOf(".");
    if (firstDot !== -1) {
        cashAmountValue =
            cashAmountValue.slice(0, firstDot + 1) +
            cashAmountValue.slice(firstDot + 1).replace(/\./g, "");
    }

    const decimalIndex = cashAmountValue.indexOf(".");
    if (decimalIndex !== -1) {
        cashAmountValue = cashAmountValue.substring(0, decimalIndex + 3);
    }

    cashAmount.value = cashAmountValue;
}

function validateCashAmountChange() {
    let isValid = true;
    const total = parseFloat(document.querySelector('input[name="total-price"]').value);

    const cashAmountValue = cashAmount.value.trim();

    if (cashAmountValue === "") {
        cashAmountError.style.display = "none";
        cashAmount.classList.remove("error-border");
        return true;
    }

    const numericValue = parseFloat(cashAmountValue);
    const maxCash = total * 10;

    if (numericValue < total) {
        cashAmountError.innerHTML = `The amount must be at least $${total.toFixed(2)}. Please enter a higher amount.`;
        cashAmountError.style.display = "block";
        cashAmount.classList.add("error-border");
        isValid = false;
    } else if (numericValue > maxCash) {
        cashAmountError.innerHTML = `The amount cannot exceed $${maxCash.toFixed(2)}. Please enter a smaller amount.`;
        cashAmountError.style.display = "block";
        cashAmount.classList.add("error-border");
        isValid = false;
    } else {
        cashAmountError.style.display = "none";
        cashAmount.classList.remove("error-border");
    }

    return isValid;
}

if (cashAmount && cashAmountError) {
    cashAmount.addEventListener("input", validateCashAmountInput);

    cashAmount.addEventListener("change", function () {
        updateTotalPrice();
        validateCashAmountChange();
    });
    cashAmount.addEventListener("blur", function () {
        updateTotalPrice();
        validateCashAmountChange();
    });
}


/* ######################################## Card Name ######################################## */

const cardName = document.querySelector('input[name="card-name"]');
const cardNameError = document.querySelector(".card-name-error");

function validateCardNameInput(e) {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");

    e.target.value = value;
}

function validateCardNameChange() {
    const cardNameValue = cardName.value.trim();
    let isValid = true;

    if (cardNameValue === "") {
        cardNameError.style.display = "none";
        cardName.classList.remove("error-border");
    } else if (!cardNameValue.includes(" ")) {
        cardNameError.innerHTML = "Please enter full name on card!";
        cardNameError.style.display = "block";
        cardName.classList.add("error-border");
        isValid = false;
    }

    return isValid;
}

if (cardName && cardNameError) {
    cardName.addEventListener("change", validateCardNameChange);
    cardName.addEventListener("input", validateCardNameInput);
    clearErrorOnInput(cardName, cardNameError);
}


/* ######################################## Card Number ######################################## */

const cardNumber = document.querySelector('input[name="card-number"]');
const cardNumberError = document.querySelector(".card-number-error");

function validateCardNumberInput(e) {
    let digits = e.target.value.replace(/\D/g, "");

    if (digits.length > 16) digits = digits.slice(0, 16);

    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ");
    e.target.value = formatted;
}

function validateCardNumberChange() {
    if (!payment || payment.value !== "Card") return true;

    const digits = (cardNumber?.value || "").replace(/\D/g, "");
    if (digits.length === 0) return true;

    const ok = digits.length === 16;
    if (!ok) {
        cardNumberError.innerHTML = "Please enter a full 16-digit card number!";
        cardNumberError.style.display = "block";
        cardNumber.classList.add("error-border");
    } else {
        cardNumberError.style.display = "none";
        cardNumber.classList.remove("error-border");
    }
    return ok;
}

if (cardNumber && cardNumberError) {
    cardNumber.addEventListener("change", validateCardNumberChange);
    cardNumber.addEventListener("input", validateCardNumberInput);
    clearErrorOnInput(cardNumber, cardNumberError);
}


/* ######################################## Expiry Date ######################################## */

const expiryDate = document.querySelector('input[name="expiry-date"]');
const expiryDateError = document.querySelector(".expiry-date-error");

function validateExpiryDateInput(e) {
    const input = this;
    let raw = input.value;

    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;

    if (e && e.inputType === "deleteContentBackward") {
        if (/^\d{2}\/$/.test(raw)) {
            input.value = raw.slice(0, 2);
            return;
        }

        if (input.selectionStart === raw.length && /^\d{2}$/.test(raw)) {
            raw = raw.slice(0, 1);
        }
    }

    let value = raw.replace(/[^\d]/g, "");

    if (value.length > 4) {
        value = value.slice(0, 4);
    }

    if (value.length >= 1 && !/[01]/.test(value[0])) {
        value = "";
    }

    if (value.length === 2) {
        const month = parseInt(value, 10);
        if (month < currentMonth) {
            value = value.slice(0, 1);
        }
    }

    if (value.length >= 2) {
        const month = parseInt(value.slice(0, 2), 10);
        if (month < 1 || month > 12) {
            value = value.slice(0, 1);
        }
    }

    if (value.length === 3) {
        const y1 = parseInt(value[2], 10);
        if (isNaN(y1) || y1 < 2) {
            value = value.slice(0, 2);
        }
    }

    if (value.length === 4) {
        const yy = parseInt(value.slice(2), 10);
        if (isNaN(yy) || yy < currentYear) {
            value = value.slice(0, 3);
        }
    }

    if (value.length >= 3) {
        input.value = value.slice(0, 2) + "/" + value.slice(2);
    } else if (value.length === 2) {
        if (e && e.inputType === "deleteContentBackward") {
            input.value = value;
        } else {
            input.value = value + "/";
        }
    } else {
        input.value = value;
    }
}

function validateExpiryDateChange() {
    let isValid = true;

    if (expiryDate.value.length !== 5) {
        expiryDate.classList.add("error-border");
        expiryDateError.style.display = "block";
        expiryDateError.textContent = "Please enter a valid expiry date in MM/YY format!";
        isValid = false;
    } else {
        expiryDate.classList.remove("error-border");
        expiryDateError.style.display = "none";
    }

    return isValid;
}

if (expiryDate && expiryDateError) {
    expiryDate.addEventListener("input", validateExpiryDateInput);
    expiryDate.addEventListener("change", validateExpiryDateChange);
    clearErrorOnInput(expiryDate, expiryDateError);
}


/* ######################################## CVV ######################################## */

const cvv = document.querySelector('input[name="cvv"]');
const cvvError = document.querySelector(".cvv-error");

function validateCVVInput(e) {
    let value = e.target.value.replace(/[^0-9]/g, "");

    if (value.length > 4) {
        value = value.slice(0, 4);
    }

    if (value.length === 3 || value.length === 4) {
        cvvError.style.display = "none";
        cvv.classList.remove("error-border");
    }

    e.target.value = value;
}

function validateCVVChange() {
    if (!payment || payment.value !== "Card") {
        cvvError.style.display = "none";
        cvv.classList.remove("error-border");
        return true;
    }

    const cvvValue = (cvv?.value || "").trim();

    if (cvvValue === "") {
        cvvError.style.display = "none";
        cvv.classList.remove("error-border");
        return true;
    }

    const isValid = /^[0-9]{3,4}$/.test(cvvValue);

    if (!isValid) {
        cvvError.innerHTML = "Please enter a valid 3 or 4 digit CVV number.";
        cvvError.style.display = "block";
        cvv.classList.add("error-border");
    } else {
        cvvError.style.display = "none";
        cvv.classList.remove("error-border");
    }

    return isValid;
}

if (cvv && cvvError) {
    cvv.addEventListener("input", validateCVVInput);
    cvv.addEventListener("change", validateCVVChange);
    clearErrorOnInput(cvv, cvvError);
}


/* ######################################## Promo Code ######################################## */

const promoCode = document.querySelector('input[name="promo-code"]');
const wrongPromo = document.getElementById("wrong-promo");
const rightPromo = document.getElementById("right-promo");
const subtotalPromo = document.getElementById("subtotal-promo");

function promoCodesChange() {
    if (promoCode.value === "shop11080") {
        promoCode.classList.add("success-border");
        promoCode.classList.remove("error-border");
        subtotalVisible.classList.add("before-promo");
        subtotalPromo.style.display = "block";
        rightPromo.style.display = "block";
        wrongPromo.style.display = "none";
    } else if (promoCode.value === "") {
        promoCode.classList.remove("success-border");
        promoCode.classList.remove("error-border");
        subtotalVisible.classList.remove("before-promo");
        subtotalPromo.style.display = "none";
        rightPromo.style.display = "none";
        wrongPromo.style.display = "none";
    } else {
        promoCode.classList.remove("success-border");
        promoCode.classList.add("error-border");
        subtotalVisible.classList.remove("before-promo");
        subtotalPromo.style.display = "none";
        rightPromo.style.display = "none";
        wrongPromo.style.display = "block";
    }

    updateTotalPrice();
    validateCashAmountChange();
}

function promoCodesInput() {
    if (promoCode.classList.contains("error-border") || promoCode.classList.contains("success-border")) {
        promoCode.classList.remove("error-border");
        wrongPromo.style.display = "none";
        promoCode.classList.remove("success-border");
        rightPromo.style.display = "none";
    }
}

if (promoCode) {
    promoCode.addEventListener("change", promoCodesChange);
    promoCode.addEventListener("input", promoCodesInput);
}


/* ######################################## Form Submit ######################################## */

function orderFieldsErrors(e) {
    e.preventDefault();
    let isValid = true;
    const officeReceptionChecked = !Array.from(officeReception).some((radio) => radio.checked);

    if (!validateNameInput()) {
        isValid = false;
    } else if (!validateSurnameInput()) {
        isValid = false;
    } else if (!validateEmailInput() || !validateEmailChange()) {
        isValid = false;
    } else if (!validatePhoneInput() || !validatePhoneChange()) {
        isValid = false;
    } else if (!validateFloorNumberInput()) {
        isValid = false;
    } else if (!validateApartmentNumberInput()) {
        isValid = false;
    } else if (!validateCashAmountChange()) {
        isValid = false;
    } else if (!validateCardNameChange()) {
        isValid = false;
    } else if (payment.value === "Card" && !validateExpiryDateChange()) {
        isValid = false;
    }

    if (name.value.trim() === "") {
        nameError.innerHTML = "Please enter your name!";
        nameError.style.display = "block";
        name.classList.add("error-border");
        isValid = false;
    }

    if (surname.value.trim() === "") {
        surnameError.innerHTML = "Please enter your surname!";
        surnameError.style.display = "block";
        surname.classList.add("error-border");
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.innerHTML = "Please enter your email!";
        emailError.style.display = "block";
        email.classList.add("error-border");
        isValid = false;
    }

    if (phone.value.trim() === "") {
        phoneError.innerHTML = "Please enter your phone number!";
        phoneError.style.display = "block";
        phone.classList.add("error-border");
        isValid = false;
    }

    if (deliveryOption.value === "") {
        deliveryOptionError.innerHTML = "Please select the delivery option for your delivery!";
        deliveryOptionError.style.display = "block";
        deliveryOption.classList.add("error-border");
        isValid = false;
    } else if (deliveryOption.value === "Standard Delivery") {
        if (borough.value === "") {
            boroughError.innerHTML = "Please select the borough for your delivery!";
            boroughError.style.display = "block";
            borough.classList.add("error-border");
            isValid = false;
        }
        if (address.value.trim() === "") {
            addressError.innerHTML = "Please select the address for your delivery!";
            addressError.style.display = "block";
            address.classList.add("error-border");
            isValid = false;
        }
        if (locationType.value === "") {
            locationTypeError.innerHTML = "Please choose the location type for your delivery!";
            locationTypeError.style.display = "block";
            locationType.classList.add("error-border");
            isValid = false;
        } else if (locationType.value === "Apartment") {
            if (floorNumber.value.trim() === "") {
                floorNumberError.innerHTML = "Please enter a floor number of your apartment!";
                floorNumberError.style.display = "block";
                floorNumber.classList.add("error-border");
                isValid = false;
            }
            if (apartmentNumber.value.trim() === "") {
                apartmentNumberError.innerHTML = "Please enter the number of your apartment!";
                apartmentNumberError.style.display = "block";
                apartmentNumber.classList.add("error-border");
                isValid = false;
            }
        } else if (locationType.value === "Office") {
            if (officeName.value.trim() === "") {
                officeNameError.innerHTML = "Please enter the name of the building!";
                officeNameError.style.display = "block";
                officeName.classList.add("error-border");
                isValid = false;
            }
            if (officeReceptionChecked) {
                officeReceptionError.innerHTML = "Please select one of the options!";
                officeReceptionError.style.display = "block";
                isValid = false;
            }
        } else if (locationType.value === "Other") {
            if (addressDetails.value.trim() === "") {
                addressDetailsError.innerHTML = "Please enter the details of your address!";
                addressDetailsError.style.display = "block";
                addressDetails.classList.add("error-border");
                isValid = false;
            }
        }
    } else if (deliveryOption.value === "Same-Day Delivery") {
        if (borough.value === "") {
            boroughError.innerHTML = "Please select the borough for your delivery!";
            boroughError.style.display = "block";
            borough.classList.add("error-border");
            isValid = false;
        }
        if (address.value.trim() === "") {
            addressError.innerHTML = "Please select the address for your delivery!";
            addressError.style.display = "block";
            address.classList.add("error-border");
            isValid = false;
        }
        if (locationType.value === "") {
            locationTypeError.innerHTML = "Please choose the location type for your delivery!";
            locationTypeError.style.display = "block";
            locationType.classList.add("error-border");
            isValid = false;
        } else if (locationType.value === "Apartment") {
            if (floorNumber.value.trim() === "") {
                floorNumberError.innerHTML = "Please enter a floor number of your apartment!";
                floorNumberError.style.display = "block";
                floorNumber.classList.add("error-border");
                isValid = false;
            }
            if (apartmentNumber.value.trim() === "") {
                apartmentNumberError.innerHTML = "Please enter the number of your apartment!";
                apartmentNumberError.style.display = "block";
                apartmentNumber.classList.add("error-border");
                isValid = false;
            }
        } else if (locationType.value === "Office") {
            if (officeName.value.trim() === "") {
                officeNameError.innerHTML = "Please enter the name of the building!";
                officeNameError.style.display = "block";
                officeName.classList.add("error-border");
                isValid = false;
            }
            if (officeReceptionChecked) {
                officeReceptionError.innerHTML = "Please select one of the options!";
                officeReceptionError.style.display = "block";
                isValid = false;
            }
        } else if (locationType.value === "Other") {
            if (addressDetails.value.trim() === "") {
                addressDetailsError.innerHTML = "Please enter the details of your address!";
                addressDetailsError.style.display = "block";
                addressDetails.classList.add("error-border");
                isValid = false;
            }
        }
    } else if (deliveryOption.value === "Scheduled Delivery") {
        if (deliveryDay.value === "") {
            deliveryDayError.innerHTML = "Please select the day for your delivery!";
            deliveryDayError.style.display = "block";
            deliveryDayWrapper.classList.add("error-border");
            isValid = false;
        }
        if (deliveryTime.value === "") {
            deliveryTimeError.innerHTML = "Please select the time for your delivery!";
            deliveryTimeError.style.display = "block";
            deliveryTimeWrapper.classList.add("error-border");
            isValid = false;
        }
        if (borough.value === "") {
            boroughError.innerHTML = "Please select the borough for your delivery!";
            boroughError.style.display = "block";
            borough.classList.add("error-border");
            isValid = false;
        }
        if (address.value.trim() === "") {
            addressError.innerHTML = "Please select the address for your delivery!";
            addressError.style.display = "block";
            address.classList.add("error-border");
            isValid = false;
        }
        if (locationType.value === "") {
            locationTypeError.innerHTML = "Please choose the location type for your delivery!";
            locationTypeError.style.display = "block";
            locationType.classList.add("error-border");
            isValid = false;
        } else if (locationType.value === "Apartment") {
            if (floorNumber.value.trim() === "") {
                floorNumberError.innerHTML = "Please enter a floor number of your apartment!";
                floorNumberError.style.display = "block";
                floorNumber.classList.add("error-border");
                isValid = false;
            }
            if (apartmentNumber.value.trim() === "") {
                apartmentNumberError.innerHTML = "Please enter the number of your apartment!";
                apartmentNumberError.style.display = "block";
                apartmentNumber.classList.add("error-border");
                isValid = false;
            }
        } else if (locationType.value === "Office") {
            if (officeName.value.trim() === "") {
                officeNameError.innerHTML = "Please enter the name of the building!";
                officeNameError.style.display = "block";
                officeName.classList.add("error-border");
                isValid = false;
            }
            if (officeReceptionChecked) {
                officeReceptionError.innerHTML = "Please select one of the options!";
                officeReceptionError.style.display = "block";
                isValid = false;
            }
        } else if (locationType.value === "Other") {
            if (addressDetails.value.trim() === "") {
                addressDetailsError.innerHTML = "Please enter the details of your address!";
                addressDetailsError.style.display = "block";
                addressDetails.classList.add("error-border");
                isValid = false;
            }
        }
    }

    if (payment.value === "") {
        paymentError.innerHTML = "Please select the type of payment!";
        paymentError.style.display = "block";
        payment.classList.add("error-border");
        isValid = false;
    } else if (payment.value === "Cash") {
        if (!cashExact.checked && !cashNotExact.checked) {
            cashOptionError.innerHTML = "Please select one of the options!";
            cashOptionError.style.display = "block";
            isValid = false;
        } else if (cashNotExact.checked) {
            cashOptionError.style.display = "none";
            if (cashAmount.value.trim() === "") {
                cashAmountError.innerHTML = "Please enter the closest amount that you have!";
                cashAmountError.style.display = "block";
                cashAmount.classList.add("error-border");
                isValid = false;
            }
        } else if (cashExact.checked) {
            cashAmountError.style.display = "none";
            cashOptionError.style.display = "none";
        }
    } else if (payment.value === "Card") {
        if (cardName.value.trim() === "") {
            cardNameError.innerHTML = "Please enter the name on the card!";
            cardNameError.style.display = "block";
            cardName.classList.add("error-border");
            isValid = false;
        }
        if (cardNumber.value.trim() === "") {
            cardNumberError.innerHTML = "Please enter the card number!";
            cardNumberError.style.display = "block";
            cardNumber.classList.add("error-border");
            isValid = false;
        }
        if (expiryDate.value === "") {
            expiryDateError.innerHTML = "Please enter the expiry date of your card!";
            expiryDateError.style.display = "block";
            expiryDate.classList.add("error-border");
            isValid = false;
        }
        if (cvv.value === "") {
            cvvError.innerHTML = "Please enter the CVV number!";
            cvvError.style.display = "block";
            cvv.classList.add("error-border");
            isValid = false;
        }
    }

    if (isValid && payment.value === "Card" && cardNumber.value.trim() !== "") {
        if (!validateCardNumberChange()) {
            isValid = false;
        }
    }
    if (isValid && payment.value === "Card" && cvv.value.trim() !== "") {
        if (!validateCVVChange()) {
            isValid = false;
        }
    }

    if (!isValid) {
        const visibleErrors = Array.from(
            orderInnerWrapper.querySelectorAll('p[class$="-error"]')
        ).filter((error) => {
            const styles = window.getComputedStyle(error);

            return (
                error.textContent.trim() !== "" &&
                styles.display !== "none" &&
                styles.visibility !== "hidden" &&
                error.getClientRects().length > 0
            );
        });

        if (visibleErrors.length) {
            visibleErrors.sort((a, b) => {
                return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
            });

            const firstError = visibleErrors[0];

            const containerRect = orderInnerWrapper.getBoundingClientRect();
            const errorRect = firstError.getBoundingClientRect();

            const scrollTop =  orderInnerWrapper.scrollTop + (errorRect.top - containerRect.top) - orderInnerWrapper.clientHeight / 2 + firstError.offsetHeight / 2;

            orderInnerWrapper.scrollTo({
                top: Math.max(0, scrollTop),
                behavior: "smooth",
            });
        }
    } else {
        const selectedOfficeReception = document.querySelector('input[name="office-reception"]:checked');
        const officeReceptionValue = selectedOfficeReception ? selectedOfficeReception.closest('label').textContent.trim() : null;

        let cashOptionValue = null;
        if (document.querySelector('input[id="cash-exact"]:checked')) {
            cashOptionValue = "Exact";
        } else if (document.querySelector('input[id="cash-not-exact"]:checked')) {
            cashOptionValue = "Not Exact";
        }

        $.ajax({
            url: "/WebShop/api/form-handling.php",
            type: "POST",
            data: {
                "order-button": 1,
                name: name.value,
                surname: surname.value,
                email: email.value,
                dial_code: orderItiPhone.getSelectedCountryData().dialCode,
                phone: phone.value,
                delivery_option: deliveryOption.value,
                delivery_day: deliveryDay.value,
                delivery_time: deliveryTime.value,
                borough: borough.value,
                address: address.value,
                location_type: locationType.value,
                apartment_number: apartmentNumber.value,
                floor_number: floorNumber.value,
                office_name: officeName.value,
                office_reception: officeReceptionValue,
                address_details: addressDetails.value,
                payment: payment.value,
                cash_option: cashOptionValue,
                cash_amount: cashAmount.value,
                card_name: cardName.value,
                card_number: cardNumber.value,
                expiry_date: expiryDate.value,
                promo_code: promoCode.value,
                message: $('textarea[name="message"]').val(),
                subtotal: subtotalHidden.value,
                delivery_fee: deliveryFeeHidden.value,
                small_order_fee: smallFeeHidden.value,
                same_day_fee: sameDayFeeHidden.value,
                total_price: $('input[name="total-price"]').val(),
            },
            success: function(response) {
                if (response === "success") {
                    cartBlur.classList.remove("active-blur");
                    orderWrapper.classList.remove("active-box");
                    setTimeout(() => {
                        loaderBlur.classList.add("active-blur");
                        loaderDots.forEach((dot) => dot.classList.add("loader-fade"));
                    }, 100);
                    setTimeout(() => {
                        successWrapper.classList.add("active-box");
                    }, 2500);
                } else {
                    formSentBlur.classList.add("active-blur");
                    failedFormSent.classList.add("active-box");
                    setTimeout(() => {
                        formSentBlur.classList.remove("active-blur");
                        failedFormSent.classList.remove("active-box");
                    }, 2000);
                }
            },
            error: function() {
                formSentBlur.classList.add("active-blur");
                failedFormSent.classList.add("active-box");
                setTimeout(() => {
                    formSentBlur.classList.remove("active-blur");
                    failedFormSent.classList.remove("active-box");
                }, 2000);
            },
        });
    }
}

if (orderForm) {
    orderForm.addEventListener("submit", orderFieldsErrors);
}


/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||| Functions |||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */

/* |||||||||||||||||||||||||||||||||||||||||||||||||| Shopping Cart |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Shopping Cart Popout ######################################## */

const cartBlur = document.querySelector(".shopping-cart-blur");
const cartWrapper = document.querySelector(".shopping-cart-wrapper");
const cartIcon = document.querySelector(".header-icons div");
const cartClose = document.querySelector(".shopping-cart-blur .fa-circle-xmark");
const cartExclamationIcon = document.querySelector(".fa-circle-exclamation");
let cart = [];

function cartPop() {
    cartIcon.addEventListener("click", function(event) {
        event.preventDefault();
        cartBlur.classList.add("active-blur");
        cartWrapper.offsetWidth;
        setTimeout(() => {
            cartWrapper.classList.add("active-box");
        }, 50);
    });

    cartClose.addEventListener("click", function() {
        const orderForm = document.querySelector("#order-form");
        const orderInputs = orderForm.querySelectorAll("input");
        const orderSelects = orderForm.querySelectorAll("select");
        const orderTextarea = orderForm.querySelector("textarea");
        const orderArrows = orderForm.querySelectorAll(".fa-caret-down");
        const orderParagraphs = orderForm.querySelectorAll('p[class*="error"]');

        cartBlur.classList.remove("active-blur");
        orderBackButton.classList.remove("active");

        if (cartWrapper.classList.contains("active-box")) {
            cartWrapper.classList.remove("active-box");
        } else {
            orderWrapper.classList.remove("active-box");
            setTimeout(() => {
                inStoreDelivery.style.display = "none";
                minimumOrder.style.display = "none";
                scheduledDeliveryWrapper.style.display = "none";
                orderDeliveryWrapper.style.display = "none";
                officeWrapper.style.display = "none";
                apartmentWrapper.style.display = "none";
                otherWrapper.style.display = "none";
                cashPaymentWrapper.style.display = "none";
                cardPaymentWrapper.style.display = "none";
                sameDayWrapper.style.display = "none";
                deliveryFeeWrapper.style.display = "none";
                smallOrderWrapper.style.display = "none";
                orderTextarea.value = "";
                deliveryFeeHidden.value = 0.00;
                orderInputs.forEach((input) => {
                    input.value = "";
                    input.classList.remove("error-border");
                });
                orderSelects.forEach((select) => {
                    select.value = "";
                    select.classList.remove("error-border");
                    select.style.color = "lightgrey";
                });
                orderArrows.forEach((arrow) => {
                    arrow.style.color = "lightgrey";
                });
                orderParagraphs.forEach((paragraph) => {
                    paragraph.style.display = "none";
                });
            }, 300);
        }
    });
}

if (cartIcon) {
    cartPop();
}


/* ######################################## Shopping Cart Display ######################################## */

function renderCart() {
    if (cart.length === 0) {
        cartWrapper.innerHTML = `
            <div class="empty-cart-wrapper">
                <div class="cart-title">
                    <h3>Your Cart</h3>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="empty-cart">
                    <img src="/WebShop/assets/images/main/empty-cart.jpg">
                    <h3>Your Cart is <span>Empty</span></h3>
                    <p>Add items to the cart before you proceed to checkout</p>
                    <a href="/WebShop/pages/content/products.php" class="button button-primary">Go Shopping<i class="fa-solid fa-cart-shopping"></i></a>
                </div>
            </div>
        `;
        cartExclamationIcon.style.display = "none";
        return;
    }

    cartExclamationIcon.style.display = "block";

    let cartItemsHTML = "";
    let total = 0;

    cart.forEach((item) => {
        let subtotal = item.price * item.quantity;
        total += subtotal;

        let priceHTML = "";

        if (item.discountPrice !== null) {
            priceHTML = `<div>
                            <p class="regular-price">$${(item.regularPrice * item.quantity).toFixed(2)}</p>
                            <p class="final-price">$${subtotal.toFixed(2)}</p>
                        </div>`;
        } else {
            priceHTML = `<p class="final-price">$${subtotal.toFixed(2)}</p>`;
        }

        cartItemsHTML += `<div class="cart-item" data-id="${item.id}" data-table="${item.table}">
                            <div class="cart-item-info">
                                <div class="cart-item-image" style="background-image: url('${item.image}');"></div>
                                <div class="cart-item-details">
                                    <h5>${item.name}</h5>
                                    ${priceHTML}
                                    <p class="unit-price" style="display: none;">${item.price}</p>
                                </div>
                            </div>
                            <div class="quantity-wrapper">
                                <i class="fa-solid fa-circle-minus"></i>
                                <i class="fa-solid fa-trash-can" data-id="${item.id}" data-table="${item.table}"></i>
                                <p class="cart-item-quantity">${item.quantity}</p>
                                <i class="fa-solid fa-circle-plus"></i>
                                <input type="hidden" name="cart-item-quantity" value="${item.quantity}">
                            </div>
                           </div>`;
    });

    cartWrapper.innerHTML = `<div class="cart-title">
                                <h3>Your Cart</h3>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div class="cart-items-wrapper">
                                <div class="cart-items">${cartItemsHTML}</div>
                            </div>
                            <button type="submit" name="checkout-button" class="button-primary">
                                Continue to Checkout:
                                <span class="cart-items-price">$${total.toFixed(2)}</span>
                            </button>`;

    productQuantity();
}


/* ######################################## Cart Data ######################################## */

function normalizeCartData(data) {
    return data.map((item) => ({
        id: item.item_id,
        table: item.item_table,
        name: item.item_name,
        price: parseFloat(item.item_price),
        regularPrice: item.item_regular_price !== null && item.item_regular_price !== "" ? parseFloat(item.item_regular_price) : null,
        discountPrice: item.item_discount_price !== null && item.item_discount_price !== "" ? parseFloat(item.item_discount_price) : null,
        image: item.item_image,
        quantity: parseInt(item.item_quantity),
    }));
}

function preloadImage(src) {
    const image = new Image();
    image.src = src;

    if (image.decode) {
        image.decode().catch(() => {});
    }
}

function preloadEmptyCartImage() {
    preloadImage("/WebShop/assets/images/main/empty-cart.jpg");
}

function preloadCartImages() {
    cart.forEach((item) => {
        preloadImage(`${item.image}`);
    });
}

function fetchCart() {
    fetch("/WebShop/api/shopping_cart.php?action=fetch")
        .then((response) => response.json())
        .then((data) => {
            if (!Array.isArray(data)) {
                console.error("Cart API error:", data);
                return;
            }

            cart = normalizeCartData(data);

            preloadCartImages();
            renderCart();
        })
        .catch((err) => {
            console.error("Error loading cart", err);
        });
}

if (cartWrapper) {
    preloadEmptyCartImage();
    fetchCart();
}


/* ######################################## Add Items To Cart ######################################## */

document.addEventListener("click", function(event) {
    const button = event.target.closest(".product-button-wrapper button");

    if (!button) {
        return;
    }

    if (button.classList.contains("clicked")) {
        return;
    }

    let id = button.dataset.id;
    let name = button.dataset.name;
    let price = button.dataset.price;
    let regularPrice = button.dataset.regularPrice;
    let discountPrice = button.dataset.discountPrice;
    let image = button.dataset.image;
    let table = button.dataset.table;

    fetch("/WebShop/api/shopping_cart.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            action: "add",
            id,
            table,
            name,
            price,
            regular_price: regularPrice,
            discount_price: discountPrice,
            image
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (!Array.isArray(data)) {
                console.error("Cart API error:", data);
                return;
            }

            cart = normalizeCartData(data);

            preloadCartImages();
            renderCart();
        });

    button.classList.add("clicked");

    setTimeout(() => {
        button.classList.remove("clicked");
    }, 1500);
});


/* ######################################## Product Quantity ######################################## */

function productQuantity() {
    const cartItems = document.querySelectorAll(".cart-item");
    const itemsPrice = document.querySelector(".cart-items-price");

    cartItems.forEach((item) => {
        const quantityVisible = item.querySelector(".cart-item-quantity");
        const quantityHidden = item.querySelector('input[name="cart-item-quantity"]');
        const regularPrice = item.querySelector(".regular-price");
        const finalPrice = item.querySelector(".final-price");
        const unitPrice = item.querySelector(".unit-price");

        if (quantityVisible && quantityHidden && finalPrice && unitPrice) {
            let price = parseFloat(unitPrice.textContent);
            let quantity = parseInt(quantityVisible.textContent);

            const decrementButton = item.querySelector(".fa-circle-minus");
            const incrementButton = item.querySelector(".fa-circle-plus");
            const trashButton = item.querySelector(".fa-trash-can");

            function toggleIcons() {
                if (quantity > 1) {
                    decrementButton.style.display = "block";
                    trashButton.style.display = "none";
                } else {
                    decrementButton.style.display = "none";
                    trashButton.style.display = "block";
                }
            }

            function update(qty, shouldAnimateQuantity = false) {
                quantity = qty;
                quantityVisible.textContent = quantity;
                quantityHidden.value = quantity;

                if (shouldAnimateQuantity) {
                    quantityVisible.classList.remove("quantity-pop");
                    quantityVisible.offsetWidth;
                    quantityVisible.classList.add("quantity-pop");
                }

                const subtotal = price * quantity;
                finalPrice.textContent = "$" + subtotal.toFixed(2);

                if (regularPrice) {
                    const baseRegular = cart.find((p) => String(p.id) === String(item.dataset.id) && String(p.table) === String(item.dataset.table))?.regularPrice;

                    if (baseRegular !== null && baseRegular !== undefined) {
                        regularPrice.textContent = "$" + (baseRegular * quantity).toFixed(2);
                    }
                }

                toggleIcons();

                let productsTotalPrice = 0;

                document.querySelectorAll(".cart-item").forEach((cartItem) => {
                    const itemSubtotal = parseFloat(cartItem.querySelector(".final-price").textContent.replace("$", ""));
                    productsTotalPrice += itemSubtotal;
                });

                itemsPrice.textContent = `$${productsTotalPrice.toFixed(2)}`;            

                let id = item.dataset.id;
                let table = item.dataset.table;
                let cartItem = cart.find((p) => String(p.id) === String(id) && String(p.table) === String(table),);
                if (cartItem) {
                    cartItem.quantity = quantity;
                }

                fetch("/WebShop/api/shopping_cart.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams({ action: "update_quantity", id, table, quantity }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (!Array.isArray(data)) {
                            console.error("Cart API error:", data);
                            return;
                        }

                        cart = normalizeCartData(data);
                    })
                    .catch((err) => {
                        console.error("Error updating quantity", err);
                    });
            }

            if (incrementButton && decrementButton && trashButton) {
                incrementButton.addEventListener("click", () => {
                    if (quantity < 99) {
                        resetDeliveryFields();
                        update(quantity + 1, true);
                    }
                });

                decrementButton.addEventListener("click", () => {
                    if (quantity > 1) {
                        resetDeliveryFields();
                        update(quantity - 1);
                    }
                });

                trashButton.addEventListener("click", () => {
                    resetDeliveryFields();
                    let id = item.dataset.id;
                    let table = item.dataset.table;

                    fetch("/WebShop/api/shopping_cart.php", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams({ action: "remove", id, table }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (!Array.isArray(data)) {
                                console.error("Cart API error:", data);
                                return;
                            }

                            cart = normalizeCartData(data);

                            renderCart();
                        });
                });

                toggleIcons();
            }
        }
    });
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Order Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

/* ######################################## Order Form Popup ######################################## */

const orderWrapper = document.querySelector(".order-wrapper");

const subtotalVisible = document.getElementById("subtotal");
const subtotalHidden = document.querySelector('input[name="subtotal"]');

function orderFormPop(e) {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalPrices = document.querySelectorAll(".total-price");
    let subtotal = 0;

    cartItems.forEach((item) => {
        const itemSubtotal = parseFloat(item.querySelector(".final-price").textContent.replace("$", ""));
        subtotal += itemSubtotal;
    });

    if (e.target.closest('button[name="checkout-button"]')) {
        e.preventDefault();
        cartWrapper.classList.remove("active-box");
        orderInnerWrapper.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setTimeout(() => {
            orderWrapper.classList.add("active-box");
            orderBackButton.classList.add("active");
        }, 600);

        subtotalVisible.textContent = `$${subtotal.toFixed(2)}`;
        subtotalHidden.value = subtotal.toFixed(2);
        totalPrices.forEach((el) => {
            el.innerHTML = `$${subtotal.toFixed(2)}`;
        });
    }
}

if (cartWrapper) {
    cartWrapper.addEventListener("click", orderFormPop);
}


/* ######################################## Delivery Fields Reset ######################################## */

function resetDeliveryFields() {
    deliveryOption.value = "";
    deliveryOption.style.color = "lightgrey";
    const deliveryOptionArrow = deliveryOption.parentElement.querySelector('.fa-caret-down');
    deliveryOptionArrow.style.color = 'lightgrey';
    orderDeliveryWrapper.style.display = "none";
    scheduledDeliveryWrapper.style.display = "none";
    sameDayWrapper.style.display = "none";
    smallOrderWrapper.style.display = "none";
    deliveryFeeWrapper.style.display = "none";
    deliveryFeeHidden.value = 0.00;
    sameDayFeeHidden.value = 0.00;
    smallFeeHidden.value = 0.00;
    minimumOrder.style.display = 'none';
    orderDeliveryErrors.forEach((error) => {
        error.style.display = "none";
    });
    orderDeliveryInputs.forEach((input) => {
        input.value = "";
        input.classList.remove("error-border");
    });
    orderDeliverySelects.forEach((select) => {
        select.value = "";
        select.style.color = "lightgrey";
        select.classList.remove("error-border");
    });
    orderDeliveryIcons.forEach((icon) => {
        icon.style.color = "lightgrey";
    });
    officeReception.forEach((radio) => {
        radio.checked = false;
    });
}


/* ######################################## Order Form Back ######################################## */

const orderBackButton = document.querySelector(".shopping-cart-blur .fa-circle-left");

if (orderBackButton) {
    orderBackButton.addEventListener("click", function() {
        orderWrapper.classList.remove("active-box");
        orderBackButton.classList.remove("active");
        setTimeout(() => {
            cartWrapper.classList.add("active-box");
        }, 600);
    });
}


/* ######################################## Delivery Fee ######################################## */

const deliveryFeeVisible = document.getElementById("delivery-fee");
const deliveryFeeHidden = document.querySelector('input[name="delivery-fee"]');

const deliveryFees = {
    Barajevo: 8,
    Batajnica: 2,
    Borča: 5,
    Čukarica: 3,
    Grocka: 8,
    Lazarevac: 8,
    Mladenovac: 8,
    "Novi Beograd": 2,
    Obrenovac: 8,
    Palilula: 4,
    Rakovica: 5,
    "Savski venac": 3,
    Sopot: 8,
    "Stari grad": 3,
    Surčin: 2,
    Voždovac: 4,
    Vračar: 4,
    Zemun: 1,
    Zvezdara: 5,
};

function updateDeliveryFee() {
    const boroughValue = borough.value;
    const fee = deliveryFees[boroughValue] || 0;

    deliveryFeeVisible.textContent = `$${fee.toFixed(2)}`;
    deliveryFeeHidden.value = fee.toFixed(2);

    updateTotalPrice();
    validateCashAmountChange();
}


/* ######################################## Order Total Price ######################################## */

const minimumOrderValues = {
    Barajevo: 50,
    Čukarica: 10,
    Grocka: 50,
    Lazarevac: 50,
    Mladenovac: 50,
    "Novi Beograd": 5,
    Obrenovac: 50,
    Palilula: 12,
    Rakovica: 15,
    "Savski venac": 10,
    Sopot: 50,
    "Stari grad": 8,
    Surčin: 8,
    Voždovac: 12,
    Vračar: 12,
    Zemun: 5,
    Zvezdara: 15,
};

const sameDayFeeHidden = document.querySelector('input[name="same-day-fee"]');

const smallOrderWrapper = document.getElementById("small-order-wrapper");
const smallFeeHidden = document.querySelector('input[name="small-order-fee"]');
const minimumOrder = document.getElementById("minimum-order");

function updateTotalPrice() {
    const boroughValue = borough.value;
    const minimumOrderValue = minimumOrderValues[boroughValue] || 0;
    const cartItems = document.querySelectorAll(".cart-item");
    const totalPrices = document.querySelectorAll(".total-price");
    let subtotal = 0;
    let total = 0;

    cartItems.forEach((item) => {
        const itemSubtotal = parseFloat(item.querySelector(".final-price").textContent.replace("$", ""));
        subtotal += itemSubtotal;
    });

    if (promoCode.value === "shop11080") {
        subtotal = subtotal * 0.9;
        subtotalPromo.innerHTML = `$${subtotal.toFixed(2)}`;
        subtotalHidden.value = subtotal.toFixed(2);
    }

    subtotal = parseFloat(subtotal.toFixed(2));
    total = subtotal + parseFloat(deliveryFeeHidden.value || 0);

    if (boroughValue && minimumOrderValue > 0 && parseFloat(subtotal) < minimumOrderValue) {
        minimumOrder.textContent = "For " + boroughValue + ", your subtotal must be at least $" + minimumOrderValue + " to avoid a small order fee.";
        minimumOrder.style.display = "block";
        smallOrderWrapper.style.display = "block";
        smallFeeHidden.value = 2.00;
        total += 2.00;
    } else {
        minimumOrder.style.display = "none";
        smallOrderWrapper.style.display = "none";
        smallFeeHidden.value = 0.00;
    }

    if (sameDayWrapper.classList.contains("active-class")) {
        sameDayFeeHidden.value = 1.00;
        total += 1.00;
    } else {
        sameDayFeeHidden.value = 0.00;
    }

    subtotalHidden.value = subtotal;
    document.querySelector('input[name="total-price"]').value = total.toFixed(2);
    totalPrices.forEach((el) => {
        el.innerHTML = "$" + total.toFixed(2);
    });
}

if (orderWrapper) {
    updateTotalPrice();
}


/* ######################################## Loader Animation & Success Popup ######################################## */

const loaderBlur = document.querySelector(".loader-blur");
const loaderDots = document.querySelectorAll(".loader-wrapper span");

const successWrapper = document.querySelector(".success-wrapper");
const successWrapperButton = document.querySelector('.success-wrapper button');

if (successWrapperButton) {
    successWrapperButton.addEventListener("click", function(e) {
        e.preventDefault();
        loaderBlur.classList.remove("active-blur");
        successWrapper.classList.remove("active-box");

        localStorage.setItem("showReviewPopup", "1");

        setTimeout(() => {
            window.location.href = "/WebShop/pages/content/products.php";
        }, 100);
    });
}


/* ######################################## Review Popup ######################################## */

const reviewBlur = document.querySelector(".review-blur");
const reviewWrapper = document.querySelector(".review-wrapper");
const reviewClose = document.querySelector(".review-blur .fa-circle-xmark");

function reviewPop() {
    const reviewBlur = document.querySelector(".review-blur");
    const reviewWrapper = document.querySelector(".review-wrapper");

    if (localStorage.getItem("showReviewPopup") === "1") {
        if (reviewBlur && reviewWrapper) {
            setTimeout(() => {
                reviewBlur.classList.add("active-blur");
                reviewWrapper.classList.add("active-box");
                localStorage.removeItem("showReviewPopup");
            }, 3000);
        }
    }
}

if (reviewClose) {
    reviewClose.addEventListener("click", function() {
        setTimeout(() => {
            reviewBlur.classList.remove("active-blur");
            reviewWrapper.classList.remove("active-box");
        }, 300);
})
}

if (reviewBlur) {
    reviewPop();
}
