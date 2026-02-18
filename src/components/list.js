import "../styles/list.css"

import { Item } from './element.js'
import { useContext } from 'react'
import { context } from './father.js'

export const List = () => {

    const [tasks] = useContext(context);

    return (
        <div className='list'>
            {Array.from({ length:tasks.length }, (_, i) => i).map(
                i => (
                    <Item key={i} index={i} text={tasks[i]}/>)
                )
            }
        </div>
    )

}