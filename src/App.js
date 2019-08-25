import React, { Component } from 'react';
import './App.css';
import Summoners from './Components/Summoners'


class App extends Component {

constructor(props){
  super(props);
  this.state={
    name:'feith',
    level:'',
    icon:'',
    searchString:'',
    apikey:'?api_key=RGAPI-7868e627-a5cb-4edf-b9cc-2aa281de42f1',
    url:'https://na1.api.ri+otgames.com/lol/summoner/v4/summoners/by-name/',
    profileUrl: 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/'
   
  }
}

componentDidMount(){
  fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+this.state.name+this.state.apikey)
  .then(res => res.json())
  .then((data)=>{
    this.setState({name: data})
  }).catch(console.log)
}

search = (e) => {
  console.log(e.key);
  console.log(e.target.value);
  if(e.key === 'Enter'){
    this.setState({searchString: e.target.value}, () => {
      fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+this.state.searchString+this.state.apikey)
      .then(res => res.json())
      .then((data)=>{
        this.setState({name: data})
      }).catch(console.log)
    })
  }
};

render() {
  return (
    <div>
 <input type="text"  placeholder="Pokedex" onKeyDown={this.search}></input>
 <Summoners summoners={this.state.name}/>
 </div>
  )
}

}

export default App;
