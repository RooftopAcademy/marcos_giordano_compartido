import Product from "./Product";

export default interface CartItem {
	item: Product;
	amount: number;
}
