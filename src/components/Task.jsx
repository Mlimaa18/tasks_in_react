import React from 'react';

const Task = ({task_element, delete_task, edit_task}) => {
    return (
        <div className="column is-one-quarter is-3">
            <div className="notification ">
                <button 
                    className="delete" 
                    task_id={task_element.id} 
                    onClick={delete_task}
                ></button>
                <h3 className='is-size-5 has-text-weight-bold'>{task_element.titulo}</h3>
                <p>{task_element.descripcion}</p> 
                <hr />
                <div className='is-flex is-justify-content-space-between	'>
                    <a href="#" 
                        className='has-text-link' 
                        task_id={task_element.id} 
                        onClick={edit_task}>
                        <i className="fa-solid fa-pen-to-square"></i> Editar
                    </a>
                    <a 
                        href="#" 
                        className='has-text-danger' 
                        task_id={task_element.id} 
                        onClick={delete_task}
                    >
                        <i className="fa-solid fa-trash" ></i> Eliminar
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Task;