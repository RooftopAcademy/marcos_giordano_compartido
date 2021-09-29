import Store from "../classes/Store";
import asideNavBar from "../components/asideNavBar";
import burgerButtonComponent from "../helpers/burgerButton";
import createNewProductButton from "../helpers/createNewProductButton";
import footerRendering from "../components/footer";
import headerRendering from "../components/header";
import PrivilegeEnum from "../enums/PrivilegeEnum";

export default function commonComponentsRendering(
  store: Store,
  mainContent: HTMLElement
) {
  let jsHeader: HTMLElement = document.getElementById("js-header")!;
  let jsFooter: HTMLElement = document.getElementById("js-footer")!;
  let asideNavBarContainer: HTMLElement = document.getElementById("side-bar")!;

  //header rendering
  jsHeader.innerHTML = headerRendering(store);

  //footer rendering

  jsFooter.innerHTML = footerRendering();

  //aside navigation bar rendering
  asideNavBarContainer.innerHTML = asideNavBar(store);

  //aside navigation bar rendering according to user privileges
  let navBarContainer: HTMLElement =
    document.getElementById("nav-bar-container")!;
  if (store.user != null) {
    if (store.user.privilege === PrivilegeEnum.admin) {
      let anchor = document.createElement("a");
      anchor = createNewProductButton(anchor);
      navBarContainer.appendChild(anchor);
    }
  }

  //Burger Button functionality
  let burgerButton: HTMLElement = document.querySelector("#burger-button")!;
  burgerButtonComponent(
    burgerButton,
    jsFooter,
    asideNavBarContainer,
    mainContent
  );
}
