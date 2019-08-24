import React from 'react'

console.log("render");

    const Summoners = ({ summoners }) => {
      return (
        <div>
          <center><h1>Summoner</h1></center>
            
            <div className="card">
              <div className="card-body">
                <img src={'http://ddragon.leagueoflegends.com/cdn/9.16.1/img/profileicon/'+summoners.profileIconId +'.png'}/>
                <h5 className="card-title">Name: {summoners.name}</h5>
                <h5 className="card-title">Level: {summoners.summonerLevel}</h5>
                <h5 className="card-title">Icon #: {summoners.profileIconId}</h5>
              </div>
            </div>
        </div>
      )
    };

    export default Summoners