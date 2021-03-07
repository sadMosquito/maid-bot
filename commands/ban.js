const Discord = require('discord.js')

const config = require('../config.json')
const fs = require('fs')

module.exports = {
    name: 'ban',
    description: "use this command to ban users ",
    execute(message, args){
        //code goes here BRR
        const {
            member,
            mentions
        } = message
    
        const tag = `<@${member.id}>`
    
        if (
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('BAN_MEMBERS')
        ) {
            const target = mentions.users.first()
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.ban()
                message.channel.send(`${tag} acel user a fost banat cu succes!`)
            } else {
                message.channel.send(` utilizator invalid`)
            }
        } else {
            message.channel.send(
                `${tag} nu ai permisiune sa folosesti aceasta comanda.`
            )
        }
    
    }
}



