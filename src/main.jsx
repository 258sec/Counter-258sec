import React from "react";
import  './App.css'
import ReactDOM from "react-dom/client";
import SecondsCounter from "./SecondsCounter";
/*Variable para guardar los segundos */
let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById("root"));

  /*Funcion que realiza un intervalo cada segundo */
setInterval(() => {
  seconds++;
  /*Usamos .render para renderizar el root cada vez que aumenta seconds*/
  root.render(
    /*se actualiza el contador*/
    <SecondsCounter seconds={seconds} />,
  );
}, 1000);
