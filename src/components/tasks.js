import '../styles/tasks.css'
import { createContext, useContext, useState } from 'react'
import { context } from './father.js'


export const cont = createContext();

export const Item = (props) => {

    const [tasksInfo, changeTasks] = useContext(context);
    const [done, setDone] = useState('');
    

    const Check = () => {
        if (props.object.done === true) {
            setDone('hide');
        } else {
            setDone('done');
        }
        
        changeTasks(prev =>
            prev.map(task =>
                task.id === props.object.id
                ? { ...task, done: !task.done }
                : task
            )
        );
    }

    const RemoveTask = () => {
        changeTasks(tasksInfo.filter(item => item.id !== props.object.id));
    }


    return (
        <div className={"item " + props.className}>

            <input type="checkbox" onChange={Check} checked={props.object.done}/>
            
            <div className={'text-box'}>
                <span className={`${done}`}>
                    {props.object.text}
                </span>
            </div>

            <button onClick={RemoveTask}>Del</button>

        </div>
    ) 
}