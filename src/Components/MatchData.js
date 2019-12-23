import React from 'react';
import './MatchHistory.css';
import Card from 'react-bootstrap/Card';

const MatchData = ({ datas }) => {

  return (
        <div>
            <Card>
              <h5 className="card-title">Full Match data test Pull...</h5>
              <h5 className="card-title">Lane:{datas.platformId}</h5> 
              <h5 className="card-title">MapId:{datas.mapId}</h5>
              <h5 className="card-title">Mode: {datas.gameMode}</h5>
              <h5 className="card-title">Duration: {datas.gameDuration}</h5>
              <h5 className="card-title">SeasonId: {datas.seasonId}</h5>
              <h5 className="card-title">Version: {datas.gameVersion}</h5>
              <h5 className="card-title">Type: {datas.gameType}</h5>
              <h5 className="card-title">Team Data: players, bans, etc</h5>
              <h5 className="card-title">Participant info: champ, KDA, etc</h5>
            </Card>
  
      </div> 
   )
}

      export default MatchData;