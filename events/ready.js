module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`Prefix + | Made by SHAHRIb`, {
    type: "ONLINE",
  });
};
