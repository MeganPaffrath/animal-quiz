import React, {useState} from "react"
import Quiz from "./Quiz";
import Summary from "./Summary"

function App() {
  let [view, setView] = useState("quiz");
  let [animal, setAnimal] = useState("");
  

  return (
    <div className="App">
      <section>
        {(view === "quiz") ? <Quiz setView={setView} setAnimal={setAnimal}/> : <Summary animal={animal}/>}
      </section>
    </div>
  );
}

export default App;
