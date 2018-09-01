const commando = require('discord.js-commando');
const dispatcher = require('ytdl-core');
const ytdl = require('ytdl-core');


module.exports = class play extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'music',
            memberName: 'play',
            clientPermission: ['CONNECT','SPEAK'],
            description: 'Play some music of your choice',
            example: 'P:play <url>',

        });
 
    }

    async run(msg) {

        const args = msg.content.split(' ')

        const songUrl = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
        const queue = new Map();    
        const voiceChannel = msg.member.voiceChannel;
        const serverQueue = queue.get(msg.guild.id);


 

        const songInfo = await ytdl.getInfo(songUrl);
        const song = {
            title: songInfo.title,
            url: songInfo.video_url
        };


        if (!serverQueue) {
            const queueConstruct = {
                textChannel: msg.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
            };         

            queue.set(msg.guild.id, queueConstruct);    

            queueConstruct.songs.push(song);    

            if (!voiceChannel) return msg.say('You need to connect to a voice channel first baka!')
            try {
                var connection = await voiceChannel.join();
                queueConstruct.connection = connection;
                play(msg.guild, queueConstruct.songs[0])
            } catch (error) { 
                console.error('I couldn\'t connect ' + error);

                queue.delete(msg.guild.id);
                return msg.say('I had trouble connecting')
            }

        } else {
                serverQueue.songs.push(song);
                console.log("TEST: " + serverQueue.songs)
                return msg.say(`**${song.title}** Is now in the queue :smile:`);
        }
        return undefined;

        function play(guild, song) {
            const serverQueue = queue.get(guild.id);
            
            if (!song) {
                serverQueue.voiceChannel.leave();
                queue.delete(guild.id);
                return;
            }
            console.log(serverQueue.songs)

            const dispatcher = serverQueue.connection.playStream(ytdl(song.url, { filter: "audioonly", retries: 20 }))
                .on('end', (reason) => {
                    if (reason === 'Stream not generating quickly enough.') console.log ('song ended');
                    else console.log("error: " + reason)
                    serverQueue.songs.shift();
                    play(guild, serverQueue.songs[0]);   
                })
                .on('error', (error) => console.error(error));
            dispatcher.setVolumeLogarithmic(5 / 5);
            
        }

    }   
    
}


