import { useState } from "react";
export default function Counter({ num }) {
  let [counter, setCounter] = useState(num);
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <h2 id="Boom"></h2>
      <button onClick={() => {setCounter(counter + 1)
        if (counter % 3 === 0) {
        document.getElementById("Boom").innerHTML += "Boom! <br>";}}}>Plus one Counter</button>
      <button onClick={() => {setCounter(counter - 1);}}>minus one</button>
      <button onClick={()=>{setCounter((counter = 0))}}>reset Counter</button>
    </div>
  );
}
