import productItem from "../components/productItem";
import Product from "../entities/Product";
import ProductSort from "../entities/ProductSort";
import Store from "../entities/Store";
import Order from "../enums/OrderEnum";
import ProductTypeEnum from "../enums/ProductTipeEnum";
import SortingMethod from "../interfaces/SortingMethod";
import productListView from "../views/productListView";

let products: Array<Product>;

export function productListViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent);
  products = getProductsFromStore(store);
  renderProductItems(products, mainContent, store);
  populateProductTypesSelectInput();
}

//view rendering
function viewRendering(mainContent: HTMLElement): void {
  mainContent.innerHTML = productListView();
}

//get products from store
function getProductsFromStore(store: Store): Array<Product> {
  const searchText: string = window.location.href.split("?")[1];
  if (searchText) {
    const productSearchText = searchText.split("=")[1];
    const searchProducts = store.filterCatalog(productSearchText);

    if (searchProducts.length > 0) {
      return searchProducts;
    }
  }
  return store.showCatalog();
}

//Render products
function renderProductItems(
  products: Array<Product>,
  mainContent: HTMLElement,
  store: Store
): void {
  const productContainer: HTMLElement =
    document.getElementById("product-container")!;

  if (products.length > 0) {
    products.forEach((product: Product) => {
      productContainer.innerHTML += productItem(product);
    });
  } else {
    productContainer.innerHTML = `
    <div class="product-not-found">
      <h1>Lo sentimos, no hemos podido encontrar productos con éste criterio de búsqueda</h1>
    </div>
    `;
  }

  filteringProducts(store, mainContent);
}

//Clear products
function clearProductItems(): void {
  const productContainer: HTMLElement =
    document.getElementById("product-container")!;

  productContainer.innerHTML = "";
}

//Selector for product types loading
function populateProductTypesSelectInput(initialValue?: string): void {
  const typeSelector: HTMLSelectElement = document.getElementById(
    "product-type-selector"
  ) as HTMLSelectElement;

  for (const item in Object.values(ProductTypeEnum)) {
    const newOption: HTMLOptionElement = document.createElement("option");
    newOption.value = Object.values(ProductTypeEnum)[item];
    if (initialValue == newOption.value) {
      newOption.selected = true;
    }
    newOption.innerHTML = Object.values(ProductTypeEnum)[item];
    typeSelector.appendChild(newOption);
  }
}

//products filtering and ordering
function filteringProducts(store: Store, mainContent: HTMLElement) {
  const typeSelector: HTMLSelectElement = document.getElementById(
    "product-type-selector"
  ) as HTMLSelectElement;

  const nameOrderSelector: HTMLSelectElement = document.getElementById(
    "product-name-order-selector"
  ) as HTMLSelectElement;

  const priceOrderSelector: HTMLSelectElement = document.getElementById(
    "product-price-order-selector"
  ) as HTMLSelectElement;

  let filteredProducts: Array<Product> = [...products];

  typeSelector.addEventListener("change", reRenderFilteredProducts);

  nameOrderSelector.addEventListener("change", reRenderFilteredProducts);

  priceOrderSelector.addEventListener("change", reRenderFilteredProducts);

  function reRenderFilteredProducts() {
    filteredProducts = checkSelectorsStatus(
      typeSelector,
      nameOrderSelector,
      priceOrderSelector,
      filteredProducts
    );

    clearProductItems();
    renderProductItems(filteredProducts, mainContent, store);

    typeSelector.removeEventListener("change", reRenderFilteredProducts);

    nameOrderSelector.removeEventListener("change", reRenderFilteredProducts);

    priceOrderSelector.removeEventListener("change", reRenderFilteredProducts);
  }
}

function checkSelectorsStatus(
  typeSelector: HTMLSelectElement,
  nameOrderSelector: HTMLSelectElement,
  priceOrderSelector: HTMLSelectElement,
  filteredProducts: Array<Product>
): Array<Product> {
  let sortingMethod: SortingMethod = {};
  let sorting: ProductSort;

  if (typeSelector.value != "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.type == typeSelector.value
    );
  }

  if (
    nameOrderSelector.value == "ASC" ||
    nameOrderSelector.value == "DESC" ||
    priceOrderSelector.value == "ASC" ||
    priceOrderSelector.value == "DESC"
  ) {
    nameOrderSelector.value == "ASC"
      ? (sortingMethod.name = Order.ASC)
      : undefined;
    nameOrderSelector.value == "DESC"
      ? (sortingMethod.name = Order.DESC)
      : undefined;
    priceOrderSelector.value == "ASC"
      ? (sortingMethod.price = Order.ASC)
      : undefined;
    priceOrderSelector.value == "DESC"
      ? (sortingMethod.price = Order.DESC)
      : undefined;

    sorting = new ProductSort(filteredProducts);
    sorting.setSorting(sortingMethod);
    filteredProducts = sorting.getSorting() as Array<Product>;
  }

  return filteredProducts;
}
