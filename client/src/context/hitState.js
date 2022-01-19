import {createContext, useState } from 'react'

const HitContext = createContext();

function HitProvider({children}){
    const [hit, setHit] = useState(null)
    return <HitContext.Provider value={{hit, setHit}}>{children}</HitContext.Provider>
}

export {HitContext, HitProvider}