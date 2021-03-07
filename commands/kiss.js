
const client = require('nekos.life');
const neko = new client();
const Discord = require("discord.js");
const prefix = require('../config.json')
module.exports = {
  name: 'kiss',
  description: "pupic random",
  async execute(message, args){
      //code goes here BRR
      var errMessage = "Incearca pe canalul corect!";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })}
    console.log(neko.sfw.kiss())
    let url = await neko.sfw.kiss();
    message.channel.send(url.url)
  }
}