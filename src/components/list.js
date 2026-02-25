import "../styles/list.css"
import { Item } from './element.js'
import { useContext, useState } from 'react'
import { context } from './father.js'


export const List = () => {

    const [tasksInfo, changeTasks] = useContext(context);

    return (
        <div className='list'>
        {
        Array.from({ length:tasksInfo.length }, (_, i) => i).map(
            i => (
                <Item key={tasksInfo[i].id} object={tasksInfo[i]} className='created'/>)
            )
        }
        </div>
    )

}