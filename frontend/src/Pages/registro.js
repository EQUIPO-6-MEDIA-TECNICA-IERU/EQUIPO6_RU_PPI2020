import React from "react";
import logo from "../Images/Logo.jpeg";
import "../Style/Style.css";
import Swal from "sweetalert2";
import Swal2 from "sweetalert2";

class registro extends React.Component {
  _Editar() {
    Swal.fire("Puede editar sus datos", "Has click en el botón", "info");
  }

  _Cancelar() {
    Swal2.fire(
      "La información ha sido cancelada",
      "Verifique de nuevo sus datos",
      "warning"
    );
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col">
                <img
                  src={logo}
                  className="rounded mx-auto d-block logo"
                  alt="..."
                />
                <div class="form-row">
                  <div class="form-group font-weight-bold Cajita">
                    <label for="inputEmail4">Id Usuario</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group font-weight-bold Cajita">
                    <label for="inputEmail4">Nombres</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group font-weight-bold Cajita">
                    <label for="inputEmail4">Numero de telefono</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group font-weight-bold Cajita">
                    <label for="inputEmail4">Ciudad</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                  </div>
                </div>

                <div class="form-group font-weight-bold Cajita">
                  <label for="exampleFormControlSelect1">Género</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Femenino</option>
                    <option>Masculino</option>
                  </select>
                </div>

                <div class="form-row">
                  <div class="form-group font-weight-bold Cajita">
                    <label for="inputEmail4">Contraseña</label>
                    <input
                      type="Password"
                      class="form-control"
                      id="inputEmail4"
                    />
                  </div>
                </div>

                <div class="form-group font-weight-bold Cajita">
                  <label for="exampleFormControlSelect1">Postular para:</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Estudiante</option>
                    <option>Docente</option>
                    <option>Entidad</option>
                  </select>
                </div>

                <div class="d-flex justify-content-center">
                  <button
                    onClick={this._Editar}
                    type="button"
                    class="botonregistro btn-primary font-weight-bold"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    class="botonregistro btn-primary font-weight-bold"
                  >
                    <a href="principal" class="letra">
                      {" "}
                      Enviar{" "}
                    </a>
                  </button>
                  <button
                    onClick={this._Cancelar}
                    type="button"
                    class="botonregistro btn-primary font-weight-bold"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default registro;
