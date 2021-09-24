var Product = /** @class */ (function () {
    function Product() {
        this._id = "";
        this._name = "";
        this._type = "";
        this._price = 0;
        this._description = "";
        this._image = "";
        this._thumbnail = "";
        this._stock = 0;
        this._discount = 0;
    }
    Object.defineProperty(Product.prototype, "id", {
        //#region id
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        //#endregion id
        //#region name
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "type", {
        //#endregion name
        //#region type
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        //#endregion type
        //#region price
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "description", {
        //#endregion price
        //#region description
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "image", {
        //#endregion description
        //#region image
        get: function () {
            return this._image;
        },
        set: function (image) {
            this._image = image;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "thumbnail", {
        //#endregion image
        //#region thumbnail
        get: function () {
            return this._thumbnail;
        },
        set: function (thumbnail) {
            this._thumbnail = thumbnail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "discount", {
        //#endregion thumbnail
        //#region discount
        get: function () {
            return this._discount;
        },
        set: function (discount) {
            this._discount = discount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "stock", {
        //#endregion discount
        //#region stock
        get: function () {
            return this._stock;
        },
        set: function (stock) {
            this._stock = stock;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.increaseStock = function () {
        this._stock++;
    };
    Product.prototype.decreaseStock = function () {
        this._stock--;
    };
    //#endregion stock
    Product.prototype.create = function (prod) {
        this._id = prod._id;
        this._name = prod._name;
        this._type = prod._type;
        this._price = prod._price;
        this._description = prod._description;
        this._image = prod._image;
        this._thumbnail = prod._thumbnail;
        this._stock = prod._stock;
        this._discount = prod._discount;
    };
    return Product;
}());
export default Product;
