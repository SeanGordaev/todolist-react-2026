import React, {createContext, useState} from "react";

export const context = createContext();

export const Father = ({children}) => {
    const [tasks, changeTasks] = useState([])
    return (
        <div className="listPlace">
            <context.Provider value={[tasks, changeTasks]}>
                {children}
            </context.Provider>
        </div>
    )
}