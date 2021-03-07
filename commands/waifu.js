
const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");
const prefix = require('../config.json')
module.exports = {
  name: 'waifu',
  description: "waifu pic ",
  async execute(message, args){
      //code goes here BRR
    console.log(neko.sfw.waifu())
    let url = await neko.sfw.waifu()
    message.channel.send(url.url)
  }
}
  