import React from 'react';
import './Summoner.css';
import Card from 'react-bootstrap/Card';

const MatchData = ({ datas }) => {
  return (
    <Card className = 'summCard'>
        <div className="m4">
            <Card className = 'summCard'>
              <h5 className="card-title">Mode: {datas.gameMode}</h5>
              <h5 className="card-title">Duration: {datas.gameDuration}</h5>
            </Card>  
           <div className="card2">  
            {datas.teams && datas.teams.length && datas.teams.map(data => (   
                 <Card className = 'summCard'>     
                  <h5 className="card-title">Win: {data.win}</h5>
                  <h5 className="card-title">Towers: {data.towerKills}</h5>
                  <h5 className="card-title">Dragons: {data.dragonKills}</h5>
                 </Card>
                 ))} 
                 </div>
             <div className="card2">
              {datas.participants && datas.participants.length && datas.participants.map(dat => (   
                  <Card className = 'summCard'>
                      <h2>{dat.participantId}</h2>
                      <h5>K:{dat['stats'].kills}</h5>
                      <h5>D:{dat['stats'].deaths}</h5>
                      <h5>Assits:{dat['stats'].assists}</h5>
                  </Card>
                 ))} </div>
      </div> 
      </Card>
   )
}

      export default MatchData;