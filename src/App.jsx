import { useState } from "react";


function App() {
  const prop = "my friend";

  // definimos el state
  const [msj, setMsj] = useState(""); 

  // función que cambia el state al hacer click
  const handleClick = () => {
    setMsj("(from changed state)");
  }

  return (

    
    
    <main className="container-fluid d-flex flex-column">
      <h1>Hello {prop} {msj}! </h1>
      <button className="btn btn-primary w-25" onClick={handleClick}>Mostrar mensaje</button>
      {/* mostramos el state cuando se actualice */}
      
    </main>
     
  )
}

export default App
