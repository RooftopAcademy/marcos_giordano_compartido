import Product from "../entities/Product";

export default function productCarrousel(product: Product): string {
  return `
    <a href="#/productDetails?id=${product.id}" class="content-offers-product">
        <img src="${product.thumbnail}" alt="${product.name}" />
        <p>${product.name}</p>
        <h2>$${product.getPriceWithDiscount().toFixed(0)}</h2>
        <div>
            <p>$${product.price}</p>
            <p>${product.discount.toFixed(0)}% OFF</p>
        </div>
    </a>
    `;
}
