export default function displayInfoContainer(text: string) {
  let domElements: NodeListOf<HTMLElement> = document.querySelectorAll(
    "header, main, footer"
  )!;
  let infoContainer: HTMLElement = document.getElementById("info-container")!;
  let paragraph: HTMLParagraphElement = document.getElementById(
    "info-container-paragraph"
  ) as HTMLParagraphElement;

  domElements.forEach((element: HTMLElement) => {
    element.style.opacity = "0.4";
    element.style.pointerEvents = "none";
  });
  infoContainer.classList.add("display-info-container");
  paragraph.innerText = text;

  let infoContainerButton: HTMLButtonElement = document.getElementById(
    "info-container-button"
  ) as HTMLButtonElement;

  if (infoContainerButton) {
    infoContainerButton.addEventListener("click", () => {
      domElements.forEach((element: HTMLElement) => {
        element.removeAttribute("style");
      });
      infoContainer.classList.remove("display-info-container");
    });
  }
}
