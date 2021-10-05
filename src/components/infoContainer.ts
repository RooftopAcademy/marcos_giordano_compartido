export default function displayInfoContainer(
  text: string,
  showCancelButton: boolean = false,
  performFunction?: Function
) {
  const domElements: NodeListOf<HTMLElement> = document.querySelectorAll(
    "header, main, footer"
  )!;
  const infoContainer: HTMLElement = document.getElementById("info-container")!;

  disableDomElements(domElements);
  showInfoContainer(infoContainer, text);
  const infoContainerOKButton = addOkButton();
  removeTrailingCancelButton(infoContainer);
  addCancelButton(infoContainerOKButton);

  /*
  Buttons Functions
  */

  function addOkButton(): HTMLButtonElement {
    const infoContainerOKButton: HTMLButtonElement = document.getElementById(
      "info-container-ok-button"
    ) as HTMLButtonElement;

    infoContainerOKButton.addEventListener("click", executeFunction);

    return infoContainerOKButton;
  }

  function addCancelButton(infoContainerOKButton: HTMLButtonElement): void {
    if (showCancelButton) {
      const cancelButton = createCancelButton();
      infoContainerOKButton.after(cancelButton);

      cancelButton.addEventListener("click", function () {
        enableDomElements(domElements);
        hideInfoContainer(infoContainer);
        infoContainerOKButton.removeEventListener("click", executeFunction);
      });
    }
  }

  function executeFunction(): void {
    enableDomElements(domElements);
    hideInfoContainer(infoContainer);
    if (performFunction && showCancelButton) {
      performFunction();
      infoContainerOKButton.removeEventListener("click", executeFunction);
    }
  }
}

function disableDomElements(domElements: NodeListOf<HTMLElement>): void {
  domElements.forEach((element: HTMLElement) => {
    element.style.opacity = "0.4";
    element.style.pointerEvents = "none";
  });
}

function enableDomElements(domElements: NodeListOf<HTMLElement>): void {
  domElements.forEach((element: HTMLElement) => {
    element.removeAttribute("style");
  });
}

function showInfoContainer(infoContainer: HTMLElement, text: string): void {
  infoContainer.classList.add("display-info-container");
  const paragraph: HTMLParagraphElement = document.getElementById(
    "info-container-paragraph"
  ) as HTMLParagraphElement;
  paragraph.innerText = text;
}

function hideInfoContainer(infoContainer: HTMLElement): void {
  infoContainer.classList.remove("display-info-container");
}

function removeTrailingCancelButton(infoContainer: HTMLElement): void {
  const existsCancelButton = document.getElementById(
    "info-container-cancel-button"
  );
  if (existsCancelButton) {
    infoContainer.removeChild(existsCancelButton);
  }
}

function createCancelButton(): HTMLButtonElement {
  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = "Cancelar";
  cancelButton.id = "info-container-cancel-button";
  return cancelButton;
}
