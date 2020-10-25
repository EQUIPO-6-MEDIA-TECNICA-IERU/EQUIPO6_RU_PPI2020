import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import principal from "../Pages/principal";
import registro from "../Pages/registro";
import correo from "../Pages/correo";
import codigo from "../Pages/codigo";
import contraseña from "../Pages/contraseña";
import inicioUsuario from "../Pages/inicioUsuarios";
import inicioEstudiante from "../Pages/inicioEstudiante";
import inicioDocente from "../Pages/inicioDocente";
import inicioEntidad from "../Pages/inicioEntidad";
import inicioAdmin from "../Pages/inicioAdmin";
import informacionEstudiante from "../Pages/informacionEstudiante";
import informacionDocente from "../Pages/informacionDocente";
import informacionEntidad from "../Pages/informacionEntidad";
import informacionUsuario from "../Pages/informacionUsuario";
import generacionReporte from "../Pages/generacionReporte";
import busquedaUsuario from "../Pages/busquedaUsuario";
import notificacionesAdmin from "../Pages/notificacionesAdmin";
import reportesEstudiante from "../Pages/reportesEstudiante";
import vistaAlerta from "../Pages/vistaAlerta";
import vistaAlerta2 from "../Pages/vistaAlerta2";
import informacionEstudiante2 from "../Pages/informacionEstudiante2";
import notificacionesDocente from "../Pages/notificacionesDocente";
import vistaAlerta3 from "../Pages/vistaAlerta3";
import vistaInformacionUsuario from "../Pages/vistaInformacionUsuario";
import notificacionesEntidad from "../Pages/notificacionesEntidad";
import vistaInformacionUsuario2 from "../Pages/vistaInformacionUsuario2";
import informacionUsuario2 from "../Pages/informacionUsuario2";
import busquedaUsuario2 from "../Pages/busquedaUsuario2";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={principal} />
        <Route exact path="/registro" component={registro} />
        <Route exact path="/correo" component={correo} />
        <Route exact path="/codigo" component={codigo} />
        <Route exact path="/contraseña" component={contraseña} />
        <Route exact path="/inicioUsuario" component={inicioUsuario}/>
        <Route exact path="/inicioEstudiante" component={inicioEstudiante}/>
        <Route exact path="/inicioDocente" component={inicioDocente}/>
        <Route exact path="/inicioEntidad" component={inicioEntidad}/>
        <Route exact path="/inicioAdmin" component={inicioAdmin}/>
        <Route exact path="/informacionEstudiante" component={informacionEstudiante}/>
        <Route exact path="/informacionDocente" component={informacionDocente}/>
        <Route exact path="/informacionEntidad" component={informacionEntidad}/>
        <Route exact path="/informacionUsuario" component={informacionUsuario}/>
        <Route exact path="/generacionReporte" component={generacionReporte}/>
        <Route exact path="/busquedaUsuario" component={busquedaUsuario}/>
        <Route exact path="/notificacionesAdmin" component={notificacionesAdmin}/>
        <Route exact path="/reportesEstudiante" component={reportesEstudiante}/>
        <Route exact path="/vistaAlerta" component={vistaAlerta}/> 
        <Route exact path="/vistaAlerta2" component={vistaAlerta2}/>
        <Route exact path="/informacionEstudiante2" component={informacionEstudiante2}/>
        <Route exact path="/notificacionesDocente" component={notificacionesDocente}/>
        <Route exact path="/vistaAlerta3" component={vistaAlerta3}/>
        <Route exact path="/vistaInformacionUsuario" component={vistaInformacionUsuario}/>
        <Route exact path="/notificacionesEntidad" component={notificacionesEntidad}/>
        <Route exact path="/vistaInformacionUsuario2" component={vistaInformacionUsuario2}/>
        <Route exact path="/informacionUsuario2" component={informacionUsuario2}/>
        <Route exact path="/busquedaUsuario2" component={busquedaUsuario2}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
