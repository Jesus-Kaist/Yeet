const commando = require('discord.js-commando')
const { RichEmbed, checkAdmin } = require('discord.js')


module.exports = class ban extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            group: 'moderation',
            memberName: 'ban',
            description: 'The bot bans the desired user from the server',
            clientPermission: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
            example: 'P:ban @user <reason>',
            args: [
                {
                    key: 'user',
                    prompt: 'the user you wish to ban',
                    type: 'user'
                },
                {
                    key: 'reason',
                    prompt: 'reason for banning the user',
                    type: 'string'
                }
            ]
            });
        
        }
        hasPermission(msg) {
            return msg.guild.member(msg.author).hasPermission('BAN_MEMBERS', checkAdmin );
        }
        
        async run(message, args, guild) {
            const {reason, user} = args
            const embed = new RichEmbed()
            .setDescription(`banned:\n${user}\n \nreason:\n${reason}`)
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setColor(0xFF0F00)
            .setTimestamp();
        if (message.author === user) return message.reply("you can't ban yourself silly");
        if (!message.guild.member(user).bannable) return message.reply("I can't ban that member ya silly").catch(console.error);
        message.guild.member(user).send("Reason for being banned:" + reason);
        (message.guild.member(user).ban(2));
        message.guild.member(user).kick();
        return message.embed(embed);  
        }
    
}