export default function registerView() {
  return `
  <div class="register" id="main-content">
    <div class="register-title">
      <h1>Registrate aquí!</h1>
    </div>
    <div class="register-content">
      <div class="form">
        <form id="form">
          <div class="form-text-input-container">
            <label>Nombre: </label>
            <input
              name="first-name"
              class="form-text-input"
              type="text"
              placeholder="Como figura en tu DNI"
            />
          </div>
          <div class="form-text-input-container">
            <label>Apellido: </label>
            <input
              name="last-name"
              class="form-text-input"
              type="text"
              placeholder="Como figura en tu DNI"
            />
          </div>
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
              placeholder="Usa entre 6 y 20 caracteres."
            />
          </div>
          <div class="form-text-input-container">
            <label>Repetir contraseña: </label>
            <input
              name="password-repeat"
              class="form-text-input"
              type="password"
              placeholder="Repetir contraseña:"
            />
          </div>
          <div class="form-button-container">
            <input
              name="submit-button"
              class="form-button"
              type="button"
              value="Registrarse!"
            />
          </div>
        </form>
      </div>
      <div class="form-aside">
        <h2>
          Hazte usuario de nuestro sitio, y obtiene importantes
          beneficios!!!
        </h2>
        <p>¿Qué vas a poder hacer en tu cuenta?</p>
        <ul>
          <li>
            <i class="fas fa-angle-right"></i>Consultar el estado de tus
            compras.
          </li>
          <li>
            <i class="fas fa-angle-right"></i>Administrar tus productos
            favoritos.
          </li>
          <li>
            <i class="fas fa-angle-right"></i>Descargar las facturas.
          </li>
          <li>
            <i class="fas fa-angle-right"></i>Consultar manuales de los
            productos comprados.
          </li>
          <li>
            <i class="fas fa-angle-right"></i>Definir tus preferencias e
            intereses.
          </li>
          <li>
            <i class="fas fa-angle-right"></i>Acceder al historial de
            productos vistos.
          </li>
          <li>
            <i class="fas fa-angle-right"></i>Retomar tus compras
            incompletas.
          </li>
        </ul>

        <p>
          Recibí notificaciones de tus compras, ofertas y descuentos
          exclusivos.
        </p>
        <a href="#/"> Ver políticas de privacidad </a>
      </div>
    </div>
  </div>
  `;
}
