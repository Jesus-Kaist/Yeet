const commando = require('discord.js-commando')

module.exports = class love extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'love',
            group: 'kawaii',
            memberName: 'love',
            description: 'The bot shows you that you are loved',
        });
    }
  
    run(msg) {
        return msg.say("I love you too! :heart:");
    }
}