import CommmonComponentsInterface from "../interfaces/CommonComponentsinterface";

export default function disableMainAndFooter(
  commonComponents: CommmonComponentsInterface
) {
  commonComponents.asideNavBarContainer.style.display = "flex";
  commonComponents.asideNavBarContainer.classList.add("float");
  commonComponents.mainContent.classList.add("disabled");
  commonComponents.footer.classList.add("disabled");
}
