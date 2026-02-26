import "../styles/list.css"
import { Item } from './tasks.js'
import { useContext } from 'react'
import { context } from './father.js'


export const List = () => {

    const [tasksInfo] = useContext(context);

    return (
        <div className='list'>
        {
            tasksInfo.map(obj => (<Item key={obj.id} object={obj} className='created'/>))
        }
        </div>
    )

}