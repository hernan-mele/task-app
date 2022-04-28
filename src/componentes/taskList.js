import React, {useState} from 'react'
import FormTasks from './form'
import Task from './task'
import '../styles-sheets/TaskList.css'

function TaskList(){
    const [tasks, setTasks] = useState([])

    const addTask = task => {
        if(task.text.trim()){
            task.text = task.text.trim()
            const actualTasks = [task, ...tasks]
            setTasks(actualTasks)
        }
    }

    const deleteTask = id => {
        const actualTasks = tasks.filter(task => task.id !== id)
        setTasks(actualTasks)
    }

    const completeTasks = id => {
        const actualTasks = tasks.map(task => {
            if(task.id === id){
                task.completed = !task.completed
            }
            return task
        })
        setTasks(actualTasks)
    }

    return(
        <>
            <FormTasks onsSubmit={addTask} />
            <div className='task-list-container'>
                {
                    tasks.map((task) =>
                        <Task key={task.id} id={task.id} text={task.text} completed={task.completed} completeTask={completeTasks} deleteTask = {deleteTask} />
                    )
                }
            </div>
        </>
    )
}

export default TaskList