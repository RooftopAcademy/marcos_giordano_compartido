import Store from "../entities/Store";
import asideNavBar from "../components/asideNavBar";
import burgerButtonComponent from "../components/burgerButton";
import createNewProductButton from "../components/newProductButton";
import footerRendering from "../components/footer";
import headerRendering from "../components/header";
import PrivilegeEnum from "../enums/PrivilegeEnum";

export default function commonComponentsRendering(
  store: Store,
  mainContent: HTMLElement
) {
  let header: HTMLElement = document.getElementById("header")!;
  let footer: HTMLElement = document.getElementById("footer")!;
  let asideNavBarContainer: HTMLElement = document.getElementById("side-bar")!;

  header.innerHTML = headerRendering(store);
  footer.innerHTML = footerRendering();
  asideNavBarContainer.innerHTML = asideNavBar(store);

  //aside navigation bar rendering according to user privileges
  let navBarContainer: HTMLElement =
    document.getElementById("nav-bar-container")!;
  if (store.user != null) {
    if (store.user.privilege === PrivilegeEnum.admin) {
      let newProductLink: HTMLAnchorElement = createNewProductButton(
        document.createElement("a")
      );
      navBarContainer.appendChild(newProductLink);
    }
  }

  //Burger Button functionality
  let burgerButton: HTMLElement = document.getElementById("burger-button")!;

  burgerButtonComponent(
    burgerButton,
    footer,
    asideNavBarContainer,
    mainContent
  );
}
