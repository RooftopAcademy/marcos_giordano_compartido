import Cart from "./Cart.js";
import StoreUser from "./StoreUser.js";
var Store = /** @class */ (function () {
    function Store() {
        this._catalog = [];
        this._cart = new Cart();
    }
    Object.defineProperty(Store.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (user) {
            this._user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.loadUser = function () {
        var loadData = localStorage.getItem("user");
        if (loadData != null) {
            var user = new StoreUser();
            user.create(JSON.parse(loadData));
            this._user = user;
        }
    };
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
