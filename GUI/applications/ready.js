const Discord = require("discord.js")
const { RichEmbed } = require('discord.js') 
const db = require('quick.db')
const fs = require('fs')
const Prompter = require('discordjs-prompter');
module.exports = async bot => {
  let promoted = new RichEmbed();
  let instructions = new RichEmbed()
  .setTitle('There are 4 things you can do once finished reviewing the application.')
  .addField('1.', ';deny - This denies the application, will ask 3 reasons why one by one, archives it to the archive channel and sends the user the Denied message from the TSC Hand Book with the reason(s) provided in the format (for [reason|reason|reason] the bot will post each new reason on a new line in bold. This will also block the user from making an application for that specific role for at least 2 weeks')
  .addField('2.', ';interview - This sends the user the Interview message from the TSC handbook asking them to provide a date and time they are available, when they message back the bot sends their message to this application channel and you can handle it from there. This will also change the channel’s name to the 🧡 to 💛.')
  .addField('3.', ';start-interview [app-channel] [verbal/text] - command will be sent once the staff member conducting the interview has joined a Voice Channel or Text channel with the interviewee. If you chose verbal the bot will join the channel and record the call until you use the command ;end-interview. The bot will then post the audio file to the applications channel. If you choose text the bot will record the conversation and post it in the applications channel as a text file or web file. Ending the interview will change the channels emote from 💛 to 💙.')
  .addField('4.', ';accept - Pretty self explanitory, adds them to the staff server and does all the promotion work for you')
  .setColor('RANDOM');
  let first = new RichEmbed()
    .setColor('RANDOM')
.setTitle(`Please react with the corresponding emoji to the role you wish to apply for:`)
    .setDescription(`
🗣 = Server Moderator
👨‍🏫 = Server Tutor
🤩 = Server Advisor
🤖 = Developer
🎉 = Event Team
`);
 // let questions = JSON.parse(fs.readFile("./appquestions.json", "utf8"));
  const {Developer, Advisor, Tutor, Mod, Event} = require('./appquestions.json');
  //console.log(Developer[0].q1)
  let qembed = new RichEmbed()
  .setColor('RANDOM');
  let finished = new RichEmbed()
  .setColor('RANDOM')
  .setDescription(`Thank you for taking the time to apply here on The Study Corner. It can take anywhere between 24 hours to a week for the Management Team to review an application. You will be contacted VIA DMs when the Management Team has made a decision.
Regards,
TSC Server Management.`)
  .setThumbnail(bot.user.displayAvatarURL);
  let channel = bot.channels.get('632389626639679501');
  const filter = (reaction, user) => reaction.emoji.name === "✅"
  channel.fetchMessage('668862680114790420')
  .then(bot.on('messageReactionAdd', async (messageReaction, user) => { 
    if(user.bot) return; 
    const { message, emoji } = messageReaction; 
    if(message.id === "668862680114790420") {
     if(emoji.name === "✅") {
       db.add(`TotalApplications_${message.guild.id}`, 1)
       let appnumber = db.fetch(`TotalApplications_${message.guild.id}`)
       message.guild.createChannel(`Application`, "test").then(async channel => {
         channel.overwritePermissions(
        user.id,
        { 'READ_MESSAGE_HISTORY': true,
        'SEND_MESSAGES': true,
         'VIEW_CHANNEL': true }
    )
         let everyone = message.guild.roles.find('name', '@everyone');
         channel.overwritePermissions(
        everyone,
        { 'READ_MESSAGE_HISTORY': false,
        'SEND_MESSAGES': false,
         'VIEW_CHANNEL': false }
    )
         channel.send(`<@${user.id}>`)
        const response1 = await Prompter.choice(channel, {
    question: first,
    choices: ['🗣', '👨‍🏫', '🤩', '🤖', '🎉'],
  }); 
      if (response1 === '🎉') {
           qembed.setTitle('You chose **EVENT TEAM**. Question 1:')
           qembed.setDescription(Event[0].q1)
         Prompter
      .message(channel, {
        question: qembed,
        userId: user.id,
        max: 1,
      })
      .then(responses => {
qembed.setTitle('Question 2:')
           qembed.setDescription(Event[1].q2)
           let answer2 = responses.first();
           Prompter
            .message(channel, {
             question: qembed,
            userId: user.id,
            max: 1,
            })
           
            .then(responses => {
             qembed.setTitle('Question 3:')
             qembed.setDescription(Event[2].q3)
              let answer3 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
        
             .then(responses => {
                 qembed.setTitle('Question 4:')
                 qembed.setDescription(Event[3].q4)
               let answer4 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             .then(responses => {
                 qembed.setTitle('Question 5:')
                 qembed.setDescription(Event[4].q5)
               let answer5 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 6:')
                 qembed.setDescription(Event[5].q6)
               let answer6 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 7:')
                 qembed.setDescription(Advisor[6].q7)
               let answer7 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 8:')
                 qembed.setDescription(Event[7].q8)
               let answer8 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 9:')
                 qembed.setDescription(Event[8].q9)
               let answer9 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 10:')
                 qembed.setDescription(Event[9].q10)
               let answer10 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 11:')
                 qembed.setDescription(Event[10].q11)
               let answer11 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 12:')
                 qembed.setDescription(Event[11].q12)
               let answer12 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(async responses => {
              let answer13 = responses.first();
                 user.send(finished);
                 channel.delete();
                 bot.guilds.get('632383254984523776').createChannel(`🧡${user.username}`, "test").then(async channel => {
         channel.overwritePermissions(
        user.id,
        { 'READ_MESSAGE_HISTORY': true,
        'SEND_MESSAGES': true,
         'VIEW_CHANNEL': true }
    )
         let everyone = message.guild.roles.find('name', '@everyone');
         channel.overwritePermissions(
        everyone,
        { 'READ_MESSAGE_HISTORY': false,
        'SEND_MESSAGES': false,
         'VIEW_CHANNEL': false }
    )
                 let qna = new RichEmbed()
                 .setTitle(`Event Team Application for ${user.username}`)
                 .setColor('RANDOM')
                 .addField(`Question 1: ${Event[0].q1}`, answer2)
                 .addField(`Question 2: ${Event[1].q2}`, answer3)
                 .addField(`Question 3: ${Event[2].q3}`, answer4)
                 .addField(`Question 4: ${Event[3].q4}`, answer5)
                 .addField(`Question 5: ${Event[4].q5}`, answer6)
                 .addField(`Question 6: ${Event[5].q6}`, answer7)
                 .addField(`Question 7: ${Event[6].q7}`, answer8)
                 .addField(`Question 8: ${Event[7].q8}`, answer9)
                 .addField(`Question 9: ${Event[8].q9}`, answer10)
                 .addField(`Question 10: ${Event[9].q10}`, answer11)
                 .addField(`Question 11: ${Event[10].q11}`, answer12)
                 .addField(`Question 12: ${Event[11].q12}`, answer13)
                 channel.send(qna)
                    channel.send(instructions)
                 })
               })
               })
               })
               })
       })
               })
               })
               })
               })
               })
               })
         })
      }
        
       if(response1 === '🗣') {
         qembed.setTitle('You chose **MODERATOR**. Question 1.')
       qembed.setDescription(Mod[0].q1)
         Prompter
      .message(channel, {
        question: qembed,
        userId: user.id,
        max: 1,
      })
      .then(responses => {
qembed.setTitle('Question 2:')
           qembed.setDescription(Mod[1].q2)
           let answer2 = responses.first();
           Prompter
            .message(channel, {
             question: qembed,
            userId: user.id,
            max: 1,
            })
           
            .then(responses => {
             qembed.setTitle('Question 3:')
             qembed.setDescription(Mod[2].q3)
              let answer3 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
        
             .then(responses => {
                 qembed.setTitle('Question 4:')
                 qembed.setDescription(Mod[3].q4)
               let answer4 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             .then(responses => {
                 qembed.setTitle('Question 5:')
                 qembed.setDescription(Mod[4].q5)
               let answer5 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 6:')
                 qembed.setDescription(Mod[5].q6)
               let answer6 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 7:')
                 qembed.setDescription(Mod[6].q7)
               let answer7 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 8:')
                 qembed.setDescription(Mod[7].q8)
               let answer8 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 9:')
                 qembed.setDescription(Mod[8].q9)
               let answer9 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 10:')
                 qembed.setDescription(Mod[9].q10)
               let answer10 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 11:')
                 qembed.setDescription(Mod[10].q11)
               let answer11 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 12:')
                 qembed.setDescription(Mod[11].q12)
               let answer12 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 13:')
                 qembed.setDescription(Mod[12].q13)
               let answer13 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 14:')
                 qembed.setDescription(Mod[13].q14)
               let answer14 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
            
                 .then(responses => {
                 qembed.setTitle('Question 15:')
                 qembed.setDescription(Mod[14].q15)
               let answer15 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
                 .then(async responses => {
              let answer16 = responses.first();
                 user.send(finished);
                 channel.delete();
                  bot.guilds.get('632383254984523776').createChannel(`🧡${user.username}`, "test").then(async channel => {
         channel.overwritePermissions(
        user.id,
        { 'READ_MESSAGE_HISTORY': true,
        'SEND_MESSAGES': true,
         'VIEW_CHANNEL': true }
    )
         let everyone = message.guild.roles.find('name', '@everyone');
         channel.overwritePermissions(
        everyone,
        { 'READ_MESSAGE_HISTORY': false,
        'SEND_MESSAGES': false,
         'VIEW_CHANNEL': false }
    )
                 let qna = new RichEmbed()
                 .setTitle(`Mod Application for ${user.username}`)
                 .setColor('RANDOM')
                 .addField(`Question 1: ${Mod[0].q1}`, answer2)
                 .addField(`Question 2: ${Mod[1].q2}`, answer3)
                 .addField(`Question 3: ${Mod[2].q3}`, answer4)
                 .addField(`Question 4: ${Mod[3].q4}`, answer5)
                 .addField(`Question 5: ${Mod[4].q5}`, answer6)
                 .addField(`Question 6: ${Mod[5].q6}`, answer7)
                 .addField(`Question 7: ${Mod[6].q7}`, answer8)
                 .addField(`Question 8: ${Mod[7].q8}`, answer9)
                 .addField(`Question 9: ${Mod[8].q9}`, answer10)
                 .addField(`Question 10: ${Mod[9].q10}`, answer11)
                 .addField(`Question 11: ${Mod[10].q11}`, answer12)
                 .addField(`Question 12: ${Mod[11].q12}`, answer13)
                 .addField(`Question 13: ${Mod[12].q13}`, answer14)
                 .addField(`Question 14: ${Mod[13].q14}`, answer15)
                 .addField(`Question 15: ${Mod[14].q15}`, answer16)
                 channel.send(qna)
                    channel.send(instructions)
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
       })
       }
       if(response1 === '🤩') {
         qembed.setTitle('You chose **ADVISOR**. Question 1:')
           qembed.setDescription(Advisor[0].q1)
         Prompter
      .message(channel, {
        question: qembed,
        userId: user.id,
        max: 1,
      })
      .then(responses => {
qembed.setTitle('Question 2:')
           qembed.setDescription(Advisor[1].q2)
           let answer2 = responses.first();
           Prompter
            .message(channel, {
             question: qembed,
            userId: user.id,
            max: 1,
            })
           
            .then(responses => {
             qembed.setTitle('Question 3:')
             qembed.setDescription(Advisor[2].q3)
              let answer3 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
        
             .then(responses => {
                 qembed.setTitle('Question 4:')
                 qembed.setDescription(Advisor[3].q4)
               let answer4 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             .then(responses => {
                 qembed.setTitle('Question 5:')
                 qembed.setDescription(Advisor[4].q5)
               let answer5 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 6:')
                 qembed.setDescription(Advisor[5].q6)
               let answer6 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 7:')
                 qembed.setDescription(Advisor[6].q7)
               let answer7 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 8:')
                 qembed.setDescription(Advisor[7].q8)
               let answer8 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 9:')
                 qembed.setDescription(Advisor[8].q9)
               let answer9 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 10:')
                 qembed.setDescription(Advisor[9].q10)
               let answer10 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 11:')
                 qembed.setDescription(Advisor[10].q11)
               let answer11 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 12:')
                 qembed.setDescription(Advisor[11].q12)
               let answer12 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 13:')
                 qembed.setDescription(Advisor[12].q13)
               let answer13 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(async responses => {
              let answer14 = responses.first();
                 user.send(finished);
                 channel.delete();
                 bot.guilds.get('632383254984523776').createChannel(`🧡${user.username}`, "test").then(async channel => {
  
                 bot.guilds.get('632383254984523776').createChannel(`🧡${user.username}`, "test").then(async channel => {
         channel.overwritePermissions(
        user.id,
        { 'READ_MESSAGE_HISTORY': true,
        'SEND_MESSAGES': true,
         'VIEW_CHANNEL': true }
    )
         let everyone = message.guild.roles.find('name', '@everyone');
         channel.overwritePermissions(
        everyone,
        { 'READ_MESSAGE_HISTORY': false,
        'SEND_MESSAGES': false,
         'VIEW_CHANNEL': false }
    )      
                   let qna = new RichEmbed()
           .setColor('RANDOM')
                 .addField(`Question 1: ${Advisor[0].q1}`, answer2)
                 .addField(`Question 2: ${Advisor[1].q2}`, answer3)
                 .addField(`Question 3: ${Advisor[2].q3}`, answer4)
                 .addField(`Question 4: ${Advisor[3].q4}`, answer5)
                 .addField(`Question 5: ${Advisor[4].q5}`, answer6)
                 .addField(`Question 6: ${Advisor[5].q6}`, answer7)
                 .addField(`Question 7: ${Advisor[6].q7}`, answer8)
                 .addField(`Question 8: ${Advisor[7].q8}`, answer9)
                 .addField(`Question 9: ${Advisor[8].q9}`, answer10)
                 .addField(`Question 10: ${Advisor[9].q10}`, answer11)
                 .addField(`Question 11: ${Advisor[10].q11}`, answer12)
                 .addField(`Question 12: ${Advisor[11].q12}`, answer13)
                 .addField(`Question 13: ${Advisor[12].q13}`, answer14)
                 channel.send(qna)
                    channel.send(instructions)
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
       })
         })
       })
       }
       if(response1 === '👨‍🏫') {
         qembed.setTitle('You chose **TUTOR**. Question 1:')
       
         qembed.setDescription(Tutor[0].q1)
         Prompter
      .message(channel, {
        question: qembed,
        userId: user.id,
        max: 1,
      })
      .then(responses => {
qembed.setTitle('Question 2:')
           qembed.setDescription(Tutor[1].q2)
           let answer2 = responses.first();
           Prompter
            .message(channel, {
             question: qembed,
            userId: user.id,
            max: 1,
            })
           
            .then(responses => {
             qembed.setTitle('Question 3:')
             qembed.setDescription(Tutor[2].q3)
              let answer3 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
        
             .then(responses => {
                 qembed.setTitle('Question 4:')
                 qembed.setDescription(Tutor[3].q4)
               let answer4 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             .then(responses => {
                 qembed.setTitle('Question 5:')
                 qembed.setDescription(Tutor[4].q5)
               let answer5 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 6:')
                 qembed.setDescription(Tutor[5].q6)
               let answer6 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 7:')
                 qembed.setDescription(Tutor[6].q7)
               let answer7 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 8:')
                 qembed.setDescription(Tutor[7].q8)
               let answer8 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 9:')
                 qembed.setDescription(Tutor[8].q9)
               let answer9 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 10:')
                 qembed.setDescription(Tutor[9].q10)
               let answer10 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 11:')
                 qembed.setDescription(Tutor[10].q11)
               let answer11 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 12:')
                 qembed.setDescription(Tutor[11].q12)
               let answer12 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(responses => {
                 qembed.setTitle('Question 13:')
                 qembed.setDescription(Tutor[12].q13)
               let answer13 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
                 .then(async responses => {
              let answer14 = responses.first();
                 user.send(finished);
                 channel.delete();
                  bot.guilds.get('632383254984523776').createChannel(`🧡${user.username}`, "test").then(async channel => {
 
                  bot.guilds.get('632383254984523776').createChannel(`🧡${user.username}`, "test").then(async channel => {
         channel.overwritePermissions(
        user.id,
        { 'READ_MESSAGE_HISTORY': true,
        'SEND_MESSAGES': true,
         'VIEW_CHANNEL': true }
    )
         let everyone = message.guild.roles.find('name', '@everyone');
         channel.overwritePermissions(
        everyone,
        { 'READ_MESSAGE_HISTORY': false,
        'SEND_MESSAGES': false,
         'VIEW_CHANNEL': false }
    )     .setColor('RANDOM')
                    let qna = new RichEmbed()
                 .addField(`Question 1: ${Tutor[0].q1}`, answer2)
                 .addField(`Question 2: ${Tutor[1].q2}`, answer3)
                 .addField(`Question 3: ${Tutor[2].q3}`, answer4)
                 .addField(`Question 4: ${Tutor[3].q4}`, answer5)
                 .addField(`Question 5: ${Tutor[4].q5}`, answer6)
                 .addField(`Question 6: ${Tutor[5].q6}`, answer7)
                 .addField(`Question 7: ${Tutor[6].q7}`, answer8)
                 .addField(`Question 8: ${Tutor[7].q8}`, answer9)
                 .addField(`Question 9: ${Tutor[8].q9}`, answer10)
                 .addField(`Question 10: ${Tutor[9].q10}`, answer11)
                 .addField(`Question 11: ${Tutor[10].q11}`, answer12)
                 .addField(`Question 12: ${Tutor[11].q12}`, answer13)
                 .addField(`Question 13: ${Tutor[12].q13}`, answer14)
                 channel.send(qna)
                    channel.send(instructions)
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
               })
       })
       })
         })
       }
       if(response1 === '🤖') {
         qembed.setTitle('You chose **DEVELOPER**. Question 1:')
           qembed.setDescription(Developer[0].q1)
         Prompter
      .message(channel, {
        question: qembed,
        userId: user.id,
        max: 1,
      })
      .then(responses => {
qembed.setTitle('Question 2:')
           qembed.setDescription(Developer[1].q2)
           let devanswer1 = responses.first();
           Prompter
            .message(channel, {
             question: qembed,
            userId: user.id,
            max: 1,
            })
           
            .then(responses => {
             qembed.setTitle('Question 3:')
             qembed.setDescription(Developer[2].q3)
              let devanswer2 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
          
             .then(responses => {
                 qembed.setTitle('Question 4:')
                 qembed.setDescription(Developer[3].q4)
               let devanswer3 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
             
             .then(responses => {
                 qembed.setTitle('Question 5:')
                 qembed.setDescription(Developer[4].q5)
               let devanswer4 = responses.first();
               Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
                 
                 .then(async responses => {
                 let devanswer5 = responses.first();
                 qembed.setTitle('Question6')
                 qembed.setDescription(Developer[5].q6)
                 Prompter
                .message(channel, {
                question: qembed,
                userId: user.id,
                max: 1,
                })
                 .then(async responses => {
              let devanswer6 = responses.first();
                 user.send(finished);
                 channel.delete();
                  bot.guilds.get('632383254984523776').createChannel(`🧡${user.username}`, "test").then(async channel => {
         channel.overwritePermissions(
        user.id,
        { 'READ_MESSAGE_HISTORY': true,
        'SEND_MESSAGES': true }
        )
         channel.overwritePermissions(
        user.id,
        { 'READ_MESSAGE_HISTORY': true,
        'SEND_MESSAGES': true,
         'VIEW_CHANNEL': true }
    )
         let everyone = message.guild.roles.find('name', '@everyone');
         channel.overwritePermissions(
        everyone,
        { 'READ_MESSAGE_HISTORY': false,
        'SEND_MESSAGES': false,
         'VIEW_CHANNEL': false }
           )
                 let qna = new RichEmbed()
                 .setColor('RANDOM')
                 .addField('Question 1: How old are you?', devanswer1)
                 .addField('Question 2: What timezone are you in?', devanswer2)
                 .addField('Question 3: Why do you want to be a developer here?', devanswer3)
                 .addField('Question 4: Do you know Javascript at all? If so, please correct this statement: \n \`va di = \'Hello!\'\`', `${devanswer4}, ${devanswer5}`)
                 .addField('Question 5: How would you describe yourself?', devanswer6)
                 channel.send(qna)
                    channel.send(instructions).then(bot.on('message', async message => {
                      if(message.author.bot) return;
                      if(message.channel.id !== channel.id) return;
                      if (message.content.startsWith(';deny')) {
                        Prompter
                        .message(channel, {
                        question: 'Alright, what is your first reason to deny their application?',
                        userId: user.id,
                        max: 1,
                        })
             
                         .then(responses => {
                          const r = [responses.first()];
                          Prompter
                          .message(channel, {
                        question: 'Alright, what is your second reason to deny their application?',
                        userId: user.id,
                        max: 1,
                        })
             
                         .then(responses => {
                        r.push(responses.first())
                        Prompter
                          .message(channel, {
                        question: 'Alright, what is your second reason to deny their application?',
                        userId: user.id,
                        max: 1,
                        })
             
                         .then(responses => {
                        r.push(responses.first())
                           message.channel.send('Sending message to user of their denied application...')
                          let denied = new RichEmbed()
                          .setTitle('Your Staff Application has been Denied.')
                          .setColor('#ff0000')
                          .setDescription(`We are sorry to inform you that your staff application has been denied for the following reasons:
- ${r[0]}
- ${r[1]}
- ${r[2]}
Feel free to re-apply in a week.

The Study Corner
Server Management Team Member - ${message.author.username}#${message.author.discriminator}`);
                          user.send(denied).then(channel.send('Denied message sent. Deleting channel in 10 seconds...').then(setTimeout(() => {
                            channel.delete()
                          }, 10000)))
                        })
                      })
                        })
                      }
                      
                      else if (message.content.startsWith(';accept')){
                        var options = {
  maxUses: 1, 
  unique: true
};
if (user != undefined)
  var invite = await bot.channels.get('637430552688984066').createInvite(options)
                    let accepted = new RichEmbed()
                    .setColor('#00ff00')
                    .setTitle('You staff application for Development Team has been accepted.')
                    .setDescription(`You will receive your rank and permissions shortly.

Please ensure that you have read the Staff Hand Book as well as the Announcement Channel. You may start working as soon as you have your permissions. If you have any questions please ask a Server Management Team Member.

Congratulations and good luck!
The Study Corner
Server Management Team Member - ${message.author.username}#${message.author.discriminator}`);
user.send(accepted)
user.send('Please ensure you join the staff server! This link has only one use! ' + `https://discord.gg/${invite.code}`)

                        promoted.setDescription(`<@${user.id}> was promoted to **Developer.** Congrats!`)
                        promoted.setColor('#00ff00');
                        bot.channels.get('632389626639679501').send(promoted);
                        bot.channels.get(channel.id).setName(`💙${user.username}`);
                        bot.guilds.get('630014101887778816').members.find(user.id).setNickname(`「Trial Dev」${user.username}`);
                        bot.guilds.get('630014101887778816').members.find(user.id).addRole('632041104660889601');
                        bot.guilds.get('630014101887778816').members.find(user.id).addRole('632035643895185409');
                        bot.on('guildMemberAdd', async (member, guild) => {
                          if (guild.id !== '632383254984523776') return;
                          if (member.id !== user.id) return;
                          member.setNickname(`Trial Dev | ${member.username}`);
                          member.addRole('632384176284499979');
                          member.addRole('632384064019759116');
                        })
                        setTimeout(() => {
                          channel.delete()
                        }, 10000);
                      } 
                      
                      else if (message.content.startsWith(';start-interview')) {
                        function generateOutputFile(channel, member) {
  // use IDs instead of username cause some people have stupid emojis in their name
  const fileName = `./recordings/${channel.id}-${user.id}.pcm`;
  return fs.createWriteStream(fileName);
}
    let [command, ...channelName] = message.content.split(" ");
    if (!message.guild) {
      return message.reply('No private service is available in your area at the moment. Please contact a service representative for more details.');
    }
    const voiceChannel = message.guild.channels.find("name", channelName.join(" "));
    //console.log(voiceChannel.id);
      const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };                  
    message.member.voiceChannel.join()
            .then(connection => {
    const stream = ytdl('https://www.youtube.com/watch?v=Vbks4abvLEw', { filter : 'audioonly' });
    const dispatcher = connection.playStream(stream, streamOptions);
                connection.on('speaking', (user, speaking) => {
                    if (speaking) {
                        console.log("listen on");
                        const receiver = connection.createReceiver();
                        
                        const stream = receiver.createPCMStream(user);
                        const fileStream = fs.createWriteStream('./audio.pcm')

                        fileStream.on('data', console.log)

                        stream.pipe(fileStream);
                    }
                })
            });
  }
                   }))
               })
               })
               })
               })
               })
               })
         })
       }
       })
     }
    }
     }))
}