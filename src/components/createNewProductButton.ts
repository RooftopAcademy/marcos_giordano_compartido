export default function createNewProductButton(anchor: HTMLAnchorElement) {
	anchor.innerHTML = "NUEVO PRODUCTO";
	anchor.classList.add("button-link");
	anchor.href = "./newProduct.html";
	anchor.id = "product-creation-link";
	return anchor;
}
