import productComments from "../src/components/productComments.js";

let productCommentsContainer = document.getElementById(
	"product-comments-container"
);

fetch("https://jsonplaceholder.typicode.com/comments")
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw Error("Error de conexión con el servidor.");
		}
	})
	.then((data) => {
		let dataReduced = data.slice(0, 10);
		dataReduced.forEach((comment) => {
			productCommentsContainer.innerHTML += productComments(comment);
		});
	})
	.catch((err) => {
		productCommentsContainer.innerHTML += `
        <div class="product-details-comments-item">
            <h3>${err}</h3>
        </div>
        `;
	});
