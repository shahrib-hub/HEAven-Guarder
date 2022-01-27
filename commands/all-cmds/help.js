const simplydjs = require('simply-djs');
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js")
const { button, MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');
const disbut = require("discord-buttons");
 
    let embed1 = new Discord.MessageEmbed()
      .setTitle('** <:heart1:929240076318302248> Help Panel <:heart1:929240076318302248>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField("<:yes:929246071006314496> COMMAND CATEGORIES",
        "**<:badge:929242121226035271>  ADMIN\n☕  GENERAL\n🎉  GIVEAWAY\n💙  INFO\n🖼️  IMAGE\n🤣  FUN\n🔺  UPTIMER**")
      
      .setFooter('Bot Made By SHAHRIb | Prefix: +')
    let embed2 = new Discord.MessageEmbed()
      .setTitle('** <:heart1:929240076318302248> Help Panel <:heart1:929240076318302248>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<:badge:929242121226035271> MODERATION",
        "`ban` `unban` `kick` `avatar` `addemoji` `addrole` `removerole` `announce` `setnick` `resetnick` `purge-channel` `lockchannel` `/purge` `slowmode` `mute` `unmute` `greet-embed-toggle` `timedlockdown`")
  
      .setFooter('HEAven Guarder | Prefix: +')
    let embed3 = new Discord.MessageEmbed()
      .setTitle('** <:heart1:929240076318302248> Help Panel <:heart1:929240076318302248>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "☕ GENERAL",
        "`servericon` `calculator` `invite` `membercount` `botinfo` `serverinfo` `leaderboard` `snipe` `embed`")
     
      .setFooter('Bot Made By SHAHRIb | Prefix: +')
    let embed4 = new Discord.MessageEmbed()
      .setTitle('** <:heart1:929240076318302248> Help Panel <:heart1:929240076318302248>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "🎉 GIVEAWAY",
        "`gstart` `gend` `greroll`")
      
      .setFooter('Bot Made By SHAHRIb | Prefix: +')
    let embed5 = new Discord.MessageEmbed()
      .setTitle('** <:heart1:929240076318302248> Help Panel <:heart1:929240076318302248>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<:heart1:929240076318302248> INFO",
        "`avatar` `bug-report` `feedback` `developer` `help` `position` `urban` `weather` `status` `channelinfo` `rolememberinfo`")
      
      .setFooter('Bot Made By SHAHRIb | Prefix: +')
    let embed6 = new Discord.MessageEmbed()
      .setTitle('** <:heart1:929240076318302248> Help Panel <:heart1:929240076318302248>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "🖼️ Image",
        "`tweet` `fact` `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary`")
      
      .setFooter('Bot Made By SHAHRIb | Prefix: +')
     let embed7 = new Discord
     .MessageEmbed()
       .setTitle('** <:heart1:929240076318302248> Help Panel <:heart1:929240076318302248>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "🤣 FUN",
        "`fight` `rps` `coinflip` `meme` `reverse` `hangman` `trivia` `fact` `Shuffle-guess`")
      
      .setFooter('Bot Made By SHAHHRIb | Prefix: +')
      let embed8 = new Discord
.MessageEmbed()
    .setTitle('** <:heart1:929240076318302248> Help Panel <:heart1:929240076318302248>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "🔺 UPTIMER",
        "`add` `stats` `total` `projects` `uptime-help` `remove`")
      
      .setFooter('Bot Made By SHAHRIb | Prefix: +')

    

module.exports = {
  name: "help",
  aliases: [""],
  usage: "unban",
  description: "unbans member",


  run: async (client, message, args) => {
    let cmduser = message.author;
    let menuoptions = [
       {
        value: "BACK TO START", description: "Starting Menu!",
        replymsg: embed1, emoji: "887806752643481650" //optional
      },{
        value: "MODERATION", description: "Moderation Commands!",
        replymsg: embed2, emoji: "887805506570289203" //optional
      }, {
        value: "GENERAL", description: "General Commands!",
        replymsg: embed3, emoji: "887805199547269171" //optional
      }, {
        value: "GIVEAWAY", description: "Giveaway Commands!",
        replymsg: embed4, emoji: "887805319902789662" //optional
      }, {
        value: "INFO", description: "Information Commands!",
        replymsg: embed5, emoji: "878156514018332703" //optional
      }, {
        value: "IMAGE", description: "Image Commands!",
        replymsg: embed6, emoji: "884252787444158504" //optional
      }, {
        value: "FUN", description: "Fun Commands!",
        replymsg: embed7, emoji: "887805689655853116" //optional
      }, {
        value: "UPTIME", description: "Uptime Commands!",
        replymsg: embed8, emoji: "887806366738169877" },//optional
        ]
   // define the selection
    let Selection = new MessageMenu()
      .setID('MenuSelection')
      .setMaxValues(1) //OPTIONAL, this is how many values you can have at each selection
      .setMinValues(1) //OPTIONAL , this is how many values you need to have at each selection
      .setPlaceholder('Click me to make a Selection!');  //message in the content placeholder
    menuoptions.forEach(option => {
      let row = new MessageMenuOption()
        .setLabel(option.label ? option.label : option.value)
        .setValue(option.value)
        .setDescription(option.description)
        .setDefault()
      if (option.emoji) row.setEmoji(option.emoji)
      Selection.addOption(row)
    })
    //define the embed
   
    let MenuEmbed = new Discord.MessageEmbed()
      .setTitle('** <:heart1:929240076318302248> Help Panel <:heart1:929240076318302248>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField("📜 COMMAND CATEGORIES",
        "**<:badge:929242121226035271>  ADMIN\n☕  GENERAL\n🎉  GIVEAWAY\n<:heart1:929240076318302248>  INFO\n🖼️  IMAGE\n🤣  FUN\n🔺  UPTIMER**")
      
      .setFooter('HEAven Guarder | Prefix: +')


    
    //send the menu msg
    let menumsg = await message.channel.send(MenuEmbed, Selection                        )
    //function to handle the menuselection
    function menuselection(menu) {
      let menuoptiondata = menuoptions.find(v => v.value == menu.values[0])
      menu.reply.send(menuoptiondata.replymsg, true,);
    }
    //Event
    client.on('clickMenu', (menu) => {
      if (menu.message.id === menumsg.id) {
        if (menu.clicker.user.id === cmduser.id) menuselection(menu);
        else menu.reply.send(`:x: You are not allowed to do that! Only: <@${cmduser.id}>`, true);
      }
    });
  }
}
