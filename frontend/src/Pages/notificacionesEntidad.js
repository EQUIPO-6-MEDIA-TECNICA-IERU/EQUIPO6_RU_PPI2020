import React from "react";
import "../Style/Style.css";
import Camapana_img from "../Images/campana.png";
import icono_atras from "../Images/espalda.png";

class NotificacionesEntidad extends React.Component {
  render() {
    return (
      <div>
        <div>
        <header class="bg-primary" id="miinformacion">
          <div class="bg-primary miinformacion text-white">
            <h2 class="text-center">Notificaciones</h2>
            
          </div>
          <a href="..." class="navbar-brand ">
              <img
                src={icono_atras}
                alt="icono_atras"
                class="img-thumbnail iconoAtras ss bg-primary "
              />
            </a>
        </header>
        
          <br />

          <h4 id="aviso" class="text-center text-danger">
            Aquí podrás ver la información
                <br /> de tu alerta
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
                    <a class="letra text-center" href="/vistaAlerta2">Se ha finalizado el reporte s2e3</a>
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
                  <a class="letra text-center" href="/vistaAlerta2"> La docente Laura ha actualizado
                        <br /> tu reporte</a>
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
                  <a class="letra text-center" href="/vistaAlerta2">Tu reporte está activo actualmente
                         </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default NotificacionesEntidad;