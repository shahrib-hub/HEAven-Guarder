const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "dog",
    aliases: ["doggy", "doggo", "puppy"],
    category: "images",
    description: "Sends a random dog pic",
    usage: `*dog`,
    run: async (bot, message, args) => {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const img = (await res.json()).message;
        const embed = new Discord.MessageEmbed()
          .setTitle(`🐕 Dog 🐕`)
          .setImage(img)
          .setColor("cccfff");
        message.channel.send(embed);
    }
}