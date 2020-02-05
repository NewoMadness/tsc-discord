const { readdirSync } = require("fs")

module.exports = (bot) => {
    const load = dirs => {    
        const GUI = readdirSync(`./GUI/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of GUI) {
            const evt = require(`../GUI/${dirs}/${file}`);
            let eName = file.split('.')[0];
            bot.on(eName, evt.bind(null, bot));
          };
        };
        ["applications", "house"].forEach(x => load(x));
};