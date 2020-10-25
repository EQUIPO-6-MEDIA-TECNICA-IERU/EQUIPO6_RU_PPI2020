import React from "react";
import "../Style/Style.css";
import logo from "../Images/Logo.jpeg";
import icono_atras from "../Images/espalda.png";

class correo extends React.Component {
  render() {
    return (
      <div>
        <a href="/" class="navbar-brand ">
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
                    <label for="inputEmail4">Ingrese aquí el correo</label>
                    <input type="password" class="form-control" id="inputEmail4" />
                  </div>
        </div>

        <div class="d-flex justify-content-center">
        <button
                    type="button"
                    class="btn btn-primary text-center font-weight-bold boton"
                  >
                    <a href="/codigo" class="letra">
                      {" "}
                      Aceptar{" "}
                    </a>
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary text-center font-weight-bold boton"
                  >
                    <a href="/" class="letra">
                      {" "}
                      Cancelar{" "}
                    </a>
                  </button>
        </div>
      </div>
    );
  }
}

export default correo;
