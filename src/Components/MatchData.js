import React from 'react';
import './Summoner.css';
import Card from 'react-bootstrap/Card';

const MatchData = ({ datas }) => {
  return (
        <div>    
            <Card>
              <h5 className="card-title">Full Match data test Pull...</h5>
              <h5 className="card-title">Mode: {datas.gameMode}</h5>
              <h5 className="card-title">Duration: {datas.gameDuration}</h5>
              <h5 className="card-title">Type: {datas.gameType}</h5>
            </Card>  
            {datas.teams && datas.teams.length && datas.teams.map(data => (   
                 <Card>         
                  <h5 className="card-title">TeamID: {data.teamId}</h5>
                  <h5 className="card-title">Win: {data.win}</h5>
                  <h5 className="card-title">Towers: {data.towerKills}</h5>
                  <h5 className="card-title">Dragons: {data.dragonKills}</h5>
                 </Card>
                 ))} 
              {datas.participants && datas.participants.length && datas.participants.map(dat => (   
                  <Card>         
                      <h5 className="card-title">Player: {dat.participantId}</h5>
                      <h5 className="card-title">Kills: {dat['stats'].kills}</h5>
                      <h5 className="card-title">Deaths: {dat['stats'].deaths}</h5>
                      <h5 className="card-title">Assits: {dat['stats'].assists}</h5>
                  </Card>
                 ))} 
      </div> 
   )
}

      export default MatchData;