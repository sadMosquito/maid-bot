
const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");
const prefix = require('../config.json')
module.exports = {
  name: 'meow',
  description: "meow UwU",
  async execute(message, args){
      //code goes here BRR

    console.log(neko.sfw.meow());
    let url = await neko.sfw.meow();
    message.channel.send(url.url)
  }
}
  