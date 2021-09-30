import Store from "../classes/Store";
import PathInterface from "../interfaces/PathInterface";
import CartView from "../views-logic/cart";
import IndexView from "../views-logic/index";
import NewProductView from "../views-logic/new-product";
import ProductDetailsView from "../views-logic/product-details";
import ProductListView from "../views-logic/product-list";
import SignUpView from "../views-logic/sign-up";
import UserView from "../views-logic/user";

let path: string = window.location.pathname;

const routes: Array<PathInterface> = [
  { path: "index.html", viewRendering: IndexView },
  { path: "productDetails.html", viewRendering: ProductDetailsView },
  { path: "productList.html", viewRendering: ProductListView },
  { path: "signUp.html", viewRendering: SignUpView },
  { path: "cart.html", viewRendering: CartView },
  { path: "user.html", viewRendering: UserView },
  { path: "newProduct.html", viewRendering: NewProductView },
];

export default function Router(store: Store, mainContent: HTMLElement) {
  let pathArray: Array<string> = path.split("/");

  let view = routes.filter((p) => {
    return p.path == pathArray[pathArray.length - 1];
  });

  view.length != 0
    ? view[0].viewRendering(store)
    : (mainContent.innerHTML = `<h1>Error 404</h1>`);
}
