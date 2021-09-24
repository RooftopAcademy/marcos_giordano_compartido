import Product from "./Product.js";

export default interface CartItem {
	item: Product;
	amount: number;
}
