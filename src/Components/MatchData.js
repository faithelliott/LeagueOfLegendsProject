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
            </Card>
    
      </div> 
   )
}

      export default MatchData;