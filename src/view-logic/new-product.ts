import Product from "../classes/Product";
import ProductTypeEnum from "../enums/ProductTipeEnum";
import Store from "../classes/Store";

export default function returnNewProductView(store: Store) {
  let typeSelector: HTMLSelectElement = document.getElementById(
    "type-selector"
  ) as HTMLSelectElement;
  for (let item in Object.values(ProductTypeEnum)) {
    let newOption: HTMLOptionElement = document.createElement("option");
    newOption.value = Object.keys(ProductTypeEnum)[item];
    newOption.innerHTML = Object.values(ProductTypeEnum)[item];
    typeSelector.appendChild(newOption);
  }
  // typeSelector.addEventListener("change", function (): void {
  // 	console.log(this.selectedOptions[0].innerHTML);
  // 	console.log(this.selectedOptions[0].value);
  // });

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

  let infoContainer: HTMLElement = document.getElementById("info-container")!;
  let paragraph: HTMLParagraphElement = document.getElementById(
    "info-container-paragraph"
  ) as HTMLParagraphElement;
  let domElements: NodeListOf<HTMLElement> = document.querySelectorAll(
    "header, main, footer"
  )!;
  let displayInfoContainer = (text: string) => {
    domElements.forEach((element: HTMLElement) => {
      element.style.opacity = "0.4";
      element.style.pointerEvents = "none";
    });
    infoContainer.classList.add("display-info-container");
    paragraph.innerText = text;
  };

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
        displayInfoContainer("El producto ha sido creado correctamente.");
      } catch (error) {
        displayInfoContainer(`${error}`);
      }
    }
  );

  let infoContainerButton: HTMLButtonElement = document.getElementById(
    "info-container-button"
  ) as HTMLButtonElement;

  infoContainerButton.addEventListener("click", () => {
    domElements.forEach((element: HTMLElement) => {
      element.setAttribute("style", "");
    });
    infoContainer.classList.remove("display-info-container");
  });
}
