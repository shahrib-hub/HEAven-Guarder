module.exports = {
  name: "clientinfo",
  description: "Shows ping of the bot",
  category: "Owner",
  botPermission: [],
  authorPermission: [],
  
  run: async (client, message, args) => {
    message.channel.send(`<:folder:937273629891252284> on **${client.guilds.cache.size} Guilds**\n<a:music_beat:937571594618933250> **${duration(client.uptime).map(i=> `\`${i}\``).join(", ")} Uptime**\n<a:network:937571241685053480> **\`${Math.floor(client.ws.ping)}ms\` Ping**``);
  }
}

const discord = require('discord.js')

module.exports = {
    name: "clientping",
    aliases: ["latency"],
    description: "Returns the bot's ping!",
    usage: "+ping",
    ownerOnly: true,
    run: async(client, message) => {
        const embed = new discord.MessageEmbed()
        .setTitle("Client Info")
        .setDescription(`<a:network:937571241685053480> API latency is - ${client.ws.ping}ms\n<a:network:937571241685053480> Message Latency is ${Date.now() - message.createdTimestamp}ms.`)
        message.channel.send(embed)
    }
}
