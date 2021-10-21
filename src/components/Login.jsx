import { Link } from "react-router-dom";

export default function Login(props) {
  return (
    <>
      <h1>Iniciar sesión</h1>
      <form onSubmit={props}>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" />
        <label htmlFor="pasword">Contraseña</label>

        <button>Crear Cuenta</button>
        <p>
          ¿Aún no tenés cuenta?
          <Link to="/register">Crear cuenta</Link>
        </p>
      </form>
    </>
  );
}
