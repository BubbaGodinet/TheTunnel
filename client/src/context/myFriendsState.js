import {createContext, useState } from 'react'

const MyFriendsContext = createContext();

function MyFriendsProvider({children}){
    const [myFriends, setMyFriends] = useState([])
    return <MyFriendsContext.Provider value={{myFriends, setMyFriends}}>{children}</MyFriendsContext.Provider>
}

export {MyFriendsContext, MyFriendsProvider}