import NullStoreUser from "../entities/NullStoreUser";
import Store from "../entities/Store";

export default function userView(store: Store): string {
  let returnComponent: string;
  if (store.user instanceof NullStoreUser) {
    returnComponent = `
		<div class="user-content">
			<div class="form-title">
        <h1>Iniciar Sesion</h1>
      </div>
			<div class="form">
				<form id="log-in-form">
					<div class="form-text-input-container">
						<label>E-mail: </label>
						<input
							name="mail-adress"
							class="form-text-input"
							type="email"
							placeholder="usuario@email.com"
						/>
					</div>
					<div class="form-text-input-container">
						<label>Contraseña: </label>
						<input
							name="password"
							class="form-text-input"
							type="password"
							placeholder="Ingrese su password"
						/>
					</div>
					<div class="form-button-container">
            <input
              type="submit"
              value="Ingresar"
              class="form-button"
              id="sign-in-submit-button"
            />
          </div>
				</form>
			</div>
		</div>
		`;
  } else {
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
  }
  return returnComponent;
}
