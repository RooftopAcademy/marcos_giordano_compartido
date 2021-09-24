var StoreUser = /** @class */ (function () {
    function StoreUser() {
        this._firstName = "";
        this._lastName = "";
        this._mailAdress = "";
        this._password = "";
    }
    Object.defineProperty(StoreUser.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (n) {
            switch (true) {
                case n.length < 3:
                    throw Error("El Nombre debe poseer al menos 3 caracteres.");
                case n.length > 12:
                    throw Error("El Nombre debe poseer como máximo 12 caracteres.");
                case !/^[a-zA-Z]+$/.test(n):
                    throw Error("El Nombre debe contener solo letras.");
                default:
                    this._firstName =
                        n.substring(0, 1).toUpperCase() +
                            n.substring(1, n.length).toLowerCase();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoreUser.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (n) {
            switch (true) {
                case n.length < 3:
                    throw Error("El Apellido debe poseer al menos 3 caracteres.");
                case n.length > 12:
                    throw Error("El Apellido debe poseer como máximo 12 caracteres.");
                case !/^[a-zA-Z]+$/.test(n):
                    throw Error("El Apellido debe contener solo letras.");
                default:
                    this._lastName =
                        n.substring(0, 1).toUpperCase() +
                            n.substring(1, n.length).toLowerCase();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoreUser.prototype, "mailAdress", {
        get: function () {
            return this._mailAdress;
        },
        set: function (m) {
            var mailRegEx = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
            switch (true) {
                case !mailRegEx.test(m.toLowerCase()):
                    throw Error("El mail ingresado no es válido.");
                default:
                    this._mailAdress = m.toLowerCase();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StoreUser.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (p) {
            switch (true) {
                case p.length < 6:
                    throw Error("La clave debe tener al menos 6 caracteres");
                case p.length > 20:
                    throw Error("La clave debe tener 20 caracteres como máximo");
                default:
                    this._password = p;
            }
        },
        enumerable: false,
        configurable: true
    });
    return StoreUser;
}());
export default StoreUser;
