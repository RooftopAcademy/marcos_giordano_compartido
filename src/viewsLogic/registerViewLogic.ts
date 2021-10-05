import displayInfoContainer from "../components/infoContainer";
import Store from "../entities/Store";
import StoreUser from "../entities/StoreUser";
import PrivilegeEnum from "../enums/PrivilegeEnum";
import addUserNameToNavBar from "../helpers/addUserNameToNavBar";
import returnHome from "../helpers/returnHome";
import registerView from "../views/registerView";

export function registerViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent);
  registerFormEvents(store);
}
//view rendering
function viewRendering(mainContent: HTMLElement): void {
  mainContent.innerHTML = registerView();
}

//Sign up for events
function registerFormEvents(store: Store): void {
  const registerForm: HTMLFormElement = document.getElementById(
    "form"
  )! as HTMLFormElement;

  registerForm["submit-button"].addEventListener("click", function () {
    try {
      const newUser: StoreUser = new StoreUser();
      verifyInputData(newUser, registerForm);
      store.registerUser(newUser);
      addUserNameToNavBar(newUser.firstName.toUpperCase());
      setViewAccordingToUserPrivilieges(newUser);
      displayInfoContainer("El usuario ha sido creado correctamente.");
      returnHome();
    } catch (error) {
      displayInfoContainer(`${error}`);
    }
  });
}

//verify user creation according to UserStore Class rules

function verifyInputData(
  newUser: StoreUser,
  registerForm: HTMLFormElement
): void {
  newUser.firstName = registerForm["first-name"].value;
  newUser.lastName = registerForm["last-name"].value;
  newUser.mailAdress = registerForm["mail-adress"].value;

  if (registerForm["password"].value != registerForm["password-repeat"].value) {
    throw Error("El campo 'Contraseña' y 'Repetir contraseña' no coinciden.");
  } else {
    newUser.password = registerForm["password"].value;
  }
}

//Add user special Dom Elements according to his privilege

function setViewAccordingToUserPrivilieges(newUser: StoreUser): void {
  //should verify user privilege from server and act according.
  //now is just removing some elements from DOM.
  if (newUser.privilege == PrivilegeEnum.normal) {
    const navBarContainer: HTMLElement =
      document.getElementById("nav-bar-container")!;
    const productCreationLink: HTMLAnchorElement = document.getElementById(
      "product-creation-link"
    ) as HTMLAnchorElement;
    if (productCreationLink) {
      navBarContainer.removeChild(productCreationLink);
    }
  }
}
