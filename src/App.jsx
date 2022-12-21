// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { Fragment } from "react"
import Nav_tabs from "./components/Nav_tabs"
import Content from "./components/Content"
import Form_modal from "./components/Form_modal"
import { useState, useEffect } from "react"

function App() {
  // useStates
  const [tabs, setTabs] = useState([
    { nombre: "Pendientes", status: true },
    { nombre: "En curso", status: false },
    { nombre: "Finalizadas", status: false },
  ]);

  const [modalVisibility, setModalVisibility] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) ?? []);
  const [task, setTask] = useState({
    titulo: "",
    descripcion: "",
    status: ""
  });

  const [errors, setErrors] = useState([]);
  const [modalMode, setModalMode] = useState("");


  // useEffect
  useEffect(() => {
    console.log("useEffect", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Funciones
  const change_tab = (tab_nombre) => {
    const new_tabs = tabs.map(tab => {
      const current_tab = tab_nombre === tab.nombre ? 
        { nombre: tab.nombre, status: true } : 
        { nombre: tab.nombre, status: false }
      return current_tab
    });
    setTabs(new_tabs)
  }

  const new_task = () => {
    setErrors([]);
    setModalMode("Guardar");
    toggleModal();
  }

  const closeModal = (modalVisibility) => {
    setTask({
      titulo: "",
      descripcion: "",
      status: ""
    });
    toggleModal(modalVisibility);
  }

  const toggleModal = () => {
    const modal_active = modalVisibility ? false : true;
    setModalVisibility(modal_active);
  }

  const insert_tasks = () => {
    // Validar campos
    if(
      task.titulo.trim() === "" ||
      task.descripcion.trim() === "" ||
      task.status.trim() === ""
    ){
      setErrors([...errors, {id: Math.random().toString().substring(2), error: "Hay campos vacios en el formulario"}]);
      return;
    }

    if(modalMode == "Guardar"){
      // Guardar tasks
      setTasks([...tasks, {...task, ["id"]: Math.random().toString().substring(2)}]);
    }else {
      const complement_task= tasks.filter(task_element => task.id !== task_element.id);
      setTasks([...complement_task, task]);
      //Otra forma de hacerlo
      // setTasks(complement_task.push(task));
    }

    // Limpiar task
    setTask({
      titulo: "",
      descripcion: "",
      status: ""
    });
    toggleModal(modalVisibility);
  }
  
  //Eliminar tarea
  const delete_task = (e) => {
    const complemento = tasks.filter(task_element => task_element.id !== e.target.getAttribute("task_id"));
    setTasks(complemento);
  }

  //Editar tarea
  const edit_task = (e) => {
    const [selected_task] = tasks.filter(task_element => task_element.id === e.target.getAttribute("task_id"));
    setTask(selected_task);
    toggleModal();
    setModalMode("editar");
  }

  return (
    <div className="section">
      <div className="columns">
        <div className="column is-size-2 has-text-centered has-text-weight-bold">
          <h1>Gestor de tareas</h1>
        </div>
      </div>
      <button className="button is-info" onClick={new_task}>Nueva Tarea</button>
      <Nav_tabs 
        tabs={tabs} 
        change_tab={change_tab}></Nav_tabs>
      <Content 
        tabs={tabs} 
        tasks={tasks}
        delete_task={delete_task}
        edit_task={edit_task}
        >
      </Content>
      <Form_modal
        modalVisibility={modalVisibility}
        closeModal={closeModal}
        task={task}
        setTask={setTask}
        insert_tasks={insert_tasks}
        errors={errors}
      ></Form_modal>
    </div>
  )
}

export default App
