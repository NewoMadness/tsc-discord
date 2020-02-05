const { RichEmbed } = require('discord.js')
const db = require('quick.db')
module.exports = {
  name: 'test',
  category: 'Staff Only',
  description: 'Developer only, testing',
  aliases: [],
  run: async (bot, message, args, ops, emojis) => {
    if (message.author.id !== '456641711486009355') return message.channel.send('Not for your eyes')
    //message.guild.channels.forEach(channel => console.log(channel.name + ' ' + channel.id))
//bot.channels.get('668898458320764953').delete();
 /* bot.channels.get('632920904535375934').overwritePermissions(
        message.author.id,
        { 'READ_MESSAGE_HISTORY': true,
        'SEND_MESSAGES': true,
         'VIEW_CHANNEL': true }
    )*/
 /*   db.delete(`devapp1_456641711486009355`);
   db.delete(`devapp2_456641711486009355`);
  db.delete(`devapp3_456641711486009355`);
  db.delete(`devapp4_456641711486009355`);
  db.delete(`devapp5_456641711486009355`);*/
//message.channel.send('Me using emojis outside the server: ' + emojis.partyparrot)
/*let embed = new RichEmbed()
.setTitle(`\`Update 2.4.0:\``)
.setDescription(`<@&670067159514218558> New Update!`)
.setColor('RANDOM')
.addField(`Added:`, `New application feature in <#667246141494263819> \n\n New chat games, Your house will gain points if you get it right, and every month we reward the one with the most points!
You can do ;points to see the leaderboard!`)
.addField(`Removed:`, `House command, made into GUI for human verification in <#636001830345900033>`)
.setFooter('If you would want to see new commands please do c!suggest (Suggestion) inside of #🌸┃bot-cmd and it will be voted on by the staff. If the vote passes or the dev team REALLY REALLY like the suggestion it will be added for the next update!!!');
message.channel.send(embed)
  //  bot.channels.get('630206335085969418').fetchMessage('672301044218331150').then(msg => msg.delete());
//message.guild.emojis.forEach(emoji => console.log(`"${emoji.animated.name}": "<a:${emoji.animated.name}:${emoji.animated.id}>"`));
    let embed = new RichEmbed()
    .setTitle(`Hello! Welcome to TSC. Please ensure you have read and understand the contents in #rules before verifying and entering the server.`)
.setColor("RANDOM")
.setDescription(`Here at TSC we have a unique verification process that will sort you into a house. You can either do a series of quizzes to be sorted into the house or allow destiny to decide your fate.

Our houses are:
Peridot: House of Compassion and Brilliance 

Quartz: House of Bravery and Loyalty 

Amethyst: House of Sophistication and Beauty

Sapphire: House of Friendliness and Uniqueness

Once you have been sorted into a house you will gain access to the server and the ability to take part in our chat games, boss battles and competitions.

React below with a :orange_heart: to start the quiz or allow fate to decide for you by reacting with :blue_heart:.`)
    .setThumbnail(bot.user.displayAvatarURL);
    bot.channels.get('636001830345900033').fetchMessage('667242409339387934')
  .then(message =>{
      message.edit(embed)
    })*/
  let first = new RichEmbed()
  .setTitle('Welcome')
  .setDecription('Welcome to The Study Corner. Before entering the rest of the server please take some time to read the following and verify yourself through our unique verification system (houses). The GUI to become verified is located at <#636001830345900033>.');
  let second = new RichEmbed()
  }
   }