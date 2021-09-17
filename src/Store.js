import Cart from "./Cart.js";

export default class Store {
	constructor() {
		this._user = null;
		this._catalog = [];
		this._cart = new Cart();
	}

	loadCatalog(products) {
		this._catalog = products;
	}

	showCatalog() {
		return this._catalog;
	}

	get cart() {
		return this._cart;
	}
}
