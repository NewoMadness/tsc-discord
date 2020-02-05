const Discord = require("discord.js")
const db = require('quick.db')

module.exports = bot => {
    let channel = bot.channels.get('636001830345900033');
  const filter = (reaction, user) => reaction.emoji.name === "🧡" && reaction.emoji.name === "💙";
  channel.fetchMessage('667242409339387934')
  .then(bot.on('messageReactionAdd', async (messageReaction, user) => { 
    if(user.bot) return; 
    const { message, emoji } = messageReaction; 
    if(message.id === "667242409339387934") {
     if(emoji.name === "🧡") {
       const fs = require('fs')
const Discord = require('discord.js')
const prompter = require('discordjs-prompter');
if (message.guild.members.get(user.id).roles.has('652137997525057557') || message.guild.members.get(user.id).roles.has('652137993594732564') || message.guild.members.get(user.id).roles.has('554813947925233695') || message.guild.members.get(user.id).roles.has('652137999496380417')) return user.send('Sorry, but you\'ve already used this feature! DM or ping Newo if you feel something is wrong!')
  
  let foot = "Please Remember that the reaction order may vary."
  
  const ep = bot.emojis.find(emoji => emoji.name === "ep")
  const ic = bot.emojis.find(emoji => emoji.name === "ic")
  
  //EMBEDS
  let first = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("You've discovered TSC houses! \nChoose your own destiny, or let fate decide for you. \n\nClick 🧡 to take the quiz. \nClick 💙 to let destiny decide.")
    .setFooter(foot)
  
  let second = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("Welcome! You have chosen to take the quiz. Just as a reminder, there are four houses: \n\nPeridot: House of Compassion and Brilliance \n\nQuartz: House of Bravery and Loyalty \n\n Amethyst: House of Sophistication and Beauty\n\n Sapphire: House of Friendliness and Uniqueness\n\nYou will shortly be assigned to one of these houses to take part in events, tournaments and other exciting activities.")
    .setFooter(foot)
  
  let third = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("If you could choose 1 super power, which would it be? \n🧡 Invisibility \n💙 Flying \n💚 Super Strength \n💛 Mind Reading")
    .setFooter(foot)
  
  let fourth = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("You can't find the movie you want to watch. What do you do? \n\n🧡 Go to bed, you were too tired to watch a movie anyways. \n\n💙 Keep searching only to realize you misspelled it. \n\n💚 Stream it, because that's definitely not illegal. \n\n💛 Go read a book, it's better for relaxing.")
    .setFooter(foot)
  
  let fifth = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("How do you eat your cereal? \n\n🧡 Cereal, then milk. \n\n💙 Milk, then cereal. \n\n💚 Cereal with no milk. \n\n💛 Milk with no cereal.")
    .setFooter(foot)
  
  let sixth = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("Your dog fell asleep on your feet but you want to get up, what do you do? \n\n🧡 Get up, a dog can't prevent you from doing what you want. \n\n💙 Leave him there because according to pupper's law you cant't wake him/her up. \n\n💚 Try to slowly move him/her without waking him/her up. \n\n💛 Take pictures and send them on social media, because he/her is so #cute when he/her's sleeping")
    .setFooter(foot)
  
 let seventh = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("You fell down and scraped your knee, what do you do? \n\n🧡 call for mommy, her kisses always seemed to have magical healing powers. \n\n💙 stay and take deep breaths in and out, as if that was going to help. \n\n💚 get up and keep walking, ‘tis but a scratch. \n\n💛 stay there and contemplate how you got there so you can improve.")
    .setFooter(foot)
  //MESSAGE & CODES    
     const response3 = await prompter.choice(bot.channels.get('636001830345900033'), {
    question: third,
    choices: ['🧡', '💙', '💚', '💛'],
  }); 
    if (response3 === '🧡') {
db.add(`house1${user.id}`, 1)
} else if (response3 === '💙') {
db.add(`house2${user.id}`, 1)
} else if (response3 === '💚') {
db.add(`house3${user.id}`, 1)
} else if (response3 === '💛') {
db.add(`house4${user.id}`, 1)
}
    
    const response4 = await prompter.choice(bot.channels.get('636001830345900033'), {
    question: fourth,
    choices: ['🧡', '💙', '💚', '💛'],
  }); 
    if (response4 === '🧡') {
db.add(`house4${user.id}`, 1)
} else if (response4 === '💙') {
db.add(`house3${user.id}`, 1)
} else if (response4 === '💚') {
db.add(`house1${user.id}`, 1)
} else if (response4 === '💛') {
db.add(`house2${user.id}`, 1)
}
    
    
    const response5 = await prompter.choice(bot.channels.get('636001830345900033'), {
    question: fifth,
    choices: ['🧡', '💙', '💚', '💛'],
  }); 
    if (response5 === '🧡') {
db.add(`house3${user.id}`, 1)
} else if (response5 === '💙') {
db.add(`house2${user.id}`, 1)
} else if (response5 === '💚') {
db.add(`house4${user.id}`, 1)
} else if (response5 === '💛') {
db.add(`house1${user.id}`, 1)
}
    
    const response6 = await prompter.choice(bot.channels.get('636001830345900033'), {
    question: sixth,
    choices: ['🧡', '💙', '💚', '💛'],
  }); 
    if (response6 === '🧡') {
db.add(`house1${user.id}`, 1)
} else if (response6 === '💙') {
db.add(`house3${user.id}`, 1)
} else if (response6 === '💚') {
db.add(`house2${user.id}`, 1)
} else if (response6 === '💛') {
db.add(`house4${user.id}`, 1)
}
    
    const response7 = await prompter.choice(bot.channels.get('636001830345900033'), {
    question: seventh,
    choices: ['🧡', '💙', '💚', '💛'],
  }); 
    if (response7 === '🧡') {
db.add(`house4${user.id}`, 1)
} else if (response7 === '💙') {
db.add(`house2${user.id}`, 1)
} else if (response7 === '💚') {
db.add(`house3${user.id}`, 1)
} else if (response7 === '💛') {
db.add(`house1${user.id}`, 1)
}
    
    let house1 = await db.fetch(`house1${user.id}`);  
    if (house1 = null) {
      db.add(`house1${user.id}`, 1)
    }
    let house2 = await db.fetch(`house2${user.id}`);
    if (house2 = null) {
      db.add(`house2${user.id}`, 1)
    }
    let house3 = await db.fetch(`house3${user.id}`);
    if (house1 = null) {
      db.add(`house1${user.id}`, 1)
    }
    let house4 = await db.fetch(`house4${user.id}`);
    if (house1 > house2 && house1 > house3 && house1 > house4) {
          user.send('Congrats! You were chosen to be in the House of Peridot!')
          var house1role = message.guild.roles.find(role => role.name === "House of Peridot");
message.guild.members.get(user.id).addRole('652137997525057557');
        return  db.add(`commandUsed_${user.id}`, 1);
    }
  const house11 = await db.fetch(`house1${user.id}`);  
    const house22 = await db.fetch(`house2${user.id}`);
    const house33 = await db.fetch(`house3${user.id}`);
    const house44 = await db.fetch(`house4${user.id}`);
  if (house22 > house11 && house22 > house33 && house22 > house44) {
          user.send('Congrats! You were chosen to be in the House of Quartz')
         // var house2role = message.guild.roles.find(role => role.name === "House of Quartz");
message.guild.members.get(user.id).addRole('652137993594732564')
       return   db.add(`commandUsed${user.id}`, 1);
    
    } else if (house33 > house11 && house33 > house22 && house33 > house44) {
          user.send('Congrats! You were chosen to be in the House of Amethyst!')
var house3role = message.guild.roles.find(role => role.name === "House of Amethyst");
message.guild.members.get(user.id).addRole('652137995532763136')
          return db.add(`commandUsed${user.id}`, 1);
      
    } else if (house44 > house11 && house44 > house22 && house44 > house33) {
          user.send('Congrats! You were chosen to be in the House of Sapphire!')
          var house4role = message.guild.roles.find(role => role.name === "House of Sapphire");
message.guild.members.get(user.id).addRole('652137999496380417');
        return  db.add(`commandUsed${user.id}`, 1);
    } else {
      let houses1 = ['House of Sapphire', 'House of Amethyst', 'House of Quartz', 'House of Peridot']
var randomhouse1 = houses1[Math.floor(Math.random()*houses1.length)];
  user.send(`Congrats! You were chosen to be in the ${randomhouse1}`)
  if (randomhouse1 === 'House of Sapphire'){
    var Sayoriean1 = message.guild.roles.find(role => role.name === "House of Sapphire");
return message.guild.members.get(user.id).addRole('652137999496380417');
  } else if (randomhouse1 === 'House of Amethyst'){
    var Amethyst1 = message.guild.roles.find(role => role.name === "House of Amethyst");
return message.guild.members.get(user.id).addRole('652137995532763136');
  }else if (randomhouse1 === 'House of Quartz'){
    var Quartz1 = message.guild.roles.find(role => role.name === "House of Quartz");
return message.guild.members.get(user.id).addRole('652137993594732564');
  }else if (randomhouse1 === 'House of Peridot'){
    var Peridot1 = message.guild.roles.find(role => role.name === "House of Peridot");
return message.guild.members.get(user.id).addRole('652137997525057557');
  }
}
     } if (emoji.name === '💙') {
       if (message.guild.members.get(user.id).roles.has('652137997525057557') || message.guild.members.get(user.id).roles.has('652137993594732564') || message.guild.members.get(user.id).roles.has('554813947925233695') || message.guild.members.get(user.id).roles.has('652137999496380417')) return user.send('Sorry, but you\'ve already used this feature! DM or ping Newo if you feel something is wrong!')
      const fs = require('fs')
const Discord = require('discord.js')
const db = require('quick.db')
const prompter = require('discordjs-prompter');
db.add(`commandUsed_${user.id}`, 1);
  let houses = ['House of Sapphire', 'House of Amethyst', 'House of Quartz', 'House of Peridot']
var randomhouse = houses[Math.floor(Math.random()*houses.length)];

  if (randomhouse === 'House of Sapphire'){
    var Sapphire = message.guild.roles.find(role => role.name === "House of Sapphire");
message.guild.members.get(user.id).addRole('652137999496380417');
  } else if (randomhouse === 'House of Amethyst'){
    var Amethyst = message.guild.roles.find(role => role.name === "House of Amethyst");
message.guild.members.get(user.id).addRole('652137995532763136');
  }else if (randomhouse === 'House of Quartz'){
    var Natsukian = message.guild.roles.find(role => role.name === "House of Quartz");
message.guild.members.get(user.id).addRole('652137993594732564');
  }else if (randomhouse === 'House of Peridot'){
    var Peridot = message.guild.roles.find(role => role.name === "House of Peridot");
message.guild.members.get(user.id).addRole('652137997525057557');
  }
    user.send(`Congrats! You were chosen to be in the ${randomhouse}!`)   
}
    }
    
      
})) 
}