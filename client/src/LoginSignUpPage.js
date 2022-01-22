import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import logo from './assets/The Tunnel.gif'
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
         {/* <img src={logo} width="700" height="700" style={{display:'block', margin:'0 auto', textAlign:'center'}}/> */}
         <h1>The Tunnel</h1>
        <Stack spacing={1} direction="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={handleLoginClick} style={{backgroundColor: '#F8E9FE', color: 'black'}} variant='contained'>Login</Button>
        <Button onClick={handleSignUpClick} style={{backgroundColor: '#F8E9FE', color: 'black'}} variant='contained'>SignUp</Button>
        </Stack>
        <LoginForm loginAnchorEl={loginAnchorEl} handleLoginClose={handleLoginClose} setUser={setUser}/>
        <SignUpForm signUpAnchorEl={signUpAnchorEl} handleSignUpClose={handleSignUpClose} setUser={setUser}/>
        </div>
    )
}