import React, { Component } from 'react';
import './Home.css';
import Summoners from './Components/SummonerData/Summoners';
import AkaliData from './Components/SummonerData/AkaliData';
import axios from 'axios';
import MatchHistory from './Components/SummonerData/MatchHistory';
import Collapsible from 'react-collapsible';
import Card from 'react-bootstrap/Card';
import MatchData from './Components/SummonerData/MatchData';

export default class Home extends Component{
   
constructor(props){
  super(props);
  this.state={
    name:'feith',
    Akali:'',
    akalidata:'X8vyDQhQqh9yDMXs_7hmBDCUgkxITCWc-JAUCF6ycMeIJhU',
    accountId:'ztnEnzEskFKqaPwHeWoX82dai6snEUcwaA3qYOgubUTsfJU',
    Match:[],
    gameid:[],
    Matchdata:[],
    MatchData2:[],
    gamedata:[],
    username:'feith',
    level:'',
    icon:'',
    searchString:'',
    //url:'https://kaynmainsbackend.herokuapp.com/api/riot/summoner/', Chris' backend URL
    url:'https://polar-hollows-37538.herokuapp.com/',
    profileUrl: 'http://ddragon.leagueoflegends.com/cdn/9.23.1/img/profileicon/',
    sideDrawerOpen: false,
  }
}

  async componentDidMount(){

    //summoner info
    await  fetch(this.state.url+'user/'+this.state.name).then(res => res.json()).then((data)=>{this.setState({name: data})})
    console.log(this.state.name);
    await this.setState({akalidata: this.state.name.id}) 
    await this.setState({username: this.state.name.name})
    await this.setState({accountId:this.state.name.accountId})

    //akali data
    await axios.get(this.state.url+'user/'+this.state.username+'/'+this.state.akalidata).then(response => this.setState({Akali:response.data}));

    //get match history
    await axios.get(this.state.url+'match/'+this.state.username+'/'+this.state.accountId).then(response => this.setState({Match: response.data['matches']}));
    await this.setState({gameid: this.state.Match.gameId})
 
    // Grabs gameId for each match, and puts it in an array then grabs match data from game id.
    const MatchArray = [];
    await this.state.Match.map(async data =>
      {await MatchArray.push(data.gameId)},
      )
    await this.setState({MatchData2: MatchArray});
  
    const gamearray = [];
    for(var i =0; i<this.state.MatchData2.length;i++){
        await axios.get(this.state.url+'matchdata/'+this.state.MatchData2[i]).then(response => this.setState({gamedata: response.data}));
        await gamearray.push(await this.state.gamedata);
    }
    await this.setState({gamedata2: (JSON.parse(JSON.stringify((gamearray))))});
    await this.setState({gamedata: (JSON.parse(JSON.stringify(this.state.gamedata)))})
    this.state.gamedata = JSON.parse(JSON.stringify(this.state.gamedata));
}

 search = (e) => {
  if(e.key === 'Enter'){
    this.setState({searchString: e.target.value}, () => {
      fetch(this.state.url+'user/'+this.state.searchString)
      .then(res => res.json())
      .then((data)=>{
        this.setState({name: data})
        this.setState({akalidata:this.state.name.id}) 
        this.setState({username: this.state.searchString})
        this.setState({accountId:this.state.name.accountId})
        axios.get(this.state.url+'user/'+this.state.username+'/'+this.state.akalidata).then(response => this.setState({Akali:response.data}));
        axios.get(this.state.url+'match/'+this.state.username+'/'+this.state.accountId).then(response => this.setState({Match: response.data['matches']}));
        this.setState({gameid: this.state.Match.gameId});
      }).catch(console.log)
    }) 
  }
};

//Only displays if user has akali games played. Else display No games played.
displayMatches(){
  if(this.state.Match!==undefined||this.state.Match!=null){
    return <MatchHistory history={this.state.Match}></MatchHistory>;
  }else{
    return <Card>No Akali games found</Card>
  }
}

displayData(){
  if(this.state.gamedata!==undefined||this.state.gamedata!==null){
    return <MatchData datas={this.state.gamedata}></MatchData>
  }else{
    return <Card>error</Card>
  }
}

render() {
  return (
  <div style={{height: '100%'}}>
     <div className="navpad">
        <input className="searchbar" type="text"  placeholder="Search Summoner" onKeyDown={this.search}></input> 
       
        <div className = 'content'>  
         <div className = 'pad'> </div>
          <div className = "account">
            <Summoners summoners={this.state.name}></Summoners>
            <AkaliData akalidata={this.state.Akali}></AkaliData>
          </div>
          <div className = 'top'>
            {this.displayMatches()}     
          </div>
          <div className = 'pad'> </div>
        </div>
     </div> 
  </div>
  )
}
}



