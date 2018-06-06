const commando = require('discord.js-commando')

module.exports = class eight_ball extends commando.Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            group: 'fun',
            memberName: '8ball',
            description: 'Ask your questions and I will answer',
            example: 'P:8ball <statement>',
            args: [
                {
                    key: 'Question',
                    prompt: 'The question you want answered',
                    type: 'string'
                }
            ]
        });
    }
    async run(msg,args) {
        const {Question} = args
        var answer = Math.floor(Math.random() * 10) + 1;
        
     
        if (answer === 1) return msg.say(`**${Question}** That is certainly true`);
        if (answer === 2) return msg.say(`**${Question}** That will be true in the future`);
        if (answer === 3) return msg.say(`**${Question}** That may be true`);
        if (answer === 4) return msg.say(`**${Question}** That will never happen`);
        if (answer === 5) return msg.say(`**${Question}** Yeah. in your dreams`);
        if (answer === 6) return msg.say(`**${Question}** That will happen if you try hard enough`);
        if (answer === 7) return msg.say(`**${Question}** That will surely become true if you believe in yourself`);
        if (answer === 8) return msg.say(`**${Question}** Pfft. Not even my master could make that true and he can do anything.`);
        if (answer === 9) return msg.say(`**${Question}** I\'m not so sure about the outcome of that.`);
        if (answer === 10) return msg.say(`**${Question}** It would be awesome if that were true.`);
    }
}