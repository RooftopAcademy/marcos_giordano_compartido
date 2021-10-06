import Product from "../entities/Product";
import ProductTypeEnum from "../enums/ProductTipeEnum";
import Store from "../entities/Store";
import editProductView from "../views/editProductView";
import NullProduct from "../entities/NullProduct";
import returnErrorView from "../helpers/returnErrorView";

export function editProductViewLogic(store: Store, mainContent: HTMLElement) {
  const product: Product = getProduct(store);
  viewRendering(mainContent, product);
  populateProductTypesSelectInput(product);
}

//get product
function getProduct(store: Store): Product {
  const productID: string = window.location.href.split("?")[1].split("=")[1];
  const product = store.getProductById(productID);
  if (product instanceof NullProduct) {
    returnErrorView();
  }
  return product;
}

//view rendering
function viewRendering(mainContent: HTMLElement, product: Product): void {
  mainContent.innerHTML = editProductView(product);
}

//Selector for product types loading
function populateProductTypesSelectInput(product: Product): void {
  const typeSelector: HTMLSelectElement = document.getElementById(
    "type-selector"
  ) as HTMLSelectElement;
  for (const item in Object.values(ProductTypeEnum)) {
    const newOption: HTMLOptionElement = document.createElement("option");
    newOption.value = Object.keys(ProductTypeEnum)[item];
    newOption.innerHTML = Object.values(ProductTypeEnum)[item];

    if (product.type == Object.values(ProductTypeEnum)[item]) {
      newOption.selected = true;
    }

    typeSelector.appendChild(newOption);
  }
}
