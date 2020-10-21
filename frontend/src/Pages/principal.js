import React from "react";
import logo from "../Images/Logo.jpeg";
import "../Style/Style.css";
import Swal from "sweetalert2";

class Principal extends React.Component {
  _Inicio() {
    Swal.fire("Inicio de sesión éxitoso", "Has click en el boton", "success");
  }

  render() {
    return (
      <div>
        <div class="d-flex justify-content-center">
          <img src={logo} className="rounded mx-auto d-block logo" alt="..." />
        </div>

        <br />
        <div class="d-flex justify-content-center">
          <div className="correo">
            <input
              type="text"
              class="form-control font-weight-bold  Cajas"
              placeholder="Correo electrónico o id"
            />
          </div>
        </div>

        <br />

        <div class="d-flex justify-content-center">
          <div class="form-row">
            <div className="contraseña">
              <input
                type="password"
                class="form-control font-weight-bold  Cajas"
                placeholder="Contraseña"
              />
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <a href="correo" className="olvido">
            {" "}
            ¿olvidó su contraseña?{""}
          </a>
        </div>

        <br/>

        <div class="d-flex justify-content-center">
          <button
            onClick={this._Editar}
            type="button"
            class="botonmenu btn-primary font-weight-bold"
          >
            <a href="registro" class="letra">
              {" "}
              Registrarse{" "}
            </a>
          </button>
          <button
            onClick={this._Inicio}
            type="button"
            class="botonmenu btn-primary font-weight-bold"
          >
            <a href="inicioUsuario" class="letra">
              {" "}
              iniciar sesión{" "}
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Principal;
