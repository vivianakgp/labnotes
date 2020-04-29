import React,{ Component }  from 'react';//desde aqui importar nuevos componentes
import './App.css';
import Inicio from './pages/inicio.js';
import Login from './pages/login.js';
import Register from './pages/register.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
     <div className='container'></div>
     <Switch>
       <Route path='/' exact>
         <Inicio/>
       </Route>
       <Route path='/login' >
         <Login/>
       </Route>
       <Route path='/register' >
         <Register/>
       </Route>
       <Route path='/muro' >
         murou
       </Route>
     </Switch>
    </Router>
    
  );
}


export default App;
