const Discord = require('discord.js')

const config = require('../config.json')
const fs = require('fs')

module.exports = {
    name: 'simp',
    description: "vezi cat de simp esti FATALAULE!",
     commands: ['simp', 'fatalau'],
    expectedArgs: ['<prefix>simp','<prefix>fatalau'],
    permissionError: 'Nu ai permisiune pentru aceasta comanda!',
    minArgs: 1,
    maxArgs: 1,
    execute(message, args){
        rndSimp = Math.floor(Math.random() * 100);
        message.channel.send(`Esti **${rndSimp}%** Simp.FATALAULE`)
    }
}

        
