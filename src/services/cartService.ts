import CartItemInterface from "../interfaces/CartItemInterface";

export function getCartItems(): Array<CartItemInterface> | null {
  const loadData: string | null = localStorage.getItem("cartProducts");
  if (loadData) {
    const savedProducts: Array<CartItemInterface> = JSON.parse(loadData);
    return savedProducts;
  }
  return null;
}

export function postCartItems(products: Array<CartItemInterface>) {
  localStorage.setItem("cartProducts", JSON.stringify(products));
}

export function removeAllCartItems() {
  localStorage.removeItem("cartProducts");
}
