import React from "react";
import "../Style/Style.css";
import Img_estudiante from "../Images/estudiante_img.PNG";
import icono_atras from "../Images/espalda.png";

class InicioEstudiante extends React.Component {
  render() {
    return (
      <div>
        <a href="..." class="navbar-brand ">
              <img
                src={icono_atras}
                alt="icono_atras"
                class="img-thumbnail iconoAtras"
              />
            </a>

         <div>
          <div class="row">
            <div class="col"></div>

            <div class="col-5">
              <div>
                <img
                  src={Img_estudiante}
                  class="rounded mx-auto d-block"
                  alt="img_estudiante"
                />

                <br />
                <br />

                <h1 class="text-center">Estudiante</h1>
                <br />
                <br />
                <p class="text-enter">
                  ¡Hola! *nombre estudiante*
                  <br /> Selecciona la opción en la que
                  <br />
                  quieras navegar
                </p>
              </div>

              <br />
            </div>

            <div class="col"></div>
          </div>

          <div class="container-fluid text-center">
            <div class="row">
              <div class="col-sm"></div>
              <div class="col-sm">
                <button type="button" class="btn btn-primary btna">
                <a href="reportesEstudiante" class="letra">
                      {" "}
                      Gestionar mis
                      <br/> reportes{" "}
                    </a>
                </button>
                <button type="button" class="btn btn-primary btna">
                <a href="informacionEstudiante" class="letra">
                      {" "}
                      Gestionar mi
                      <br/> Información{" "}
                    </a>
                </button>
              </div>
              <div class="col-sm"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InicioEstudiante;