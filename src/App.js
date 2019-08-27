import React, { Component } from 'react';
import './App.css';
import Summoners from './Components/Summoners';
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer"
import Backdrop from './Components/Backdrop/Backdrop'

class App extends Component {

constructor(props){
  super(props);
  this.state={
    name:'feith',
    level:'',
    icon:'',
    searchString:'',
    apikey:'?api_key=RGAPI-62a7a203-04d5-42a4-8302-cc4bf5b8b62d',
    url:'https://na1.api.ri+otgames.com/lol/summoner/v4/summoners/by-name/',
    profileUrl: 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/',
    sideDrawerOpen: false,
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

drawerToggleClickHandler = () =>{
  this.setState((prevState)=>{
    return{sideDrawerOpen: !prevState.sideDrawerOpen};
  });
}

backdropClickHandler = () =>{
 this.setState({sideDrawerOpen:false});
}

render() {

  let backdrop;
  if(this.state.sideDrawerOpen){
    backdrop = <Backdrop click={this.backdropClickHandler} />
  }

  return (
  <div style={{height: '100%'}}>
    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
    <SideDrawer show={this.state.sideDrawerOpen}/>
    {backdrop}
     <div className="navpad">
      <input className="searchbar" type="text"  placeholder="Search Summoner" onKeyDown={this.search}></input>
        <Summoners summoners={this.state.name}/>
     </div>
 </div>
  )
}
}

export default App;
