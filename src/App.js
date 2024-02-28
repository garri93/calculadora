import logo from './logo.svg';
import './App.css';
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from 'react';


function App() {

  const [input,setInput] = useState('');

  const agregarInput = valor => {
    if (input === "0" && valor !== ".") {
      setInput(valor)
    } else {
    setInput(input + valor)
    
  }
  }

  const calcularResultado = () => {
    if (input && isNaN(input.substring(input.length,input.length))) {
    setInput(eval(input.toString()))
    } else {
      alert("No se puede realizar la operacion");
    }
  }


  return (
    <div className="App">
      <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>

      </div>
    </div>
  );
}

export default App;
