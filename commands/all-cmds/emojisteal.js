const simplydjs = require('simply-djs')
module.exports = {
  name: "steal-emoj",
  aliases: ["emoji-steal"],
  usage: "unban",
  description: "unbans member",
  run: async (client, message, args) => {
  simplydjs.stealEmoji(message, args, {
    embedTitle: 'Steal Emoji', 
    embedColor: 'b9f2ff',
    embedFoot: 'Stealing emojis is illegal!',
    failedMsg: 'Sorry emoji not found :('
   })
  }
}
