const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "membercount",
  aliases: ['mc' , 'MemberCount' , 'Membercount'],
  usage: "+membercount",
  description: "Shows Memeber Count of the Server",
  run: async (client, message, args) => {
    const { guild} = message 
    const {name,memberCount} = guild
    const icon = guild.iconURL() 
    let memberCountEmbed = new MessageEmbed()
    .setTitle(`Member Count for ${name}:`)
    .setDescription(memberCount)
    .setColor("#b9f2ff")
    .setThumbnail(icon)
    .setFooter("BOT DEVELOPERS: SHAHRIb | Prefix: +")
    message.channel.send(memberCountEmbed)
  },
};