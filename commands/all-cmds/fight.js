const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "fight",
aliases: ["", "f"],
category: "moderation",
usage: "embed <text to say>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {
 

const opponent = message.mentions.users.first();
if (!opponent) return message.channel.send("you need to mention a valid user to fight against lol");
if (opponent.id == message.author.id) return message.channel.send("You can't fight urself dumbo");
if (opponent.bot) return message.channel.send("You can't fight against bots, you'll never hear back from them u dummy");
message.author.hp = 100;
opponent.hp = 100;
const fighters = [message.author, opponent];
const responses = ["defend", "punch", "end"];
let turn = opponent;
let fighting = true;
while (fighting) {
    const opposite = fighters.find(fighter => fighter.id != turn.id);
    message.channel.send(`${turn}, What do you want to do? \`punch\`, \`defend\` or \`end\`?\nType your choice out in chat as it's displayed!`);
    const filter = (m) => m.author.id == turn.id;
    let msg;
    try {
        msg = await message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ["time"]
        });
    } catch {
        message.channel.send(`**${opponent.username}** didn't answer in time, what a NOOB. **${opposite.username}** wins a game`);
        fighting = false;
        return;
    }
    msg = msg.first();
    if (!responses.includes(msg.content.toLowerCase())) {
        message.channel.send(`**${msg.author.username}**, that's not a valid option lmao! You must type \`punch\`, \`defend\` or \`end\` in chat!`);
        continue;
    }
    const content = msg.content.toLowerCase();
    if (content == "punch") {
        const damage = Math.floor(Math.random() * (40 - 10) + 10);
        let type;
        let i = damage.toString()[0];
        if (i == '1') type = "good";
        else if (i == '2') type = "solid";
        else if (i == '3') type = "incredible";
        opposite.hp -= damage;
        message.channel.send(`**${turn.username}** lands a ${type} hit on **${opposite.username}** dealing **${damage}** damage! \n**${opposite.username}** is left with **${opposite.hp < 0 ? 0 : opposite.hp}** health!`);
        if (opposite.hp <= 0) {
            message.channel.send(`I did not expect that! **${turn.username}** completely rekt **${opposite.username}**, winning with just \`${turn.hp} HP\` left!`);
            fighting = false;
            return;
        } else {
            turn = opposite;
            continue;
        }
    } else if (content == "defend") {
        if (turn.hp >= 80) {
            message.channel.send(`Dont be greedy kiddo, you already have more than 80 hp left`);
            continue;
        }
        const gain = Math.floor(Math.random() * (15 - 7) + 7);
        turn.hp += gain;
        message.channel.send(`PROTECTED!! **${turn.username}** defended and now has \`${turn.hp} HP\` left!`);
        turn = opposite;
        continue;
    } else if (content == "end") {
        return message.channel.send(`**${turn.username}** has ended the game what a LOSER!`);
    }
}
}
}