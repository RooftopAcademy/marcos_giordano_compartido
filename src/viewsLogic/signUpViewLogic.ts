import displayInfoContainer from "../components/infoContainer";
import Store from "../entities/Store";
import StoreUser from "../entities/StoreUser";
import returnHome from "../helpers/returnHome";
import signUpView from "../views/signUpView";

export default function SignUpViewLogic(
  store: Store,
  mainContent: HTMLElement
) {
  mainContent.innerHTML = signUpView();

  let signUpForm: HTMLFormElement = document.getElementById(
    "sign-up-form"
  )! as HTMLFormElement;

  let firstName: HTMLInputElement = signUpForm["first-name"];
  let lastName: HTMLInputElement = signUpForm["last-name"];
  let mailAdress: HTMLInputElement = signUpForm["mail-adress"];
  let password: HTMLInputElement = signUpForm["password"];
  let passwordRepeat: HTMLInputElement = signUpForm["password-repeat"];
  let submitButton: HTMLButtonElement = signUpForm["submit-button"];

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

      let userName: NodeListOf<HTMLElement> =
        document.querySelectorAll(".js-user");
      userName.forEach((element) => {
        element.innerHTML = `<i class="fas fa-user"></i> &nbsp ${storeUser.firstName.toUpperCase()}`;
      });
      returnHome();
      displayInfoContainer("El usuario ha sido creado correctamente.");
    } catch (error) {
      displayInfoContainer(`${error}`);
    }
  });
}
