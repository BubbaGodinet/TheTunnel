import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import LoginSignUpPage from './LoginSignUpPage';
import StartPage from './StartPage'
import GamePage from './GamePage'
import GameOver from './GameOver';
import ScoreBoard from './ScoreBoard'
// import {Box} from 'drei'



function App() {
  const [loginAnchorEl, setLoginAnchorEl] = useState(null);
  const [signUpAnchorEl, setSignUpAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
      }
    })
  }, [])

  function handleLoginClick(event){
    console.log('Login')
    setLoginAnchorEl(event.currentTarget)
}

function handleSignUpClick(event){
    setSignUpAnchorEl(event.currentTarget)
    console.log('Signup')
}


  return (
    <>
    <Routes>
      <Route path='/gameover' element={<GameOver />}/>
      {/* <Route path='/start' element={<StartPage setUser={setUser} user={user} />}/> */}
      <Route path='/scoreBoard' element={<ScoreBoard />}/>
      <Route path='/game' element={<GamePage user={user} />}/>
      <Route path='/' element={user ? <StartPage /> : <LoginSignUpPage handleSignUpClick={handleSignUpClick} handleLoginClick={handleLoginClick}  setLoginAnchorEl={setLoginAnchorEl} setSignUpAnchorEl={setSignUpAnchorEl} loginAnchorEl={loginAnchorEl} signUpAnchorEl={signUpAnchorEl} setUser={setUser} />}/>
    </Routes>
    </>
  )
}
 
  

export default App;

        
