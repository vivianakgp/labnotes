import React from 'react';//importacion de la libreria
import ReactDOM from 'react-dom';//toma dos parametros, que va imprimir y donde lo va imprimir
import './index.css';
import App from './App';//de aqui importo componentes 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
