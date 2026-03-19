⏱️ React Seconds Counter
📖 Descripción

Este proyecto es un contador de segundos desarrollado con React que actualiza el tiempo en tiempo real. Muestra los segundos en un formato de 6 dígitos (000000) y renderiza cada número individualmente para simular un display digital.

El contador se actualiza automáticamente cada segundo usando setInterval, re-renderizando el componente con el nuevo valor.

🚀 Demo

Ejemplo visual:

🕒 000001
🕒 000002
🕒 000003
🛠️ Tecnologías utilizadas

React

JavaScript (ES6)

CSS / Bootstrap

⚙️ Funcionamiento
1. Contador global

Se utiliza una variable global para almacenar los segundos:

let seconds = 0;


2. Actualización automática

Cada segundo, el contador aumenta y React vuelve a renderizar el componente:

setInterval(() => {
  seconds++;

  root.render(
    <SecondsCounter seconds={seconds} />,
  );
}, 1000);


3. Transformación de datos

El componente convierte los segundos en string y asegura que siempre tenga 6 dígitos:

let secondsStr = String(props.seconds);

while (secondsStr.length < 6) {
  secondsStr = "0" + secondsStr;
}


4. Renderizado dinámico

Cada dígito se renderiza individualmente usando .map():

const digits = secondsStr.split("");

{digits.map((num, index) => (
  <div key={index}>
    {num}
  </div>
))}


🧠 Conceptos clave aprendidos

Uso de props en React

Renderizado dinámico con .map()

Manipulación de strings

Actualización del DOM con ReactDOM.render

Uso de setInterval para tiempo real



▶️ Cómo ejecutar el proyecto

Clonar el repositorio:

git clone <tu-repo>

Instalar dependencias:

npm install

Ejecutar:

npm start

👨‍💻 Autor
@258sec
Proyecto desarrollado como práctica de React para entender el flujo de renderizado y actualización de datos en tiempo real.
