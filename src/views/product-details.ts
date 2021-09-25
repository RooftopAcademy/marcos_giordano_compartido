import productDetails from "../components/productDetails";
import productComments from "../components/productComments";
import Product from "../Product";
import Comment from "../Comment";
import Store from "../Store";

export default function returnProductDetailsView(store: Store) {
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
	buyButtons.forEach((button) => {
		button.addEventListener("click", function () {
			let product: Array<Product> = store
				.showCatalog()
				.filter((prod: Product) => prod.id == this.dataset.productId);
			store.cart.add(product[0]);
			let productQuantity: HTMLElement =
				document.getElementById("cart-quantity")!;
			productQuantity.innerHTML = ` &nbsp ${store.cart.showAll().length}`;
		});
	});
}
