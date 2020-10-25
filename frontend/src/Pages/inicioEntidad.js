import React from "react";
import "../Style/Style.css";
import img_entidad from "../Images/entidad.PNG";
import icono_atras from "../Images/espalda.png";

class InicioEntidad extends React.Component {
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
            
        <div class="container">
          <div class="row">
            <div class="col-sm"></div>

            <div class="col-sm">
              <img
                src={img_entidad}
                class="rounded mx-auto d-block entidad"
                alt="img_entidad"
              />
              <h1 class="text-center">Entidad</h1>
              <br />
              <br />
              <p class="text-enter">
                ¡Hola! *nombre Entidad*
                <br /> Selecciona la opción en la que
                <br />
                quieras navegar
              </p>

              <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-primary btna">
              <a href="informacionEntidad" class="letra">
                      {" "}
                      Gestionar mi Información{" "}
                    </a>
                </button>
                <button type="button" class="btn btn-primary btna">
                <a href="busquedaUsuario" class="letra">
                      {" "}
                      Buscar Usuario{" "}
                    </a>
                </button>
                <button type="button" class="btn btn-primary btna">
                <a href="/notificacionesEntidad" class="letra">
                      {" "}
                      Ver nuevas alertas{" "}
                    </a>
                </button>
              </div>
            </div>

            <div class="col-sm"></div>
          </div>  
        </div>
      </div>
    );
  }
}

export default InicioEntidad;