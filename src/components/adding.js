import '../styles/adding.css'
import { createContext, useContext, useEffect, useState } from 'react'
import { context } from './father.js'


export const last = createContext();

export const Input = (props) => {

    const [tasksInfo, changeTasks] = useContext(context);
    const [done, setDone] = useState(0);
    const [text, setText] = useState('');

    const textIsNotEmpty = (text) => {
        return /[a-zA-Z0-9]/.test(text)
    }

    useEffect(() => {
        let count = 0;

        tasksInfo.forEach(v => {
            v.done === true && count++;
        });

        setDone(count);
    }, [tasksInfo]); 

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
        <button onClick={() => AddTask()}>Add</button>
        <span>{done}/{tasksInfo.length}</span>
    </div>)
}