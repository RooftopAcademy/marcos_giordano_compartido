export default function homeView() {
  return `
  <div class="content-main-img">
      <img src="./resources/images/main-img.jpg" alt="" />
    </div>
    <div class="content-offers">
      <div class="content-offers-title">
        <h2>Mirá las ofertas de hoy!!!</h2>
      </div>
      <div
        class="content-offers-products"
        id="product-carrousel-container"
      >
        <!-- Javascript rendered -->
      </div>
    </div>

    <div class="content-partner">
      <a href="#/./signUp.html" class="content-partner-link">
        <div>
          <i class="fas fa-hands-helping fa-2x"></i>
          <h2>Hacete socio de nuestro club de descuentos!!!</h2>
        </div>
        <p>Hacé click aquí para completar el formulario!!!</p>
      </a>
    </div>
  `;
}
