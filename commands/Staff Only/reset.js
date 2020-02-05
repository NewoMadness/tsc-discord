const Discord = require('discord.js');
const db = require('quick.db')
const prompter = require('discordjs-prompter')

module.exports = {
  name: "reset",
description: 'Developer/Owner only, runs a string of code',
  category: 'Staff Only',
  run: async (bot, message, args) => {
    if (message.author.id !== '287159796988248064') {
  if (message.author.id !== '456641711486009355') return message.channel.send('Not for your eyes');
    }
  else {
    prompter
      .reaction(message.channel, {
        question: 'Are you sure?',
        userId: message.author.id,
      })
      .then(async response => {
        // Response is false if time runs out
        if (!response) return message.reply('You took too long!');
        // Returns 'yes' if user confirms and 'no' if ser cancels.
        if (response === 'yes') {
          message.channel.send('Alright, resetting the points for all houses...')
          let Sayoriean = await db.fetch(`SayorieanPoints`)
          let Montikee = await db.fetch(`MontikeePoints`)
          let Yuria = await db.fetch(`YuriaPoints`)
          let Natsukian = await db.fetch(`NatsukianPoints`)
          db.subtract(`SayorieanPoints`, Sayoriean);
          db.subtract(`MontikeePoints`, Montikee)
          db.subtract(`YuriaPoints`, Yuria)
          db.subtract(`NatsukianPoints`, Natsukian)
          setTimeout(() => {
            message.channel.send('Complete reset of House point database complete.')
          }, 3000)
        }
        if (response === 'no') return message.channel.send('Cancelling reset of house points...');
      });
  }
  }
  }