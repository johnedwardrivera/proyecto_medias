import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import img from "../../img/pretty.png";
const navbar = () => {
  return (
    <>
      <nav
        class="
        sticky-top
        navbar navbar-expand-lg navbar-light
        bg-light
        shadow
        p-3
        bg-body
        rounded
      "
      >
        <div class="container-fluid">
          <a class="navbar-brand">Pretty Stockings</a>{" "}
          <img src={img} height="50"></img>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto"> 
            <Link to="/home">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#quiensoy">
                  Sobre Nosotros
                </a>
              </li> 
              </Link> 


              <Link to="/producto">
              <li class="nav-item">
                <a class="nav-link" href="#estudios">
                  Productos
                </a>
              </li> 
              </Link>

              <li class="nav-item">
                <a class="nav-link" href="#proyectos">
                 Ingresar
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#contactame">
                  Crear Cuenta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default navbar;
