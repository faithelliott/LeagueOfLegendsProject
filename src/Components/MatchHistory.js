import React from 'react';
import './Summoner.css';
import Card from 'react-bootstrap/Card'


console.log("render");



    const MatchHistory = ({ history }) => {
      return (
        <div>
          <p>
            <Card>
                <div className="card-text">
                  
                  <h5 className="card-title">Name: {history.name}</h5>
                  
                </div>
             </Card>
             {/*<img src="img/blade2.png" className="rotate" width="150" height="150"></img> */}</p> 
        </div>
       
      )
    };
   
    export default MatchHistory;