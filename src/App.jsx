/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Datos from './Datos.json';
import './App.css';
import ListaCompleta from './componentes/ListaCompleta';
import Formas from './componentes/Formas';

function App() {

  const [tareas , setTareas] = useState(Datos);

  const onCompleto = (id) => {
    setTareas(tareas.map((tarea) => {
    return tarea.id === Number(id) ? {...tarea, completed: !tarea.completed} : {...tarea};
  }))
  }

  const onBorrarItem = (id) => {
    setTareas ([...tareas].filter(tarea => tarea.id !== id))
  }

  const addTodo = (newTexto) => {
    console.log('newTexto' , newTexto);
    let newItem = {id : +new Date(), tarea: newTexto, completed: false};

    setTareas([...tareas, newItem]);
  }

  return (

        <div className='container'>
          <h2><center>TODO APP</center></h2>
        <Formas addTodo = {addTodo}/>
       <ListaCompleta tareas = {tareas} onCompleto = {onCompleto} onBorrarItem = {onBorrarItem}/>
      </div>
      )
}

export default App;
