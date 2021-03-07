
const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");
const prefix = require('../config.json')
module.exports = {
  name: 'pat',
  description: "pat neko gif ig ",
  async execute(message, args){
      //code goes here BRR
    console.log(neko.sfw.pat())
    let url = await neko.sfw.pat();
    message.channel.send(url.url)
  }
}
  