import Cart from "./Cart.js";
import Product from "./Product.js";
import StoreUser from "./StoreUser.js";
import products from "../scripts/products.js";

export default class Store {
	private _user?: StoreUser;
	private _catalog: Array<Product> = [];
	private _cart: Cart = new Cart();

	constructor() {}

	public get user() {
		return this._user;
	}

	public set user(user: StoreUser | undefined) {
		this._user = user;
		localStorage.setItem("user", JSON.stringify(user));
	}

	public loadUser() {
		let loadData: string | null = localStorage.getItem("user");
		if (loadData != null) {
			let user: StoreUser = new StoreUser();
			user.create(JSON.parse(loadData));

			this._user = user;
		}
	}

	public loadCatalog(): void {
		this._catalog = products();
	}

	public showCatalog(): Array<Product> {
		return this._catalog;
	}

	get cart(): Cart {
		return this._cart;
	}
}
