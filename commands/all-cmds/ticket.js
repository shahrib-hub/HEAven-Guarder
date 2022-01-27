const simplydjs = require('simply-djs')
module.exports = {
  name: "ticket",
  aliases: ["setup-ticket"],
  usage: "unban",
  description: "unbans member",
  run: async (client, message, args) => {
    client.on('clickButton', async (button) => {
      // a discord-buttons event which fires when a button gets clicked
      simplydjs.clickBtn(button, {
        embedDesc: 'Create a Ticket!',
        embedColor: 'f4c2c2', // default: #075FFF
        closeColor: 'blurple', //default: blurple
        closeEmoji: '🔒', // d🔒🔒
        delColor: 'grey', // default: grey
        delEmoji: '❌',
        openColor: 'green', // default: green
        openEmoji: '🔓', // default: 🔓
        timeout: false, // default: true | Needs to be boolean (true/false)
        cooldownMsg: 'Slow Down There, you are clicking too fast!',
        categoryID: args[0],
        role: args[1] // Role which sees the ticket channel (like Support Role)
      })
    })

    // message event
    // setup-ticket command

    simplydjs.ticketSystem(message, message.channel, {
      embedDesc:'📨 Create a ticket by clicking the button 📨' ,
      embedColor: '#f4c2c2', // default: #075FFFF
      embedFoot: 'HEAven Tickets', // default: message.guild.name
      emoji: '📨', // default:, 🎫
      color: 'blurple', // default: blurple
    })
  }
}

