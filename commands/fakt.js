
const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");
const prefix = require('../config.json')
module.exports = {
  name: 'fact',
  description: "random fact",
  async execute(message, args){
      //code goes here BRR
    console.log(neko.sfw.fact())
    let url = await neko.sfw.fact()
    message.channel.send(url.url)
  }
}
  