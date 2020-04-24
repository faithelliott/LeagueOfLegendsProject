import React from 'react';
import Card from 'react-bootstrap/Card';
import './AkaliData.css'
 
const AkaliData = ({ akalidata }) => {
      return (
        <div>
          <p>
            <Card className='akaliCard'>
              <div className = 'cardDiv'>
              <img src={'img\\mastery'+akalidata.championLevel+'.png'} id='asd' />
                <div className="card-text">
                  <h5 className="card-title">Mastery Level: {akalidata.championLevel}</h5>
                  <h5 className="card-title">Points: {akalidata.championPoints}</h5>
                </div>
              </div>
             </Card>
          </p> 
        </div>
       
      )
    };

   
    export default AkaliData;
  