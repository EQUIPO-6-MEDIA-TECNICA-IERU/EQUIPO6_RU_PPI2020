import React from "react";
import Swal1 from "sweetalert2";
import Swal22 from "sweetalert2";
import Swal33 from "sweetalert2";

class vistarReporte extends React.Component {
  _Editar1() {
    Swal1.fire("Puede editar sus datos", "Has click en el botón", "info");
  }
  _Guardar1() {
    Swal22.fire("Sus datos han sido guardados con éxito", "Has click en el botón", "info");
  }
  _Desactivar1() {
    Swal33.fire("Los datos han sido desactivados", "Has click en el botón", "warning");
  }
  render() {
    return (
      <div>
        <header class="bg-primary" id="miinformacion">
          <div class="bg-primary miinformacion text-white">
            <h2 class="text-center">Vista de alerta</h2>
          </div>
        </header>

        <br/>

        <div class="row no-gutters" id="pp">
          <div class="col-sm-6 col-md-8">
            <div class="form-group row">
              <label
                for="colFormLabelSm"
                class="col-sm-2 col-form-label col-form-label-sm"
              >
                Tipo de agresión
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="Física"
                />
              </div>
            </div>

            <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Descripción
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

              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Fecha de sistema
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="20/10/2020"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Estado
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="Proceso"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Fecha de revisión
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="22/10/2020"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Identificación del estudiante
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
                  código de la Entidad
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="d23u4h"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Descripción del proceso de la Entidad
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

              <div class="form-group row">
                <label
                  for="colFormLabelSm"
                  class="col-sm-2 col-form-label col-form-label-sm"
                >
                  Fecha de descripción de la entidad
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

        <div class="d-flex justify-content-center">
        <button
          onClick={this._Editar1}
           type="button" class="btn btn-primary btne">
            Editar
          </button>
          <button
          onClick={this._Guardar1}
           type="button" class="btn btn-primary btne">
          <a href="inicioDocente" class="letra">
                      {" "}
                      Guardar{" "}
                    </a>
          </button>
          <button 
          onClick={this._Desactivar1}
          type="button" class="btn btn-primary btne">
          Desactivar
          </button>
        </div>
      </div>
    );
  }
}

export default vistarReporte;
