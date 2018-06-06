const ytdl = require('ytdl-core');
const path = require('path');
const config = require("./config.json");
const Commando = require('discord.js-commando');
const client = new Commando.Client({
    owner: '255608237758349312',
    commandPrefix: 'P:',
    disableEveryone: true,
    unknownCommandResponse: false
});

client.registry
.registerDefaultTypes()
.registerGroups([
    ['util', 'utility commands'],
    ['fun', 'some gambling and games'],
    ['kawaii', 'cute commands to fill you with happiness'],
    ['moderation', 'moderation commands'],
    ['commands', 'more commands'],
    ['other', 'other useful commands'],
    ['music', 'musical commands']  
])
.registerDefaultCommands()
.registerCommandsIn(path.join(__dirname, 'commands'));

client.on("ready", () => {
    console.log("I am ready to go!");
    client.user.setGame("My prefix is P: or @Perception");
 });
 
 
 client.on('guildCreate', guild => {
     if(!guild.systemChannel) return;
     else {
        guild.systemChannel.sendMessage(`Hello ${guild.name} thank you for letting me join your server! :smile:`);
     }
    
 });


 
//client.on("message", (message) => {
 //   if (!message.content.startsWith(config.prefix) || message.author.bot) return;
//let args = message.content.split(' ').slice(1);
//var argresult = args.join(' ');
// var roll = Math.floor(Math.random() * 6) + 1
//var coin = Math.floor(Math.random() * 2) + 1
//var opinion = Math.floor(Math.random() * 8) + 1
//if (message.content.startsWith(config.prefix + "love")) {
 //      message.channel.send("I love you too! :heart:");
//     } else
//     if (message.content.startsWith(config.prefix + "help")) {
//         message.channel.send("```Here\'s a list of available commands" +
//         "\n!help - Displays a list of commands\n!love - The bot shows " +
//         "you that you\'re loved :heart:\n!ping - The bot tells you what you\'re latency " +
//         "is.\n!flip - The bot flips a coin.\n!roll - The bot rolls a 6 sided dice.```");   
//     }
//     if (message.content.startsWith(config.prefix + "help")) {
//         message.member.send("```Here\'s a list of available commands" +
//         "\n!help - Displays a list of commands\n!love - The bot shows " +
//         "you that you\'re loved :heart:\n!ping - The bot tells you what you\'re latency " +
//         "is.\n!flip - The bot flips a coin.\n!roll - The bot rolls a 6 sided dice.```");  
//     } else
//     if (message.content.startsWith(config.prefix + "invite")) {
//       message.channel.send("You can invite me to your server using this link! https://discordapp.com/oauth2/authorize?client_id=357750764652724235&scope=bot");
//     } else
//         if (message.content.startsWith(config.prefix + "ping")) {
//         message.channel.send(`Pong! \`${Date.now() - message.createdTimeStamp} ms\``);
//     } else
//     if (message.content.startsWith(config.prefix + 'setgame')) {
//         if (!argresult) argresult = null;
//         client.user.setGame(argresult);
//     } else
//        if (message.content.startsWith(config.prefix + "roll")) {
//        message.channel.send("You rolled a " + roll)
//     } else
//     if (message.content.startsWith(config.prefix + "flip")) {
//         if(coin === 1){
//             message.channel.send("It was a heads!");
//         } else   
//         message.channel.send("It was a tails!");
//   }
   
   
// })
 
  client.login(config.token)