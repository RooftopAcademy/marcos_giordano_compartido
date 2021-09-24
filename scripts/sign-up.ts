import StoreUser from "../src/StoreUser.js";

let signUpForm: HTMLFormElement = document.getElementById(
	"sign-up-form"
)! as HTMLFormElement;

let firstName: HTMLInputElement = signUpForm.firstName;
let lastName: HTMLInputElement = signUpForm.lastName;
let mailAdress: HTMLInputElement = signUpForm.mailAdress;
let password: HTMLInputElement = signUpForm.password;
let passwordRepeat: HTMLInputElement = signUpForm.passwordRepeat;
let submitButton: HTMLButtonElement = signUpForm.submitButton;

let infoContainer: HTMLElement = document.getElementById("info-container")!;
let paragraph: HTMLElement = document.getElementById(
	"info-container-paragraph"
)!;
let infoContainerButton: HTMLElement = document.getElementById(
	"info-container-button"
)!;
let domElements: NodeListOf<HTMLElement> = document.querySelectorAll(
	"header, main, footer"
)!;

let displayInfoContainer = () => {
	domElements.forEach((element: HTMLElement) => {
		element.style.opacity = "0.4";
		element.style.pointerEvents = "none";
	});
	infoContainer.classList.add("display-info-container");
};

submitButton.addEventListener("click", (event: Event) => {
	event.preventDefault();
	try {
		let storeUser: StoreUser = new StoreUser();
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
		paragraph.innerText = `${error}`;
	}
});

infoContainerButton.addEventListener("click", () => {
	domElements.forEach((element: HTMLElement) => {
		// element.style = [];
		element.setAttribute("style", "");
	});
	infoContainer.classList.remove("display-info-container");
});
