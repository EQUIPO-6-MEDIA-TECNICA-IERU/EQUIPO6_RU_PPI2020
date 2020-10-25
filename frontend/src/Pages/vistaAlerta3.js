import React from "react";
import "../Style/Style.css";
import icono_atras from "../Images/espalda.png";

class vistaAlerta3 extends React.Component {
    render() {
        return(
            <div>
                 <header class="bg-primary" id="miinformacion">
          <div class="bg-primary miinformacion text-white">
            <h2 class="text-center">Vista alertas</h2>
            
          </div>
          <a href="..." class="navbar-brand ">
              <img
                src={icono_atras}
                alt="icono_atras"
                class="img-thumbnail iconoAtras ss bg-primary "
              />
            </a>
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
            <a class="letra" href="/inicioEstudiante">Volver</a>
          </button>
        </div>
            </div>
        );
    }
}

export default vistaAlerta3;