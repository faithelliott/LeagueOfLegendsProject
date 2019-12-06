import React from 'react';
import './MatchHistory.css';
import Card from 'react-bootstrap/Card'

console.log("render");


 

    const MatchHistory = ({ history }) => {
     
     
     
    
      return (
        <div>
          <p>
      {history.map(hist => (
       <Card>
         <img src={'img\\'+hist.lane+'.png'}></img>
        <li key={hist.gameId}>
        <h5 className="card-title1">Lane:{hist.lane}</h5> 
         <h5 className="card-title1">Role:{hist.role}</h5> 
         <h5 className="card-title1">Champion:{hist.champion}</h5> 
        </li>
        </Card>
      ))}
     
    </p> 
        </div>
       
      )
    };

   
    export default MatchHistory;
  