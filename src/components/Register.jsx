import { Link } from "react-router-dom";

export default function Register(props) {
  return (
    <>
      <h1>Crear cuenta</h1>

      <form onSubmit={props}>
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" />
        <label htmlFor="lastName">Apellido</label>
        <input type="text" name="lastName" />
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" name="email" />
        <label htmlFor="pasword">Contraseña</label>
        <input type="password" name="password" />
        <label htmlFor="repeatPasword">Repita contraseña</label>
        <input type="password" name="password" />

        <button>Ingresar</button>
      </form>

      <p>
        ¿Ya tenes cuenta?
        <Link to="/login">Iniciar sesión</Link>
      </p>
    </>
  );
}
