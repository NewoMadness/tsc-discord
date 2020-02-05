const fs = require('fs')
const Discord = require("discord.js")

module.exports = {
  name: "say",
  category: 'Miscellaneous',
  description: 'Makes the bot say whatever you want!',
  run: (bot, message, args, ops) => {
  
  //variables
  let mention = message.mentions.members.first() || message.mentions.channels.first()
  let guild = message.guild
  let reason = args.slice(1).join(" ")
  let reason2 = args.slice(2).join(" ")
  let arg = args.join(" ")
  let embed = args[0] === "embed"
  
  //embeds
  let reasonE2 = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setDescription(reason2)
  
  let reasonE = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setDescription(reason)
  
  let argE = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setDescription(reason)
  
  //msg & code
  
  if(!arg){
    message.channel.send("Error? \n*USAGE:* `" + ';' + "tell (EMBED) (@MENTION) (text)`")
  };
  
  if(!mention && !embed){
    message.delete()
    message.channel.send(arg)
  }
  
  if(mention && !embed){
    message.delete()
    mention.send(reason)
  }
  
  if(!mention && embed){
    message.delete()
    message.channel.send(reasonE)
  }
  
  if(mention && embed){
    message.delete()
    mention.send(reasonE2)
  }
  
  
}
}
