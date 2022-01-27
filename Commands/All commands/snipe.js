
const discord = require("discord.js")

module.exports ={
 name: "snipe",
 aliases: ["sn"],
 category: "fun",
 usage: "!snipe",
 description: "get deleted message",
 
 run: async (client, message, args) => {


 const msg = client.snipes.get(message.channel.id)
 if(!msg) return message.channel.send("There's Nothing To Snipe!")
 const embed = new discord.MessageEmbed()
 .setAuthor(msg.author)
 .setDescription(msg.content)
 .setColor('RANDOM')
 .setTimestamp()
 if(msg.image)embed.setImage(msg.image)
 message.channel.send(embed)
 }
}