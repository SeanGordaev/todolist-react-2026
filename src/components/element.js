import '../styles/element.css'
import { useContext } from 'react'
import { context } from './father.js'

export const Item = (props) => {

    const [tasks, changeTasks] = useContext(context);

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
    <div className="item">
        <input type="checkbox"/>
        <span>{props.text}</span>
        <button onClick={RemoveTask}>Del</button>
    </div>)
}