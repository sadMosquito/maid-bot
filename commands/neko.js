
const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");
const prefix = require('../config.json')
const {nsfw} = new client();
module.exports = {
  name: 'neko',
  description: "random neko pic",
  async execute(message, args){
      //code goes here BRR
    console.log(neko.sfw.neko())
    let url = await neko.sfw.neko()
    message.channel.send(url.url)
  }
}