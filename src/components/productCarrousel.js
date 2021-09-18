export default function productCarrousel(product) {
	return `
    <a href="./productDetails.html" class="home-content-offers-product">
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
