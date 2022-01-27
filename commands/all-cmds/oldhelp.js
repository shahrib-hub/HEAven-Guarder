const { MessageEmbed } = require("discord.js");
const { default_prefix } = require("./../../config.json");

module.exports = {
  name: "uptime-help",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: true,
  run: async (client, message, args) => {
    let github_repo = "https://github.com/naveenpoddar/uptimer";
    let how_to = "https://github.com/naveenpoddar/uptimer#ussage";

    const commands = client.commands
      .filter((c) => c.ownerOnly === true)
      .map((cmd) => `**${default_prefix}${cmd.name}** - ${cmd.description}`);

    const contents =
      "**HEAven Guarder** is an Multipurpose project, and a free discord bot that allows you to make your Replit projects online 24/7 just by using a single cmd.\n\n" +
      commands.sort().join("\n");

    let embed = new MessageEmbed()
      .setTitle("<:badge:929242121226035271> Here are my comamnds!")
      .setDescription("`add,projects,remove,stats,total,uptime-help`")
      .setColor("RANDOM")
      .addField('Warning For Glitch Users', 'Glitch is banning projects that use ping services use this service only for Replit and if you get a ban don't blame me and I am not responsible for it', true)       
      .setFooter(`Prefix: "${default_prefix}"`)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp();

    return message.channel.send(embed);
  },
};
