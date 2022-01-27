const { Client, Interaction, MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Get Avatar!",
  type: 'CHAT_INPUT',
  options: [
    {
      name: "user",
      description: "User To Get Avatar",
      type: 6,
      required: false
    }
  ],
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */
  execute: async (client, interaction) => {
    try {
      const options = interaction.options._hoistedOptions;


      const user = (options.find((e) => e.name === "user") && options.find((e) => e.name === "user").member.user) || interaction.user;
      const member = (options.find((e) => e.name === "user") && options.find((e) => e.name === "user").member) || interaction.member;

      const embed = new MessageEmbed().setColor(member.displayHexColor);

      const image = user.displayAvatarURL({dynamic: true, size: 4096});


      embed.setAuthor(member.displayName, user.displayAvatarURL()).setImage(image).setTimestamp();
      await interaction.reply({embeds: [embed]})
    } catch (err) {
      console.log("Something Went Wrong => ",err);
    }
  },
};