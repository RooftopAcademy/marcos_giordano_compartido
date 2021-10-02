import displayInfoContainer from "../components/infoContainer";
import Store from "../entities/Store";
import StoreUser from "../entities/StoreUser";
import returnHome from "../helpers/returnHome";
import signUpView from "../views/signUpView";

export default function SignUpViewLogic(
  store: Store,
  mainContent: HTMLElement
) {
  //rendering the view
  mainContent.innerHTML = signUpView();

  //sign up form functionality
  let signUpForm: HTMLFormElement = document.getElementById(
    "sign-up-form"
  )! as HTMLFormElement;

  signUpForm["submit-button"].addEventListener("click", (event: Event) => {
    event.preventDefault();
    try {
      let newUser: StoreUser = new StoreUser();
      newUser.firstName = signUpForm["first-name"].value;
      newUser.lastName = signUpForm["last-name"].value;
      newUser.mailAdress = signUpForm["mail-adress"].value;

      if (signUpForm["password"].value != signUpForm["password-repeat"].value) {
        throw Error(
          "El campo 'Contraseña' y 'Repetir contraseña' no coinciden."
        );
      } else {
        newUser.password = signUpForm["password"].value;
      }

      //add user to the store
      store.user = newUser;

      //add user name to the page
      let userName: NodeListOf<HTMLElement> =
        document.querySelectorAll(".js-user");
      userName.forEach((element) => {
        element.innerHTML = `<i class="fas fa-user"></i> &nbsp ${newUser.firstName.toUpperCase()}`;
      });

      //remove privileges
      let navBarContainer: HTMLElement =
        document.getElementById("nav-bar-container")!;
      let productCreationLink: HTMLAnchorElement = document.getElementById(
        "product-creation-link"
      ) as HTMLAnchorElement;
      if (productCreationLink) {
        navBarContainer.removeChild(productCreationLink);
      }

      //return home and show info container success
      displayInfoContainer("El usuario ha sido creado correctamente.");
      returnHome();
    } catch (error) {
      //show info container error
      displayInfoContainer(`${error}`);
    }
  });
}
