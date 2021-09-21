import Product from "./Product.js";

export default class Cart {
	constructor() {
		this._products = [];
	}

	add(product) {
		if (!product.quantity) {
			product.quantity = 1;
		} else {
			product.quantity++;
		}
		this._products.push(product);
		localStorage.setItem("cartProducts", JSON.stringify(this._products));
	}
	remove(id) {
		let index = this._products.indexOf((p) => {
			p._id = id;
		});
		this._products.splice(index, 1);
	}
	showAll() {
		return this._products;
	}
	load() {
		let savedProducts = JSON.parse(localStorage.getItem("cartProducts"));

		if (savedProducts != null) {
			savedProducts.forEach((element) => {
				let prod = new Product();
				prod.create(element);
				this._products.push(prod);
			});
		}
	}
	clear() {
		this._products = [];
		localStorage.clear("cartProducts");
	}
}
