import React from 'react';

import Card from 'react-bootstrap/Card'

console.log("render");


 

    const akaliData = ({ akalidata }) => {
  


      return (
        <div>
          <p>
            <Card>
                <div className="card-text">
                  <h5 className="card-title">Mastery Level: {akalidata.championLevel}</h5>
                  <h5 className="card-title">Points: {akalidata.championPoints}</h5>
                </div>
             </Card>
             {/*<img src="img/blade2.png" className="rotate" width="150" height="150"></img> */}</p> 
        </div>
       
      )
    };

   
    export default akaliData;
  