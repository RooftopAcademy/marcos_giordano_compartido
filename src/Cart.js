import Product from "../src/Product.js";

export default class Cart {
	constructor() {
		this._productos = [];
	}

	add(product) {
		if (!product.quantity) {
			product.quantity = 1;
		} else {
			product.quantity++;
		}
		return this._productos.push(product);
	}
	remove(id) {
		let index = this._productos.indexOf((p) => {
			p._id = id;
		});
		this._productos.splice(index, 1);
	}
}
