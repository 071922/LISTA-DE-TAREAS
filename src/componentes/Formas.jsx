/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

function Formas({addTodo}) {

    const [usarInput , setUsarInput] = useState('');

    function ingresarTexto(e) {
        setUsarInput(e.currentTarget.value);
    }

const suSumit = (e) => {
    e.preventDefault();
    if(usarInput.trim() !== ''){
        addTodo(usarInput);
        setUsarInput('');

    }
}

  return (
    
    <div style = {{margin: 50}}>
        <form onSubmit={suSumit}>
            <input type = "text" value = {usarInput} onChange = {ingresarTexto} /> 
            <button>Agregar</button>
            </form>
    </div>
  )
}

export default Formas;