require("dotenv").config();
const { Client, Collection } = require("discord.js");
const UrlsConfig = require("./database/models/UrlsConfig");
const fetchProjects = require("./fetchProjects");
const { timeout, disable_fetching } = require("./config.json");
const { MessageMenuOption, MessageMenu } = require("discord-buttons")
const { GiveawaysManager } = require('discord-giveaways');
const readlineSync = require('readline-sync');
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js'); //Requiring Discord.js module.
const DiscordButtons = require('discord-buttons'); //Requiring Discord-BUttons module.



const button = require('discord-buttons');
const disbut = require("discord-buttons")
const { hangman } = require('reconlx')

const prefix = "-";
const Nuggies = require('nuggies');
Nuggies.connect(process.env.MONGO_URI);
const client = new Client({
  disableEveryone: true,
});
disbut(client);

(async () => {
  await require("./database/connect")();

  let pros = await UrlsConfig.find();

  client.commands = new Collection();
  client.aliases = new Collection();
  client.projectsSize = 0;
  client.projects = pros.map((p) => p.projectURL);
  UrlsConfig.countDocuments({}, async (err, total) => {
    client.projectsSize = total;

    ["command", "events"].forEach((handler) => {
      require(`./handlers/${handler}`)(client);
    });

    await client.login(process.env.BOT_TOKEN);

    if (!disable_fetching) fetchProjects(client.projects, client);
  });
})();
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "#b9f2",
    reaction: "<a:Tada_Yellow:933244423234539560>"
  }
});

//create buttons

// pinging
setInterval(async () => {
  UrlsConfig.countDocuments({}, (err, total) => {
client.projectsSize = total;
    client.user.setActivity(`!h help | HEAven Guarder`, {
      
      type: "DND",
    });
  });



  if (!disable_fetching) fetchProjects(client.projects, client);
}, timeout);

client.snipes = new Map();
client.on('messageDelete', function(message, channel){
client.snipes.set(message.channel.id,{
 content:message.content,
 author:message.author.tag,
 image:message.attachments.first() ? message.attachments.first().proxyURL : null
})
})



client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
 let embed = new MessageEmbed()
 .setColor('BLACK')
 .setTitle('Connected To New Server')
 .setURL('https://dsc.gg/shahribdev')
 .setDescription('<:yes:929246071006314496> Thank You For Inviting Me. My prefix is `-`. Run -help for more info about me!')
 .setThumbnail('https://cdn.discordapp.com/avatars/932136827605905489/f311c2058aba6e41e1214ab662cb84a8.webp')
 .addFields(
 { name: 'Prefix', value: '**-**' }
 )

 .setTimestamp()
 .setFooter('Nektar', 'https://dsc.gg/shahribdev');
channel.send(embed);
}) 

client.on('guildCreate', async guild => {
  let owner = await client.users.fetch('835826354515214336')
  owner.send(new Discord.MessageEmbed()
  .setTitle("New Guild!")
  .setDescription(`I have been added to **${guild.name}** with **${guild.memberCount}** members`)
  .setColor("BLACK"))
} )                

