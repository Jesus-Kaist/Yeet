

const commando = require('discord.js-commando')

module.exports = class coinFlip extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            group: 'fun',
            memberName: 'flip',
            description: 'flips a coin',
        });
    }

    run(msg) {
        var coin = Math.floor(Math.random() * 2) + 1
        if (coin == 1) {
            return msg.say("You got a heads!")
        } else
        return msg.say("You got a tails!")
        
    }
}