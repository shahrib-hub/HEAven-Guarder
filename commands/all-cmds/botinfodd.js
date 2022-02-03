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
        let option4 = new MessageMenuOption()
            .setLabel("Cluster Info")
            .setValue("Option 4")
            .setDescription("Get Shards Status")
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
            .addOption(option4)
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

        let embed4 = new Discord.MessageEmbed()
        .setTitle("ALL Cluster's Info")
        .addField(`<:atlanta_online:616613445424513028> Cluster #0`,`Shards: #1, #2\n Server Limit: 100\n Memory: 123mb UNSTABLE\n Ping: 112ms STABLE\n Condition: NORMAL`)
        .addField(`<:atlanta_online:616613445424513028> Cluster #1`,`Shards: #3, #4\n Server Limit: null\n Memory: null null\n Ping: 0ms null\n Condition: NOT FOUND`)
        .addField(`<:atlanta_dnd:616613445252546570> Cluster #2 `,`Shards: #5, #6\n Server Limit: null\n Memory: null null\n Ping: 0ms null\n Condition: NOT FOUND`) 
        .addField(`<:atlanta_idle:616613445290164224> Cluster #3`,`Shards: #7, #8\n Server Limit: null\n Memory: null null\n Ping: 0ms null\n Condition: NOT FOUND`)
        .setColor("YELLOW")
        .addField(`<:atlanta_offline:616613445487558696> Cluster #4`,`Shards: #9, #10\n Server Limit: 50000\n Memory: 0mb\n Ping: 0ms\n Condition: CRASHED`)


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
                case "Option 4": 
                    menu.reply.send(embed4, true)
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
