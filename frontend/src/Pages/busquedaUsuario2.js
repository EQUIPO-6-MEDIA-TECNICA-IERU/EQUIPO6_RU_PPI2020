import React from "react";
import "../Style/Style.css";
import icono_atras from "../Images/espalda.png";
import usuario_img from "../Images/avatar.png";

class BusquedaUsuario2 extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-dark bg-primary nav">
            <a href="/inicioEntidad" class="navbar-brand ">
              <img
                src={icono_atras}
                alt="icono_atras"
                class="img-thumbnail iconoAtras bg-primary "
              />
            </a>
            <form class="form-inline">
              <input
                class="form-control mr-sm-2 input"
                type="search"
                placeholder="Buscar usuario"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-primary my-2 my-sm-0 busquedaUsuario btna"
                type="submit"
                >
                  <a href="informacionUsuario2" class="letra">
                {" "}
                Enviar{" "}
              </a>
              </button>
            </form>
          </nav>
        </header>

        <div class="container-fluid">
          <div class="row text-center">
            <div class="col-sm"></div>
            <div class="col-sm">
              <img
                src={usuario_img}
                alt="img_usuario"
                class="img-thumbnail img_usuario"
              />

              <p>
                Bienvenido al navegador de usuarios
                <br />
                aquí podras buscar los usuarios desde su ID
                <br />
                en la plataforma
              </p>
            </div>
            <div class="col-sm"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusquedaUsuario2;
