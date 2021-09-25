import StoreUser from "../src/StoreUser.js";
import store from "./app.js";
var signUpForm = document.getElementById("sign-up-form");
var firstName = signUpForm["first-name"];
var lastName = signUpForm["last-name"];
var mailAdress = signUpForm["mail-adress"];
var password = signUpForm["password"];
var passwordRepeat = signUpForm["password-repeat"];
var submitButton = signUpForm["submit-button"];
var infoContainer = document.getElementById("info-container");
var paragraph = document.getElementById("info-container-paragraph");
var infoContainerButton = document.getElementById("info-container-button");
var domElements = document.querySelectorAll("header, main, footer");
var displayInfoContainer = function (text) {
    domElements.forEach(function (element) {
        element.style.opacity = "0.4";
        element.style.pointerEvents = "none";
    });
    infoContainer.classList.add("display-info-container");
    paragraph.innerText = text;
};
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    try {
        var storeUser_1 = new StoreUser();
        storeUser_1.firstName = firstName.value;
        storeUser_1.lastName = lastName.value;
        storeUser_1.mailAdress = mailAdress.value;
        if (password.value != passwordRepeat.value) {
            throw Error("El campo 'Contraseña' y 'Repetir contraseña' no coinciden.");
        }
        else {
            storeUser_1.password = password.value;
        }
        store.user = storeUser_1;
        firstName.value = "";
        lastName.value = "";
        mailAdress.value = "";
        password.value = "";
        passwordRepeat.value = "";
        var userName = document.querySelectorAll(".js-user");
        userName.forEach(function (element) {
            element.innerHTML = "<i class=\"fas fa-user\"></i> &nbsp " + storeUser_1.firstName.toUpperCase();
        });
        displayInfoContainer("El usuario ha sido creado correctamente.");
    }
    catch (error) {
        displayInfoContainer("" + error);
    }
});
infoContainerButton.addEventListener("click", function () {
    domElements.forEach(function (element) {
        element.setAttribute("style", "");
    });
    infoContainer.classList.remove("display-info-container");
});
