import Store from "../entities/Store";
import asideNavBar from "../components/asideNavBar";
import burgerButtonComponent from "../components/burgerButton";
import createNewProductButton from "../components/newProductButton";
import footerRendering from "../components/footer";
import headerRendering from "../components/header";
import PrivilegeEnum from "../enums/PrivilegeEnum";
import CommmonComponentsInterface from "../interfaces/CommonComponentsinterface";

export default function commonComponentsRendering(
  store: Store,
  commonComponents: CommmonComponentsInterface
) {
  commonComponents.header.innerHTML = headerRendering(store);
  commonComponents.footer.innerHTML = footerRendering();
  commonComponents.asideNavBarContainer.innerHTML = asideNavBar(store);

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

  burgerButtonComponent(burgerButton, commonComponents);
}
