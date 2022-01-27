
const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
 name: "rules",
 aliases: ["info"],
 description: "Shows all commands of the bot",

 run: async (client, message, args) => {
 
 if(message.author.id !== "835826354515214336") return message.channel.send("This command is only for bot owners.");

let helpEmbed = new MessageEmbed()
 
.setTitle('**RULES**')  .setDescription(`⌨️ SPAMMING
・ Spamming in any form is prohibited. Depending on the severity, a warn, mute, or ban will be issued.

・ RACISM,SLURS,SEXISM AND TOXICITY
・ None of these are allowed, saying n word, posting NSFW content. If you do any of these, you will get permanent ban from this server and bot. Please don't be toxic to other members, and respect each other.

・ DISCORD TOS
・ U must follow discord tos.
Read Discord rules here ==> https://discord.com/term

・ PINGING OR DMING DEVELOPERS
・ PINGING DEVELOPER WILL RESULT IN A BAN.

・ BEGGING
・ Begging for anything is not allowed.

・ DM ADVERTISING
・ Advertising a bot or server in private message without their permission is not allowed!

`)
 .setThumbnail(client.user.displayAvatarURL())

 .setFooter("Click on these buttons to invite me!")
 .setColor("#FFFFF0")


 let button1 = new disbut.MessageButton()
 .setStyle('url')
 .setLabel('Invite Me') 
 .setURL("https://i8.ae/uOYiy")
.setEmoji("887806752643481650");
let button2 = new
disbut.MessageButton()
.setStyle('url')
.setLabel('Support Server')
.setEmoji('887828790565290004')
   .setURL('https://discord.gg/tZSZaQye3t')
return message.channel.send(helpEmbed,{
 button: [button1,button2],
 });

 },
};

