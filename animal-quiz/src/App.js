import React, {useState} from "react"
import Quiz from "./Quiz";
import Summary from "./Summary"

function App() {
  let [view, setView] = useState("");
  

  return (
    <div className="App">
      {(view === "quiz") ? <Quiz setView={setView}/> : <Summary />}
    </div>
  );
}

export default App;
