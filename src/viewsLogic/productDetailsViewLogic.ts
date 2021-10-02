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
  let product: Product = getProduct();
  viewRender(product);
  getProductComments(); //should bringh comments by ProductId from the API
  buyProductEvents(product);
  removeProductEvents(product.id);

  /*
  Functions
  */

  //view rendering

  function viewRender(product: Product): void {
    mainContent.innerHTML = productDetailsView(product);
  }

  //get product Id

  function getProduct(): Product {
    let productID: Array<string> = window.location.href
      .split("?")[1]
      .split("=");
    let product: Array<Product> = store.getProductById(productID[1]);
    return product[0];
  }

  //get product comments

  function getProductComments(): void {
    let productCommentsContainer: HTMLElement = document.getElementById(
      "product-comments-container"
    )!;
    getComments(productCommentsContainer);
  }

  //buy button event

  function buyProductEvents(product: Product): void {
    let buyButtons: NodeListOf<HTMLElement> =
      document.getElementsByName("buy-button")!;

    buyButtons.forEach((buyButton: HTMLElement) => {
      buyButton.addEventListener("click", function () {
        store.cart.add(product);
        increaseProductsQuantityInCart();
      });

      if (store.user.privilege == PrivilegeEnum.admin) {
        buyButton.after(createRemoveButton());
      }
    });
  }
  function increaseProductsQuantityInCart(): void {
    let productQuantity: HTMLElement =
      document.getElementById("cart-quantity")!;
    productQuantity.innerHTML = ` &nbsp ${store.cart.showAll().length}`;
  }

  //remove button event

  function removeProductEvents(product: string): void {
    let removeButtons: NodeListOf<HTMLElement> =
      document.getElementsByName("remove-button")!;

    if (removeButtons != null) {
      removeButtons.forEach((button: HTMLElement) => {
        button.addEventListener("click", function () {
          displayInfoContainer(
            "¿Está seguro que desea eliminar éste producto?.",
            true,
            removeItem
          );
        });
      });
    }
    function removeItem(): void {
      store.removeProduct(product);
      returnHome();
      displayInfoContainer("El producto ha sido eliminado correctamente.");
    }
  }
}
