export default function productListView() {
  return `
  <div class="filter-products">
    <div class="">
      <label>Filtrar por tipo</label>
      <select class="product-filter-select" id="product-type-selector">
        <option value="all">Todos los tipos</option>
      </select>
    </div>
    <div class="">
      <label>Ordenar por nombre</label>
      <select class="product-filter-select" id="product-name-order-selector">
        <option value="none" selected="selected">Sin Filtro</option>
        <option value="ASC">Ascendente</option>
        <option value="DESC">Descendente</option>
      </select>
    </div>
    <div class="">
      <label>Ordenar por precio</label>
      <select class="product-filter-select" id="product-price-order-selector">
        <option value="none" selected="selected">Sin Filtro</option>
        <option value="ASC">Ascendente</option>
        <option value="DESC">Descendente</option>
      </select>
    </div>
  </div>
  <div class="content-products" id="product-container">
    <!-- rendered by jsvascript -->
  </div>
  `;
}
