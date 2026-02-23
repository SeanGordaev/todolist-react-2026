import '../styles/element.css'
import { createContext, useContext, useState } from 'react'
import { context } from './father.js'


export const cont = createContext();

export const Item = (props) => {

    const [tasksInfo, changeTasks] = useContext(context);
    const [animation, setAnimation] = useState("hide");
    const [del, setdel] = useState(0);
    

    const Check = () => {
        if (props.object.done === true) {
            setAnimation('hide');
        } else {
            setAnimation('show');
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
        setdel(del + 1);
        console.log(tasksInfo)
    }


    return (
        <div className={" item " + props.className}>

            <input type="checkbox" onChange={Check} checked={props.object.done}/>
            
            <div className={'text-box'}>
                <div className={"box" + " " + ("lining-" + animation)}></div>
                <span>{props.object.text}</span>
            </div>

            <button onClick={RemoveTask}>Del</button>

        </div>
    ) 
}