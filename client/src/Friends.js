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
        <ListItem style={{backgroundColor: 'white'}} key={index} component="div" disablePadding>
            <ListItemButton> 
                <ListItemText style={{color: 'gray'}} primary={username} secondary={`Highscore ${score}`}/>
            </ListItemButton>
            {/* <Button onClick={handleScoresClick} style={{paddingRight: '15px', color: '#dd87dc'}}>Scores</Button> */}
            <Button onClick={handleUnfriend} style={{paddingRight: '15px', color: '#dd87dc'}}>Unfriend</Button>
        </ListItem>
        <FriendScoreBoard handleClose={handleClose} scoreAnchorEl={scoreAnchorEl}/>
        </div>
    )
}