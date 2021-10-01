import Store from "../entities/Store";

export default function userView(store: Store) {
  let returnComponent: string;
  if (store.user) {
    returnComponent = `
		<div class="user-content">
			<h2>Nombre: ${store.user.firstName.toUpperCase()} </h2>
			<h2>Apellido: ${store.user.lastName.toUpperCase()} </h2>
			<h2>Email: ${store.user.mailAdress.toUpperCase()} </h2>
			<h2>Seleccionar tipo de usuario:</h2>
			<select id="privilege">
				<option value="NORMAL">NORMAL</option>
				<option value="ADMIN">ADMIN</option>
			</select>
			<button class="button-link" id="log-out">LOG-OUT</button>
		</div>
		`;
  } else {
    returnComponent = `
		<h2>USUARIO INVITADO </h2>
		`;
  }
  return returnComponent;
}
