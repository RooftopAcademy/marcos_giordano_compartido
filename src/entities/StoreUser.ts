import PrivilegeEnum from "../enums/PrivilegeEnum";

export default class StoreUser {
  private _firstName: string = "";
  private _lastName: string = "";
  private _mailAdress: string = "";
  private _password: string = "";
  private _privilege: PrivilegeEnum = PrivilegeEnum.normal;

  constructor() {}

  get firstName(): string {
    return this._firstName;
  }
  set firstName(n: string) {
    switch (true) {
      case n.length < 3:
        throw Error("El Nombre debe poseer al menos 3 caracteres.");
      case n.length > 12:
        throw Error("El Nombre debe poseer como máximo 12 caracteres.");
      case !/^[a-zA-Z]+$/.test(n):
        throw Error("El Nombre debe contener solo constras.");
      default:
        this._firstName =
          n.substring(0, 1).toUpperCase() +
          n.substring(1, n.length).toLowerCase();
    }
  }

  get lastName(): string {
    return this._lastName;
  }
  set lastName(n: string) {
    switch (true) {
      case n.length < 3:
        throw Error("El Apellido debe poseer al menos 3 caracteres.");
      case n.length > 12:
        throw Error("El Apellido debe poseer como máximo 12 caracteres.");
      case !/^[a-zA-Z]+$/.test(n):
        throw Error("El Apellido debe contener solo constras.");
      default:
        this._lastName =
          n.substring(0, 1).toUpperCase() +
          n.substring(1, n.length).toLowerCase();
    }
  }

  get mailAdress(): string {
    return this._mailAdress;
  }
  set mailAdress(m: string) {
    const mailRegEx: RegExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    switch (true) {
      case !mailRegEx.test(m.toLowerCase()):
        throw Error("El mail ingresado no es válido.");
      default:
        this._mailAdress = m.toLowerCase();
    }
  }

  get password(): string {
    return this._password;
  }
  set password(p: string) {
    switch (true) {
      case p.length < 6:
        throw Error("La clave debe tener al menos 6 caracteres");
      case p.length > 20:
        throw Error("La clave debe tener 20 caracteres como máximo");
      default:
        this._password = p;
    }
  }

  get privilege(): PrivilegeEnum {
    return this._privilege;
  }
  set privilege(p: PrivilegeEnum) {
    this._privilege = p;
  }

  public create(user: any) {
    this._firstName = user._firstName;
    this._lastName = user._lastName;
    this._mailAdress = user._mailAdress;
    this._password = user._password;
    this._privilege = user._privilege;
  }
}
