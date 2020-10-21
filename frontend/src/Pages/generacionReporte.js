import React from "react";
import "../Style/Style.css";
import Swal from "sweetalert2";

class GeneracionReporte extends React.Component {
  _Crear() {
    Swal.fire("Su alerta ha sido creada con éxito", "Da click en el botón", "success");
  }
  render() {
    return (
      <div>
        <header class="bg-primary" id="miinformacion">
          <div class="bg-primary miinformacion text-white">
            <h2 class="text-center">¡Crea una nueva alerta!</h2>
          </div>
        </header>

        <br />

        <div class="row no-gutters">
          <div class="col-sm-6 col-md-8">
            <div id="pp">
              <p id="pp">Consecutivo</p>
              <input class="form-control form-control-lg" type="text" />

              <p id="pp">tipo de agresion</p>
              <select class="form-control form-control-lg">
                <option></option>
                <option>Física</option>
                <option>Psicológica</option>
              </select>

              <p id="pp">Descripción</p>
              <input class="form-control form-control-lg" type="text" />

              <p id="pp">Fecha de inicio</p>
              <input class="form-control form-control-lg" type="text" />

              <p id="pp">Estado de alerta</p>
              <select class="form-control form-control-lg">
                <option></option>
                <option>Abierto</option>
                <option>Cerrado</option>
                <option>Pendiente</option>
              </select>

              <p id="pp">Identificación del estudiante</p>
              <input class="form-control form-control-lg" type="text" />

              <p id="pp">Identificación del docente</p>
              <input class="form-control form-control-lg" type="text" />

              <p id="pp">Código de la entidad</p>
              <input class="form-control form-control-lg" type="text" />

              <p id="pp">Descripción en el proceso de la entidad</p>
              <input class="form-control form-control-lg" type="text" />

              <p id="pp">Fecha de descripción de la entidad</p>
              <input class="form-control form-control-lg" type="text" />
            </div>
          </div>
          <div class="col-6 col-md-4"></div>
        </div>

        <div class="d-flex justify-content-center">
          <button
            onClick={this._Crear}
            type="button"
            class="btn btn-primary btne"
          >
            <a href="inicioDocente" class="letra">
              {" "}
              Crear{" "}
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default GeneracionReporte;
