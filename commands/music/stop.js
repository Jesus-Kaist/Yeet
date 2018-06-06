const commando = require('discord.js-commando')
const dispatcher = require('ytdl-core')
const ytdl = require('ytdl-core')

module.exports = class stop extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            group: 'music',
            memberName: 'stop',
            description: 'Stop the bot from playing music',
        });
    }
    
    run(msg){
        const voiceChannel = msg.member.voiceChannel;
        if (!msg.member.voiceChannel) return msg.say('You are not in a voice channel')
        msg.member.voiceChannel.leave()
        return undefined;
    }
    
}