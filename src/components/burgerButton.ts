import disableMainAndFooter from "../helpers/disableMainAndFooter";
import enableMainAndFooter from "../helpers/enableMainAndFooter";
import CommmonComponentsInterface from "../interfaces/CommonComponentsinterface";

export default function burgerButtonComponent(
  burgerButton: HTMLElement,
  commonComponents: CommmonComponentsInterface
) {
  burgerButton.addEventListener("click", burgerButtonClickEvent);

  function burgerButtonClickEvent() {
    if (commonComponents.asideNavBarContainer.style.display === "flex") {
      enableMainAndFooter(commonComponents);
    } else {
      disableMainAndFooter(commonComponents);
    }
  }
}
