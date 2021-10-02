import Product from "../entities/Product";
import Store from "../entities/Store";
import PrivilegeEnum from "../enums/PrivilegeEnum";
import productDetailsView from "../views/productDetailsView";
import getComments from "../services/jsonPlaceHolderAPI";
import createRemoveButton from "../components/removeButton";
import returnHome from "../helpers/returnHome";
import displayInfoContainer from "../components/infoContainer";

export default function ProductDetailsViewLogic(
  store: Store,
  mainContent: HTMLElement
) {
  let productID: Array<string> = window.location.href.split("?")[1].split("=");
  let product: Array<Product> = store.getProductById(productID[1]);

  //load the view
  mainContent.innerHTML = productDetailsView(product[0]);

  //get the comments
  let productCommentsContainer: HTMLElement = document.getElementById(
    "product-comments-container"
  )!;
  getComments(productCommentsContainer);

  //add events to buy buttons
  let buyButtons: NodeListOf<HTMLElement> =
    document.getElementsByName("buy-button")!;

  buyButtons.forEach((buyButton: HTMLElement) => {
    buyButton.addEventListener("click", function () {
      store.cart.add(product[0]);
      let productQuantity: HTMLElement =
        document.getElementById("cart-quantity")!;
      productQuantity.innerHTML = ` &nbsp ${store.cart.showAll().length}`;
    });

    if (store.user.privilege == PrivilegeEnum.admin) {
      buyButton.after(createRemoveButton());
    }
  });

  let removeButtons: NodeListOf<HTMLElement> =
    document.getElementsByName("remove-button")!;

  if (removeButtons != null) {
    removeButtons.forEach((button: HTMLElement) => {
      button.addEventListener("click", function () {
        store.removeProduct(productID[1]);
        returnHome();
        displayInfoContainer("El producto ha sido eliminado correctamente.");
      });
    });
  }
}
