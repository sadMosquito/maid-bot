const Discord = require('discord.js')

const config = require('../config.json')

const fs = require('fs')

module.exports = {
    name: 'kick',
    description: "use this command to kick a user ",
    execute(message, args){
        //code goes here BRR
        const {
            member,
            mentions
        } = message
    
        const tag = `<@${member.id}>`
    
        if (
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('KICK_MEMBERS')
        ) {
            const target = mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.kick()
                message.channel.send(`${tag}, utilizatorul a fost dat afara`)
            } else {
                message.channel.send(`${tag} te rog specifica pe cineva care sa dai afara`)
            }
        } else {
            message.channel.send(
                `${tag} nu ai permisiune sa folosesti aceasta comanda`
            )
        }
    }
}


  
