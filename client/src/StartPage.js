import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'
import FriendSearch from './FriendSearch'
import FriendsList from './FriendsList'
import logo from './assets/finalwelcome.gif'

export default function StartPage({setUser, user}) {

    function handleLogout(e) {
        console.log(e)
        clickAudio.play()
        fetch("/logout", {method: "DELETE"})
        .then((res) => {
          if (res.ok) {
            setUser(null)
          }
        })
      }
      
      let clickAudio = new Audio('/sci-click.wav')
      function handleClickAudio() {
        clickAudio.play()
      }

    return(
        <div style={{paddingTop: 200}}>
        <img src={logo} alt='welcome' width="300" height="300" style={{display:'block', margin:'0 auto', textAlign:'center'}}/>
        {/* <h1 style={{color: "black"}}>Welcome, {user}</h1>
        <h2 style={{color: "black"}}>Are you ready to enter the Tunnel?</h2> */}
        <Stack spacing={1} direction="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={handleClickAudio} as={Link} to={`/game`} variant='contained' style={{color: 'gray', backgroundColor: '#F8E9FE', border: '1px solid #F8E9FE', textDecoration: 'none'}}>Start</Button>
        </Stack>
        <FriendSearch />
        <FriendsList />
        <Button onClick={handleLogout} variant='contained' style={{color: 'gray', backgroundColor: '#F8E9FE', border: '1px solid #F8E9FE', textDecoration: 'none',position: 'absolute', bottom: '20px', right: '20px'}}>Logout</Button>
        </div>
    )
}