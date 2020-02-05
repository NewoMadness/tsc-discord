
const emojis = require('../../emojis.json')
const Discord = require("discord.js")
let active = new Map();
const db = require('quick.db')
const schedule = require('node-schedule')
const fs = require('fs')
const bot = new Discord.Client();
module.exports = async (bot, message) => { 
   let ops = {
    active: active
  };
if (message.author.bot) return;


    const prefix = ";";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if (command) 
        command.run(bot, message, args, ops, emojis);
}