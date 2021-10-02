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
  //rendering the view
  mainContent.innerHTML = newProductView();

  //propulate product type option values
  let typeSelector: HTMLSelectElement = document.getElementById(
    "type-selector"
  ) as HTMLSelectElement;
  for (let item in Object.values(ProductTypeEnum)) {
    let newOption: HTMLOptionElement = document.createElement("option");
    newOption.value = Object.keys(ProductTypeEnum)[item];
    newOption.innerHTML = Object.values(ProductTypeEnum)[item];
    typeSelector.appendChild(newOption);
  }

  //new product form functionality
  let newProductForm: HTMLFormElement = document.getElementById(
    "new-product-form"
  )! as HTMLFormElement;

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
        newProduct.name = newProductForm["product-name"].value;
        newProduct.type = newProductForm["product-type"]
          .value as ProductTypeEnum;
        newProduct.price = parseFloat(newProductForm["product-price"].value);
        newProduct.description = newProductForm["product-description"].value;
        newProduct.image = newProductForm["product-image"].value;
        newProduct.thumbnail = newProductForm["product-thumbnail"].value;
        newProduct.stock = parseInt(newProductForm["product-stock"].value);
        newProduct.discount = parseFloat(
          newProductForm["product-discount"].value
        );

        //add product to the store
        store.newProduct(newProduct);

        //return home and show info container success
        displayInfoContainer("El producto ha sido creado correctamente.");
        returnHome();
      } catch (error) {
        //show info container error
        displayInfoContainer(`${error}`);
      }
    }
  );
}
