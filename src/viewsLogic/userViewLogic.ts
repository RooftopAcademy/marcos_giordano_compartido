import createNewProductButton from "../components/newProductButton";
import PrivilegeEnum from "../enums/PrivilegeEnum";
import Store from "../entities/Store";
import userView from "../views/userView";

export function userViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent, store);
  const navBarContainer = loadNavBarContainer();

  logInEvent(store, navBarContainer, mainContent);

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

//log out events

function logOutEvent(
  store: Store,
  navBarContainer: HTMLElement,
  mainContent: HTMLElement
): void {
  const logOutButton: HTMLButtonElement = document.getElementById(
    "log-out"
  ) as HTMLButtonElement;
  const userName: NodeListOf<HTMLElement> =
    document.querySelectorAll(".js-user");

  if (logOutButton) {
    logOutButton.addEventListener("click", () => {
      store.clearUser();
      viewRendering(mainContent, store);
      userName.forEach((element) => {
        element.innerHTML = `<i class="fas fa-user"></i> &nbsp Inicio`;
      });
      removeNewProductLink(navBarContainer);
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
      store.saveUser();
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

//Log in events
function logInEvent(
  store: Store,
  navBarContainer: HTMLElement,
  mainContent: HTMLElement
) {
  let logInForm: HTMLFormElement = document.getElementById(
    "log-in-form"
  ) as HTMLFormElement;

  logInForm.addEventListener("input", function () {
    console.log(logInForm["mail-adress"].value);
  });
}
