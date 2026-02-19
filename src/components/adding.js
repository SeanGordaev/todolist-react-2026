import '../styles/adding.css'
import { createContext, useContext } from 'react'
import { context } from './father.js'


export const last = createContext();

export const Input = (props) => {

    const [tasks, changeTasks] = useContext(context);

    const AddTask = () => {
        changeTasks([...tasks, document.getElementById("user-tast").value]);
    }

    return (
    <div id="Input" className='ui'>
        <input id='user-tast'/>
        <button onClick={() => AddTask()}>Add</button>
        <span>{}/{tasks.length}</span>
    </div>)
}