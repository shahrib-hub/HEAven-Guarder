module.exports = {
  name: "ping",
  description: "Shows ping of the bot",
  category: "Owner",
  botPermission: [],
  authorPermission: [],
  
  run: async (client, message, args) => {
    message.channel.send(`<a:network:937571241685053480> Latency is ${Date.now() - message.createdTimestamp}ms.<a:network:937571241685053480> API Latency is ${Math.round(client.ws.ping)}ms`);
  }
}

const discord = require('discord.js')

module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "Returns the bot's ping!",
    usage: "!ping",
    ownerOnly: true,
    run: async(client, message) => {
        const embed = new discord.MessageEmbed()
        .setTitle("Bot's ping")
        .setDescription(`<a:music_beat:937571594618933250> API latency is - ${client.ws.ping}ms\n<a:network:937571241685053480> Message Latency is ${Date.now() - message.createdTimestamp}ms.`)
        message.channel.send(embed)
    }
}
