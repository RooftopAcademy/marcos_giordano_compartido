import createNewProductButton from "../components/createNewProductButton";
import PrivilegeEnum from "../enums/PrivilegeEnum";
import Store from "../entities/Store";
import userView from "../views/userView";

export default function UserViewLogic(store: Store, mainContent: HTMLElement) {
  mainContent.innerHTML = userView(store);

  let logOutButton: HTMLButtonElement = document.getElementById(
    "log-out"
  ) as HTMLButtonElement;

  let userName: NodeListOf<HTMLElement> = document.querySelectorAll(".js-user");

  if (logOutButton) {
    logOutButton.addEventListener("click", () => {
      store.clearUser();
      mainContent.innerHTML = userView(store);
      userName.forEach((element) => {
        element.innerHTML = `<i class="fas fa-user"></i> &nbsp Invitado`;
      });
      let productCreationLink: HTMLAnchorElement = document.getElementById(
        "product-creation-link"
      ) as HTMLAnchorElement;
      navBarContainer.removeChild(productCreationLink);
    });
  }

  let privilege: HTMLSelectElement = document.getElementById(
    "privilege"
  ) as HTMLSelectElement;

  if (store.user != null) {
    if (store.user.privilege == PrivilegeEnum.normal) {
      privilege.selectedIndex = 0;
    } else {
      privilege.selectedIndex = 1;
    }
  }

  let navBarContainer: HTMLElement =
    document.getElementById("nav-bar-container")!;

  if (privilege != undefined) {
    privilege.addEventListener("change", function () {
      if (privilege.value == "ADMIN") {
        store.user.privilege = PrivilegeEnum.admin;
      } else {
        store.user.privilege = PrivilegeEnum.normal;
      }
      store.saveUser();
      let anchor = document.createElement("a");
      anchor = createNewProductButton(anchor);
      if (store.user.privilege === PrivilegeEnum.admin) {
        navBarContainer.appendChild(anchor);
      } else {
        let productCreationLink: HTMLAnchorElement = document.getElementById(
          "product-creation-link"
        ) as HTMLAnchorElement;
        navBarContainer.removeChild(productCreationLink);
      }
    });
  }
}
