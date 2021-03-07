const Discord = require('discord.js')

const config = require('../config.json')
const fs = require('fs')

module.exports = {
    name: 'info',
    description: "nformatii despre server ",
    execute(message, args){
        //code goes here BRR
        let embed = new Discord.MessageEmbed()
        .setColor("#364E4A")
        .setTitle("Server Info")
        .setImage(message.guild.iconURL)
        .setDescription(`${message.guild}' - informatii`)
        .addField("+info", `afla toate comenzile de pe server`)
        .addField("+cc:", `clear la tot chatul(doar admini)`)
        .addField("+clear", `sterge un anumit nr de mesaje(doar admini)`)
        .addField("+serverinfo", `informatii despre server(in detaliu)`)
        .addField('SFW', `+sfw pt. mai multe(scrie comanda intr-un canal NSFW)`)
    message.channel.send(embed)       
    }
}



