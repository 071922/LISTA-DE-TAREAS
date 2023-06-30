/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function TareaItem({tarea , onCompleto, onBorrarItem}) {

  const getStyle = () => {
    return {
      textDecoration: tarea.completed ? 'line-through' : 'none',
      margin: '30px',
      border: '5px solid #ffffff',
      padding: '10px'
     }
  }

  return (
    <div style={getStyle()}>
      <input type= 'checkbox' checked = {tarea.completed}
      onChange={() => onCompleto(tarea.id)} />
      {tarea.tarea}
      <button className = 'add-btn' onClick = {() => onBorrarItem(tarea.id)}>X</button>
    </div>
  )
}

export default TareaItem;