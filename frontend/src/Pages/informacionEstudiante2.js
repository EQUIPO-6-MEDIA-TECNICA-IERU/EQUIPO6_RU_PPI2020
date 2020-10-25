import React from "react";
import "../Style/Style.css";
import icono_atras from "../Images/espalda.png";

class informacionEstudiante2 extends React.Component {
  
  render() {    
    return (
      <div>
        <header class="bg-primary" id="miinformacion">
          <div class="bg-primary miinformacion text-white">
            <h2 class="text-center">Información "Nombre de usuario"</h2>

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

      </div>
    );
  }
}

export default informacionEstudiante2;
