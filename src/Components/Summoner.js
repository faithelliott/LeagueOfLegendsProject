import React from 'react';



var request = require("request");
var apikey = '?api_key=RGAPI-4054af44-ed9b-4b81-a7f9-bc34a64dc457';
var user = 'feith';

//Riot Api Request
request({
  url: 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + user + apikey,
  json: true,
},function(error,response,body){
  if(!error && response.statusCode === 200){
    //gets details of the User
    var toParse = body;
    var name = toParse.name;
    var icon = toParse.profileIconId;
    var level = toParse.summonerLevel;

    console.log('Name: ' + name);
    console.log('IconID: '+ icon);
    console.log('Level: ' + level);
    
  }
 
 
})

    
  



