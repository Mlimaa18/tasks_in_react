import Nav_tabs from "./components/Nav_tabs"
import Content from "./components/Content"
import Form_modal from "./components/Form_modal";
import { useState, useEffect } from "react"

function App() {
  // useStates
  const [tabs, setTabs] = useState([
    {nombre: "Pendientes", status: true},
    {nombre: "En curso", status: false},
    {nombre: "Finalizadas", status: false}
  ]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    titulo: "",
    descripcion: "",
    status: ""
  });
  const [errors, setErrors] = useState([])


  // useEffect 
  // Funciones
  const change_tab = (tab_nombre) => {
    const new_tabs = tabs.map(tab => {
      const current_tab = tab_nombre === tab.nombre ? 
        {nombre: tab.nombre, status: true}: 
        {nombre: tab.nombre, status: false}

      return current_tab
    });
    setTabs(new_tabs);
  }

  const new_task = () => {
    toggle_modal();
  }

  const close_modal = () => {
    toggle_modal();
  }

  const toggle_modal = () => {
    const modal_active = modalVisibility ? false : true;
    setModalVisibility(modal_active);
  }

  const insert_task = () => {
    console.log("insert_task");
    //Validar campos
    if(
      task.titulo.trim() === "" ||
      task.descripcion.trim() === "" ||
      task.status.trim() === ""
    ){
      console.log("Hay campos vacios en el formulario");
      setErrors([...errors, {id: Math.random().toString().substring(2), error: "Hay campos vacios en el formulario"}])
    }

    //Guardar en tasks
    setTasks([...tasks, {...task, ["id"]: Math.random().toString().substring(2)}])

    //Limpiar task
    setTask(
      {
        titulo: "",
        descripcion: "",
        status: ""
     }
    );
    //Cerror ventana
    toggle_modal()
  }

  const delete_task = (e) => {
    console.log(e.target.getAttribute("task_id"));
    const complemento = tasks.filter(task_element => task_element.id !== e.target.getAttribute("task_id"));
    setTasks(complemento)
  }

  return (
    <>
      <div className="columns">
        <div className="column is-size-2 has-text-centered has-text-weight-bold">
          <h1>
            Gestor de tareas
          </h1>
        </div>
      </div>
      <button 
        className="button is-info ml-3"
        onClick={new_task}
      >Nueva tarea</button>
      <Nav_tabs 
        tabs={tabs}
        change_tab={change_tab}
      />
      <Content 
        tabs={tabs}
        tasks={tasks}
        delete_task={delete_task}
      />

      <Form_modal 
        modalVisibility={modalVisibility}
        close_modal={close_modal}
        task={task}
        setTask={setTask}
        insert_task={insert_task}
        errors={errors}
      />      
    </>
  )
}

export default App