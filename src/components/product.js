export default function productComponent(product) {
    return "\n    <a href=\"./productDetails.html?id=" + product.id + "\" class=\"content-product\">\n        <img src=\"" + product.image + "\" alt=\"" + product.name + "\" />\n        <p>" + product.name + "</p>\n        <h2>$" + (product.price * (1 - product.discount / 100)).toFixed(0) + "</h2>\n        <div>\n            <p>$" + product.price + "</p>\n            <p>" + product.discount.toFixed(0) + "% OFF</p>\n        </div>\n    </a>\n    ";
}
