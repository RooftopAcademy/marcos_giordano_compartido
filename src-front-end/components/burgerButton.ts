import disableMainAndFooter from "../helpers/disableMainAndFooter";
import enableMainAndFooter from "../helpers/enableMainAndFooter";
import CommmonComponentsInterface from "../interfaces/CommonComponentsinterface";

export default function burgerButtonRendering(
  commonComponents: CommmonComponentsInterface
) {
  const burgerButton: HTMLElement = document.getElementById("burger-button")!;
  burgerButton.addEventListener("click", burgerButtonClickEvent);

  function burgerButtonClickEvent() {
    if (commonComponents.asideNavBarContainer.style.display === "flex") {
      enableMainAndFooter(commonComponents);
    } else {
      disableMainAndFooter(commonComponents);
    }
  }
}
