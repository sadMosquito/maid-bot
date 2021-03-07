const Discord = require('discord.js')

const config = require('../config.json')
const fs = require('fs')
module.exports = {
    name: 'serverinfo',
    description: "informatii despre server in detaliu la obiect",
    execute(message, args){ 

    //some basic embed
    let embed = new Discord.MessageEmbed()
    .setColor("#ffc0cb")
    .setTitle("Server Info")
    .setImage(message.guild.iconURL)
    .setDescription(`${message.guild}' - informatii`)
    .addField("Owner", `Ownerul este ${message.guild.owner}`)
    .addField("Member Count", `acest server are **${message.guild.memberCount}** membrii`)
    .addField("Emoji Count", `acest server are **${message.guild.emojis.cache.size}** emojii`)
    .addField("Roles Count", `acest server are **${message.guild.roles.cache.size}** roluri`)
message.channel.send(embed)
}
}
