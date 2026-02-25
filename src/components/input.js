import '../styles/input.css'
import { createContext, useContext, useEffect, useState } from 'react'
import { context } from './father.js'


export const last = createContext();

export const Input = (props) => {

    const [tasksInfo, changeTasks] = useContext(context);
    const [text, setText] = useState('');

    const done = tasksInfo.filter(t => t.done).length; // count of done tasts
    const progress = tasksInfo.length === 0 
                    ? 0
                    : (done) / tasksInfo.length;
    const color = tasksInfo.length === 0 || done === 0
                    ? '#6b7280' 
                    : `rgb(${200 / (done !== 0 ? done : 1)}, ${progress * 200}, 0)`;

    const textIsNotEmpty = (text) => {
        return /[a-zA-Z0-9]/.test(text)
    }

    const AddTask = () => {
        if (textIsNotEmpty(text)) {
            changeTasks([...tasksInfo, 
                {
                    id: crypto.randomUUID(),
                    text: text,
                    done: false
                }
            ]);
        }
    }

    return (
    <div id="Input" className='ui'>
        <input id='user-tast' onChange={e => setText(e.target.value)}/>
        <button onClick={AddTask}>Add</button>
        <span style={{"color": color}}>{done}/{tasksInfo.length}</span>
    </div>)
}