import Store from "../entities/Store";

export default function cartView(store: Store): string {
  let returnComponent: string;
  if (store.cart.showAll().length != 0) {
    returnComponent = `
  <div class="cart-content" id="main-content">
    <table class="cart-content-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio p/u</th>
          <th>Cantidad</th>
          <th>Precio neto</th>
        </tr>
      </thead>
      <tbody id="cart-table">
        <!-- javascript rendered -->
      </tbody>
    </table>

    <button class="button-link" id="clean-cart-btn">
      Vaciar Carrito
    </button>
  </div>
  `;
  } else {
    returnComponent = `
  <div class="cart-content" id="main-content">
    <h1>Usted no posee artículos en su carrito</h1>
  </div>
  `;
  }
  return returnComponent;
}
