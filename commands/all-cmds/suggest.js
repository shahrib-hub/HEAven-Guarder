const Discord = require('discord.js')
const webhook = new Discord.WebhookClient('937701300173414400','oXO_02rQICsoJMuk4CXnFOn-S8GeMfVMD80zw2Ifdyj0patumr7S7tNgsGDhB6iLkcp_')
module.exports = {
  name: "suggest",
  description: "suggest command (embed style)",

  async run(bot, message, args) {

    if (!args[0]) return message.reply('Please add something to suggest.')

    message.reply(`<a:correct:937681819812392970> | ${message.author.username}, Thanks for the suggestion!\nIf it got accepted you can track it on our support server!\nSupport Server Link: https://discord.gg/tZSZaQye3t`)

    const suggestEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Suggestion:`)
      .setDescription(`${args}`)
      .addField("On the server:", `${message.guild.name}`)
      .addField("Server ID:", `${message.guild.id}`)

    webhook.send(suggestEmbed)

    
  }
}
