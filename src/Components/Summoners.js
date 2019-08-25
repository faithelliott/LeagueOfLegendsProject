import React from 'react'
import './Summoner.css'

console.log("render");

    const Summoners = ({ summoners }) => {
      return (
        <div className="header">
          <center><h1>Summoner</h1></center>
            <div className="card">
              <div className="card-body"><img src={'http://ddragon.leagueoflegends.com/cdn/9.16.1/img/profileicon/'+summoners.profileIconId +'.png'}/>
               <svg height="150" width="150">
               
            <circle cx="50" cy="50" r="50" ><animate attributeName="stroke" values="red;blue;red" dur="10s" repeatCount="indefinite" /></circle>
           </svg> 
           <img src="img/blade2.png" className="rotate" width="150" height="150"></img>
                
              
                

                <h5 className="card-title">Name: {summoners.name}</h5>
                <h5 className="card-title">Level: {summoners.summonerLevel}</h5>
                <h5 className="card-title">Icon #: {summoners.profileIconId}</h5>
              </div>
            </div>
        </div>
      )
    };

    export default Summoners