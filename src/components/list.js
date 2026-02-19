import "../styles/list.css"

import { Item } from './element.js'
import { useContext } from 'react'
import { context } from './father.js'

export const List = () => {

    const [tasks] = useContext(context);

    const textIsNotEmpty = (text) => {
        return /[a-zA-Z0-9]/.test(text)
    }

    return (
        <div className='list'>
            {Array.from({ length:tasks.length }, (_, i) => i).map(
                i => (
                    textIsNotEmpty(tasks[i]) && <Item key={i} index={i} text={tasks[i]} className='created'/>)
                )
            }
        </div>
    )

}