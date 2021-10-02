export default function createRemoveButton() {
  let removeButton: HTMLButtonElement;
  removeButton = document.createElement("button");
  removeButton.innerHTML = "Eliminar";
  removeButton.classList.add("button-link");
  removeButton.name = "remove-button";
  return removeButton;
}
