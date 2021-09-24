import Cart from "./Cart.js";
import Product from "./Product.js";
import StoreUser from "./StoreUser.js";

export default class Store {
	private _user?: StoreUser;
	private _catalog: Array<Product> = [];
	private _cart: Cart = new Cart();

	constructor() {}

	public loadCatalog(products: Array<Product>): void {
		this._catalog = products;
	}

	public showCatalog(): Array<Product> {
		return this._catalog;
	}

	get cart(): Cart {
		return this._cart;
	}
}
