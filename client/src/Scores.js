import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function Scores(props){
    const { index, score, user} = props;

    return (
        <div>
        <Divider/>
        <ListItem style={{backgroundColor: 'white', color: 'white'}} key={index} component="div" disablePadding>
            
                <ListItemText style={{backgroundColor: 'white', color: 'black'}} primary={user} secondary={score} />
            
        </ListItem>
        </div>
    )
}