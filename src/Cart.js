import Product from "./Product.js";
var Cart = /** @class */ (function () {
    function Cart() {
        this._products = [];
    }
    Cart.prototype.add = function (product) {
        this._products.push(product);
        localStorage.setItem("cartProducts", JSON.stringify(this._products));
    };
    Cart.prototype.showAll = function () {
        return this._products;
    };
    Cart.prototype.load = function () {
        var _this = this;
        var loadData = localStorage.getItem("cartProducts");
        if (loadData != null) {
            var savedProducts = JSON.parse(loadData);
            savedProducts.forEach(function (element) {
                var prod = new Product();
                prod.create(element);
                _this._products.push(prod);
            });
        }
    };
    Cart.prototype.clear = function () {
        this._products = [];
        localStorage.removeItem("cartProducts");
    };
    return Cart;
}());
export default Cart;
