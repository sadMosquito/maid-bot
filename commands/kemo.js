
const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");
const prefix = require('../config.json')
module.exports = {
  name: 'kemo',
  description: "kemo pic",
  async execute(message, args){
      //code goes here BRR
    console.log(neko.sfw.kemonomimi())
    let url = await neko.sfw.kemonomimi();
    message.channel.send(url.url)
  }
}
  