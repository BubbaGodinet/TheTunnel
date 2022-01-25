import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

export default function AddFriends(props){
    const { index, style, username, id} = props;

    function handleFriendsClick(e){
        console.log('friend')
        console.log(id)
        fetch('/friends', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({friendee_id: id})
        })
    }

    return (
        <div>
        <Divider/>
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton> 
                <ListItemText style={{color: 'gray'}}primary={username}/>
            </ListItemButton>
            <Button onClick={handleFriendsClick} style={{paddingRight: '15px', color: 'pink'}}>Add Friend</Button>
        </ListItem>
        </div>
    )
}