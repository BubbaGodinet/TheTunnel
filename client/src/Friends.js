import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import FriendScoreBoard from './FriendScoreBoard'
import { useState } from 'react';

export default function Friends(props){
    const { index, username, id, score} = props;
    const [scoreAnchorEl, setScoreAnchorEl] = useState(null);

    
    function handleUnfriend(){
        console.log('unfriend')
        console.log(id)
        fetch('/friends', {
                method: 'DELETE',
                headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({friendee_id: id})
                })
            }
    const handleClose = () => {
        setScoreAnchorEl(null);
      };
            
    const handleScoresClick = (event) => {
        setScoreAnchorEl(event.currentTarget);
      };

    return (
        <div>
        <Divider/>
        <ListItem style={{backgroundColor: '#7f8087'}} key={index} component="div" disablePadding>
            <ListItemButton> 
                <ListItemText primary={username} secondary={`Highscore ${score}`}/>
            </ListItemButton>
            {/* <Button onClick={handleScoresClick} style={{paddingRight: '15px', color: '#F8E9FE'}}>Scores</Button> */}
            <Button onClick={handleUnfriend} style={{paddingRight: '15px', color: '#F8E9FE'}}>Unfriend</Button>
        </ListItem>
        <FriendScoreBoard handleClose={handleClose} scoreAnchorEl={scoreAnchorEl}/>
        </div>
    )
}