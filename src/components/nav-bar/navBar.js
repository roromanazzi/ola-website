import styles from "./navBar.module.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a>Sobre nosotros</a>
        </li>
        <li>
          <a>Reservas</a>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
