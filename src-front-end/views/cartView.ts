import Store from "../entities/Store";
import pesos from "../helpers/pesosCurrency";

export default function cartView(store: Store): string {
  let returnComponent: string;
  if (store.cart.showAll().length != 0) {
    returnComponent = `
  <div class="cart-content" id="main-content">
    <table class="cart-content-table">
      <thead>
        <tr>
          <th><h2>Producto</h2></th>
          <th><h2>Acciones</h2></th>
        </tr>
      </thead>
      <tbody id="cart-table">
        <!-- javascript rendered -->
      </tbody>
      <tfooter>
        <tr>
          <th><h2>Monto total</h2></th>
          <th><h2 id="final-price">${pesos.format(
            store.cart
              .showAll()
              .map((previousValue) => {
                return (
                  previousValue.amount *
                  previousValue.item.getPriceWithDiscount()
                );
              })
              .reduce((a, b) => a + b)
          )}</h2></th>
        </tr>
      </tfooter>
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
