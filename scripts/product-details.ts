import productDetails from "../src/components/productDetails.js";
import productComments from "../src/components/productComments.js";
import products from "../scripts/products.js";
import store from "./app.js";
import Product from "../src/Product.js";
import Comment from "../src/Comment.js";

let url: URL = new URL(window.location.href);
let productID: string = url.searchParams.get("id")!;

let product: Array<Product> = products().filter(
	(prod: Product) => prod.id == productID
);

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
		let product: Array<Product> = products().filter(
			(prod: Product) => prod.id == this.dataset.productId
		);
		store.cart.add(product[0]);
		let productQuantity: HTMLElement =
			document.getElementById("cart-quantity")!;
		productQuantity.innerHTML = ` &nbsp ${store.cart.showAll().length}`;
	});
});
