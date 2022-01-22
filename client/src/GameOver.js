import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import './GameOver.css';
import {ScoreContext} from './context/scoreState'
import {useContext} from 'react'
import ScoreBoard from './ScoreBoard'

export default function GameOver() {
    const rootRef = React.useRef(null);
    const {score, setScore} = useContext(ScoreContext)
    console.log(score)
    return (
      <>
      
        <Modal
        //   disablePortal
          disableEnforceFocus
          disableAutoFocus
          open
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          sx={{
            display: 'flex',
            p: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          container={() => rootRef.current}
        >
          <Box
            sx={{
              position: 'relative',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: (theme) => theme.shadows[5],
              p: 4,
            }}
          >
            <Typography id="server-modal-title" variant="h6" component="h2">
              GAME OVER
            </Typography>
            <Typography id="server-modal-description" sx={{ pt: 2 }}>
              You were obliterated by the cubefield. 
                <br/>
              Score: {score}
                <br/>
              Would you like to play again?
                <br/>
                <br/>
              <Button as={Link} to={`/game`} style={{textDecoration: 'none', backgroundColor: '#F8E9FE'}} variant='contained'> Play Again </Button>
              <Button as={Link} to={`/start`} style={{textDecoration: 'none', backgroundColor: '#F8E9FE', marginLeft: '63px'}} variant='contained'> Go to the Hub </Button>
            </Typography>
            <br/>
        <ScoreBoard/>
          </Box>
        </Modal>
      
        </>
    );
  }