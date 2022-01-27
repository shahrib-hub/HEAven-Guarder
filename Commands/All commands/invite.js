
const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
 name: "invite",
 aliases: ["info"],
 description: "Shows all commands of the bot",

 run: async (client, message, args) => {
 
let helpEmbed = new MessageEmbed()
 . setDescription(`**HEAven Guarder is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**`)
 .setThumbnail(client.user.displayAvatarURL())
 .setFooter("Click on these buttons to invite me!")
 .setColor("#FFFFF0")


 let button1 = new disbut.MessageButton()
 .setStyle('url')
 .setLabel('Invite Me') 
 .setURL("https://discord.com/api/oauth2/authorize?client_id=932136827605905489&permissions=8&scope=bot%20applications.commands");

let button2 = new
disbut.MessageButton()
.setStyle('url')
.setLabel('Support Server')
   .setURL('https://i8.ae/uOYiy')
return message.channel.send(helpEmbed,{
 button: [button1,button2],
 });

 },
};

