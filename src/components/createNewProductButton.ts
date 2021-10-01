export default function createNewProductButton(anchor: HTMLAnchorElement) {
  anchor.innerHTML = "NUEVO PRODUCTO";
  anchor.classList.add("button-link");
  anchor.href = "#/newProductView";
  anchor.id = "product-creation-link";
  return anchor;
}
