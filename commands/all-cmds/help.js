const simplydjs = require('simply-djs');
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js")
const { button, MessageButton, MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');
const disbut = require("discord-buttons");

    let embed1 = new Discord.MessageEmbed()
      .setTitle('**<a:Rainbow_heart:937584806923993128> Help Panel <a:Rainbow_heart:937584806923993128>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField("<a:correct:937681819812392970> COMMAND CATEGORIES",
        "**<:atlanta_administration_category:789030159419310101>  ADMIN\n<:atlanta_general_category:789030444167200808>  GENERAL\n<a:Tada_Yellow:933244423234539560>  GIVEAWAY\n💙  INFO\n<a:money:908685366184271923> ECONOMY\n<:atlanta_images_category:789030084861362257>  IMAGE\n<:atlanta_fun_category:789030226607996958>  FUN\n<a:pin:908666657520619550> SLASH COMMANDS**")
  
      .setFooter('HEAven Guarder | Prefix: +')
    let embed2 = new Discord.MessageEmbed()
      .setTitle('**<a:Rainbow_heart:937584806923993128> Help Panel <a:Rainbow_heart:937584806923993128>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<:atlanta_moderation_category:789030389741781033> MODERATION",
        "`ban` `unban` `kick` `avatar` `addemoji` `addrole` `removerole` `announce` `setnick` `resetnick` `purge-channel` `lockchannel` `/purge` `slowmode` `mute` `unmute` `greet-embed-toggle` `timedlockdown`")
  
      .setFooter('HEAven Guarder | Prefix: +')
    let embed3 = new Discord.MessageEmbed()
      .setTitle('**<a:Rainbow_heart:937584806923993128> Help Panel <a:Rainbow_heart:937584806923993128>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<:atlanta_general_category:789030444167200808> GENERAL",
        "`servericon` `calculator` `invite` `membercount` `botinfo` `serverinfo` `leaderboard` `snipe` `embed`")
     
      .setFooter('HEAven Guarder | Prefix: +')
    let embed4 = new Discord.MessageEmbed()
      .setTitle('**<a:Rainbow_heart:937584806923993128> Help Panel <a:Rainbow_heart:937584806923993128>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:prize:933244459171348510> GIVEAWAY",
        "`gstart` `ghelp` `gend` `greroll`")
      
      .setFooter('Bot Made By SHAHRIb | Prefix: +')
    let embed5 = new Discord.MessageEmbed()
      .setTitle('**<a:Rainbow_heart:937584806923993128> Help Panel <a:Rainbow_heart:937584806923993128>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:Rainbow_heart:937584806923993128> INFO",
        "`avatar` `bug-report` `feedback` `suggest` `developer` `help` `position` `urban` `vote` `weather` `status` `channelinfo` `rolememberinfo`")
      
      .setFooter('HEAven Guarder | Prefix: +')
    let embed6 = new Discord.MessageEmbed()
      .setTitle('**<a:Rainbow_heart:937584806923993128> Help Panel <a:Rainbow_heart:937584806923993128>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<:atlanta_images_category:789030084861362257> Image",
        "`tweet` `fact` `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary`")
      
      .setFooter('HEAven Guarder | Prefix: +')
     let embed7 = new Discord
     .MessageEmbed()
       .setTitle('**<a:Rainbow_heart:937584806923993128> Help Panel <a:Rainbow_heart:937584806923993128>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles  and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<:atlanta_fun_category:789030226607996958> FUN",
        "`fight` `rps` `coinflip` `meme` `reverse` `hangman` `trivia` `fact` `Shuffle-guess`")

      .setFooter('HEAven Guarder | Prefix: +')   
     let embed8 = new Discord
     .MessageEmbed()
       .setTitle('**<a:Rainbow_heart:937584806923993128> Help Panel <a:Rainbow_heart:937584806923993128>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:pin:908666657520619550> Slash Commands",
        "`addemoji` `autoplay` `avatar` `ban` `botguild` `botinfo` `channel-info` `channels` `clear` `emojis` `filter` `invite` `join` `joke` `meme` `jump` `mute` `nowplay` `pause` `ping` `play` `resume` `purge` `clear` `queue` `role-info` `roll` `seek` `server` `shorturl` `shuffle` `skip` `stop` `support` `unban` `unmute` `volume`")
            
      .setFooter('HEAven Guarder | Prefix: +')
     let embed9 = new Discord
     .MessageEmbed()
       .setTitle('**<a:Rainbow_heart:937584806923993128> Help Panel <a:Rainbow_heart:937584806923993128>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField(
        "<a:money:908685366184271923> ECONOMY [Prefix: !h]",
        "`gamble` `bal` `beg` `buy` `daily` `rob` `search` `gift` `shop` `give` `crime` `post-cat` `post-meme` `slots` `vote` `use` `roulette` `sell` `rich` `mine` `passive`  `fish` `hunt` `inventory` `deposit` `withdraw`  `profile` `blackjack`  `work`")
            
      .setFooter('HEAven Guarder | Prefix: !h for economy')


    

module.exports = {
  name: "help",
  aliases: [],
  usage: "+help",
  description: "Shows the bot help menu",


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
        value: "ECONOMY", description: "Economy Commands!",
        replymsg: embed9, emoji: "908685366184271923" //optional
      }, {
        value: "IMAGE", description: "Image Commands!",
        replymsg: embed6, emoji: "884252787444158504" //optional
      }, {
        value: "FUN", description: "Fun Commands!",
        replymsg: embed7, emoji: "887805689655853116" //optional
      }, {
        value: "SLASH COMMANDS", description: "Slash Commands!",
        replymsg: embed8, emoji: "908666657520619550" //optional
      }, 
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
      .setTitle('**<a:Rainbow_heart:937584806923993128> Help Panel <a:Rainbow_heart:937584806923993128>**')
      .setDescription('** *HEAven Guarder*  is one of the only free all in one bots that has many features like tickets, reaction roles and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .setColor("#f4c2c2")
      .addField("📜 COMMAND CATEGORIES",
        "**<:atlanta_moderation_category:789030389741781033>  ADMIN\n<:atlanta_general_category:789030444167200808>  GENERAL\n<a:Tada_Yellow:933244423234539560>  GIVEAWAY\n<a:Rainbow_heart:937584806923993128>  INFO\n<a:money:908685366184271923> ECONOMY\n<:atlanta_images_category:789030084861362257>  IMAGE\n<:atlanta_fun_category:789030226607996958>  FUN\n<a:pin:908666657520619550> Slash Commands**")
      
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
