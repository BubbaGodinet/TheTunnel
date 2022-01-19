import {createContext, useState } from 'react'

const UserScoresContext = createContext();

function UserScoresProvider({children}){
    const [userScores, setUserScores] = useState([])
    return <UserScoresContext.Provider value={{userScores, setUserScores}}>{children}</UserScoresContext.Provider>
}

export {UserScoresContext, UserScoresProvider}