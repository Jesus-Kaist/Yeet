const commando = require('discord.js-commando')

module.exports = class hug extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            group: 'kawaii',
            memberName: 'hug',
            description: 'Give a user a nice hug :slight_smile:',
            example: 'P:hug <user>',
            args: [
                {
                    key: 'user',
                    prompt: 'The user you wish to hug',
                    type: 'user'
                }
            ]
        });
    }
    async run(msg,args) {
        const {user} = args
        var image1 = Math.floor(Math.random() * 10) + 1;
        if (user.id === '357750764652724235') return msg.say("T-thank you. :heart:", {files: ['./Perceptions hug gifs/anime hug gif 14.gif']});
        if (msg.author === user) return msg.say("Aww. You're alone? Here have a puppy :smile:", {files:['./Perceptions hug gifs/Perception hug gif 0.gif']});
        if (image1 === 1) return msg.say(msg.author + " gave " + user + " a big hug", {files: ['./Perceptions hug gifs/ahg1.gif']});
        if (image1 === 2) return msg.say(msg.author + " gave " + user + " a big hug", {files: ['./Perceptions hug gifs/anime hug gif 2.gif']});
        if (image1 === 3) return msg.say(msg.author + " gave " + user + " a big hug", {files: ['./Perceptions hug gifs/anime hug gif 3.gif']});
        if (image1 === 4) return msg.say(msg.author + " gave " + user + " a big hug", {files: ['./Perceptions hug gifs/anime hug gif 4.gif']});
        if (image1 === 5) return msg.say(msg.author + " gave " + user + " a big hug", {files: ['./Perceptions hug gifs/anime hug gif 5.gif']});
        if (image1 === 6) return msg.say(msg.author + " gave " + user + " a big hug", {files: ['./Perceptions hug gifs/anime hug gif 6.gif']});
        if (image1 === 7) return msg.say(msg.author + " gave " + user + " a big hug", {files: ['./Perceptions hug gifs/anime hug gif 7.gif']});
        if (image1 === 8) return msg.say(msg.author + " gave " + user + " a big hug", {files: ['./Perceptions hug gifs/anime hug gif 8.gif']});
        if (image1 === 9) return msg.say(msg.author + " gave " + user + " a big hug", {files: ['./Perceptions hug gifs/anime hug gif 9.gif']});
        if (image1 === 10) return msg.say(msg.author + " gave " + user + " a big hug", {files: ['./Perceptions hug gifs/anime hug gif 10.gif']});
    }
    

}
