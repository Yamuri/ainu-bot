const Discord = require("discord.js");

const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;
 
 client.on("ready", () => {
    console.log('¡Estoy lista!');

 });

client.login(config.token);
