const commando = require('discord.js-commando')

module.exports = class setGame extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'setgame',
            group: 'moderation',
            memberName: 'setgame',
            description: 'Is used to set the bots game.',
            args: [
                {
                    key: 'argresult',
                    prompt: 'What would you like to set the game to?',
                    wait: 10,
                    type: 'string'
                }
            ]
        });
    }   
    hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }

    async run(client, args,) {
        const {argresult} = args
        if (argresult) {
            return this.client.user.setGame(argresult);
        }
        
    }
}   