import StoreUser from "../src/StoreUser.js";

let signUpForm = document.getElementById("sign-up-form");

let firstName = signUpForm["first-name"];
let lastName = signUpForm["last-name"];
let mailAdress = signUpForm["mail-adress"];
let password = signUpForm["password"];
let passwordRepeat = signUpForm["password-repeat"];
let submitButton = signUpForm["submit-button"];

let infoContainer = document.getElementById("info-container");
let paragraph = document.getElementById("info-container-paragraph");
let infoContainerButton = document.getElementById("info-container-button");
let domElements = document.querySelectorAll("header, main, footer");

let displayInfoContainer = () => {
	domElements.forEach((element) => {
		element.style.opacity = 0.4;
		element.style.pointerEvents = "none";
	});
	infoContainer.classList.add("display-info-container");
};

submitButton.addEventListener("click", (event) => {
	event.preventDefault();

	try {
		let storeUser = new StoreUser();
		storeUser.firstName = firstName.value;
		storeUser.lastName = lastName.value;
		storeUser.mailAdress = mailAdress.value;

		if (password.value != passwordRepeat.value) {
			throw Error("El campo 'Contraseña' y 'Repetir contraseña' no coinciden.");
		} else {
			storeUser.password = password.value;
		}
		firstName.value = "";
		lastName.value = "";
		mailAdress.value = "";
		password.value = "";
		passwordRepeat.value = "";

		displayInfoContainer();
		paragraph.innerText = "El usuario ha sido creado correctamente.";
	} catch (error) {
		displayInfoContainer();
		paragraph.innerText = error;
	}
});

infoContainerButton.addEventListener("click", (event) => {
	domElements.forEach((element) => {
		element.style = [];
	});
	infoContainer.classList.remove("display-info-container");
});
