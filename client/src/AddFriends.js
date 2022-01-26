import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import {MyFriendsContext} from './context/myFriendsState'
import { useContext } from 'react'

export default function AddFriends(props){
    const {myFriends, setMyFriends} = useContext(MyFriendsContext)
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
        .then(response => response.json())
        .then(friend => setMyFriends([friend, ...myFriends]))
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