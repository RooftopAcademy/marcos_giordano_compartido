export default function createEditProductButton() {
  const editButton: HTMLButtonElement = document.createElement("button");
  editButton.innerHTML = "Editar";
  editButton.classList.add("button-link");
  editButton.name = "edit-product-button";
  return editButton;
}
