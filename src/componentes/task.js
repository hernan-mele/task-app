import React from 'react'
import {AioutlineCloseCircle} from 'react-icons/ai'
import '../styles-sheets/Task.css'

function Task({id, text, completed, completeTask, deleteTask}){
    return (
        <div className={completed ? 'container-task completed' : 'container-task'}>
            <div className='task-text' onClick={() => completeTask(id)}>
                {text}
            </div>
            <div className='task-container-icons' onClick={() => deleteTask(id)}>
                <AioutlineCloseCircle className='task-icon' />
            </div>
        </div>
    )
}

export default Task