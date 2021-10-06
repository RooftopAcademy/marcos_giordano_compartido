export default function newProductView() {
  return `
    <div class="new-product-container" id="main-content">
      <div class="form-title">
        <h1>Crear nuevo producto</h1>
      </div>

      <div class="new-product-content">
        <form class="form" id="form">
          <div class="form-text-input-container">
            <label>Nombre:</label>
            <input
              type="text"
              placeholder="Nombre del producto"
              class="form-text-input"
              name="product-name"
            />
          </div>

          <div class="form-text-input-container">
            <label>Tipo:</label>
            <select class="form-text-input" name="product-type" id="type-selector">
              <!-- javascript rendered -->
            </select>
          </div>

          <div class="form-text-input-container">
            <label>Precio:</label>
            <input
              type="number"
              step="0.01"
              min="0.00"
              value="0"
              class="form-text-input"
              name="product-price"
              placeholder="Precio del producto"
            />
          </div>

          <div class="form-text-input-container">
            <label>Descripción:</label>
            <textarea
              type="text"
              class="form-text-textarea"
              name="product-description"
              placeholder="Descripcion del producto"
            ></textarea>
          </div>

          <div class="form-text-input-container">
            <label>Imagen:</label>
            <input
              type="text"
              class="form-text-input"
              name="product-image"
              placeholder="URL de la imagen del producto"
            />
          </div>

          <div class="form-text-input-container">
            <label>Imagen tipo thumbnail:</label>
            <input
              type="text"
              class="form-text-input"
              name="product-thumbnail"
              placeholder="URL de la imagen thumbnail del producto"
            />
          </div>

          <div class="form-text-input-container">
            <label>Stock:</label>
            <input
              type="number"
              step="1"
              min="0"
              value="0"
              placeholder="Unidades de stock disponibles"
              class="form-text-input"
              name="product-stock"
            />
          </div>

          <div class="form-text-input-container">
            <label>Descuento:</label>
            <input
              type="number"
              step="0.001"
              min="0.00"
              value="0"
              class="form-text-input"
              name="product-discount"
              placeholder="Descuento del producto en %"
            />
          </div>

          <div class="form-button-container">
            <input
              type="submit"
              value="Crear Producto"
              class="form-button"
              id="new-product-submit-button"
            />
          </div>
        </form>
      </div>
    </div>
`;
}
