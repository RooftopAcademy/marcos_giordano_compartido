import Cart from "./Cart.js";
var Store = /** @class */ (function () {
    function Store() {
        this._catalog = [];
        this._cart = new Cart();
    }
    Store.prototype.loadCatalog = function (products) {
        this._catalog = products;
    };
    Store.prototype.showCatalog = function () {
        return this._catalog;
    };
    Object.defineProperty(Store.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        enumerable: false,
        configurable: true
    });
    return Store;
}());
export default Store;
