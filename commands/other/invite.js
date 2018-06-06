const commando = require('discord.js-commando')

module.exports = class invite extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            group: 'other',
            memberName: 'invite',
            description: 'Have the bot send you a invite link'
            
        }) ;
    }
}