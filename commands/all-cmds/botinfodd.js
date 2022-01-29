const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
const { MessageMenuOption, MessageMenu } = require("discord-buttons")
module.exports = {
name: "botinfo",
usage: "buttonmenu",
description: "Sends a menu with options!",
category: "buttons",
run: async (client, message, args) => {
let option1 = new MessageMenuOption()
        .setLabel("Uptime")
        .setValue("Option 1")
        .setDescription("Get bots uptime")
        .setDefault()
        .setEmoji("878156514018332703")
        
        let option2 = new MessageMenuOption()
            .setLabel("Ping")
            .setValue("Option 2")
            .setDescription("Get bots ping")
            .setDefault()
            .setEmoji("878156514018332703")
        let option3 = new MessageMenuOption()
            .setLabel("Version")
            .setValue("Option 3")
            .setDescription("Get bots version")
            .setDefault()
            .setEmoji("878156514018332703")
        let selection = new MessageMenu()
            .setID("Selection")
            .setMaxValues(1)
            .setMinValues(1)
            .setPlaceholder("Choose a category to see the info")
            .addOption(option1)
            .addOption(option2)
            .addOption(option3)
              let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        const embed1 = new MessageEmbed()
            .setTitle("Uptime")
            .setColor("#b9f2ff")
            .setDescription(`**${days} days ${hours} hours ${minutes} minutes ${seconds} seconds**`)
            .setFooter(``)
            
            const embed2 = new Discord.MessageEmbed()
        .setDescription(`🏓**${Date.now() - message.createdTimestamp}ms**`);

        let embed = new Discord.MessageEmbed()
        .setColor("#f4c2c2").setTitle("Choose your option!")
        let embed3 = new Discord.MessageEmbed()
  .setTitle("Version info")
 .addField(`Current version`,`**v1.9**`)
 .addField(`Next Version To Be Launched`,`**v1.10**`)
 .addField(` ⏱| Latency!`,` **${client.ws.ping}ms** Latency!`)
  .setColor("RED")
  .addField(`OWNER OF THE BOT`,`**SHAHRIb#9961**`)

  let menumsg = await message.channel.send(embed, selection)

        function menuselection(menu) {
            switch(menu.values[0]) {
                case "Option 1": 
                    menu.reply.send(embed1, true)
                break;
                case "Option 2": 
                    menu.reply.send(embed2, true)
                break;
                case "Option 3": 
                    menu.reply.send(embed3, true)
                break;
            }
        }

        client.on("clickMenu", (menu) => {
            if(menu.message.id == menumsg.id) {
                if(menu.clicker.user.id == message.author.id) menuselection(menu)
                else menu.reply.send(":x: you are not allowed to pick something", true)
            }
        })
    
}
}
