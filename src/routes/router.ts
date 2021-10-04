import Store from "../entities/Store";
import ViewInterface from "../interfaces/ViewInterface";
import { cartViewLogic } from "../viewsLogic/cartViewLogic";
import { errorViewLogic } from "../viewsLogic/errorViewLogic";
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
  { path: "error", viewRendering: errorViewLogic },
];

export default function router(
  path: string,
  store: Store,
  mainContent: HTMLElement
) {
  let rawPath: string = searchRawHashValue(path);
  let view = findView(rawPath);
  view.viewRendering(store, mainContent);
}

function searchRawHashValue(path: string): string {
  let pathArray: Array<string> = path.split("/");
  return pathArray[pathArray.length - 1].split("?")[0];
}

function findView(rawPath: string): ViewInterface {
  let foundViews = routes.filter((view) => {
    return view.path == rawPath;
  });
  if (foundViews.length > 0) {
    return foundViews[0];
  } else {
    let errorView = routes.filter((view) => {
      return view.path == "error";
    });
    window.location.hash = "error";
    return errorView[0];
  }
}
