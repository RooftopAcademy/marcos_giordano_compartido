import Store from "../entities/Store";

export default function asideNavBar(store: Store): string {
  return `
    <div class="navigation-links-desktop" id="nav-bar-container">
        <a class="button-link" href="#/productList"
            >PRODUCTOS</a
        >
        <a class="button-link" href="#/signUp">REGISTRARSE</a>
        <div class="home-content-aside-login">
            <a class="button-link js-user" href="#/user">
                <i class="fas fa-user"></i> 
                &nbsp ${
                  store.user ? store.user.firstName.toUpperCase() : "Invitado"
                }
            </a>
        </div>
    </div>
    `;
}
