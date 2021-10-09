import Store from "../entities/Store";
import searchView from "../views/searchView";

export function searchViewLogic(store: Store, mainContent: HTMLElement) {
  viewRendering(mainContent);
  searchEvent();
}
//view rendering
function viewRendering(mainContent: HTMLElement): void {
  mainContent.innerHTML = searchView();
}

function searchEvent() {
  const searchButton: HTMLButtonElement = document.getElementById(
    "search-view-button"
  ) as HTMLButtonElement;
  const searchInput: HTMLInputElement = document.getElementById(
    "search-view-input"
  ) as HTMLInputElement;

  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.hash = `#/productList?search=${searchInput.value}`;
  });
}
