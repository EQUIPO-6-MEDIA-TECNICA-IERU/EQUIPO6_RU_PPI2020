import React from "react";
import "../Style/Style.css";
import Img_Docente from "../Images/Docente.PNG";
import icono_atras from "../Images/espalda.png";

class InicioDocente extends React.Component {
  render() {
    return (
      <div>
        <a href="/inicioUsuario" class="navbar-brand ">
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
                  src={Img_Docente}
                  class="rounded mx-auto d-block"
                  alt="img_estudiante"
                /> 

                <h1 class="text-center">Docente</h1>
                <br />
                <br />
                <p class="text-enter">
                  ¡Hola! *nombre docente*
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
                <a href="generacionReporte" class="letra">
                      {" "}
                      Nueva <br/> alerta {" "}
                    </a>
                </button>
                <button type="button" class="btn btn-primary btna">
                <a href="vistaAlerta" class="letra">
                      {" "}
                      Ver <br/> alerta {" "}
                    </a>
                </button>
              </div>
              <div class="col-sm"></div>
            </div>
          </div>

          <div class="container-fluid text-center">
            <div class="row">
              <div class="col-sm"></div>
              <div class="col-sm">
                <button type="button" class="btn btn-primary btna">
                <a href="busquedaUsuario" class="letra">
                      {" "}
                      Buscar <br/> Usuario {" "}
                    </a>
                </button>
                <button type="button" class="btn btn-primary btna">
                <a href="informacionDocente" class="letra">
                      {" "}
                      Gestionar mi <br/> Información {" "}
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

export default InicioDocente;