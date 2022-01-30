
const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
 name: "vote",
 aliases: ["vt"],
 description: "Shows all commands of the bot",

 run: async (client, message, args) => {
 
let helpEmbed = new MessageEmbed()
 .setTitle("Thanks For Voting us!")
 .setDescription(`**Help HEAven Guarder grow by Voting us on Discordbotlist[DBL] & Top.gg We will appreciate a 5 ⭐ Thanks :)**`)
 .setThumbnail(client.user.displayAvatarURL())
 .setFooter("Click on these buttons to vote me!")
 .setColor("#FFFFF0")


 let button1 = new disbut.MessageButton()
 .setStyle('url')
 .setLabel('Top.gg') 
 .setURL("https://top.gg/bot/932136827605905489/vote");

let button2 = new
disbut.MessageButton()
.setStyle('url')
.setLabel('DBL')
   .setURL('https://discord.ly/heaven-exclusives')
return message.channel.send(helpEmbed,{
 button: [button1,button2],
 });

 },
};
