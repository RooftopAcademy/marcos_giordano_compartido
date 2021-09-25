export default function asideNavBar(store) {
    return "\n    <div class=\"navigation-links-desktop\">\n        <a class=\"button-link\" href=\"./productList.html\"\n            >PRODUCTOS</a\n        >\n        <a class=\"button-link\" href=\"./sign-up.html\">REGISTRARSE</a>\n        <div class=\"home-content-aside-login\">\n            <a class=\"button-link js-user\" href=\"#\"><i class=\"fas fa-user\"></i> &nbsp " + (store.user ? store.user.firstName.toUpperCase() : "Invitado") + "</a>\n        </div>\n    </div>\n    ";
}
