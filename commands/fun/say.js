const commando = require('discord.js-commando')
const { checkAdmin } = require('discord.js')

module.exports = class say extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'fun',
            memberName: 'say',
            description: 'the bot sends what you type',
            example: 'P:say Hello there',
            clientPermissions: ['MANAGE-MESSAGES'],
            guildOnly: true,
            args: [
                {
                    key: 'Text',
                    prompt: 'What would you like me to say?',
                    type: 'string'
                }
            ]
        });
    }
    hasPermission(msg) {
        return msg.guild.member(msg.author).hasPermission('ADMINISTRATOR', checkAdmin)
    }

    run(msg, { Text } ) {
        if (msg.author.id !== '255608237758349312') return msg.reply("I only allow for my master to use this command")
        msg.delete();
        return msg.say(Text)
    }
}