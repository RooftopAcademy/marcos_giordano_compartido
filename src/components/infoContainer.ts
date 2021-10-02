export default function displayInfoContainer(
  text: string
  // showCancelButton: boolean = false,
  // performFunction: Function = function () {}
) {
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

  let infoContainerOKButton: HTMLButtonElement = document.getElementById(
    "info-container-ok-button"
  ) as HTMLButtonElement;

  let exists = document.getElementById("info-container-cancel-button");
  if (exists) {
    infoContainer.removeChild(exists);
  }

  // if (showCancelButton) {
  //   let cancelButton = document.createElement("button");
  //   cancelButton.innerHTML = "Cancelar";
  //   cancelButton.id = "info-container-cancel-button";
  //   infoContainerOKButton.after(cancelButton);

  //   cancelButton.addEventListener("click", function () {
  //     domElements.forEach((element: HTMLElement) => {
  //       element.removeAttribute("style");
  //     });
  //     infoContainer.classList.remove("display-info-container");
  //   });
  // }

  if (infoContainerOKButton) {
    infoContainerOKButton.addEventListener("click", () => {
      domElements.forEach((element: HTMLElement) => {
        element.removeAttribute("style");
      });
      infoContainer.classList.remove("display-info-container");
      // if (showCancelButton) {
      //   performFunction();
      // }
    });
  }
}
