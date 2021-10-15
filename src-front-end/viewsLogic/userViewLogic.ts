import createNewProductButton from "../components/newProductButton";
import PrivilegeEnum from "../enums/PrivilegeEnum";
import Store from "../entities/Store";
import userView from "../views/userView";
import displayInfoContainer from "../components/infoContainer";
import returnHome from "../helpers/returnHome";
import addUserNameToNavBar from "../helpers/addUserNameToNavBar";
import StoreUser from "../entities/StoreUser";
import { getUserByEMail } from "../services/userServices";

export function userViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent, store);
  const navBarContainer = loadNavBarContainer();
  logInEvent(store);
  logOutEvent(store, navBarContainer, mainContent);
  privilegeEvents(store, navBarContainer);
}

//view rendering

function viewRendering(mainContent: HTMLElement, store: Store): void {
  mainContent.innerHTML = userView(store);
}

//load Navigation Bar

function loadNavBarContainer(): HTMLElement {
  return document.getElementById("nav-bar-container")!;
}

// Log in events
function logInEvent(store: Store) {
  let logInForm: HTMLFormElement = document.getElementById(
    "log-in-form"
  ) as HTMLFormElement;

  if (logInForm) {
    logInForm["submit-button"].addEventListener("click", function () {
      const inputMail = logInForm["mail-adress"].value.trim();
      const inputPassword = logInForm["password"].value.trim();

      getUserByEMail(inputMail).then((res) => {
        const logInUser = new StoreUser();
        logInUser.create(res);
        verifyUserPassword(logInUser, inputPassword, store);
        renderComponentsAccordingUserPrivileges(store);
      });
    });
  }
}

function verifyUserPassword(
  logInUser: StoreUser | null,
  inputPassword: string,
  store: Store
) {
  if (logInUser) {
    if (inputPassword === logInUser.password) {
      store.user = logInUser;
      addUserNameToNavBar(store.user.firstName.toUpperCase());
      returnHome();
    } else {
      displayInfoContainer("El password ingresado es incorrecto.");
    }
  } else {
    displayInfoContainer("El usuario ingresado no existe.");
  }
}

function renderComponentsAccordingUserPrivileges(store: Store) {
  const navBarContainer: HTMLElement =
    document.getElementById("nav-bar-container")!;

  if (store.user.privilege === PrivilegeEnum.admin) {
    const newProductLink: HTMLAnchorElement = createNewProductButton();
    navBarContainer.appendChild(newProductLink);
  } else {
    const productCreationLink: HTMLAnchorElement = document.getElementById(
      "product-creation-link"
    ) as HTMLAnchorElement;
    if (productCreationLink) {
      navBarContainer.removeChild(productCreationLink);
    }
  }
}

//log out events

function logOutEvent(
  store: Store,
  navBarContainer: HTMLElement,
  mainContent: HTMLElement
): void {
  const logOutButton: HTMLButtonElement = document.getElementById(
    "log-out"
  ) as HTMLButtonElement;

  if (logOutButton) {
    logOutButton.addEventListener("click", () => {
      store.clearUser();
      viewRendering(mainContent, store);
      addUserNameToNavBar("Inicio");
      removeNewProductLink(navBarContainer);
      returnHome();
    });
  }
}

//privilege events

function privilegeEvents(store: Store, navBarContainer: HTMLElement): void {
  const privilegeOptions: HTMLSelectElement = document.getElementById(
    "privilege"
  ) as HTMLSelectElement;

  if (privilegeOptions) {
    setDefaultOption(privilegeOptions, store);

    privilegeOptions.addEventListener("change", function () {
      setUserPrivilege(privilegeOptions, navBarContainer, store);
      store.refreshUser();
    });
  }
}

function setDefaultOption(privilegeOptions: HTMLSelectElement, store: Store) {
  if (store.user) {
    if (store.user.privilege == PrivilegeEnum.normal) {
      privilegeOptions.selectedIndex = 0;
    } else {
      privilegeOptions.selectedIndex = 1;
    }
  }
}

function setUserPrivilege(
  privilegeOptions: HTMLSelectElement,
  navBarContainer: HTMLElement,
  store: Store
) {
  if (privilegeOptions.value == "ADMIN") {
    const newProductButton: HTMLAnchorElement = createNewProductButton();
    store.user.privilege = PrivilegeEnum.admin;
    navBarContainer.appendChild(newProductButton);
  } else {
    store.user.privilege = PrivilegeEnum.normal;
    removeNewProductLink(navBarContainer);
  }
}

function removeNewProductLink(navBarContainer: HTMLElement) {
  const productCreationLink: HTMLAnchorElement = document.getElementById(
    "product-creation-link"
  ) as HTMLAnchorElement;
  if (productCreationLink) {
    navBarContainer.removeChild(productCreationLink);
  }
}
