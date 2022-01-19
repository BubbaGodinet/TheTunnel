import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function Scores(props){
    const { index, style, score, user} = props;

    return (
        <div>
        <Divider/>
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton> 
                <ListItemText primary={user} secondary={score} />
            </ListItemButton>
        </ListItem>
        </div>
    )
}