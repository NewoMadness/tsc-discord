const Discord = require('discord.js');
const overide = '456641711486009355' || '208192988634021889' || '208192988634021889';
const db = require('quick.db')
var schedule = require('node-schedule');
const fs = require('fs')
module.exports = {
  name: [],
  run: (bot, message, args) => {
const quiz = require('./chatgame.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
    
let game = new Discord.RichEmbed().setTitle('A wild chat game appeared!').setDescription(item.question).setFooter('If you get the answer in the next 2 minutes, your house gets 5 points!').setColor('RANDOM');
bot.channels.get('630206335085969418').send(game).then((lastEmbed) => {
 let collector = lastEmbed.channel.createMessageCollector(filter, { maxMatches: 1, time: 120000, errors: ['time'] })
		collector.on('collect', collected => {
    //  if (collected.author.id === '283132623122071552') return message.channel.send('No sceptile')
if (lastEmbed.guild.members.get(collected.author.id).roles.has('652137997525057557')) {
  bot.channels.get('630206335085969418').send(`${collected.author} got the correct answer! 5 points to the house of Peridot!`);
 return  db.add(`MontikeePoints`, 5)
}
else if (lastEmbed.guild.members.get(collected.author.id).roles.has('652137993594732564')) {
bot.channels.get('630206335085969418').send(`${collected.author} got the correct answer! 5 points to the house of Quartz!`);
  return db.add(`NatsukianPoints`, 5)
}
  else  if (lastEmbed.guild.members.get(collected.author.id).roles.has('652137995532763136')) {
  bot.channels.get('630206335085969418').send(`${collected.author} got the correct answer! 5 points to the house of Amethyst!`);
   return   db.add(`YuriaPoints`, 5)
}
  else  if (lastEmbed.guild.members.get(collected.author.id).roles.has('652137999496380417')) {
bot.channels.get('630206335085969418').send(`${collected.author} got the correct answer! 5 points to the house of Sapphire!`);
return db.add(`SayorieanPoints`, 5)
}
  })
		collector.on('end', collected => {
      if (collected.size === 0) {
			return bot.channels.get('630206335085969418').send('Looks like nobody got the answer this time. The correct answer was: **' + item.answers + '**');
      }
      else {
        return console.log('error')
      } 
  })	
});
function listJson(jsonfile){ // List all json file /return json data
        let  data = fs.readFileSync(jsonfile);
            let json= JSON.parse(data);
            return json;
}
  }
}