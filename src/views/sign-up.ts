import Store from "../Store.js";
import StoreUser from "../StoreUser.js";

export default function returnSignUpView(store: Store) {
	let signUpForm: HTMLFormElement = document.getElementById(
		"sign-up-form"
	)! as HTMLFormElement;

	let firstName: HTMLInputElement = signUpForm["first-name"];
	let lastName: HTMLInputElement = signUpForm["last-name"];
	let mailAdress: HTMLInputElement = signUpForm["mail-adress"];
	let password: HTMLInputElement = signUpForm["password"];
	let passwordRepeat: HTMLInputElement = signUpForm["password-repeat"];
	let submitButton: HTMLButtonElement = signUpForm["submit-button"];

	let infoContainer: HTMLElement = document.getElementById("info-container")!;
	let paragraph: HTMLParagraphElement = document.getElementById(
		"info-container-paragraph"
	) as HTMLParagraphElement;
	let infoContainerButton: HTMLButtonElement = document.getElementById(
		"info-container-button"
	) as HTMLButtonElement;
	let domElements: NodeListOf<HTMLElement> = document.querySelectorAll(
		"header, main, footer"
	)!;

	let displayInfoContainer = (text: string) => {
		domElements.forEach((element: HTMLElement) => {
			element.style.opacity = "0.4";
			element.style.pointerEvents = "none";
		});
		infoContainer.classList.add("display-info-container");
		paragraph.innerText = text;
	};

	submitButton.addEventListener("click", (event: Event) => {
		event.preventDefault();
		try {
			let storeUser: StoreUser = new StoreUser();
			storeUser.firstName = firstName.value;
			storeUser.lastName = lastName.value;
			storeUser.mailAdress = mailAdress.value;

			if (password.value != passwordRepeat.value) {
				throw Error(
					"El campo 'Contraseña' y 'Repetir contraseña' no coinciden."
				);
			} else {
				storeUser.password = password.value;
			}

			store.user = storeUser;

			firstName.value = "";
			lastName.value = "";
			mailAdress.value = "";
			password.value = "";
			passwordRepeat.value = "";

			let userName: NodeListOf<HTMLElement> =
				document.querySelectorAll(".js-user");
			userName.forEach((element) => {
				element.innerHTML = `<i class="fas fa-user"></i> &nbsp ${storeUser.firstName.toUpperCase()}`;
			});

			displayInfoContainer("El usuario ha sido creado correctamente.");
		} catch (error) {
			displayInfoContainer(`${error}`);
		}
	});

	infoContainerButton.addEventListener("click", () => {
		domElements.forEach((element: HTMLElement) => {
			element.setAttribute("style", "");
		});
		infoContainer.classList.remove("display-info-container");
	});
}
