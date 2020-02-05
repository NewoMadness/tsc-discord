const fs = require('fs')
const Discord = require('discord.js')
const db = require('quick.db')
const prompter = require('discordjs-prompter');

module.exports = {
  name: 'houses',
  description: 'Explains the houses, their functions, and the benefits',
  category: 'Helpful',
  run: async (bot, message,args) => {
let second = new Discord.RichEmbed();
    second.setColor("RANDOM")
    .setDescription("There are four houses: \n\nMonikiee: House of Compassion and Brilliance \n\nNatsukian: House of Bravery and Loyalty \n\n Yuria: House of Sophistication and Beauty\n\n Sayoriean: House of Friendliness and Uniqueness\n\nYou can be assigned to one of these houses to take part in events, tournaments and other exciting activities.")
message.channel.send(second)
  }
};