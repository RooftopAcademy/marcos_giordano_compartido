import StoreUser from "../src/StoreUser.js";
var signUpForm = document.getElementById("sign-up-form");
var firstName = signUpForm.firstName;
var lastName = signUpForm.lastName;
var mailAdress = signUpForm.mailAdress;
var password = signUpForm.password;
var passwordRepeat = signUpForm.passwordRepeat;
var submitButton = signUpForm.submitButton;
var infoContainer = document.getElementById("info-container");
var paragraph = document.getElementById("info-container-paragraph");
var infoContainerButton = document.getElementById("info-container-button");
var domElements = document.querySelectorAll("header, main, footer");
var displayInfoContainer = function () {
    domElements.forEach(function (element) {
        element.style.opacity = "0.4";
        element.style.pointerEvents = "none";
    });
    infoContainer.classList.add("display-info-container");
};
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    try {
        var storeUser = new StoreUser();
        storeUser.firstName = firstName.value;
        storeUser.lastName = lastName.value;
        storeUser.mailAdress = mailAdress.value;
        if (password.value != passwordRepeat.value) {
            throw Error("El campo 'Contraseña' y 'Repetir contraseña' no coinciden.");
        }
        else {
            storeUser.password = password.value;
        }
        firstName.value = "";
        lastName.value = "";
        mailAdress.value = "";
        password.value = "";
        passwordRepeat.value = "";
        displayInfoContainer();
        paragraph.innerText = "El usuario ha sido creado correctamente.";
    }
    catch (error) {
        displayInfoContainer();
        paragraph.innerText = "" + error;
    }
});
infoContainerButton.addEventListener("click", function () {
    domElements.forEach(function (element) {
        // element.style = [];
        element.setAttribute("style", "");
    });
    infoContainer.classList.remove("display-info-container");
});
