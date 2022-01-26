import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ScoreProvider } from './context/scoreState'
import { UserScoresProvider } from './context/userscoreState'
import { HitProvider } from './context/hitState'
import { MyFriendsProvider } from './context/myFriendsState'


ReactDOM.render(
    <HitProvider>
    <MyFriendsProvider>
    <ScoreProvider>
    <UserScoresProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserScoresProvider>
    </ScoreProvider>
    </MyFriendsProvider>
    </HitProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
