import CommmonComponentsInterface from "../interfaces/CommonComponentsinterface";

export default function enableMainAndFooter(
  commonComponents: CommmonComponentsInterface
) {
  commonComponents.asideNavBarContainer.style.display = "none";
  commonComponents.asideNavBarContainer.classList.remove("float");
  commonComponents.mainContent.classList.remove("disabled");
  commonComponents.footer.classList.remove("disabled");
}
