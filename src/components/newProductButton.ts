export default function createNewProductButton(): HTMLAnchorElement {
  let anchor = document.createElement("a");
  anchor.innerHTML = "NUEVO PRODUCTO";
  anchor.classList.add("button-link");
  anchor.href = "#/newProduct";
  anchor.id = "product-creation-link";
  return anchor;
}
