import '../styles/adding.css'
import { createContext, useContext } from 'react'
import { context } from './father.js'


export const last = createContext();

export const Input = (props) => {

    const [tasks, changeTasks, done] = useContext(context);

    const textIsNotEmpty = (text) => {
        return /[a-zA-Z0-9]/.test(text)
    }

    const AddTask = () => {
        let value = document.getElementById("user-tast").value; 
        if (textIsNotEmpty(value)) {
            changeTasks([...tasks, value]);
        }
    }

    return (
    <div id="Input" className='ui'>
        <input id='user-tast'/>
        <button onClick={() => AddTask()}>Add</button>
        <span>{done}/{tasks.length}</span>
    </div>)
}