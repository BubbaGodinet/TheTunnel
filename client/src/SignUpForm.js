import { useState } from 'react'
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function SignupForm({signUpAnchorEl, handleSignUpClose, setUser}){
    const open = Boolean(signUpAnchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [signUpData, setSignUpData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
  
    function handleSignUpSubmit(e){
        e.preventDefault();
        console.log(e)
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signUpData)
        })
        .then((res) => {
          if (res.ok) {
            res.json()
            .then((user) => {
              setUser(user)
            })
          } else {
            res.json()
            .then((errors) => {
              console.error(errors)
            })
          }
        })
        // console.log(e.target.value)
    }

    function handleSignUpChange(e){
        setSignUpData({...signUpData, [e.target.name]:e.target.value})
        console.log(e.target.value)
    }

    return (
        <div>
     <Popover
        id={id}
        open={open}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 600, left: 400 }}
        anchorEl={signUpAnchorEl}
        onClose={handleSignUpClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
      >
 <Box
      onSubmit={handleSignUpSubmit}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          onChange={handleSignUpChange}
          noerror
          type="text" 
          name="username"
          value={signUpData.username}
          id="outlined-error-helper-text"
          label="Username"
          // defaultValue=""
          // helperText="Invalid Username. Must be at least 4 characters long, and only use letters and numbers"
        />
        <TextField
          onChange={handleSignUpChange}
          noerror
          type="text" 
          name="email"
          value={signUpData.email}
          id="outlined-error-helper-text"
          label="Email"
          // defaultValue=""
          // helperText="Invalid Email. Email does not exist"
        />
         <TextField
          onChange={handleSignUpChange}
          noerror
          type="password" 
          name="password"
          value={signUpData.password}
          id="outlined-error-helper-text"
          label="Password"
          // defaultValue=""
          // helperText="Invalid Password. Password was incorrect"
        />
        <TextField
          onChange={handleSignUpChange}
          noerror
          type="password" 
          name="password_confirmation"
          value={signUpData.passwordConfirm}
          id="outlined-error-helper-text"
          label="Confirm Password"
          // defaultValue=""
          // helperText="Passwords do not match"
        />
        <Button
        type="submit"
        sx={{color:'#7C8988'}}
        > Sign Up </Button>
        </Box>
      </Popover>
        </div>
    )
}