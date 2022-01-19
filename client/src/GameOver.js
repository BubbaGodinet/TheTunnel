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
      <Box
        sx={{
          height: 300,
          flexGrow: 1,
          minWidth: 300,
          transform: 'translateZ(0)',
          // The position fixed scoping doesn't work in IE11.
          // Disable this demo to preserve the others.
          '@media all and (-ms-high-contrast: none)': {
            display: 'none',
          },
        }}
        ref={rootRef}
      >
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
              <Button as={Link} to={`/game`} style={{textDecoration: 'none', backgroundColor: 'pink'}} variant='contained'> Play Again </Button>
            </Typography>
          </Box>
        </Modal>
      </Box>
        <ScoreBoard/>
        </>
    );
  }