import React from "react";
import "../Style/Style.css";
import icono_atras from "../Images/espalda.png";

class InformacionEntidad extends React.Component {
  render() {
    return (
      <div>
        <header class="bg-primary" id="miinformacion">
          <div class="bg-primary miinformacion text-white">
            <h2 class="text-center">Mi información</h2>

          </div>
          <a href="/inicioEntidad" class="navbar-brand ">
            <img
              src={icono_atras}
              alt="icono_atras"
              class="img-thumbnail iconoAtras ss bg-primary "
            />
          </a>
        </header>


        <br />
        <br />

        <div id="pp">
          <div class="row no-gutters">
            <div class="col-sm-6 col-md-8">
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Código
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="g3hr3w"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Nombre
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="Bienestar familiar"
                  />
                </div>
              </div>{" "}
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Dirección
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="cra 68 no 02A"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Teléfono
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="32254234"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Tipo
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="..."
                  />
                </div>
              </div>  
            </div>
            <div class="col-6 col-md-4"></div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary btne">
            Editar
          </button>
          <button type="button" class="btn btn-primary btne">
            <a class="letra" href="/inicioEntidad">Guardar</a>
          </button>
          <button type="button" class="btn btn-primary btne">
            Desactivar
          </button>
        </div>
      </div>
    );
  }
}

export default InformacionEntidad;