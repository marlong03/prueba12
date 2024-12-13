import './App.css'
import { useState } from 'react';
function App() {
  const [textos,setTextos] = useState(["Hola","Mundo", "Estoy", "Aqui"]);
  return (
    <>
    <div className='container_h1'>
      {textos.map((element,index) => 
        <h1 key={index} >{element}</h1>
      )}
    </div>
    </>
  )
}

export default App


