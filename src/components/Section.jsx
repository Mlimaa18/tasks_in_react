import React from 'react';
import Task from './Task';

const Section = ({ tab, tasks, delete_task, edit_task }) => {
    const visibility = tab.status ? "" : "is-hidden";
    return (
        <div className={visibility}>
            <div className="columns">
                <div className="column">
                    <h2 className="is-size-4 has-text-centered visibility">{tab.nombre}</h2>
                </div>
            </div>
            <div className="columns is-multiline is-mobile">
                {tasks.map(task_element => {
                    if(task_element.status === tab.nombre){
                        return(
                            <Task 
                                key={Math.random().toString().substring(2)}
                                task_element={task_element}
                                delete_task={delete_task}
                                edit_task={edit_task}
                            />
                        )
                    }
                })}
                <div className="column">
                    
                </div>
            </div>
        </div>
    );
};

export default Section;