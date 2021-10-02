import disableMainAndFooter from "../helpers/disableMainAndFooter";
import enableMainAndFooter from "../helpers/enableMainAndFooter";

export default function burgerButtonComponent(
  burgerButton: HTMLElement,
  footer: HTMLElement,
  asideNavBarContainer: HTMLElement,
  mainContent: HTMLElement
) {
  burgerButton.addEventListener("click", burgerButtonClickEvent);

  function burgerButtonClickEvent() {
    if (asideNavBarContainer.style.display === "flex") {
      enableMainAndFooter(asideNavBarContainer, mainContent, footer);
    } else {
      disableMainAndFooter(asideNavBarContainer, mainContent, footer);
    }
  }
}
