import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import AddFriends from './AddFriends'
import {useState} from 'react'

export default function SearchContainer({searchAnchorEl, setSearchAnchorEl, handleClose, searchedUsers}){
    
      const allUsers = searchedUsers.map(user => <AddFriends id={user.id} username={user.username} />)

      const open = Boolean(searchAnchorEl);
      const id = open ? 'simple-popover' : undefined;
    
      return (
        <div>
          <Popover
            id={id}
            open={open}
            anchorEl={searchAnchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
          <Box
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
          <List>
            {allUsers}
          </List>
          </Box>
          </Popover>
        </div>
      );
    }