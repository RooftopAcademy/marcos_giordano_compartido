export default function headerRendering(cart) {
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
								<a class="button-link" href="./index.html">GARBARINO+</a>
							</div>
						</div>

						<div class="navigation-search-bar">
							<input type="text" />
							<a class="navigation-button" href="#">
								<i class="fas fa-search"></i>
							</a>
						</div>

						<div class="navigation-login">
							<a class="button-link" href="#">USUARIO: MARCOS_L14</a>
						</div>

						<div class="navigation-commands">
							<a class="navigation-button" href="#" id="search-button">
								<i class="fas fa-search"></i>
							</a>
							<a class="navigation-button" href="./cart.html">
								<i class="fas fa-shopping-cart"></i>
								<p id="cart-quantity"> &nbsp ${cart.length} </p>
							</a>
						</div>
					</div>
				</div>
    `;
}
