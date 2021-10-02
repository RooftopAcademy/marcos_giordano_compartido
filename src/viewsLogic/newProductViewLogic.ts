import Product from "../entities/Product";
import ProductTypeEnum from "../enums/ProductTipeEnum";
import Store from "../entities/Store";
import newProductView from "../views/newProductView";
import returnHome from "../helpers/returnHome";
import displayInfoContainer from "../components/infoContainer";

export default function NewProductViewLogic(
  store: Store,
  mainContent: HTMLElement
) {
  mainContent.innerHTML = newProductView();
  let typeSelector: HTMLSelectElement = document.getElementById(
    "type-selector"
  ) as HTMLSelectElement;
  for (let item in Object.values(ProductTypeEnum)) {
    let newOption: HTMLOptionElement = document.createElement("option");
    newOption.value = Object.keys(ProductTypeEnum)[item];
    newOption.innerHTML = Object.values(ProductTypeEnum)[item];
    typeSelector.appendChild(newOption);
  }

  let newProductForm: HTMLFormElement = document.getElementById(
    "new-product-form"
  )! as HTMLFormElement;
  let productName: HTMLInputElement = newProductForm["product-name"];
  let productType: HTMLSelectElement = newProductForm["product-type"];
  let productPrice: HTMLInputElement = newProductForm["product-price"];
  let productDescrition: HTMLInputElement =
    newProductForm["product-description"];
  let productImage: HTMLInputElement = newProductForm["product-image"];
  let productThumbnail: HTMLInputElement = newProductForm["product-thumbnail"];
  let productStock: HTMLInputElement = newProductForm["product-stock"];
  let productDiscount: HTMLInputElement = newProductForm["product-discount"];

  let newProductSubmitButton: HTMLInputElement = document.getElementById(
    "new-product-submit-button"
  ) as HTMLInputElement;

  newProductSubmitButton.addEventListener(
    "click",
    function (event: Event): void {
      event.preventDefault();
      try {
        let newProduct: Product = new Product();
        newProduct.id = window.crypto
          .getRandomValues(new Uint32Array(1))[0]
          .toString();
        newProduct.name = productName.value;
        newProduct.type = productType.value as ProductTypeEnum;
        newProduct.price = parseFloat(productPrice.value);
        newProduct.description = productDescrition.value;
        newProduct.image = productImage.value;
        newProduct.thumbnail = productThumbnail.value;
        newProduct.stock = parseInt(productStock.value);
        newProduct.discount = parseFloat(productDiscount.value);
        store.newProduct(newProduct);
        returnHome();
        displayInfoContainer("El producto ha sido creado correctamente.");
      } catch (error) {
        displayInfoContainer(`${error}`);
      }
    }
  );
}
