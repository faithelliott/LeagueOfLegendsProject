import React from 'react';
import './Summoner.css';
import Card from 'react-bootstrap/Card'

console.log("render");


 

    const Summoners = ({ summoners }) => {
   console.log('https://polar-hollows-37538.herokuapp.com/'+summoners.name+'/'+summoners.id);


      return (
        <div>
          <p>
            <Card>
                <img src={'http://ddragon.leagueoflegends.com/cdn/9.23.1/img/profileicon/'+summoners.profileIconId +'.png'} className="size"/>
                <div className="card-text">
                  <h5 className="card-title">Name: {summoners.name}</h5>
                  <h5 className="card-title">Level: {summoners.summonerLevel}</h5>
                  <h5 className="card-title">Icon #: {summoners.profileIconId}</h5>
                  <h5 className="card-title">Encrypted ID: {summoners.id}</h5>
                </div>
             </Card>
             {/*<img src="img/blade2.png" className="rotate" width="150" height="150"></img> */}</p> 
        </div>
       
      )
    };

   
    export default Summoners;
  