import Product from "../Product";

export default function productCarrousel(product: Product): string {
	return `
    <a href="./productDetails.html?id=${
			product.id
		}" class="home-content-offers-product">
        <img src="${product.thumbnail}" alt="${product.name}" />
        <p>${product.name}</p>
        <h2>$${(product.price * (1 - product.discount / 100)).toFixed(0)}</h2>
        <div>
            <p>$${product.price}</p>
            <p>${product.discount.toFixed(0)}% OFF</p>
        </div>
    </a>
    `;
}