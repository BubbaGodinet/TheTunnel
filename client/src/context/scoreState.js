import {createContext, useState } from 'react'

const ScoreContext = createContext();

function ScoreProvider({children}){
    const [score, setScore] = useState(0)
    return <ScoreContext.Provider value={{score, setScore}}>{children}</ScoreContext.Provider>
}

export {ScoreContext, ScoreProvider}