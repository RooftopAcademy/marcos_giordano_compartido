import Cart from "./Cart";
import Product from "./Product";
import StoreUser from "./StoreUser";
import NullProduct from "./NullProduct";
import NullStoreUser from "./NullStoreUser";
import { loadCatalog, postCatalog } from "../services/catalogService";
import { createUser, editUser } from "../services/userServices";

export default class Store {
  private _user: StoreUser = new NullStoreUser();
  private _catalog: Array<Product> = [];
  private _cart: Cart = new Cart();

  constructor() {
    this.loadCatalog();
  }

  //Loged user
  public get user() {
    return this._user;
  }

  public set user(user: StoreUser) {
    this._user = user;
    localStorage.setItem("user", JSON.stringify(this._user));
  }

  public async registerUser(user: StoreUser) {
    await createUser(user).then((result) => {
      if (result.status == 201) {
        this._user = user;
        result.json().then((res) => {
          this._user.id = res._id;
          localStorage.setItem("user", JSON.stringify(this._user));
        });
      } else if (result.status == 409) {
        throw new Error("El usuario que está intentando crear ya existe");
      } else {
        throw new Error("Error en el servidor");
      }
    });
  }

  public getLogedUser() {
    const loadData: string | null = localStorage.getItem("user");
    if (loadData) {
      const user: StoreUser = new StoreUser();
      user.create(JSON.parse(loadData));
      this._user = user;
    } else {
      this._user = new NullStoreUser();
    }
  }

  public clearUser(): void {
    this._user = new NullStoreUser();
    localStorage.removeItem("user");
  }

  public refreshUser(): void {
    localStorage.setItem("user", JSON.stringify(this._user));
    editUser(this._user);
  }

  //Catalog

  private loadCatalog() {
    this._catalog = loadCatalog();
  }

  public showCatalog(): Array<Product> {
    return this._catalog;
  }

  public filterCatalog(text: string): Array<Product> {
    const filteredProducts = this._catalog.filter(
      (product) =>
        product.name.toLowerCase().includes(text.trim().toLowerCase()) ||
        product.type.toLowerCase().includes(text.trim().toLowerCase())
    );
    return filteredProducts;
  }

  //Products

  public newProduct(prod: Product): void {
    this._catalog.push(prod);
    postCatalog(this._catalog);
  }

  public getProductById(id: string): Product {
    let product: Product = this.showCatalog().filter(
      (prod: Product) => prod.id == id
    )[0];
    id && product ? product : (product = new NullProduct());
    return product;
  }

  public editProduct(): void {
    postCatalog(this._catalog);
  }

  public removeProduct(id: String) {
    const productIndex: number = this._catalog.findIndex((p) => p.id == id);
    productIndex != -1 ? this._catalog.splice(productIndex, 1) : null;
    postCatalog(this._catalog);
  }

  //Cart

  get cart(): Cart {
    return this._cart;
  }
}
