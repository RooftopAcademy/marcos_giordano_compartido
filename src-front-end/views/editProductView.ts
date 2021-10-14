import Product from "../entities/Product";

export default function editProductView(product: Product) {
  return `
    <div class="new-product-container" id="main-content">
      <div class="form-title">
        <h1>Editar producto</h1>
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
              value="${product.price}"
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
            >${product.description}</textarea>
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
              value="${product.stock}"
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
              value="${product.discount}"
              class="form-text-input"
              name="product-discount"
              placeholder="Descuento del producto en %"
            />
          </div>

          <div class="form-button-container">
            <input
              type="submit"
              value="Editar Producto"
              class="form-button"
              id="edit-product-submit-button"
            />
          </div>
          
          <div class="form-button-container">
            <input
              type="button"
              value="Cancelar Edicion"
              class="form-button"
              id="cancel-edit-product-submit-button"
            />
          </div>
        </form>
      </div>
    </div>
`;
}
