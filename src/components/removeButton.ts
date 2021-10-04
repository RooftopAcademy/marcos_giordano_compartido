export default function createRemoveButton() {
  const removeButton: HTMLButtonElement = document.createElement("button");
  removeButton.innerHTML = "Eliminar";
  removeButton.classList.add("button-link");
  removeButton.name = "remove-button";
  return removeButton;
}
