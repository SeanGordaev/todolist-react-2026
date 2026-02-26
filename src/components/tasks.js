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

    const Moving = (flag) => { // -1 - Up | 1 - Down
        const currentIndex = tasksInfo.findIndex(el => el.id === props.object.id);
        const newIndex = currentIndex + flag;

        if (newIndex < 0 || newIndex >= tasksInfo.length) return;

        let toSwap = [...tasksInfo];
        [toSwap[newIndex], toSwap[currentIndex]] = [toSwap[currentIndex], toSwap[newIndex]]

        changeTasks(toSwap);
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

            <button onClick={RemoveTask} id='del'>Del</button>

            <div className='moving'>
                <button id='up' className='moving-button' onClick={() => Moving(-1)}>/\</button>
                <button id='down' className='moving-button' onClick={() => Moving(1)}>\/</button>
            </div>

        </div>
    ) 
}