const Discord = require('discord.js')
const webhook = new Discord.WebhookClient('936961228985757797','G-jUjwbbGU40vCGxEj6dhTgC5uYkJUb9QYkuzo1sZmssfbejGGU8eKPIWd2JYLR3AERh')
module.exports = {
  name: "feedback",
  description: "feedback command (embed style)",

  async run(bot, message, args) {

    if (!args[0]) return message.reply('Please add a reason to feedback!')

    message.reply(`✉ | ${message.author.username}, Thanks for the feedback! :)`)

    const feedbackEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) Feedback:`)
      .setDescription(`${args}`)
      .addField("On the server:", `${message.guild.name}`)
      .addField("Server ID:", `${message.guild.id}`)

    webhook.send(feedbackEmbed)

    
  }
}
