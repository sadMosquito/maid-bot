const Discord = require('discord.js')

const config = require('../config.json')

const fs = require('fs')

module.exports = {
    name: 'purge',
    description: "sterge mesaje cu aceasta comanda(pana la 100) ",
    execute(message, args){
        //code goes here BRR
        const messageArray = message.content.split(' ');
        //const args = messageArray.slice(1);

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('UwU: **nu ai permisiune**');

        let deleteAmount;

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply('doar numere!')
        }

        if (parseInt(args[0]) > 100) {
            return message.reply('poti sterge doar 100 de mesaje o data!')
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`**am sters cu succes** **${deleteAmount}** de mesaje`)
    }
}
   
        


   
