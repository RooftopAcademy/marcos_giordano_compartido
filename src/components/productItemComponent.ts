import Product from "../entities/Product";

export default function productItemComponent(product: Product): string {
  return `
    <a href="#/productDetails?id=${product.id}" class="content-product">
        <img src="${product.image}" alt="${product.name}" />
        <p>${product.name}</p>
        <h2>$${(product.price * (1 - product.discount / 100)).toFixed(0)}</h2>
        <div>
            <p>$${product.price}</p>
            <p>${product.discount.toFixed(0)}% OFF</p>
        </div>
    </a>
    `;
}
