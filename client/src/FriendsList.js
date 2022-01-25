
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Friends from './Friends'
import {useState, useEffect} from 'react'

export default function FriendsList(){
    const [myFriends, setMyFriends] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    useEffect(() => {
      fetch('/friends')
      .then((res) => res.json())
      .then((friends) => {
        setMyFriends(friends)
      })
    },[])

      const allFriends = myFriends.map(friend => <Friends id={friend.id} username={friend.friendee.username} score={friend.friendee.scores.map(score=> score.score).sort((a,b)=> b-a)[0]} />)

      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
    
      return (
        <div>
          <Popover
            id={id}
            open={open}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 875, left: 440 }}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
          <Box style={{backgroundColor: '#7f8087'}} 
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
          <List style={{backgroundColor: 'white', color: 'white'}}  >
            {allFriends}
          </List>
          </Box>
          </Popover>
          <Button onClick={handleClick} variant='contained' style={{color: 'gray', backgroundColor: '#F8E9FE', border: '1px solid #F8E9FE', textDecoration: 'none', position: 'absolute', bottom: '22px', left: '310px'}}>My Friends</Button>
        </div>
      );
    }