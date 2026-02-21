import '../styles/element.css'
import { createContext, useContext, useState } from 'react'
import { context } from './father.js'


export const cont = createContext();

export const Item = (props) => {

    const [tasks, changeTasks, done, setDone] = useContext(context);
    const [animation, setAnimation] = useState("");

    const Check = () => {
        if (animation === "lining-show") {
            setAnimation("lining-hide")
            setDone(done - 1);
        } else {
            setAnimation("lining-show")
            setDone(done + 1);
        }
    }

    const RemoveTask = () => {
        var arr = new Array();
        var index = 0;
        for (let i of tasks) {
            if (index !== props.id) {
                arr.push(i);
            }
            index++;
        }
        changeTasks(arr);
        
        if (done >= tasks.length) {
            setDone(tasks.length - 1);
        }
    }


    return (
    <div className={" item " + props.className}>
        <input type="checkbox" onChange={Check}/>
        <div className={'text-box'}>
            <div className={'box ' + animation}></div>
            <span id={props.id}>{props.text}</span>
        </div>
        <button onClick={RemoveTask}>Del</button>
    </div>) 
}