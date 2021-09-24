export default function productCarrousel(product) {
    return "\n    <a href=\"./productDetails.html?id=" + product.id + "\" class=\"home-content-offers-product\">\n        <img src=\"" + product.thumbnail + "\" alt=\"" + product.name + "\" />\n        <p>" + product.name + "</p>\n        <h2>$" + (product.price * (1 - product.discount / 100)).toFixed(0) + "</h2>\n        <div>\n            <p>$" + product.price + "</p>\n            <p>" + product.discount.toFixed(0) + "% OFF</p>\n        </div>\n    </a>\n    ";
}
