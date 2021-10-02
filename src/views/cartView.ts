export default function cartView() {
  return `
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
}
