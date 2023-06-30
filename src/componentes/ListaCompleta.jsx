/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import TareaItem from './TareaItem';

function ListaCompleta({tareas, onCompleto, onBorrarItem}) {
  return (
    <div>
        {
            tareas.map((tarea, index) => (
                <TareaItem key ={`tarea-${index}`} tarea = {tarea} onCompleto = {onCompleto} onBorrarItem = {onBorrarItem} />
            ))
        }
    </div>
  )
}

export default ListaCompleta;