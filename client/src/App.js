import './App.css';
import { useState, useEffect } from 'react'
import LoginSignUpPage from './LoginSignUpPage';
import StartPage from './StartPage'
// import {Box} from 'drei'



function App() {
  const [loginAnchorEl, setLoginAnchorEl] = useState(null);
  const [signUpAnchorEl, setSignUpAnchorEl] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setUser(user))
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
    <StartPage />
    {/* <LoginSignUpPage handleSignUpClick={handleSignUpClick} handleLoginClick={handleLoginClick}  setLoginAnchorEl={setLoginAnchorEl} setSignUpAnchorEl={setSignUpAnchorEl} loginAnchorEl={loginAnchorEl} signUpAnchorEl={signUpAnchorEl} setUser={setUser} /> */}
    </>
  )
}
 
  

export default App;

        
