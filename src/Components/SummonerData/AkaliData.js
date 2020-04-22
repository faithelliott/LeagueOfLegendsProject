import React from 'react';
import Card from 'react-bootstrap/Card';
import './AkaliData.css'
 
const AkaliData = ({ akalidata }) => {
  
var level = akalidata.championLevel;
var imgurl = 'img\\mastery7.png';
if(level === 7){
  imgurl = 'img\\mastery7.png'

}else if (level ===6){
  imgurl ='img\\mastery6.png'

}else if (level ===5){
  imgurl ='img\\mastery5.png'

}else if(level === 4){
  imgurl ='img\\mastery4.png'

}else if(level === 3){
  imgurl ='img\\mastery3.png'

}else if (level ===2){
  imgurl ='img\\mastery2.png'

}else if(level ===1){
  imgurl ='img\\mastery1.png'

}else if (level ===0){
  imgurl ='img\\mastery1.png'

}

      return (
        <div>
          <p>
            <Card className='akaliCard'>
              <div className = 'cardDiv'>
              <img src={imgurl} id='asd' />
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
  