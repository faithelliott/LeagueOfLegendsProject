import React from 'react';
import './MatchHistory.css';
import Card from 'react-bootstrap/Card';

const MatchHistory = ({ history }) => {

  return (
        <div>
          <p>
           {history.map( hist => (
            <Card>
              <img id="sizing" src={'img\\'+hist.lane+'.png'}></img>
              <h5 className="card-title1">Lane:{hist.lane}</h5> 
              <h5 className="card-title1">Role:{hist.role}</h5> 
              <h5 className="card-title1">Champion:{hist.champion}</h5> 
              <h5 className="card-title1">GameId:{hist.gameId}</h5>
            </Card>
      ))}}
        </p> 
      </div> 
   )
  }

      export default MatchHistory;