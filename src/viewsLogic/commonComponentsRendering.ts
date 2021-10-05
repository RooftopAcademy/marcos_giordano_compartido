import Store from "../entities/Store";
import asideNavBar from "../components/asideNavBar";
import burgerButtonRendering from "../components/burgerButton";
import createNewProductButton from "../components/newProductButton";
import footerRendering from "../components/footer";
import headerRendering from "../components/header";
import PrivilegeEnum from "../enums/PrivilegeEnum";
import CommmonComponentsInterface from "../interfaces/CommonComponentsinterface";
import NullStoreUser from "../entities/NullStoreUser";
import StoreUser from "../entities/StoreUser";

export function commonComponentsRendering(
  store: Store,
  commonComponents: CommmonComponentsInterface
) {
  commonComponents.header.innerHTML = headerRendering(store);
  commonComponents.footer.innerHTML = footerRendering();
  commonComponents.asideNavBarContainer.innerHTML = asideNavBar(store);
  sideNavRendering(store);
  burgerButtonRendering(commonComponents);
}

function sideNavRendering(store: Store) {
  const navBarContainer: HTMLElement =
    document.getElementById("nav-bar-container")!;
  if (store.user instanceof StoreUser) {
    if (store.user.privilege === PrivilegeEnum.admin) {
      const newProductLink: HTMLAnchorElement = createNewProductButton();
      navBarContainer.appendChild(newProductLink);
    }
  }
}
