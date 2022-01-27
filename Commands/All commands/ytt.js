const {MessageEmbed} = require('discord.js');
const fetch = require('node-fetch')
const {MessageButton} = require('discord-buttons')

module.exports = {
 name: 'youtube-together',
 aliases: ['ytt'],
 category: 'fun',
 description: 'Watch Youtube in a vc with your friends!',
 usage: '',

 run: async (client, message, args) => {
 const channel = message.member.voice.channel

 if (!channel) return message.channel.send(
 new MessageEmbed()
 .setTitle("You must be connected to a voice channel to use this command!")
 .setColor("RED")
 )

 fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
 method: "POST",
 body: JSON.stringify({
 max_age: 86400,
 max_uses: 0,
 target_application_id: "755600276941176913",
 target_type: 2,
 temporary: false,
 validate: null
 }),
 headers: {
 "Authorization": `Bot ${client.token}`,
 "Content-Type": "application/json"
 }
 }).then(res => res.json()).then(invite => {
 if (!invite.code) return message.channel.send(
 new MessageEmbed()
 .setTitle("I was unable to start a yt together session! *pain*")
 .setColor("RED")
 )
 const ytt = new MessageButton()
 .setStyle("url")
 .setLabel('Watch Youtube Together')
 .setEmoji("885357428818997298")
 .setURL(`https://discord.com/invite/${invite.code}`)

 message.channel.send({
 buttons: [ytt],
 embed: new MessageEmbed()
 .setTitle('Watch Youtube Together 😁')
 .setDescription('Click The Button Below To Watch Youtube Together In A Voice Channel☕')
 })
 })
 }
}

