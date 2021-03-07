const fs = require('fs');
const Discord = require('discord.js');
const {
    prefix,
    token
} = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord
    .Collection();
const commandFiles = fs.readdirSync(
    './commands').filter(file =>
    file.endsWith(
        '.js'));
for (const file of commandFiles) {
    const command = require(
        `./commands/${file}`);
    client.commands.set(command.name,
        command);
}
const cooldowns = new Discord
    .Collection();
client.once('ready', () => {
    console.log(
        'the bot is online!'
    )
    
});
client.on('message', message => {
    if (!message.content
        .startsWith(prefix) ||
        message.author.bot)
        return;
    const args = message.content
        .slice(prefix.length)
        .trim().split(
            / +/);
    const commandName = args
        .shift().toLowerCase();
    const command = client
        .commands.get(
            commandName) ||
        client.commands.find(
            cmd => cmd
            .aliases && cmd
            .aliases.includes(
                commandName));
    if (!command) return;
    if (command.guildOnly &&
        message.channel.type ===
        'dm') {
        return message.reply(
            'Nu pot executa mesaje in DM'
        );
    }
    if (command.permissions) {
        const authorPerms =
            message.channel
            .permissionsFor(
                message
                .author);
        if (!authorPerms || !
            authorPerms.has(
                command
                .permissions)) {
            return message
                .reply(
                    'Nu poti face asta'
                );
        }
    }
    if (command.args && !args
        .length) {
        let reply =
            `nu ai specificat argumente, ${message.author}!`;
        if (command.usage) {
            reply +=
                `\nar trebuisa incerci \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel
            .send(reply);
    }
    if (!cooldowns.has(command
            .name)) {
        cooldowns.set(command
            .name,
            new Discord
            .Collection());
    }
    const now = Date.now();
    const timestamps = cooldowns
        .get(command.name);
    const cooldownAmount = (
        command.cooldown ||
        3) * 1000;
    if (timestamps.has(message
            .author.id)) {
        const expirationTime =
            timestamps.get(
                message.author
                .id) +
            cooldownAmount;
        if (now <
            expirationTime) {
            const timeLeft = (
                expirationTime -
                now) / 1000;
            return message
                .reply(
                    `te rog asteapta ${timeLeft.toFixed(1)} secunde pana mai folosesti comanda \`${command.name}\` `
                );
        }
    }
    timestamps.set(message
        .author.id, now);
    setTimeout(() => timestamps
        .delete(message
            .author.id),
        cooldownAmount);
    command.execute(message,
        args);
});

client.login(token);
