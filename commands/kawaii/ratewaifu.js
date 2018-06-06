const commando = require('discord.js-commando')
    

module.exports = class rateWaifu extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ratewaifu',
            group: 'kawaii',
            memberName: 'ratewaifu',
            description: 'Rate someone on a scale of 1 - 100 to see if they are waifu material',
            args: [
                {
                    key: 'user',
                    prompt: 'The user you wish to rate',
                    type: 'user'
                }
            ]
        });
    }
    async run(msg,args) {
        const {user} = args
        var rate = Math.floor((Math.random() * 1000) + 1) / 10;
        if (user.id === '255608237758349312') return msg.say("My master is always perfect for me :heart_eyes: **100/100**.");
        if (user.id === '357750764652724235') return msg.say("P-p-please choose someone else. I c-can't rate myself.")
        else;
        return msg.say("I rate " + user + " a **" + rate + "/100**.");
    }
}
