const commando = require('discord.js-commando')
const { RichEmbed, checkAdmin } = require('discord.js')



module.exports = class kick extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'moderation',
            memberName: 'kick',
            description: 'The bot kicks the desired user from the server',
            clientPermissions: ['KICK_MEMBERS'],
            userPermissions: ['KICK_MEMBERS'],
            example: 'P:kick @user <reason>',
            args: [
                {
                    key: 'user',
                    prompt: 'the user you wish to kick',
                    type: 'user' 
                },
                {
                    key: 'reason',
                    prompt: 'reason for kicking the user',
                    type: 'string'
                }
            ]
            });
        
           
       }


        hasPermission(msg) {
                return msg.guild.member(msg.author).hasPermission('KICK_MEMBERS', checkAdmin );
        }

        async run(message, args) {
            const {reason, user} = args;
            const embed = new RichEmbed()
            .setDescription(`kicked:\n${user}\n \nreason:\n${reason}`)
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setColor(0xFF9900)
            .setTimestamp(); 
            if (message.author === user) return message.reply("you can't kick yourself silly"); 
            if (!message.guild.member(user).kickable) return message.reply("I can't kick that member ya silly").catch(console.error);
            message.guild.member(user).send("Reason for being kicked:" + reason);
            message.guild.member(user).kick()
            //.then(embed => embed(embed));
            return message.embed(embed);
           
        }
    
}