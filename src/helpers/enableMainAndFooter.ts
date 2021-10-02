export default function enableMainAndFooter(
  asideNavBarContainer: HTMLElement,
  mainContent: HTMLElement,
  footer: HTMLElement
) {
  asideNavBarContainer.style.display = "none";
  asideNavBarContainer.classList.remove("float");
  mainContent.classList.remove("disabled");
  footer.classList.remove("disabled");
}
