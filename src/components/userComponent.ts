import Store from "../classes/Store";

export default function userComponent(store: Store) {
  let returnComponent: string;
  if (store.user) {
    returnComponent = `
		<h2>Nombre: ${store.user.firstName.toUpperCase()} </h2>
		<h2>Apellido: ${store.user.lastName.toUpperCase()} </h2>
		<h2>Email: ${store.user.mailAdress.toUpperCase()} </h2>
		<h2>Seleccionar tipo de usuario:</h2>
		<select id="privilege">
			<option value="NORMAL">NORMAL</option>
			<option value="ADMIN">ADMIN</option>
		</select>
		<button class="button-link" id="log-out">LOG-OUT</button>
		`;
  } else {
    returnComponent = `
		<h2>USUARIO INVITADO </h2>
		`;
  }
  return returnComponent;
}
