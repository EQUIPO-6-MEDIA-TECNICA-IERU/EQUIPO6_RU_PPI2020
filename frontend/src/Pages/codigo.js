import React from "react";
import "../Style/Style.css";
import logo from "../Images/Logo.jpeg";
import icono_atras from "../Images/espalda.png";

class codigo extends React.Component {
  render() {
    return (
      <div>
        <a href="/correo" class="navbar-brand ">
              <img
                src={icono_atras}
                alt="icono_atras"
                class="img-thumbnail iconoAtras"
              />
            </a>

        <div class="d-flex justify-content-center">
        <img
                  src={logo}
                  className="rounded mx-auto d-block logo"
                  alt="..."
                />
        </div>

        <div class="d-flex justify-content-center">
        <div class="form-group text-center font-weight-bold Cajas">
                    <label for="inputEmail4">Ingrese aquí el código de recuperación</label>
                    <input type="password" class="form-control" id="inputEmail4" />
                  </div>
        </div>

        <div class="d-flex justify-content-center">
        <button
                    type="button"
                    class="btn btn-primary text-center font-weight-bold boton"
                  >
                    <a href="contraseña" class="letra">
                      {" "}
                      Aceptar{" "}
                    </a>
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary text-center font-weight-bold boton"
                  >
                    <a href="/contraseña" class="letra">
                      {" "}
                      Cancelar{" "}
                    </a>
                  </button>
        </div>
      </div>
    );
  }
}

export default codigo;

/* <div className="container">
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
                  <div class="form-group text-center font-weight-bold Cajas">
                    <label for="inputEmail4">Ingrese aquí el código de recuperación</label>
                    <input type="password" class="form-control" id="inputEmail4" />
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-primary text-center font-weight-bold boton"
                  >
                    <a href="contraseña" class="letra">
                      {" "}
                      Aceptar{" "}
                    </a>
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-primary text-center font-weight-bold boton"
                  >
                    <a href="correo" class="letra">
                      {" "}
                      Cancelar{" "}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
        </div>
      </div> */