import React from "react";
import "../Style/Style.css";
import Camapana_img from "../Images/campana.png";
import Swal from "sweetalert2";

class NotificacionesAdmin extends React.Component {
  _Aceptar() {
    Swal.fire(
      "El perfil ha sido aceptado y vinculado con éxito",
      "Has click en el botón",
      "info"
    );
  }
  render() {
    return (
      <div>
        <div>
          <header class="bg-primary text-white">
            <div id="tNotificacion">
              <h1>Notificaciones</h1>
            </div>
          </header>

          <br />

          <h4 id="aviso" class="text-center text-danger">
            Aquí puedes ver las notificaciones
            <br /> de los nuevos usuarios
          </h4>

          <br />
          <br />

          <section>
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="d-flex justify-content-center notificacion">
                    <img
                      src={Camapana_img}
                      alt="icon"
                      class="img-thumbnail imgc"
                    />
                    <p>Claudia quiere ser parte de la app</p>
                  </div>
                </div>
              </div>

              <br />

              <div class="col">
                <div class="d-flex justify-content-center notificacion">
                  <img
                    src={Camapana_img}
                    alt="icon"
                    class="img-thumbnail imgc"
                  />
                  <p>Sofia quiere ser parte de la app</p>
                </div>
                <div class="d-flex justify-content-center">
                  <button type="button" class="btn btn-primary btne">
                    <a href="informacionEstudiante2" class="letra">
                      {" "}
                      Ver Perfil{" "}
                    </a>
                  </button>
                  <button
                    onClick={this._Aceptar}
                    type="button"
                    class="btn btn-success btne"
                  >
                    Aceptar
                  </button>
                </div>
              </div>

              <br />

              <div class="col">
                <div class="d-flex justify-content-center notificacion">
                  <img
                    src={Camapana_img}
                    alt="icon"
                    class="img-thumbnail imgc"
                  />
                  <p>Camilo quiere ser parte de la app </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default NotificacionesAdmin;
