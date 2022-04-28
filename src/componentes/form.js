import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import '../styles-sheets/Form.css'

function FormTasks(props){

    const [input, setInput] = useState('')

    const change = e => {
        setInput(e.target.value)
    }

    const send = e => {
        e.preventDefault()

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }

        props.onSubmit(newTask)
    }

    return (
        <form className='task-form' onSubmit={send}>
            <input className='task-input' type='text' placeholder='Write a task' name='text' onChange={change}/>
            <button className='task-button'>Add Task</button>
        </form>
    )
}

export default FormTasks