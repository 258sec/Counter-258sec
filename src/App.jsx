import SecondsCounter from "./SecondsCounter";

function App({ seconds }) {
  return (
    <div>
      <SecondsCounter seconds={seconds} />
    </div>
  );
}

export default App;