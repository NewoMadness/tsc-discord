const fs = require('fs')
const Discord = require('discord.js')
const prefix = ';'
const { stripIndents } = require("common-tags")
const db = require('quick.db')
module.exports = {
  name: 'points',
  description: 'Shows the total points for each house',
  category: 'Helpful',
  aliases: ['pts', 'pnts'],
  run: async (bot, message, args, ops) => {
   let Sayoriean = await db.fetch(`SayorieanPoints`)
   if (Sayoriean === null) Sayoriean = 0
   let Montikee = await db.fetch(`MontikeePoints`)
   if (Montikee === null) Montikee = 0
   let Yuria = await db.fetch(`YuriaPoints`)
   if (Yuria === null) Yuria = 0
   let Natsukian = await db.fetch(`NatsukianPoints`)
   if (Natsukian === null) Natsukian = 0
   let embed = new Discord.RichEmbed()
   .setAuthor('The Study Corner House Leaderboard', bot.user.displayAvatarURL)
   .setColor("RANDOM")
   .setThumbnail(bot.user.displayAvatarURL)
   .setDescription(`**House of Amethyst:** ${Yuria} \n\n**House of Quartz:** ${Natsukian} \n\n**House of Peridot:** ${Montikee}\n\n**House of Sapphire: **${Sayoriean}`);
    message.channel.send(embed)
  }
}