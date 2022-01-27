const djs = require('discord.js')

module.exports = {
 name: 'reload',
 description: 'Reloades a command',
 category: 'owner',
 usage: 'reload <category> <command>',
 run: async(client, message, args) => {
 
 if(message.author.id !== "835826354515214336") return message.channel.send("This command is only for bot owners.");
 
 if(!args[0]) return message.channel.send('You must provide a category name');
 if(!args[1]) return message.channel.send('You must provide a command for me to reload');

 let category = args[0];
 let commandName = args[1];

 try { 
 delete require.cache[require.resolve(`../../commands/${category}/${commandName}.js`)];
client.commands.delete(commandName);
 const pull = require(`../../commands/${category}/${commandName}.js`);
 client.commands.set(commandName, pull);
 
 const embed = new djs.MessageEmbed()
 .setTitle('Reload Command')
 .setColor('BLACK')
 .setDescription(`Successfully reloaded \`${args[1].toUpperCase()}\` command`)
 
 return message.channel.send(embed);
 } catch(e) {
 return message.channel.send(`${e}\nError while reloading: \`${args[1].toUpperCase()}\` command`);
 }
     }
          };
