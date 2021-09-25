import Store from "../Store";

export default function asideNavBar(store: Store): string {
	return `
    <div class="navigation-links-desktop">
        <a class="button-link" href="./productList.html"
            >PRODUCTOS</a
        >
        <a class="button-link" href="./sign-up.html">REGISTRARSE</a>
        <div class="home-content-aside-login">
            <a class="button-link js-user" href="#"><i class="fas fa-user"></i> &nbsp ${
							store.user ? store.user.firstName.toUpperCase() : "Invitado"
						}</a>
        </div>
    </div>
    `;
}
