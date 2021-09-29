export default function burgerButtonComponent(
  burgerButton: HTMLElement,
  footer: HTMLElement,
  asideNavBarContainer: HTMLElement,
  mainContent: HTMLElement
) {
  burgerButton.addEventListener("click", burgerButtonClickEvent);

  function burgerButtonClickEvent() {
    if (asideNavBarContainer.style.display === "flex") {
      asideNavBarContainer.style.display = "none";
      asideNavBarContainer.classList.remove("float");
      mainContent.classList.remove("disabled");
      footer.classList.remove("disabled");
    } else {
      asideNavBarContainer.style.display = "flex";
      asideNavBarContainer.classList.add("float");
      mainContent.classList.add("disabled");
      footer.classList.add("disabled");
    }
  }

  return burgerButton;
}
