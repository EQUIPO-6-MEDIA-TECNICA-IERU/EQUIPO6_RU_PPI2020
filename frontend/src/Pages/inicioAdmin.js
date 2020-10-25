import React from "react";
import "../Style/Style.css";
import img_clave from "../Images/clave_img.PNG";
import icono_atras from "../Images/espalda.png";

class InicioAdmin extends React.Component {
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

        <div class="container text-center">
          <div class="row">
            <div class="col-sm"></div>

            <div class="col-sm">
              <img
                src={img_clave}
                class="rounded mx-auto d-block img_usuario"
                alt="..."
              />

              <h4>Ingrese clave de seguridad</h4>

              <br/>

              <div class="d-flex justify-content-center">
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Contraseña</label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
              </div>

              <br/>

              <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-primary btne">
                <a href="notificacionesAdmin" class="letra">
              {" "}
              Aceptar{" "}
            </a>
                </button>
                <button type="button" class="btn btn-primary btne">
                <a href="inicioUsuario" class="letra">
              {" "}
              Cancelar{" "}
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

export default InicioAdmin;