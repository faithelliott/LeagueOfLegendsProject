import React, { Component } from 'react';
import './App.css';
import Summoners from './Components/Summoners';
import AkaliData from './Components/AkaliData';
import Toolbar from "./Components/Toolbar/Toolbar";
import BottomBar from "./Components/Toolbar/BottomBar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from './Components/Backdrop/Backdrop';
import Welcome from 'react-welcome-page';






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

 componentDidMount(){

  //summoner info

  
  console.log(this.state.url+this.state.name);
  fetch(this.state.url+this.state.name)
  .then(res => res.json())
  .then((data)=>{

    this.setState({name: data})
   
  })

 this.setState({akalidata:this.state.name.id}) 
 this.setState({username: this.state.name.name})


  //akali data
   console.log(this.state.url+this.state.username+'/'+this.state.akalidata);
   fetch(this.state.url+this.state.username+'/'+this.akalidata)
   .then(res => res.json())
   .then((data)=>{
     this.setState({Akali: data})
     
   })
   console.log(this.state.Akali);

}


search = (e) => {
  console.log(e.key);
  console.log(e.target.value);
  if(e.key === 'Enter'){
    this.setState({searchString: e.target.value}, () => {
      fetch(this.state.url+this.state.searchString)
      .then(res => res.json())
      .then((data)=>{
        this.setState({name: data})
        this.setState({akalidata:this.state.name.id}) 
        this.setState({username: this.state.searchString})
 console.log(this.state.username);
 console.log(this.state.name.id);
      }).catch(console.log)
    })

 //akali data
 console.log(this.state.url+this.state.username+'/'+this.state.akalidata);
 fetch(this.state.url+this.state.username+'/'+this.akalidata)
 .then(res => res.json())
 .then((data)=>{
   this.setState({Akali: data})
   
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
    <Welcome
		loopDuration={1000}
		data={[
		{
		image: require('./imgs/blade12.png'),
		text: 'You are entering Akali Mains',
		imageAnimation: 'rotate',
		backgroundColor: '#001b36',
    textColor: '#ffffff',
    
  
		},
		{
    backgroundColor: '#001b36',
    image: require('./imgs/blade12.png'),
    imageAnimation: 'rotate',
    text: 'You are entering Akali Mains',
    textColor: '#ffffff',
    textAnimation:"none",
		},
		{
    backgroundColor: '#001b36',
    imageAnimation: 'rotate',
		image: require('./imgs/blade12.png'),
    text: 'You are entering Akali Mains',
    textColor: '#ffffff',
    textAnimation:"none",
    }
    ,
		{
    backgroundColor: '#400109',
    image: require('./imgs/blade12.png'),
    imageAnimation: 'rotate',
    text: 'You are entering Akali Mains',
    textColor: '#ffffff'
		},
		{
    backgroundColor: '#400109',
    image: require('./imgs/blade12.png'),
    imageAnimation: 'rotate',
    text: 'You are entering Akali Mains',
    textColor: '#ffffff',
    textAnimation:"none",
    },{
    backgroundColor: '#400109',
    image: require('./imgs/blade12.png'),
    imageAnimation: 'rotate',
    text: 'You are entering Akali Mains',
    textColor: '#ffffff',
    textAnimation:"none",
		}
	]}
/>
    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
    <SideDrawer show={this.state.sideDrawerOpen}/>
    {backdrop}
     <div className="navpad">
      <input className="searchbar" type="text"  placeholder="Search Summoner" onKeyDown={this.search}></input>    
        <Summoners summoners={this.state.name}></Summoners>
        
     </div>
     <AkaliData akalidata={this.state.Akali}></AkaliData>
     <BottomBar/>
 </div>


  )
}
}

export default App;
