
function SecondsCounter(props) {
  /*pasamos seconds a string */
  let secondsStr = String(props.seconds);
   /*para que se rellene con 0 */ 
  while (secondsStr.length < 6) {
    secondsStr = "0" + secondsStr;
  }
   /*separamos la str con espacios */
  const digits = secondsStr.split("");

    /*Interfaz grafica */
  return (
    <div className="container-fluid text-center background align-items-center d-flex justify-content-center">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <div className="reloj">
          <img src="/relojarena.png"  style={{ width: "130px", height: "130px" }} ></img>
        </div>

         {/*Aqui usamos .map para que a cada elemento de digits
          se le aplique el html*/}
          {digits.map((num, index) => (
          <div key={index} className="bg-dark text-white p-4 rounded fs-2">
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondsCounter;
