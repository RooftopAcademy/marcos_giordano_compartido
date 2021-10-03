import Store from "../entities/Store";
import ViewInterface from "../interfaces/ViewInterface";
import { cartViewLogic } from "../viewsLogic/cartViewLogic";
import { homeViewLogic } from "../viewsLogic/homeViewLogic";
import { newProductViewLogic } from "../viewsLogic/newProductViewLogic";
import { productDetailsViewLogic } from "../viewsLogic/productDetailsViewLogic";
import { productListViewLogic } from "../viewsLogic/productListViewLogic";
import { searchViewLogic } from "../viewsLogic/searchViewLogic";
import { signUpViewLogic } from "../viewsLogic/signUpViewLogic";
import { userViewLogic } from "../viewsLogic/userViewLogic";

const routes: Array<ViewInterface> = [
  { path: "", viewRendering: homeViewLogic },
  { path: "productList", viewRendering: productListViewLogic },
  { path: "productDetails", viewRendering: productDetailsViewLogic },
  { path: "cart", viewRendering: cartViewLogic },
  { path: "signUp", viewRendering: signUpViewLogic },
  { path: "user", viewRendering: userViewLogic },
  { path: "newProduct", viewRendering: newProductViewLogic },
  { path: "search", viewRendering: searchViewLogic },
];

export default function router(
  path: string,
  store: Store,
  mainContent: HTMLElement
) {
  let pathArray: Array<string> = path.split("/");
  let pathArrayWithoutParams: Array<string> =
    pathArray[pathArray.length - 1].split("?");

  let view = routes.filter((view) => {
    return view.path == pathArrayWithoutParams[0];
  });

  view.length != 0
    ? view[0].viewRendering(store, mainContent)
    : (mainContent.innerHTML = `<h1>Error 404</h1>`);
}
