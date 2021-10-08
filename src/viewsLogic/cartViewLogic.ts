import cartItem from "../components/cartItem";
import Store from "../entities/Store";
import cartView from "../views/cartView";
import { updateProductsQuantityInCart } from "./productDetailsViewLogic";
import CartItemInterface from "../interfaces/CartItemInterface";
import Product from "../entities/Product";
import pesos from "../helpers/pesosCurrency";
import displayInfoContainer from "../components/infoContainer";

export function cartViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent, store);
  addCartProducts(store);
  removeCartProduct(store, mainContent);
  changeProductAmount(store, mainContent);
  cleanCartButtonEvent(store, mainContent);
}

//view rendering
function viewRendering(mainContent: HTMLElement, store: Store): void {
  mainContent.innerHTML = cartView(store);
}

//Add cart products to the cart view table
function addCartProducts(store: Store): void {
  const cart: Array<CartItemInterface> = store.cart.showAll();
  fillCartViewTable(cart);
}

//load cart products in cart view table
function fillCartViewTable(cart: Array<CartItemInterface>): void {
  const cartTable: HTMLElement = document.getElementById("cart-table")!;
  if (cart.length != 0) {
    cart.forEach((item: CartItemInterface) => {
      cartTable.innerHTML += cartItem(item);
    });
  }
}

//remove a cart item
function removeCartProduct(store: Store, mainContent: HTMLElement): void {
  const removeButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".js-remove");

  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", function () {
      if (this.dataset.productId) {
        store.cart.remove(this.dataset.productId);
        removeRow(this.dataset.productId);
        updateProductsQuantityInCart(store);
      }

      if (store.cart.showAll().length == 0) {
        viewRendering(mainContent, store);
      }
    });
  });
}

//add or substract the product quantity
function changeProductAmount(store: Store, mainContent: HTMLElement): void {
  substractProductAmountEvent(store, mainContent);
  addProductAmountEvent(store);
}

function substractProductAmountEvent(
  store: Store,
  mainContent: HTMLElement
): void {
  const substractButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".js-substract");

  substractButtons.forEach((substractButton) => {
    substractButton.addEventListener("click", function () {
      if (this.dataset.productId) {
        const product = store.getProductById(this.dataset.productId);
        store.cart.substract(this.dataset.productId);
        updateProductsQuantityInCart(store);
        if (store.cart.showAll().length == 0) {
          viewRendering(mainContent, store);
        } else {
          refreshAmount(store, product);
        }
      }
    });
  });
}

function addProductAmountEvent(store: Store): void {
  const addButtons: NodeListOf<HTMLElement> =
    document.querySelectorAll(".js-add");

  addButtons.forEach((addButton) => {
    addButton.addEventListener("click", function () {
      if (this.dataset.productId) {
        const product = store.getProductById(this.dataset.productId);
        const cartItem = store.cart.getCartItemById(this.dataset.productId);

        if (cartItem.amount < product.stock) {
          store.cart.add(product);
          updateProductsQuantityInCart(store);
          refreshAmount(store, product);
        } else {
          displayInfoContainer(
            `No es posible adquirir mas de ${cartItem.amount} unidades de éste producto - Stock insuficiente.`
          );
        }
      }
    });
  });
}

function refreshAmount(store: Store, product: Product): void {
  const itemAmount = document.getElementById(`amount${product.id}`);
  const itemTotalPrice = document.getElementById(`totalPrice${product.id}`);
  const finalPrice = document.getElementById(`final-price`);

  if (itemAmount && itemTotalPrice && finalPrice) {
    const cartItem = store.cart.getCartItemById(`${product.id}`);

    if (cartItem) {
      itemAmount.innerHTML = cartItem.amount.toString();
      itemTotalPrice.innerHTML = pesos.format(
        cartItem.amount * cartItem.item.getPriceWithDiscount()
      );
    } else {
      removeRow(product.id);
    }

    finalPrice.innerHTML = calculateFinalPrice(store);
  }
}

function removeRow(id: string): void {
  const row = document.getElementById(`row${id}`);
  if (row) {
    row.remove();
  }
}

function calculateFinalPrice(store: Store): string {
  return pesos.format(
    store.cart
      .showAll()
      .map((previousValue) => {
        return previousValue.amount * previousValue.item.getPriceWithDiscount();
      })
      .reduce((a, b) => a + b)
  );
}

// Remove products from cart button event
function cleanCartButtonEvent(store: Store, mainContent: HTMLElement): void {
  const cleanCartBtn: HTMLElement = document.getElementById("clean-cart-btn")!;
  if (cleanCartBtn) {
    cleanCartBtn.addEventListener("click", function () {
      store.cart.clear();
      viewRendering(mainContent, store);
      updateProductsQuantityInCart(store);
    });
  }
}
