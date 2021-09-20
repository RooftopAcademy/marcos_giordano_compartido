export default function productDetails(product) {
	return `
    <div class="product-details">
        <div class="product-details-img">
            <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product-details-text">
            <h6 class="product-name">${product.name}</h6>
            <h3 class="product-price">$${(
							product.price *
							(1 - product.discount / 100)
						).toFixed(0)}</h3>
            <a class="button-link" href="#">Comprar</a>
            <p class="product-description">${product.description}</p>
        </div>
        <div class="product-details-comments">
            <div class="product-details-comments-title">
                <h2>Vea los comentarios de nuestros clientes!</h2>
            </div>
            <div class="product-details-comments-container" id="product-comments-container"> </div>
        </div>
    </div>
    <div class="product-aside">
        <div class="product-aside-text">
            <h6 class="product-name">${product.name}</h6>
            <h3 class="product-price">$${(
							product.price *
							(1 - product.discount / 100)
						).toFixed(0)}</h3>
            <a class="button-link" href="#">Comprar</a>
        </div>
    </div>
    `;
}
