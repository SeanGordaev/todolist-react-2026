import '../styles/element.css'
import { createContext, useContext, useState } from 'react'
import { context } from './father.js'


export const cont = createContext();

export const Item = (props) => {

    const [tasks, changeTasks] = useContext(context);
    const [animation, setAnimation] = useState("");

    const Check = () => {
        if (animation === "lining-show") {
            setAnimation("lining-hide")
        } else {
            setAnimation("lining-show")
        }
    }

    const RemoveTask = () => {
        var arr = new Array();
        var index = 0;
        for (let i of tasks) {
            if (index !== props.index) {
                arr.push(i);
            }
            index++;
        }
        changeTasks(arr);
    }


    return (
    <div className={" item " + props.className}>
        <input type="checkbox" onChange={Check}/>
        <div className={'text-box'}>
            <div className={'box ' + animation}></div>
            <span id={props.index}>{props.text}</span>
        </div>
        <button onClick={RemoveTask}>Del</button>
    </div>) 
}