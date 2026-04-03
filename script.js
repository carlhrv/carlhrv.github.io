emailjs.init({ publicKey: "RI43SMd88u_Ba0OYr" });

const form = document.getElementById("contact-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const firstNameHint = document.getElementById("first-name-hint");
const lastNameHint = document.getElementById("last-name-hint");
const emailHint = document.getElementById("email-hint");
const messageHint = document.getElementById("message-hint");

function validate(input, helper) {
    const isValid = input.value.trim() !== "";
    helper.innerHTML = isValid ? "" : "*required";
    return isValid;
}

function handleSubmit(event) {
    event.preventDefault();
    const isFirstNameValid = validate(firstName, firstNameHint);
    const isLastNameValid = validate(lastName, lastNameHint);
    const isEmailValid = validate(email, emailHint);
    const isMessageValid = validate(message, messageHint);

    if (isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid) {
        const templateParams = {
            first_name: firstName.value,
            last_name: lastName.value,
            email: email.value,
            message: message.value,
        };

        emailjs.send('service_avta2i8', 'template_ctzzhc5', templateParams)
            .then(() => {
                alert("Sent!");
                form.reset();
            })
            .catch(() => alert("Error sending email."));
    }
}

form.addEventListener("submit", handleSubmit);