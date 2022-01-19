import './StartPage.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'
import FriendSearch from './FriendSearch'

export default function StartPage({setUser, user}) {

    function handleLogout(e) {
        console.log(e)
        fetch("/logout", {method: "DELETE"})
        .then((res) => {
          if (res.ok) {
            setUser(null)
          }
        })
      }

    return(
        <div style={{backgroundRepeat: 'no-repeat', backgroundImage: 'https://cdn.pixabay.com/photo/2017/06/21/09/24/retro-2426631_1280.png'}}>
        <h1>Welcome, Bubba</h1>
        <h2>Are you ready to enter the Tunnel?</h2>
        <Stack spacing={1} direction="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button as={Link} to={`/game`} variant='outlined' style={{color: 'pink', border: '1px solid pink', textDecoration: 'none'}}>Start</Button>
        </Stack>
        <FriendSearch />
        <Button onClick={handleLogout} variant='outlined' style={{color: 'pink', border: '1px solid pink', textDecoration: 'none'}}>Logout</Button>
        </div>
    )
}