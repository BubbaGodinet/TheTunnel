import { useFrame } from "@react-three/fiber"
import { useState, useEffect, useContext } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { FixedSizeList } from 'react-window';
import Scores from "./Scores";
import {UserScoresContext} from './context/userscoreState'


export default function ScoreBoard(props) {
// const {userScores, setUserScores} = useContext(UserScoresContext)
const [userScores, setUserScores] = useState([])

useEffect(() => {
    fetch ('/scores')
    .then(res => res.json())
    .then(score => {
        setUserScores(score)
    })
}, [])

    const sortedScores = userScores.sort((a,b) => b.score - a.score)
    const highScores = sortedScores.map(userScore => <Scores score = {userScore.score} user={userScore.user.username}/>)

    return (
        <Box
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <h1>Highscores</h1>
          <List style={{width: '100%',
        maxWidth: 360,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300, 
        backgroundColor: 'white', 
        color: 'white'}}>
            {highScores}
          </List>
        </Box>
      );
    }