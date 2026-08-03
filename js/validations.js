/* |||||||||||||||||||||||||||||||||||||||||||||||||| Career Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

const careerForm = document.querySelector("#career-form");

if (careerForm) {

    /* ######################################## Name ######################################## */

    const careerName = careerForm.querySelector('input[name="career-name"]');
    const careerNameError = careerForm.querySelector(".career-name-error");

    function validateCareerName() {
        const careerNameValue = careerName.value.trim();
        let isValid = true;

        if (careerNameValue === "") {
            careerNameError.style.display = "none";
            careerName.classList.remove("error-border");
        }

        for (let i = careerNameValue.length - 1; i >= 0; i--) {
            const char = careerNameValue[i];
            if (/\d/.test(char)) {
                careerNameError.style.display = "block";
                careerNameError.innerHTML = "Name cannot contain numbers! Please enter a valid name.";
                careerName.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(char)) {
                careerNameError.style.display = "block";
                careerNameError.innerHTML = "Name cannot contain special characters! Please enter a valid name.";
                careerName.classList.add("error-border");
                isValid = false;
                break;
            }
            if (char === " ") {
                careerNameError.style.display = "block";
                careerNameError.innerHTML = "Please enter just your name!";
                careerName.classList.add("error-border");
                isValid = false;
                break;
            }

            if (isValid) {
                careerNameError.style.display = "none";
                careerName.classList.remove("error-border");
            }
        }

        return isValid;
    }

    if (careerName && careerNameError) {
        careerName.addEventListener("input", validateCareerName);
    }


    /* ######################################## Surname ######################################## */

    const careerSurname = careerForm.querySelector('input[name="career-surname"]');
    const careerSurnameError = careerForm.querySelector(".career-surname-error");

    function validateCareerSurname() {
        const careerSurnameValue = careerSurname.value.trim();
        let isValid = true;

        if (careerSurnameValue === "") {
            careerSurnameError.style.display = "none";
            careerSurname.classList.remove("error-border");
        }

        for (let i = careerSurnameValue.length - 1; i >= 0; i--) {
            const char = careerSurnameValue[i];
            if (/\d/.test(char)) {
                careerSurnameError.style.display = "block";
                careerSurnameError.innerHTML = "Surname cannot contain numbers! Please enter a valid surname.";
                careerSurname.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(char)) {
                careerSurnameError.style.display = "block";
                careerSurnameError.innerHTML = "Surname cannot contain special characters! Please enter a valid surname.";
                careerSurname.classList.add("error-border");
                isValid = false;
                break;
            }
            if (char === " ") {
                careerSurnameError.style.display = "block";
                careerSurnameError.innerHTML = "Please enter just your surname!";
                careerSurname.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        if (isValid) {
            careerSurnameError.style.display = "none";
            careerSurname.classList.remove("error-border");
        }

        return isValid;
    }

    if (careerSurname && careerSurnameError) {
        careerSurname.addEventListener("input", validateCareerSurname);
    }


    /* ######################################## Email ######################################## */

    const careerEmail = careerForm.querySelector('input[name="career-email"]');
    const careerEmailError = careerForm.querySelector(".career-email-error");

    function validateCareerEmailInput() {
        const careerEmailValue = careerEmail.value.trim();
        const atCount = (careerEmailValue.match(/@/g) || []).length;
        let isValid = true;

        if (careerEmailValue === "") {
            careerEmailError.style.display = "none";
            careerEmail.classList.remove("error-border");
        }

        for (let i = careerEmailValue.length - 1; i >= 0; i--) {
            const char = careerEmailValue[i];
            if (char === " ") {
                careerEmailError.style.display = "block";
                careerEmailError.innerHTML = "Email cannot contain spaces! Please enter a valid email.";
                careerEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (char === "@" && atCount > 1) {
                careerEmailError.style.display = "block";
                careerEmailError.innerHTML = "Email can only contain one '@' symbol! Please enter a valid email";
                careerEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^a-zA-Z0-9._%+-@]/.test(char) || /[\/;:=]/.test(char)) {
                careerEmailError.style.display = "block";
                careerEmailError.innerHTML = "Invalid email format!! Please enter a valid email.";
                careerEmail.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        if (isValid) {
            careerEmailError.style.display = "none";
            careerEmail.classList.remove("error-border");
        }

        return isValid;
    }

    function validateCareerEmailChange() {
        const careerEmailValue = careerEmail.value.trim();
        const atCount = (careerEmailValue.match(/@/g) || []).length;
        let isValid = true;

        if (careerEmailValue === "") {
            careerEmailError.style.display = "none";
            careerEmail.classList.remove("error-border");
        } else if (!careerEmailValue.includes("@")) {
            careerEmailError.innerHTML = "Email must contain '@'! Please enter a valid email";
            careerEmailError.style.display = "block";
            careerEmail.classList.add("error-border");
            isValid = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@/.test(careerEmailValue)) {
            careerEmailError.innerHTML = "Invalid email format before '@'! Please enter a valid email";
            careerEmailError.style.display = "block";
            careerEmail.classList.add("error-border");
            isValid = false;
        } else if (!/@[a-zA-Z0-9.-]+$/.test(careerEmailValue)) {
            careerEmailError.innerHTML = "Email must contain a domain name (e.g., '@example')! Please enter a valid email";
            careerEmailError.style.display = "block";
            careerEmail.classList.add("error-border");
            isValid = false;
        } else if (!/\.[a-zA-Z]{2,}$/.test(careerEmailValue)) {
            careerEmailError.innerHTML = "Email must contain a valid domain extension (e.g., '.com')! Please enter a valid email";
            careerEmailError.style.display = "block";
            careerEmail.classList.add("error-border");
            isValid = false;
        } else {
            careerEmailError.style.display = "none";
            careerEmail.classList.remove("error-border");
        }

        for (let i = careerEmailValue.length - 1; i >= 0; i--) {
            const char = careerEmailValue[i];
            if (char === " ") {
                careerEmailError.style.display = "block";
                careerEmailError.innerHTML = "Email cannot contain spaces! Please enter a valid email.";
                careerEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (char === "@" && atCount > 1) {
                careerEmailError.style.display = "block";
                careerEmailError.innerHTML = "Email can only contain one '@' symbol! Please enter a valid email";
                careerEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^a-zA-Z0-9._%+-@]/.test(char) || /[\/;:=]/.test(char)) {
                careerEmailError.style.display = "block";
                careerEmailError.innerHTML = "Invalid email format!! Please enter a valid email.";
                careerEmail.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        return isValid;
    }

    if (careerEmail && careerEmailError) {
        careerEmail.addEventListener("input", validateCareerEmailInput);
        careerEmail.addEventListener("change", validateCareerEmailChange);
        careerEmail.addEventListener("blur", validateCareerEmailChange);
    }


    /* ######################################## Phone ######################################## */

    const careerPhone = careerForm.querySelector('input[name="career-phone"]');
    const careerPhoneError = careerForm.querySelector(".career-phone-error");

    function validateCareerPhoneInput() {
        const careerPhoneValue = careerPhone.value.trim();
        let isValid = true;

        if (careerPhoneValue === "") {
            careerPhoneError.style.display = "none";
            careerPhone.classList.remove("error-border");
        }

        for (let i = careerPhoneValue.length - 1; i >= 0; i--) {
            const char = careerPhoneValue[i];
            if (/[a-zA-Z]/.test(char)) {
                careerPhoneError.style.display = "block";
                careerPhoneError.innerHTML = "Phone numbers cannot contain letters! Please enter a valid phone number.";
                careerPhone.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^0-9\s\-\(\)]/.test(char)) {
                careerPhoneError.style.display = "block";
                careerPhoneError.innerHTML = "Invalid phone number format! Please enter a valid phone number.";
                careerPhone.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        if (isValid) {
            careerPhoneError.style.display = "none";
            careerPhone.classList.remove("error-border");
        }

        return isValid;
    }

    function validateCareerPhoneChange() {
        const careerPhoneValue = careerPhone.value.trim();
        const digitCount = (careerPhoneValue.match(/\d/g) || []).length;
        let isValid = true;

        if (careerPhoneValue === "") {
            careerPhoneError.style.display = "none";
            careerPhone.classList.remove("error-border");
        } else if (digitCount < 7) {
            careerPhoneError.innerHTML = "Phone number is too short! Please enter a valid phone number!";
            careerPhoneError.style.display = "block";
            careerPhone.classList.add("error-border");
            isValid = false;
        } else {
            careerPhoneError.style.display = "none";
            careerPhone.classList.remove("error-border");
        }

        for (let i = careerPhoneValue.length - 1; i >= 0; i--) {
            const char = careerPhoneValue[i];
            if (/[a-zA-Z]/.test(char)) {
                careerPhoneError.style.display = "block";
                careerPhoneError.innerHTML = "Phone numbers cannot contain letters! Please enter a valid phone number.";
                careerPhone.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^0-9\s\-\(\)]/.test(char)) {
                careerPhoneError.style.display = "block";
                careerPhoneError.innerHTML = "Invalid phone number format! Please enter a valid phone number.";
                careerPhone.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        return isValid;
    }

    if (careerPhone && careerPhoneError) {
        careerPhone.addEventListener("input", validateCareerPhoneInput);
        careerPhone.addEventListener("change", validateCareerPhoneChange);
    }


    /* ######################################## Dial Codes ######################################## */

    const careerDialCodes = document.getElementById("career-dial-codes");
    let careerItiPhone;

    if (careerDialCodes) {
        careerItiPhone = window.intlTelInput(careerDialCodes, {
            initialCountry: "rs",
            preferredCountries: ["rs", "hr", "si", "ba", "mk", "me"],
            separateDialCode: true,
        });

        careerDialCodes.addEventListener("open:countrydropdown", function () {
            const dropdown = careerForm.querySelector(".iti__country-list");
            if (dropdown) dropdown.scrollTop = 0;
        });

        setTimeout(() => {
            careerForm.querySelectorAll(".iti__country-name").forEach((el) => {
                el.textContent = el.textContent.replace(/\s*\(.*?\)/, "");
            });
        }, 500);
    }


    /* ######################################## Education ######################################## */

    const education = careerForm.querySelector('select[name="education"]');
    const educationError = careerForm.querySelector(".education-error");

    if (education && educationError) {
        clearErrorOnChange(education, educationError);
    }


    /* ######################################## Employment ######################################## */

    const employment = careerForm.querySelector('select[name="employment"]');
    const employmentError = careerForm.querySelector(".employment-error");

    if (employment && employmentError) {
        clearErrorOnChange(employment, employmentError);
    }


    /* ######################################## Career ######################################## */

    const career = careerForm.querySelector('select[name="career"]');
    const careerError = careerForm.querySelector(".career-error");
    const careerGroup = careerForm.querySelector(".career-selection-group");

    function validateCareerChange() {
        experienceWrapper.style.display = "block";

        if (career.value === "Cashier") {
            experienceWrapper.style.display = "block";
            experienceError.style.display = "none";
            licenseWrapper.style.display = "none";
            licenseError.style.display = "none";
        } else if (career.value === "Driver") {
            licenseWrapper.style.display = "block";
            licenseError.style.display = "none";
            experienceError.style.display = "none";
        }

        licenseCheckboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
        experience.forEach((radio) => {
            radio.checked = false;
        });
    }

    if (careerGroup) {
        career.addEventListener("mouseover", function () {
            careerGroup.style.color = "black";
        });
    }

    if (career && careerError) {
        career.addEventListener("change", validateCareerChange);
        clearErrorOnChange(career, careerError);
    }


    /* ######################################## Experience ######################################## */

    const experience = careerForm.querySelectorAll('input[name="experience"]');
    const experienceError = careerForm.querySelector(".experience-error");
    const experienceWrapper = careerForm.querySelector(".experience-wrapper");

    if (experience.length > 0) {
        experience.forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    experienceError.style.display = "none";
                }
            });
        });
    }


    /* ######################################## License ######################################## */

    const licenseCheckboxes = careerForm.querySelectorAll('input[name="license[]"]');
    const licenseError = careerForm.querySelector(".license-error");
    const licenseWrapper = careerForm.querySelector(".license-category-wrapper");

    if (licenseCheckboxes.length > 0) {
        licenseCheckboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    licenseError.style.display = "none";
                }
            });
        });
    }


    /* ######################################## Start Date ######################################## */

    const startDate = careerForm.querySelector("input[name='start-date']");
    const startDateError = careerForm.querySelector(".start-date-error");
    const startDateDisplay = careerForm.querySelector(".start-date-display");

    if (startDate) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        const minDate = `${yyyy}-${mm}-${dd}`;

        startDate.min = minDate;
    }

    if (startDate && startDateError) {
        clearErrorOnChange(startDate, startDateError);

        startDate.addEventListener("input", function () {
            if (startDate.value) {
                startDateDisplay.textContent = startDate.value;
                startDateDisplay.style.color = "black";
                startDateCalendar.style.color = "black";
                startDateWrapper.classList.remove('error-border');
            } else {
                startDateDisplay.textContent = "Available Start Date";
                startDateDisplay.style.color = "lightgrey";
                startDateCalendar.style.color = "lightgrey";
                startDateWrapper.classList.remove('active-border');
                startDateWrapper.classList.remove('error-border');
            }
        });
    }

    const startDateWrapper = careerForm.querySelector(".start-date-wrapper");
    const startDateCalendar = startDateWrapper ? startDateWrapper.querySelector(".fa-calendar-days") : null;

    if (startDateWrapper && startDate) {
        startDateWrapper.addEventListener("click", function() {
            startDate.showPicker();
            startDateCalendar.style.color = "black";
            startDateWrapper.classList.add('active-border');
        })
    }

    if (startDateCalendar) {
        startDateCalendar.addEventListener("click", function () {
            startDateCalendar.style.color = "black";
            const startDateWrapper = startDateCalendar.closest(".start-date-wrapper");
            startDateWrapper.classList.add("active-border");
        });

        startDate.addEventListener("blur", () => {
            if (startDate.value) {
                startDateCalendar.style.color = "black";
            } else {
                startDateCalendar.style.color = "lightgrey";
            }

            startDateWrapper.classList.remove("active-border");
        });
    }


    /* ######################################## CV ######################################## */

    const cvFile = careerForm.querySelector('input[name="cv-file"]');
    const cvFileError = careerForm.querySelector(".cv-file-error");

    const fileLabel = careerForm.querySelector(".file-label");
    const fileWrapper = careerForm.querySelector(".file-wrapper");
    const filePaperclip = fileWrapper.querySelector(".fa-paperclip");
    const fileXmark = fileWrapper.querySelector(".fa-xmark");

    function validateCVupload() {
        const file = cvFile.files[0];
        let isValid = true;
        const allowedExtensions = ["pdf", "doc", "docx"];

        fileLabel.classList.remove("error-border");
        fileWrapper.style.color = "lightgrey";
        cvFileError.style.display = "none";
        filePaperclip.style.display = "block";
        fileXmark.style.display = "none";

        if (file) {
            const fileExtension = file.name.split(".").pop().toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                fileLabel.classList.add("error-border");
                cvFileError.style.display = "block";
                cvFileError.innerHTML = "Invalid file type. Only PDF, DOC, or DOCX files are allowed!";
                fileLabel.textContent = "Your CV";
                this.value = "";
                isValid = false;
            }

            if (file.size > 2 * 1024 * 1024) {
                fileLabel.classList.add("error-border");
                cvFileError.style.display = "block";
                cvFileError.innerHTML = "The selected file is too large. Please upload a file smaller than 2MB!";
                fileLabel.textContent = "Your CV";
                this.value = "";
                isValid = false;
            }

            if (isValid) {
                fileLabel.textContent = file.name;
                fileLabel.classList.remove("error-border");
                filePaperclip.style.display = "none";
                fileXmark.style.display = "block";
                fileWrapper.style.color = "black";
            }
        }

        return isValid;
    }

    if (fileXmark) {
        fileXmark.addEventListener("click", function () {
            cvFile.value = "";
            fileLabel.textContent = "Your CV";
            fileWrapper.style.color = "lightgrey";
            filePaperclip.style.display = "block";
            filePaperclip.style.color = "lightgrey";
            fileXmark.style.display = "none";
        });
    }

    if (cvFile && cvFileError && fileLabel) {
        cvFile.addEventListener("change", validateCVupload);
        cvFile.addEventListener("click", () => {
            filePaperclip.style.color = "black";
        });
        window.addEventListener("focus", () => {
            if (cvFile.files.length === 0) {
                filePaperclip.style.color = "lightgrey";
            }
        });
    }


    /* ######################################## Career Message ######################################## */

    const careerMessage = careerForm.querySelector('textarea[name="career-message"]');
    const careerMessageError = careerForm.querySelector(".career-message-error");

    if (careerMessage && careerMessageError) {
        clearErrorOnInput(careerMessage, careerMessageError);
    }


    /* ######################################## Privacy Checkbox ######################################## */

    const privacyCheckbox = careerForm.querySelector(".privacy-checkbox");
    const privacyError = careerForm.querySelector(".privacy-error");

    if (privacyCheckbox && privacyError) {
        privacyCheckbox.addEventListener("change", function () {
            if (privacyError.style.display === "block") {
                privacyError.style.display = "none";
            }
        });
    }
    

    /* ######################################## Form Submit ######################################## */

    function careerFieldsErrors(e) {
        const experienceChecked = Array.from(experience).some((radio) => radio.checked);
        const licenseChecked = Array.from(licenseCheckboxes).some((checkbox) => checkbox.checked);
        let isValid = true;
        let firstErrorField = null;

        if (!validateCareerName()) {
            firstErrorField = careerName;
            isValid = false;
        }

        if (!validateCareerSurname()) {
            firstErrorField = careerSurname;
            isValid = false;
        }

        if (!validateCareerEmailInput() || !validateCareerEmailChange()) {
            firstErrorField = careerEmail;
            isValid = false;
        }

        if (!validateCareerPhoneInput() || !validateCareerPhoneChange()) {
            firstErrorField = careerPhone;
            isValid = false;
        }

        if (!validateCVupload()) {
            firstErrorField = cvFile;
            isValid = false;
        }

        if (careerName.value.trim() === "") {
            careerNameError.innerHTML = "Please enter your name!";
            careerNameError.style.display = "block";
            careerName.classList.add("error-border");
            if (!firstErrorField) firstErrorField = careerName;
            isValid = false;
        }

        if (careerSurname.value.trim() === "") {
            careerSurnameError.innerHTML = "Please enter your surname!";
            careerSurnameError.style.display = "block";
            careerSurname.classList.add("error-border");
            if (!firstErrorField) firstErrorField = careerSurname;
            isValid = false;
        }

        if (careerEmail.value.trim() === "") {
            careerEmailError.innerHTML = "Please enter your email!";
            careerEmailError.style.display = "block";
            careerEmail.classList.add("error-border");
            if (!firstErrorField) firstErrorField = careerEmail;
            isValid = false;
        }

        if (careerPhone.value.trim() === "") {
            careerPhoneError.innerHTML = "Please enter your phone number!";
            careerPhoneError.style.display = "block";
            careerPhone.classList.add("error-border");
            if (!firstErrorField) firstErrorField = careerPhone;
            isValid = false;
        }

        if (education.value === "") {
            educationError.innerHTML = "Please select your level of education!";
            educationError.style.display = "block";
            education.classList.add("error-border");
            if (!firstErrorField) firstErrorField = education;
            isValid = false;
        }

        if (employment.value === "") {
            employmentError.innerHTML = "Please select your employment status!";
            employmentError.style.display = "block";
            employment.classList.add("error-border");
            if (!firstErrorField) firstErrorField = employment;
            isValid = false;
        }

        if (career.value === "") {
            careerError.innerHTML = "Please choose your career path!";
            careerError.style.display = "block";
            career.classList.add("error-border");
            if (!firstErrorField) firstErrorField = career;
            isValid = false;
        } else {
            if (!experienceChecked) {
                experienceError.innerHTML = "Please select one of the availible options!";
                experienceError.style.display = "block";
                if (!firstErrorField) firstErrorField = experienceWrapper;
                isValid = false;
            }
            if (career.value === "Driver" && !licenseChecked) {
                licenseError.innerHTML = "Please select one of the availible options!";
                licenseError.style.display = "block";
                if (!firstErrorField) firstErrorField = licenseWrapper;
                isValid = false;
            }
        }

        if (startDate.value === "") {
            startDateError.innerHTML = "Please select your available start date!";
            startDateError.style.display = "block";
            startDateWrapper.classList.add("error-border");
            if (!firstErrorField) firstErrorField = startDate;
            isValid = false;
        }

        if (cvFile.files.length === 0) {
            cvFileError.innerHTML = "Please upload your CV!";
            cvFileError.style.display = "block";
            fileLabel.classList.add('error-border');
            if (!firstErrorField) firstErrorField = cvFile;
            isValid = false;
        }

        if (careerMessage.value.trim() === "") {
            careerMessageError.innerHTML = "Please tell us something about yourself!";
            careerMessageError.style.display = "block";
            careerMessage.classList.add("error-border");
            if (!firstErrorField) firstErrorField = careerMessage;
            isValid = false;
        }

        if (!privacyCheckbox.checked) {
            privacyError.innerHTML = "You must agree to the privacy policy!";
            privacyError.style.display = "block";
            if (!firstErrorField) firstErrorField = privacyCheckbox;
            isValid = false;
        }

        if (!isValid && firstErrorField) {
            e.preventDefault();
            firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            e.preventDefault();

            const selectedLicenses = $('input[name="license[]"]:checked').map(function () {return this.value;}).get();

            const careerSelects = careerForm.querySelectorAll("select");
            const careerSelectArrows = careerForm.querySelectorAll(".fa-caret-down");

            const formData = new FormData();

            formData.append("career-button", 1);
            formData.append("name", careerName.value);
            formData.append("surname", careerSurname.value);
            formData.append("email", careerEmail.value);
            formData.append("dial_code", careerItiPhone.getSelectedCountryData().dialCode);
            formData.append("phone", careerPhone.value);
            formData.append("education", education.value);
            formData.append("employment", employment.value);
            formData.append("career", career.value);
            formData.append("experience", $('input[name="experience"]:checked').val());
            selectedLicenses.forEach((val) => formData.append("license[]", val));
            formData.append("start_date", startDate.value);
            formData.append("message", careerMessage.value);
            formData.append("cv_file", cvFile.files[0]);

            $.ajax({
                url: "/WebShop/api/form-handling.php",
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    if (response === "success") {
                        showSuccessPopup();
                        careerForm.reset();
                        careerSelects.forEach((select) => {
                            select.style.color = "lightgrey";
                        });
                        careerSelectArrows.forEach((arrow) => {
                            arrow.style.color = "lightgrey";
                        });
                        startDateDisplay.textContent = "Available Start Date";
                        startDateDisplay.style.color = "lightgrey";
                        startDateCalendar.style.color = "lightgrey";
                        startDateWrapper.classList.remove('active-border');
                        experienceWrapper.style.display = "none";
                        licenseWrapper.style.display = "none";
                        fileLabel.textContent = "Your CV";
                        fileLabel.classList.remove('cv-success');
                        fileLabel.classList.add('cv-default');
                        fileWrapper.style.color = "lightgrey";
                        fileXmark.style.display = "none";
                        filePaperclip.style.display = "block";
                    } else {
                        showFailedPopup();
                    }
                },
                error: function () {
                    showFailedPopup();
                },
            });
        }
    }

    careerForm.addEventListener("submit", careerFieldsErrors);
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Contact Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    /* ######################################## Name ######################################## */

    const contactName = contactForm.querySelector('input[name="contact-name"]');
    const contactNameError = contactForm.querySelector(".contact-name-error");

    function validateContactName() {
        const contactNameValue = contactName.value.trim();
        let isValid = true;

        if (contactNameValue === "") {
            contactNameError.style.display = "none";
            contactName.classList.remove("error-border");
        }

        for (let i = contactNameValue.length - 1; i >= 0; i--) {
            const char = contactNameValue[i];
            if (/\d/.test(char)) {
                contactNameError.style.display = "block";
                contactNameError.innerHTML = "Names cannot contain numbers! Please enter a valid name.";
                contactName.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(char)) {
                contactNameError.style.display = "block";
                contactNameError.innerHTML = "Names cannot contain special characters! Please enter a valid name.";
                contactName.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        if (isValid) {
            contactNameError.style.display = "none";
            contactName.classList.remove("error-border");
        }

        return isValid;
    }

    if (contactName && contactNameError) {
        contactName.addEventListener("input", validateContactName);
    }


    /* ######################################## Email ######################################## */

    const contactEmail = contactForm.querySelector('input[name="contact-email"]');
    const contactEmailError = contactForm.querySelector(".contact-email-error");

    function validateContactEmailInput() {
        const contactEmailValue = contactEmail.value.trim();
        const atCount = (contactEmailValue.match(/@/g) || []).length;
        let isValid = true;

        if (contactEmailValue === "") {
            contactEmailError.style.display = "none";
            contactEmail.classList.remove("error-border");
        }

        for (let i = contactEmailValue.length - 1; i >= 0; i--) {
            const char = contactEmailValue[i];
            if (char === " ") {
                contactEmailError.style.display = "block";
                contactEmailError.innerHTML = "Email cannot contain spaces! Please enter a valid email.";
                contactEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (char === "@" && atCount > 1) {
                contactEmailError.style.display = "block";
                contactEmailError.innerHTML = "Email can only contain one '@' symbol! Please enter a valid email";
                contactEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^a-zA-Z0-9._%+-@]/.test(char) || /[\/;:=]/.test(char)) {
                contactEmailError.style.display = "block";
                contactEmailError.innerHTML = "Invalid email format!! Please enter a valid email.";
                contactEmail.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        if (isValid) {
            contactEmailError.style.display = "none";
            contactEmail.classList.remove("error-border");
        }

        return isValid;
    }

    function validateContactEmailChange() {
        const contactEmailValue = contactEmail.value.trim();
        const atCount = (contactEmailValue.match(/@/g) || []).length;
        let isValid = true;

        if (contactEmailValue === "") {
            contactEmailError.style.display = "none";
            contactEmail.classList.remove("error-border");
        } else if (!contactEmailValue.includes("@")) {
            contactEmailError.innerHTML = "Email must contain '@'! Please enter a valid email";
            contactEmailError.style.display = "block";
            contactEmail.classList.add("error-border");
            isValid = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@/.test(contactEmailValue)) {
            contactEmailError.innerHTML = "Invalid email format before '@'! Please enter a valid email";
            contactEmailError.style.display = "block";
            contactEmail.classList.add("error-border");
            isValid = false;
        } else if (!/@[a-zA-Z0-9.-]+$/.test(contactEmailValue)) {
            contactEmailError.innerHTML = "Email must contain a domain name (e.g., '@example')! Please enter a valid email";
            contactEmailError.style.display = "block";
            contactEmail.classList.add("error-border");
            isValid = false;
        } else if (!/\.[a-zA-Z]{2,}$/.test(contactEmailValue)) {
            contactEmailError.innerHTML = "Email must contain a valid domain extension (e.g., '.com')! Please enter a valid email";
            contactEmailError.style.display = "block";
            contactEmail.classList.add("error-border");
            isValid = false;
        } else {
            contactEmailError.style.display = "none";
            contactEmail.classList.remove("error-border");
        }

        for (let i = contactEmailValue.length - 1; i >= 0; i--) {
            const char = contactEmailValue[i];
            if (char === " ") {
                contactEmailError.style.display = "block";
                contactEmailError.innerHTML = "Email cannot contain spaces! Please enter a valid email.";
                contactEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (char === "@" && atCount > 1) {
                contactEmailError.style.display = "block";
                contactEmailError.innerHTML = "Email can only contain one '@' symbol! Please enter a valid email";
                contactEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^a-zA-Z0-9._%+-@]/.test(char) || /[\/;:=]/.test(char)) {
                contactEmailError.style.display = "block";
                contactEmailError.innerHTML = "Invalid email format!! Please enter a valid email.";
                contactEmail.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        return isValid;
    }

    if (contactEmail && contactEmailError) {
        contactEmail.addEventListener("input", validateContactEmailInput);
        contactEmail.addEventListener("change", validateContactEmailChange);
        contactEmail.addEventListener("blur", validateContactEmailChange);
    }


    /* ######################################## Phone ######################################## */

    const contactPhone = contactForm.querySelector('input[name="contact-phone"]');
    const contactPhoneError = contactForm.querySelector(".contact-phone-error");

    function validateContactPhoneInput() {
        const contactPhoneValue = contactPhone.value.trim();
        let isValid = true;

        if (contactPhoneValue === "") {
            contactPhoneError.style.display = "none";
            contactPhone.classList.remove("error-border");
        }

        for (let i = contactPhoneValue.length - 1; i >= 0; i--) {
            const char = contactPhoneValue[i];
            if (/[a-zA-Z]/.test(char)) {
                contactPhoneError.style.display = "block";
                contactPhoneError.innerHTML = "Phone numbers cannot contain letters! Please enter a valid phone number.";
                contactPhone.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^0-9\s\-\(\)]/.test(char)) {
                contactPhoneError.style.display = "block";
                contactPhoneError.innerHTML = "Invalid phone number format! Please enter a valid phone number.";
                contactPhone.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        if (isValid) {
            contactPhoneError.style.display = "none";
            contactPhone.classList.remove("error-border");
        }

        return isValid;
    }

    function validateContactPhoneChange() {
        const contactPhoneValue = contactPhone.value.trim();
        const digitCount = (contactPhoneValue.match(/\d/g) || []).length;
        let isValid = true;

        if (contactPhoneValue === "") {
            contactPhoneError.style.display = "none";
            contactPhone.classList.remove("error-border");
        } else if (digitCount < 7) {
            contactPhoneError.innerHTML = "Phone number is too short! Please enter a valid phone number.";
            contactPhoneError.style.display = "block";
            contactPhone.classList.add("error-border");
            isValid = false;
        } else if (digitCount > 20) {
            contactPhoneError.innerHTML = "Phone number is too long! Please enter a valid phone number.";
            contactPhoneError.style.display = "block";
            contactPhone.classList.add("error-border");
            isValid = false;
        } else {
            contactPhoneError.style.display = "none";
            contactPhone.classList.remove("error-border");
        }

        for (let i = contactPhoneValue.length - 1; i >= 0; i--) {
            const char = contactPhoneValue[i];
            if (/[a-zA-Z]/.test(char)) {
                contactPhoneError.style.display = "block";
                contactPhoneError.innerHTML = "Phone numbers cannot contain letters! Please enter a valid phone number.";
                contactPhone.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^0-9\s\-\(\)]/.test(char)) {
                contactPhoneError.style.display = "block";
                contactPhoneError.innerHTML = "Invalid phone number format! Please enter a valid phone number.";
                contactPhone.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        return isValid;
    }

    if (contactPhone && contactPhoneError) {
        contactPhone.addEventListener("input", validateContactPhoneInput);
        contactPhone.addEventListener("change", validateContactPhoneChange);
    }


    /* ######################################## Dial Codes ######################################## */

    const contactDialCodes = document.getElementById("contact-dial-codes");
    let contactItiPhone;

    if (contactDialCodes) {
        contactItiPhone = window.intlTelInput(contactDialCodes, {
            initialCountry: "rs",
            preferredCountries: ["rs", "hr", "si", "ba", "mk", "me"],
            separateDialCode: true,
        });

        contactDialCodes.addEventListener("open:countrydropdown", function () {
            const dropdown = contactForm.querySelector(".iti__country-list");
            if (dropdown) dropdown.scrollTop = 0;
        });

        setTimeout(() => {
            contactForm.querySelectorAll(".iti__country-name").forEach((el) => {
                el.textContent = el.textContent.replace(/\s*\(.*?\)/, "");
            });
        }, 500);
    }


    /* ######################################## Privacy Checkbox ######################################## */

    const privacyCheckbox = contactForm.querySelector(".privacy-checkbox");
    const privacyError = contactForm.querySelector(".privacy-error");

    if (privacyCheckbox && privacyError) {
        privacyCheckbox.addEventListener("change", function () {
            if (privacyError.style.display === "block") {
                privacyError.style.display = "none";
            }
        });
    }


    /* ######################################## Form Submit ######################################## */

    function contactFieldsErrors(e) {
        let isValid = true;
        let firstErrorField = null;

        if (!validateContactName()) {
            firstErrorField = contactName;
            isValid = false;
        }

        if (!validateContactEmailInput() || !validateContactEmailChange()) {
            firstErrorField = contactEmail;
            isValid = false;
        }

        if (!validateContactPhoneInput() || !validateContactPhoneChange()) {
            firstErrorField = contactPhone;
            isValid = false;
        }

        if (contactName.value === "") {
            contactNameError.innerHTML = "Please enter your name and surname!";
            contactNameError.style.display = "block";
            contactName.classList.add("error-border");
            if (!firstErrorField) firstErrorField = contactName;
            isValid = false;
        }

        if (contactEmail.value === "") {
            contactEmailError.innerHTML = "Please enter your email!";
            contactEmailError.style.display = "block";
            contactEmail.classList.add("error-border");
            if (!firstErrorField) firstErrorField = contactEmail;
            isValid = false;
        }

        if (contactPhone.value === "") {
            contactPhoneError.innerHTML = "Please enter your phone number!";
            contactPhoneError.style.display = "block";
            contactPhone.classList.add("error-border");
            if (!firstErrorField) firstErrorField = contactPhone;
            isValid = false;
        }

        if (!privacyCheckbox.checked) {
            privacyError.innerHTML = "You must agree to the privacy policy!";
            privacyError.style.display = "block";
            if (!firstErrorField) firstErrorField = privacyCheckbox;
            isValid = false;
        }

        if (!isValid && firstErrorField) {
            e.preventDefault();
            firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            e.preventDefault();
            $.ajax({
                url: "/WebShop/api/form-handling.php",
                type: "POST",
                data: {
                    "contact-button": 1,
                    name: contactName.value,
                    email: contactEmail.value,
                    dial_code: contactItiPhone.getSelectedCountryData().dialCode,
                    phone: contactPhone.value,
                    message: $('textarea[name="contact-message"]').val(),
                },
                success: function (response) {
                    if (response === "success") {
                        showSuccessPopup();
                        contactForm.reset();
                    } else {
                        showFailedPopup();
                    }
                },
                error: function () {
                    showFailedPopup();
                },
            });
        }
    }

    contactForm.addEventListener("submit", contactFieldsErrors);
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Newsletter Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

const newsletterForm = document.getElementById("newsletter-form");

if (newsletterForm) {

    /* ######################################## Email ######################################## */

    const newsletterEmail = newsletterForm.querySelector('input[name="newsletter-email"]');
    const newsletterEmailError = newsletterForm.querySelector(".newsletter-email-error");

    function validateNewsletterEmailInput() {
        const newsletterEmailValue = newsletterEmail.value.trim();
        const atCount = (newsletterEmailValue.match(/@/g) || []).length;
        let isValid = true;

        if (newsletterEmailValue === "") {
            newsletterEmailError.style.visibility = "hidden";
            newsletterEmail.classList.remove("error-border");
        }

        for (let i = newsletterEmailValue.length - 1; i >= 0; i--) {
            const char = newsletterEmailValue[i];
            if (char === " ") {
                newsletterEmailError.style.visibility = "visible";
                newsletterEmailError.innerHTML = "Email cannot contain spaces! Please enter a valid email.";
                newsletterEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (char === "@" && atCount > 1) {
                newsletterEmailError.style.visibility = "visible";
                newsletterEmailError.innerHTML = "Email can only contain one '@' symbol! Please enter a valid email";
                newsletterEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^a-zA-Z0-9._%+-@]/.test(char) || /[\/;:=]/.test(char)) {
                newsletterEmailError.style.visibility = "visible";
                newsletterEmailError.innerHTML = "Invalid email format!! Please enter a valid email.";
                newsletterEmail.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        if (isValid) {
            newsletterEmailError.style.visibility = "hidden";
            newsletterEmail.classList.remove("error-border");
        }

        return isValid;
    }

    function validateNewsletterEmailChange() {
        const newsletterEmailValue = newsletterEmail.value.trim();
        const atCount = (newsletterEmailValue.match(/@/g) || []).length;
        let isValid = true;

        if (newsletterEmailValue === "") {
            newsletterEmailError.style.visibility = "hidden";
            newsletterEmail.classList.remove("error-border");
        } else if (!newsletterEmailValue.includes("@")) {
            newsletterEmailError.innerHTML = "Email must contain '@'! Please enter a valid email";
            newsletterEmailError.style.visibility = "visible";
            newsletterEmail.classList.add("error-border");
            isValid = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@/.test(newsletterEmailValue)) {
            newsletterEmailError.innerHTML = "Invalid email format before '@'! Please enter a valid email";
            newsletterEmailError.style.visibility = "visible";
            newsletterEmail.classList.add("error-border");
            isValid = false;
        } else if (!/@[a-zA-Z0-9.-]+$/.test(newsletterEmailValue)) {
            newsletterEmailError.innerHTML = "Email must contain a domain name (e.g., '@example')! Please enter a valid email";
            newsletterEmailError.style.visibility = "visible";
            newsletterEmail.classList.add("error-border");
            isValid = false;
        } else if (!/\.[a-zA-Z]{2,}$/.test(newsletterEmailValue)) {
            newsletterEmailError.innerHTML = "Email must contain a valid domain extension (e.g., '.com')! Please enter a valid email";
            newsletterEmailError.style.visibility = "visible";
            newsletterEmail.classList.add("error-border");
            isValid = false;
        } else {
            newsletterEmailError.style.visibility = "hidden";
            newsletterEmail.classList.remove("error-border");
        }

        for (let i = newsletterEmailValue.length - 1; i >= 0; i--) {
            const char = newsletterEmailValue[i];
            if (char === " ") {
                newsletterEmailError.style.visibility = "visible";
                newsletterEmailError.innerHTML = "Email cannot contain spaces! Please enter a valid email.";
                newsletterEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (char === "@" && atCount > 1) {
                newsletterEmailError.style.visibility = "visible";
                newsletterEmailError.innerHTML = "Email can only contain one '@' symbol! Please enter a valid email";
                newsletterEmail.classList.add("error-border");
                isValid = false;
                break;
            }
            if (/[^a-zA-Z0-9._%+-@]/.test(char) || /[\/;:=]/.test(char)) {
                newsletterEmailError.style.visibility = "visible";
                newsletterEmailError.innerHTML = "Invalid email format!! Please enter a valid email.";
                newsletterEmail.classList.add("error-border");
                isValid = false;
                break;
            }
        }

        return isValid;
    }

    if (newsletterEmail && newsletterEmailError) {
        newsletterEmail.addEventListener("input", validateNewsletterEmailInput);
        newsletterEmail.addEventListener("change", validateNewsletterEmailChange);
        newsletterEmail.addEventListener("blur", validateNewsletterEmailChange);
    }


    /* ######################################## Form Submit ######################################## */

    function newsletterErrors(e) {
        let isValid = true;

        if (!validateNewsletterEmailInput() || !validateNewsletterEmailChange()) {
            isValid = false;
        }

        if (newsletterEmail.value.trim() === "") {
            newsletterEmailError.innerHTML = "Please enter your email!";
            newsletterEmailError.style.visibility = "hidden";
            newsletterEmail.classList.add("error-border");
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        } else {
            e.preventDefault();
            $.ajax({
                url: "/WebShop/api/form-handling.php",
                type: "POST",
                data: {
                    "newsletter-button": 1,
                    email: $('input[name="newsletter-email"]').val(),
                },
                success: function (response) {
                    if (response === "success") {
                        showSuccessPopup();
                        newsletterForm.reset();
                    } else if (response === "exists") {
                        $(".newsletter-email-error")
                            .text("This email is already subscribed!")
                            .css("visibility", "visible");
                    } else {
                        showFailedPopup();
                    }
                },
                error: function () {
                    showFailedPopup();
                },
            });
        }
    }

    newsletterForm.addEventListener("submit", newsletterErrors);
}


/* |||||||||||||||||||||||||||||||||||||||||||||||||| Review Form |||||||||||||||||||||||||||||||||||||||||||||||||| */

const reviewForm = document.getElementById("review-form");

if (reviewForm) {

    /* ######################################## Rating ######################################## */

    const emptyStars = reviewForm.querySelectorAll(".empty-stars i");
    const filledStars = reviewForm.querySelectorAll(".filled-stars i");
    const reviewRating = reviewForm.querySelector('input[name="rating"]');
    let selectedRating = 0;

    function reviewStars() {
        emptyStars.forEach((star, index) => {
            star.addEventListener("click", function () {
                selectedRating = index + 1;
                reviewRating.value = selectedRating;
                reviewError.style.display = "none";

                emptyStars.forEach((emptyStar, emptyIndex) => {
                    emptyStar.style.opacity = emptyIndex < selectedRating ? "0" : "1";
                });

                filledStars.forEach((fullStar, fullIndex) => {
                    fullStar.style.opacity = fullIndex < selectedRating ? "1" : "0";
                });
            });
        });
    }

    if (reviewRating) {
        reviewStars();
    }


    /* ######################################## Message ######################################## */

    const reviewMessage = reviewForm.querySelector('textarea[name="review-message"]');
    const reviewError = reviewForm.querySelector(".review-error");

    if (reviewMessage) {
        reviewMessage.addEventListener("input", function () {
            reviewError.style.display = "none";
        });
    }


    /* ######################################## Form Submit ######################################## */

    function reviewErrors(e) {
        const reviewMessageValue = reviewMessage.value.trim();
        let isValid = true;

        if (reviewMessageValue === "" && selectedRating === 0) {
            reviewError.innerHTML = "Please provide a rating or a review message before submitting!";
            reviewError.style.display = "block";
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        } else {
            e.preventDefault();
            $.ajax({
                url: "/WebShop/api/form-handling.php",
                type: "POST",
                data: {
                    "review-button": 1,
                    rating: $('input[name="rating"]').val(),
                    message: $('textarea[name="review-message"]').val(),
                },
                success: function (response) {
                    if (response === "success") {
                        reviewWrapper.classList.remove("active-box");
                        reviewBlur.classList.remove("active-blur");
                        formSentBlur.classList.add("active-blur");
                        setTimeout(() => {
                            successFormSent.classList.add("active-box");
                            emptyStars.forEach((star) => {
                                star.style.opacity = "1";
                            });
                            filledStars.forEach((star) => {
                                star.style.opacity = "0";
                            });
                            reviewForm.reset();
                        }, 700);
                        setTimeout(() => {
                            formSentBlur.classList.remove("active-blur");
                            successFormSent.classList.remove("active-box");
                        }, 2000);
                    } else {
                        showFailedPopup();
                    }
                },
                error: function () {
                    showFailedPopup();
                },
            });
        }
    }

    reviewForm.addEventListener("submit", reviewErrors);
}