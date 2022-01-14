import './StartPage.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'

export default function StartPage() {
    return(
        <div style={{backgroundRepeat: 'no-repeat', backgroundImage: 'https://cdn.pixabay.com/photo/2017/06/21/09/24/retro-2426631_1280.png'}}>
        <h1>Welcome, Bubba</h1>
        <h2>Are you ready to enter the Tunnel?</h2>
        <Stack spacing={1} direction="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button variant='outlined' style={{color: 'pink', border: '1px solid pink'}}>Start</Button>
        </Stack>
        </div>
    )
}