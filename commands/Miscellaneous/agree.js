module.exports = {
  name: "agree",
  category: 'Miscellaneous',
  description: 'Verifies You are human, gives verified role',
  run: (bot, message, args, ops) => { 
  if (!message.channel.id === '636001830345900033') return;
                var role = message.guild.roles.find(role => role.name === "Verified");
message.member.addRole(role);
  message.delete()
  message.author.send('Gave you the role!')
  }
}
