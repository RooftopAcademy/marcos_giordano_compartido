import productDetails from "../components/productDetails";
import productComments from "../components/productComments";
import Product from "../classes/Product";
import Comment from "../interfaces/CommentInterface";
import Store from "../classes/Store";
import PrivilegeEnum from "../enums/PrivilegeEnum";

export default function ProductDetailsView(store: Store) {
  let url: URL = new URL(window.location.href);
  let productID: string = url.searchParams.get("id")!;

  let product: Array<Product> = store
    .showCatalog()
    .filter((prod: Product) => prod.id == productID);

  let mainContent: HTMLElement = document.getElementById("main-content")!;
  mainContent.innerHTML = productDetails(product[0]);

  let productCommentsContainer: HTMLElement = document.getElementById(
    "product-comments-container"
  )!;

  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response: Response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error("Error de conexión con el servidor.");
      }
    })
    .then((data: Array<Comment>) => {
      let dataReduced = data.slice(0, 10);
      dataReduced.forEach((comment: Comment) => {
        productCommentsContainer.innerHTML += productComments(comment);
      });
    })
    .catch((err: Error) => {
      productCommentsContainer.innerHTML += `
        <div class="product-details-comments-item">
            <h3>${err}</h3>
        </div>
        `;
    });

  let buyButtons: NodeListOf<HTMLElement> =
    document.getElementsByName("buy-button")!;

  let removeButton: HTMLButtonElement;

  buyButtons.forEach((button: HTMLElement) => {
    button.addEventListener("click", function () {
      let product: Array<Product> = store
        .showCatalog()
        .filter((prod: Product) => prod.id == this.dataset.productId);
      store.cart.add(product[0]);
      let productQuantity: HTMLElement =
        document.getElementById("cart-quantity")!;
      productQuantity.innerHTML = ` &nbsp ${store.cart.showAll().length}`;
    });

    if (store.user.privilege == PrivilegeEnum.admin) {
      removeButton = document.createElement("button");
      removeButton.innerHTML = "Eliminar";
      removeButton.classList.add("button-link");
      removeButton.name = "remove-button";
      button.after(removeButton);
    }
  });

  let infoContainer: HTMLElement = document.getElementById("info-container")!;
  let paragraph: HTMLParagraphElement = document.getElementById(
    "info-container-paragraph"
  ) as HTMLParagraphElement;
  let infoContainerButton: HTMLButtonElement = document.getElementById(
    "info-container-button"
  ) as HTMLButtonElement;
  let domElements: NodeListOf<HTMLElement> = document.querySelectorAll(
    "header, main, footer"
  )!;

  let displayInfoContainer = (text: string) => {
    domElements.forEach((element: HTMLElement) => {
      element.style.opacity = "0.4";
      element.style.pointerEvents = "none";
    });
    infoContainer.classList.add("display-info-container");
    paragraph.innerText = text;
  };

  infoContainerButton.addEventListener("click", () => {
    domElements.forEach((element: HTMLElement) => {
      element.setAttribute("style", "");
    });
    infoContainer.classList.remove("display-info-container");
  });

  let removeButtons: NodeListOf<HTMLElement> =
    document.getElementsByName("remove-button")!;

  if (removeButtons != null) {
    removeButtons.forEach((button: HTMLElement) => {
      button.addEventListener("click", function () {
        store.removeProduct(productID);
        displayInfoContainer("El producto ha sido eliminado correctamente.");
      });
    });
  }
}
