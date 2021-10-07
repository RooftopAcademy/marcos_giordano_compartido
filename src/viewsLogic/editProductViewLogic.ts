import Product from "../entities/Product";
import ProductTypeEnum from "../enums/ProductTipeEnum";
import Store from "../entities/Store";
import editProductView from "../views/editProductView";
import NullProduct from "../entities/NullProduct";
import returnErrorView from "../helpers/returnErrorView";
import displayInfoContainer from "../components/infoContainer";
import returnHome from "../helpers/returnHome";

export function editProductViewLogic(store: Store, mainContent: HTMLElement) {
  const product: Product = getProduct(store);
  viewRendering(mainContent, product);
  populateProductTypesSelectInput(product);
  formEvents(store);
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

  const editForm: HTMLFormElement = document.getElementById(
    "form"
  ) as HTMLFormElement;

  editForm["product-name"].value = product.name;
  editForm["product-image"].value = product.image;
  editForm["product-thumbnail"].value = product.thumbnail;
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

function formEvents(store: Store) {
  const editForm: HTMLFormElement = document.getElementById(
    "form"
  ) as HTMLFormElement;

  const submitButton: HTMLButtonElement = document.getElementById(
    "edit-product-submit-button"
  ) as HTMLButtonElement;

  const cancelButton: HTMLButtonElement = document.getElementById(
    "cancel-edit-product-submit-button"
  ) as HTMLButtonElement;

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    try {
      const product: Product = getProduct(store);
      verifyProductEdition(product, editForm);
      store.editProduct();
      displayInfoContainer("El producto ha sido editado correctamente.");
      returnHome();
    } catch (error) {
      displayInfoContainer(`${error}`);
    }
  });

  cancelButton.addEventListener("click", function (event) {
    event.preventDefault();
    displayInfoContainer("El producto no ha sido editado.");
    returnHome();
  });
}

//verify product creation according to Product Class rules
function verifyProductEdition(
  product: Product,
  editProductForm: HTMLFormElement
): void {
  product.name = editProductForm["product-name"].value;
  product.type = editProductForm["product-type"][
    editProductForm["product-type"].selectedIndex
  ].text as ProductTypeEnum;
  product.price = parseFloat(editProductForm["product-price"].value);
  product.description = editProductForm["product-description"].value;
  product.image = editProductForm["product-image"].value;
  product.thumbnail = editProductForm["product-thumbnail"].value;
  product.stock = parseInt(editProductForm["product-stock"].value);
  product.discount = parseFloat(editProductForm["product-discount"].value);
}
