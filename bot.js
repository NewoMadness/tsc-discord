const emojis = require('./emojis.json')
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);
var schedule = require('node-schedule');
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./config.json")
const prompter = require('discordjs-prompter')
var prefix = config.prefix
const db = require('quick.db')
const ascii = require("ascii-table");
let table = new ascii("Commands");
table.setHeading("Command", "Load status");
const active = new Map();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
["aliases", "commands"].forEach(x => bot[x] = new Discord.Collection());
["command", "event", "reaction"].forEach(x => require(`./handlers/${x}`)(bot));
 var j = schedule.scheduleJob('0 30 * * * *', function(){
   let commandFile = require("./commands/Chat Game/chatgame.js");
       commandFile.run(bot);
 })
function numGen() {
  return Math.floor(Math.random() * 7);
  return console.log("Ran once.");
/*[[bot.on("guildCreate", guild => {
  con.query(`CREATE TABLE ${guild.id} (
  member_count varchar(5000),
)`)
]]})
*/
//let commandFile = require("./commands/rainbow.js");
//          commandFile.run();
}
bot.login(process.env.token);