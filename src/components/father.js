import React, {createContext, useState} from "react";

export const context = createContext();

export const Father = ({children}) => {
    const [tasks, changeTasks] = useState([]);
    const [done, setDone] = useState(0);
    return (
        <div className="listPlace">
            <context.Provider value={[tasks, changeTasks, done, setDone]}>
                {children}
            </context.Provider>
        </div>
    )
}