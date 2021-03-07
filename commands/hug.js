
const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");
const prefix = require('../config.json')
module.exports =  {
  name: "hug",
  description: "hug random de la o fata anime",
  async execute(message, args){
      //code goes here BRR
    console.log(neko.sfw.hug());
    let url = await neko.sfw.hug();
    message.channel.send(url.url)
  
  
  }
}
  
  


