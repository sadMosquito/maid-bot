const Discord = require('discord.js')

const config = require('../config.json')

const fs = require('fs')
module.exports = {
    name:'sfw',
    description: 'informatii ultile despre comenzile SFW',
    execute(message, args){
        //code goes here BRR
        let embed = new Discord.MessageEmbed()
        .setColor("#ffc0cb")
        .setTitle("Comenzi SFW")
        .setImage(message.guild.iconURL)
        .setDescription(`${message.guild}' - pictures`)
        .addField("meow", `Meow pic😸`)
        .addField("hug", `Mica imbratisare💕`)
        .addField("kiss",`mic pupic 😘`)
        .addField("kemo", `kemonomimi pic`)
        .addField("neko", `pisicuta 😘😺`)
        .addField("pat", `cu totii ne-am dori asta..`)
        .addField("waifu", `get a waifu pic`)
        .setFooter("nu uita sa incluzi prefixul **>**")
    message.channel.send(embed)       
        }
    }
        

