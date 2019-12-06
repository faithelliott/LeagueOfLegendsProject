import React, { Component } from 'react';
import './Home.css';
import Summoners from './Components/Summoners';
import AkaliData from './Components/AkaliData';
import Welcome from 'react-welcome-page';
import axios from 'axios';
import MatchHistory from './Components/MatchHistory';




export default class Pokemon extends Component{
  
 
constructor(props){
  super(props);
  this.state={
    name:'feith',
    Akali:'',
    akalidata:'X8vyDQhQqh9yDMXs_7hmBDCUgkxITCWc-JAUCF6ycMeIJhU',
    accountId:'ztnEnzEskFKqaPwHeWoX82dai6snEUcwaA3qYOgubUTsfJU',
    Match:[],
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

  async componentDidMount(){

  //summoner info
await  fetch(this.state.url+'user/'+this.state.name)
  .then(res => res.json())
  .then((data)=>{
    this.setState({name: data})
  })
 this.setState({akalidata: this.state.name.id}) 
 this.setState({username: this.state.name.name})
 this.setState({accountId:this.state.name.accountId})
 console.log('accid:'+this.state.accountId);
  //akali data
 await axios.get(this.state.url+'user/'+this.state.username+'/'+this.state.akalidata).then(response => this.setState({Akali:response.data}));
  //get match history
 await axios.get(this.state.url+'match/'+this.state.username+'/'+this.state.accountId).then(response => this.setState({Match: response.data['matches']}));
  console.log(this.state.Match);


}


 search = (e) => {
  console.log(e.key);
  console.log(e.target.value);
  if(e.key === 'Enter'){
    this.setState({searchString: e.target.value}, () => {
      fetch(this.state.url+'user/'+this.state.searchString)
      .then(res => res.json())
      .then((data)=>{
        this.setState({name: data})
        this.setState({akalidata:this.state.name.id}) 
        this.setState({username: this.state.searchString})
        this.setState({accountId:this.state.name.accountId})
        axios.get(this.state.url+'user/'+this.state.username+'/'+this.state.akalidata).then(response => this.setState({Akali:response.data}))
        axios.get(this.state.url+'match/'+this.state.username+'/'+this.state.accountId).then(response => this.setState({Match: response.data['matches']}))
        console.log(this.state.Match);
      }).catch(console.log)
    }) 
  }
};






render() {
  
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

     <div className="navpad">
      <input className="searchbar" type="text"  placeholder="Search Summoner" onKeyDown={this.search}></input>    
      
      <Summoners summoners={this.state.name}></Summoners>
      <AkaliData akalidata={this.state.Akali}></AkaliData>
 
      
     <MatchHistory history={this.state.Match}></MatchHistory>
     </div>
         
  </div>
  )
}
}


