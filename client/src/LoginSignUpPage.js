import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
    

export default function LoginSignupPage({handleLoginClick, handleSignUpClick, setLoginAnchorEl, setSignUpAnchorEl, loginAnchorEl, setUser, signUpAnchorEl}) {
    
    const handleLoginClose = () => {
        setLoginAnchorEl(null);
      };
      
      const handleSignUpClose = () => {
        setSignUpAnchorEl(null);
      };

    return(
        <div>
        <h1 style={{textAlign: 'center'}}>The Tunnel</h1>
        <Stack spacing={1} direction="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={handleLoginClick} style={{backgroundColor: '#F8E9FE', color: 'black'}} variant='contained'>Login</Button>
        <Button onClick={handleSignUpClick} style={{backgroundColor: '#F8E9FE', color: 'black'}} variant='contained'>SignUp</Button>
        </Stack>
        <LoginForm loginAnchorEl={loginAnchorEl} handleLoginClose={handleLoginClose} setUser={setUser}/>
        <SignUpForm signUpAnchorEl={signUpAnchorEl} handleSignUpClose={handleSignUpClose} setUser={setUser}/>
        </div>
    )
}