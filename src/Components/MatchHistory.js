import React from 'react';
import './Summoner.css';
import Card from 'react-bootstrap/Card'

console.log("render");


 

    const MatchHistory = ({ history }) => {
      return (
        <div>
          <p>
          <ol>
      {history.map(hist => (
        <li key={history.gameId}>{history.lane}</li>
      ))}
    </ol></p> 
        </div>
       
      )
    };

   
    export default MatchHistory;
  