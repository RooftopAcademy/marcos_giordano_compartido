export default class StoreUser {
	constructor() {
		this._firstName = String;
		this._lastName = String;
		this._mailAdress = String;
		this._password = String;
	}

	get firstName() {
		return this._firstName;
	}
	set firstName(n) {
		switch (true) {
			case n instanceof String:
				throw TypeError("El Nombre debe ser de tipo String.");
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
	}

	get lastName() {
		return this._lastName;
	}
	set lastName(n) {
		switch (true) {
			case n instanceof String:
				throw TypeError("El Apellido debe ser de tipo String.");
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
	}

	get mailAdress() {
		return this._mailAdress;
	}
	set mailAdress(m) {
		const mailRegEx = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
		switch (true) {
			case m instanceof String:
				throw TypeError("El mail debe ser de tipo String.");
			case !mailRegEx.test(m.toLowerCase()):
				throw Error("El mail ingresado no es válido.");
			default:
				this._mailAdress = m.toLowerCase();
		}
	}

	get password() {
		return this._password;
	}
	set password(p) {
		switch (true) {
			case p instanceof String:
				throw TypeError("La clave debe ser de tipo String.");
			case p.length < 6:
				throw Error("La clave debe tener al menos 6 caracteres");
			case p.length > 20:
				throw Error("La clave debe tener 20 caracteres como máximo");
			default:
				this._password = p;
		}
	}
}
