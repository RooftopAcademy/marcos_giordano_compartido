export default function createRemoveProductButton() {
  const removeButton: HTMLButtonElement = document.createElement("button");
  removeButton.innerHTML = "Eliminar";
  removeButton.classList.add("button-link");
  removeButton.name = "remove-product-button";
  return removeButton;
}
