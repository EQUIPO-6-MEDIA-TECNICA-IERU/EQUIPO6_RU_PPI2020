import React from "react";
import "../Style/Style.css";
import Logo from "../Images/Unifamilia-logo.PNG";

class InicioUsuarios extends React.Component {
  render() {
    return (
      <div>
        <div class="d-flex justify-content-center">
          <img
            src={Logo}
            className="rounded mx-auto d-block logo"
            alt="img_logo"
          />
        </div>

        <br />

        <div class="d-flex justify-content-center text-center">
          <div>
            <h3>Menú principal</h3>
            <h6>Seleccione su opción</h6>
          </div>
        </div>

        <br />
        <br />

        <div class="d-flex justify-content-center">
          <button type="button" className="btn btn-primary btna">
            <a href="inicioEstudiante" class="letra">
              {" "}
              Estudiante{" "}
            </a>
          </button>

          <button type="button" className="btn btn-primary btna">
            <a href="inicioDocente" class="letra">
              {" "}
              Docente{" "}
            </a>
          </button>
        </div>

        <div class="d-flex justify-content-center">
          <button type="button" className="btn btn-primary btna">
            <a href="inicioEntidad" class="letra">
              {" "}
              Entidad{" "}
            </a>
          </button>

          <button type="button" className="btn btn-primary btna">
            <a href="inicioAdmin" class="letra">
              {" "}
              Administrador{" "}
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default InicioUsuarios;

