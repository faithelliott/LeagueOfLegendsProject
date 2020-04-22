import React, { Component } from 'react';
import ArtPage from './Components/ArtPage';
import RegisterPage from './Components/Register/UserRegister'
import Toolbar from "./Components/Toolbar/Toolbar";
import BottomBar from "./Components/Toolbar/BottomBar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from './Components/Backdrop/Backdrop';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

class App extends Component {
  
 
constructor(props){
  super(props);
  this.state={
    name:'feith',
    Akali:'',
    akalidata:'X8vyDQhQqh9yDMXs_7hmBDCUgkxITCWc-JAUCF6ycMeIJhU',
    username:'feith',
    level:'',
    icon:'',
    searchString:'',
    //url:'https://kaynmainsbackend.herokuapp.com/api/riot/summoner/',
    url:'https://polar-hollows-37538.herokuapp.com/',
    profileUrl: 'http://ddragon.leagueoflegends.com/cdn/9.23.1/img/profileicon/',
    sideDrawerOpen: false,
  }
}


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
    
    <Router>
        <Route exact path ="/" component ={Home}/>
        <Route exact path="/art" component={ArtPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <BottomBar/>
    </Router>
  )
}
}

export default App;
