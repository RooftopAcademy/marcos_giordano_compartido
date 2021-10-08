import Product from "../entities/Product";
import Store from "../entities/Store";
import PrivilegeEnum from "../enums/PrivilegeEnum";
import productDetailsView from "../views/productDetailsView";
import getComments from "../services/jsonPlaceHolderAPI";
import returnHome from "../helpers/returnHome";
import displayInfoContainer from "../components/infoContainer";
import returnErrorView from "../helpers/returnErrorView";
import NullProduct from "../entities/NullProduct";
import createRemoveProductButton from "../components/removeProductButton";
import createEditProductButton from "../components/editProductButton";
import returnCart from "../helpers/returnCart";

export function productDetailsViewLogic(
  store: Store,
  mainContent: HTMLElement
) {
  const product: Product = getProduct(store);
  viewRendering(product, mainContent);
  getProductComments(); //should bringh comments by ProductId from the API
  buyProductEvents(product, store);
  removeProductEvents(product.id, store);
  editProductEvents(product.id);
}

//get product
function getProduct(store: Store): Product {
  const productID: string = window.location.href.split("?")[1].split("=")[1];
  const product = store.getProductById(productID);
  if (product instanceof NullProduct) {
    returnErrorView();
  }
  return product;
}

//view rendering
function viewRendering(product: Product, mainContent: HTMLElement): void {
  mainContent.innerHTML = productDetailsView(product);
}

//get product comments
function getProductComments(): void {
  const productCommentsContainer: HTMLElement = document.getElementById(
    "product-comments-container"
  )!;
  getComments(productCommentsContainer);
}

//buy button event
function buyProductEvents(product: Product, store: Store): void {
  const buyButtons: NodeListOf<HTMLElement> =
    document.getElementsByName("buy-button")!;

  buyButtons.forEach((buyButton: HTMLElement) => {
    buyButton.addEventListener("click", function () {
      store.cart.add(product);
      updateProductsQuantityInCart(store);
      returnCart();
    });

    if (store.user.privilege == PrivilegeEnum.admin) {
      buyButton.after(createRemoveProductButton());
      buyButton.after(createEditProductButton());
    }
  });
}

export function updateProductsQuantityInCart(store: Store): void {
  const productQuantity: HTMLElement =
    document.getElementById("cart-quantity")!;
  productQuantity.innerHTML = ` &nbsp ${store.cart.showAll().length}`;
}

//remove button event
function removeProductEvents(productId: string, store: Store): void {
  const removeButtons: NodeListOf<HTMLElement> = document.getElementsByName(
    "remove-product-button"
  )!;

  if (removeButtons) {
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

  //remove item from store and return home
  function removeItem(): void {
    store.removeProduct(productId);
    returnHome();
    displayInfoContainer("El producto ha sido eliminado correctamente.");
  }
}

function editProductEvents(productId: string): void {
  const editButtons: NodeListOf<HTMLElement> = document.getElementsByName(
    "edit-product-button"
  )!;

  if (editButtons) {
    editButtons.forEach((button: HTMLElement) => {
      button.addEventListener("click", function () {
        window.location.hash = `/editProduct?id=${productId}`;
      });
    });
  }
}
