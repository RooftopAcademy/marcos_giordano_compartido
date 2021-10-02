export default function disableMainAndFooter(
  asideNavBarContainer: HTMLElement,
  mainContent: HTMLElement,
  footer: HTMLElement
) {
  asideNavBarContainer.style.display = "flex";
  asideNavBarContainer.classList.add("float");
  mainContent.classList.add("disabled");
  footer.classList.add("disabled");
}
