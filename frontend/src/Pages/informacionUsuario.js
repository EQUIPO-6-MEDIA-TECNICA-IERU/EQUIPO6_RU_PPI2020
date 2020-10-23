import React from "react";
import "../Style/Style.css";
import Fondo from "../Images/gris.PNG"
import Usuario from "../Images/usuario.png"

class InformacionUsuario extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={Fondo} class="d-block w-100 fondo" alt="..." />
          <img src={Usuario} class="rounded mx-auto d-block aa" alt="..." />
        </div>

        <br/>
        <br />

        <h1 class="text-center">*José López*</h1>
        <h5 class="text-center text-secondary">*Estudiante*</h5>

        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary btna">
          <a href="informacionEstudiante" class="letra">
                      {" "}
                      Ver información{" "}
                    </a>
          </button>
        </div>
      </div>
    );
  }
}

export default InformacionUsuario;