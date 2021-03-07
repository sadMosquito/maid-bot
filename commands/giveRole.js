const Discord = require('discord.js')

const config = require('../config.json')
const fs = require('fs')

    module.exports = {
        name: 'gRole',
        description: "Comanda pt. atribuirea unui rol ",
        execute(message, args){
            //code goes here BRR
            const targetUser = message.mentions.users.first()
      if (!targetUser) {
        message.reply('specfica pe cineva caruia sa-i dai rolul')
        return
      }
  
      arguments.shift()
  
      const roleName = arguments.join(' ')
      const { guild } = message
  
      const role = guild.roles.cache.find((role) => {
        return role.name === roleName
      })
      if (!role) {
        message.reply(`nu exista rol cu numele  "${roleName}"`)
        return
      }
  
      const member = guild.members.cache.get(targetUser.id)
      member.roles.add(role)
  
      message.reply(`acum utilizatorul are rolul "${roleName}"`)
            
        }
    }
      
    
  