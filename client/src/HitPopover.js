import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {HitContext} from './context/hitState'
import {useContext} from 'react';

export default function HitPopover({hit, setHit}){
    
    const handleClick = (event) => {
      setHit(event.currentTarget);
    };
  
    const handleClose = () => {
      setHit(null);
    };
  
    const open = Boolean(hit);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Open Popover
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={hit}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>Hit!</Typography>
        </Popover>
      </div>
    );
  }