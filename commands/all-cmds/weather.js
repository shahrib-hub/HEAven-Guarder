const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const weather = require('weather-js');

module.exports = {
  name: 'weather',
  description: 'Shows weather information',
  aliases: ["weather"],
  usage: '<city name>',
  category: 'fun',
  run: async (bot, message, args) => {

    if (args.length === 0) {
      let errorembed = new MessageEmbed()
        .setTitle("Error :cry:")
        .setDescription("Please enter a location!")
        .setColor("cccfff")
        .setFooter("BOT DEVELOPERS: SHAHRIb | Prefix: +");
      return message.channel.send(errorembed);
    }

    weather.find({ search: args.join(" "), degreeType: 'C' }, function(err, result) {

      if (result.length === 0) {
        let errorembed = new MessageEmbed()
          .setTitle("Error :cry:")
          .setDescription("Please enter a vaild location!")
          .setColor("cccfff")
          .setFooter("BOT DEVELOPERS: SHAHRIb | Prefix: +");
        return message.channel.send(errorembed);
      }

      var current = result[0].current;
      var location = result[0].location;
      if (err) {
        let errorembed = new MessageEmbed()
          .setTitle("Error :cry:")
          .setDescription("Please enter a vaild location!")
          .setColor("cccfff")
          .setFooter("BOT DEVELOPERS: SHAHRIb | Prefix: +");
        return message.channel.send(errorembed);
      }


      let embed = new MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor("cccfff")
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', location.degreetype, true)
        .addField('Temperature', `${current.temperature} Degrees`, true)
        .addField('Feels Like', `${current.feelslike} Degrees`, true)
        .addField('Winds', current.winddisplay, true)
        .addField('Humidity', `${current.humidity}%`, true)
        .setFooter("BOT DEVELOPERS: SHAHRIb | Prefix: +");
      message.channel.send(embed);
    });
  }
};