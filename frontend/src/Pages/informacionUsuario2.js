import React from "react";
import "../Style/Style.css";
import Fondo from "../Images/gris.PNG"
import Usuario from "../Images/usuario.png"
import icono_atras from "../Images/espalda.png";

class informacionUsuario2 extends React.Component {
  render() {
    return (
      <div>
        <header class="bg-primary" id="miinformacion">
          <div class="bg-primary miinformacion text-white">
            <h2 class="text-center">Busqueda de usuario</h2>
          </div>
          <a href="/inicioEntidad" class="navbar-brand ">
            <img
              src={icono_atras}
              alt="icono_atras"
              class="img-thumbnail iconoAtras ss bg-primary "
            />
          </a>
        </header>

        <div>
          <img src={Fondo} class="d-block w-100 fondo" alt="..." />
          <img src={Usuario} class="rounded mx-auto d-block aa" alt="..." />
        </div>

        <br />
        <br />

        <h1 class="text-center">*José López*</h1>
        <h5 class="text-center text-secondary">*Estudiante*</h5>

        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary btna">
            <a href="vistaInformacionUsuario2" class="letra">
              {" "}
                      Ver información{" "}
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default informacionUsuario2;