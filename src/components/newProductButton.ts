export default function createNewProductButton(): HTMLAnchorElement {
  let anchor = document.createElement("a");
  anchor.innerHTML = "NUEVO PRODUCTO";
  anchor.classList.add("button-link");
  anchor.href = "#/newProductView";
  anchor.id = "product-creation-link";
  return anchor;
}
