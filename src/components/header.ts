import NullStoreUser from "../entities/NullStoreUser";
import Store from "../entities/Store";

export default function headerRendering(store: Store): string {
  return `
    <div class="navigation">
					<div class="navigation-upper">
						<div class="navigation-burguer">
							<div class="navigation-burguer-button">
								<button class="navigation-button" id="burger-button">
									<i class="fas fa-bars"></i>
								</button>
							</div>
							<div class="navigation-burger-logo">
								<a class="button-link" href="#/">GARBARINO+</a>
							</div>
						</div>

						<div class="navigation-search-bar">
							<input type="text" />
							<a class="navigation-button">
								<i class="fas fa-search"></i>
							</a>
						</div>

						<div class="navigation-login">
							<a class="button-link js-user" href="#/user"><i class="fas fa-user"></i> &nbsp ${
                store.user instanceof NullStoreUser
                  ? "Invitado"
                  : store.user.firstName.toUpperCase()
              }</a>
						</div>

						<div class="navigation-commands">
							<a class="navigation-button" href="#/search" id="search-button">
								<i class="fas fa-search"></i>
							</a>
							<a class="navigation-button" href="#/cart">
								<i class="fas fa-shopping-cart"></i>
								<p id="cart-quantity"> &nbsp ${store.cart.showAll().length} </p>
							</a>
						</div>
					</div>
				</div>
    `;
}
