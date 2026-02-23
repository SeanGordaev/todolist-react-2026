import React, {createContext, useState} from "react";

export const context = createContext();

export const Father = ({children}) => {
    const [tasksInfo, changeTasks] = useState([]);

    return (
        <div className="listPlace">
            <context.Provider value={[tasksInfo, changeTasks]}>
                {children}
            </context.Provider>
        </div>
    )
}