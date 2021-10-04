import displayInfoContainer from "../components/infoContainer";
import Store from "../entities/Store";
import StoreUser from "../entities/StoreUser";
import PrivilegeEnum from "../enums/PrivilegeEnum";
import returnHome from "../helpers/returnHome";
import signUpView from "../views/signUpView";

export function signUpViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent);
  signUpFormEvents(store);
}
//view rendering
function viewRendering(mainContent: HTMLElement): void {
  mainContent.innerHTML = signUpView();
}

//Sign up for events
function signUpFormEvents(store: Store): void {
  const signUpForm: HTMLFormElement = document.getElementById(
    "sign-up-form"
  )! as HTMLFormElement;

  signUpForm["submit-button"].addEventListener("click", (event: Event) => {
    event.preventDefault();
    try {
      const newUser: StoreUser = new StoreUser();
      verifyUser(newUser, signUpForm);
      store.user = newUser;
      addUserNameToNavBar(newUser);
      setViewAccordingToUserPrivilieges(newUser);
      displayInfoContainer("El usuario ha sido creado correctamente.");
      returnHome();
    } catch (error) {
      displayInfoContainer(`${error}`);
    }
  });
}

//verify user creation according to UserStore Class rules

function verifyUser(newUser: StoreUser, signUpForm: HTMLFormElement): void {
  newUser.firstName = signUpForm["first-name"].value;
  newUser.lastName = signUpForm["last-name"].value;
  newUser.mailAdress = signUpForm["mail-adress"].value;

  if (signUpForm["password"].value != signUpForm["password-repeat"].value) {
    throw Error("El campo 'Contraseña' y 'Repetir contraseña' no coinciden.");
  } else {
    newUser.password = signUpForm["password"].value;
  }
}

//Add user name to navigation bars

function addUserNameToNavBar(newUser: StoreUser): void {
  const userName: NodeListOf<HTMLElement> =
    document.querySelectorAll(".js-user");
  userName.forEach((element) => {
    element.innerHTML = `<i class="fas fa-user"></i> &nbsp ${newUser.firstName.toUpperCase()}`;
  });
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
