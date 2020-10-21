import React from "react";
import "../Style/Style.css";
import Swal from "sweetalert2";
import Swal2 from "sweetalert2";
import Swal3 from "sweetalert2";


class InformacionEstudiante extends React.Component {
  _Editar() {
    Swal.fire("Puede editar sus datos", "Has click en el botón", "info");
  }
  _Guardar() {
    Swal2.fire("Sus datos han sido guardados con éxito", "Has click en el botón", "info");
  }
  _Desactivar() {
    Swal3.fire("La cuenta ha sido desactivada", "Has click en el botón", "warning");
  }

  render() {    
    return (
      <div>
        <header class="bg-primary" id="miinformacion">
          <div class="bg-primary miinformacion text-white">
            <h2 class="text-center">Mi información</h2>
          </div>
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
                  Identificación
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="31344121"
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
                    placeholder="José"
                  />
                </div>
              </div>{" "}
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Apellido
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="López"
                  />
                </div>
              </div>
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
                  Grado
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="10°1"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Género
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="Masculino"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Correo
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="Jose10@gmail.com"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Edad
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="15"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Estrato
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="3"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Acudiente
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="Eugenia Bentancur"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Teléfono acudiente
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="314 436534453"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Fecha de matrícula
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="2/10/16"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Tiene familiares
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="si"
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
                    placeholder="314 436534453"
                  />
                </div>
              </div>
            </div>
            <div class="col-6 col-md-4"></div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <button
          onClick={this._Editar}
           type="button" class="btn btn-primary btne">
            Editar
          </button>
          <button
          onClick={this._Guardar}
           type="button" class="btn btn-success btne">
          <a href="inicioEstudiante" class="letra">
                      {" "}
                      Guardar{" "}
                    </a>
          </button>
          <button 
          onClick={this._Desactivar}
          type="button" class="btn btn-danger btne">
          Desactivar
          </button>
        </div>
      </div>
    );
  }
}

export default InformacionEstudiante;
