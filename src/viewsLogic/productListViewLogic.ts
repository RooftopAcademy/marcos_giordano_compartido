import productItem from "../components/productItem";
import Product from "../entities/Product";
import ProductSort from "../entities/ProductSort";
import Store from "../entities/Store";
import Order from "../enums/OrderEnum";
import ProductTypeEnum from "../enums/ProductTipeEnum";
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
  typeSelectorEvents(store, mainContent);
  nameOrderSelectorEvents(store, mainContent);
  priceOrderSelectorEvents(store, mainContent);
}

function typeSelectorEvents(store: Store, mainContent: HTMLElement) {
  const typeSelector: HTMLSelectElement = document.getElementById(
    "product-type-selector"
  ) as HTMLSelectElement;

  typeSelector.addEventListener("change", () => {
    let filteredProducts: Array<Product>;
    if (typeSelector.value == "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = [...products].filter(
        (product) => product.type == typeSelector.value
      );
    }

    clearProductItems();
    renderProductItems(filteredProducts, mainContent, store);
  });
}

function nameOrderSelectorEvents(store: Store, mainContent: HTMLElement) {
  const nameOrderSelector: HTMLSelectElement = document.getElementById(
    "product-name-order-selector"
  ) as HTMLSelectElement;

  nameOrderSelector.addEventListener("change", () => {
    let orderedProducts: Array<Product>;

    let sortingMethod = {
      name: Order.ASC,
    };

    if (nameOrderSelector.value == "none") {
      orderedProducts = [...products];
    } else {
      const sorting = new ProductSort([...products]);

      if (nameOrderSelector.value == "DESC") {
        sortingMethod = {
          name: Order.DESC,
        };
      }

      sorting.setSorting(sortingMethod);
      orderedProducts = sorting.getSorting() as Array<Product>;
    }

    clearProductItems();
    renderProductItems(orderedProducts, mainContent, store);
  });
}

function priceOrderSelectorEvents(store: Store, mainContent: HTMLElement) {
  const priceOrderSelector: HTMLSelectElement = document.getElementById(
    "product-price-order-selector"
  ) as HTMLSelectElement;

  priceOrderSelector.addEventListener("change", () => {
    let orderedProducts: Array<Product>;

    let sortingMethod = {
      name: Order.ASC,
    };

    if (priceOrderSelector.value == "none") {
      orderedProducts = [...products];
    } else {
      const sorting = new ProductSort([...products]);

      if (priceOrderSelector.value == "DESC") {
        sortingMethod = {
          name: Order.DESC,
        };
      }

      sorting.setSorting(sortingMethod);
      orderedProducts = sorting.getSorting() as Array<Product>;
    }

    clearProductItems();
    renderProductItems(orderedProducts, mainContent, store);
  });
}
