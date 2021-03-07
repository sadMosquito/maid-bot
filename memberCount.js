


module.exports = client => {
    const chId = '813343900445573120'
    const updateMembers = guild => {
        const channel = guild.channel.cache.get(chId);
        channel.setName(`Membrii: ${guild.memberCount.toLocaleString()}`)
    }
    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))
    
}