import React from 'react';
import './MatchHistory.css';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

console.log("render");


    const MatchHistory = ({ history }) => {

    const Match=[];
    var count = -1;
    var kills=0;

      return (
        <div>
          <p>
           {history.map(hist => (
             axios.get('https://polar-hollows-37538.herokuapp.com/matchdata/'+hist.gameId).then(response => (Match.push(response.data.participants))),
             console.log('https://polar-hollows-37538.herokuapp.com/matchdata/'+hist.gameId),
             console.log('get:'+axios.get('https://polar-hollows-37538.herokuapp.com/matchdata/'+hist.gameId).then(response =>(Match.push(response.data.mapId)))),
             console.log(Match),
             count+=1,
             kills=Match.indexOf(count),
             console.log('count:'+count),
            <Card>
              <img src={'img\\'+hist.lane+'.png'}></img>
              <li key={hist.gameId}>
              <h5 className="card-title1">Lane:{hist.lane}</h5> 
              <h5 className="card-title1">Role:{hist.role}</h5> 
              <h5 className="card-title1">Champion:{hist.champion}</h5> 
              <h5 className="card-title1">GameId:{hist.gameId}</h5>
              <h5 className="card-title1">Kills:{kills}</h5>
            
              </li>
            </Card>
          
      ))}
     
          </p> 
         </div>
       
      )
    };

   
    export default MatchHistory;
  