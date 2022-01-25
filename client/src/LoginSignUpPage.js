import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import logo from './assets/finalloginlogo.gif'
import './App.css';    

export default function LoginSignupPage({handleLoginClick, handleSignUpClick, setLoginAnchorEl, setSignUpAnchorEl, loginAnchorEl, setUser, signUpAnchorEl}) {
    
    const handleLoginClose = () => {
        setLoginAnchorEl(null);
      };
      
      const handleSignUpClose = () => {
        setSignUpAnchorEl(null);
      };

    return(
        <div>
         <img src={logo} width="500" height="500" style={{display:'block', margin:'0 auto', textAlign:'center'}}/>
         {/* <h1>The Tunnel</h1> */}
        <Stack spacing={3} direction="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={handleLoginClick} style={{backgroundColor: '#F8E9FE', color: 'gray'}} variant='contained'>Login</Button>
        <Button onClick={handleSignUpClick} style={{backgroundColor: '#F8E9FE', color: 'gray'}} variant='contained'>SignUp</Button>
        </Stack>
        <LoginForm loginAnchorEl={loginAnchorEl} handleLoginClose={handleLoginClose} setUser={setUser}/>
        <SignUpForm signUpAnchorEl={signUpAnchorEl} handleSignUpClose={handleSignUpClose} setUser={setUser}/>
        </div>
    )
}