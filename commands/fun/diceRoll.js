const commando = require('discord.js-commando')

module.exports = class diceRoll extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'fun',
            memberName: 'roll',
            description: 'rolls a die',
            args: [
                {
                    key: 'sides',
                    prompt: 'number of sides per die (max number is 25)',
                    type: 'integer',
                    wait: 10,
                    max: 25
                },
                {
                    key: 'dice',
                    prompt: 'the number of dice you want to throw (Max number is 10)',
                    type: 'integer',
                    wait: 10,
                    max: 10
                }

            ]
        }
    );
    }
    async run(message, args) {
        const {sides, dice} = args;
        var roll1 = Math.floor(Math.random() * sides) + 1;
        var roll2 = Math.floor(Math.random() * sides) + 1;
        var roll3 = Math.floor(Math.random() * sides) + 1;
        var roll4 = Math.floor(Math.random() * sides) + 1;
        var roll5 = Math.floor(Math.random() * sides) + 1;
        var roll6 = Math.floor(Math.random() * sides) + 1;
        var roll7 = Math.floor(Math.random() * sides) + 1;
        var roll8 = Math.floor(Math.random() * sides) + 1;
        var roll9 = Math.floor(Math.random() * sides) + 1;
        var roll10 = Math.floor(Math.random() * sides) + 1;


        var total2 =  roll1 + roll2;
        var total3 =  roll1 + roll2 + roll3;
        var total4 =  roll1 + roll2 + roll3 + roll4;
        var total5 =  roll1 + roll2 + roll3 + roll4 + roll5;
        var total6 =  roll1 + roll2 + roll3 + roll4 + roll5 + roll6;
        var total7 =  roll1 + roll2 + roll3 + roll4 + roll5 + roll6 + roll7;
        var total8 =  roll1 + roll2 + roll3 + roll4 + roll5 + roll6 + roll7 + roll8;
        var total9 =  roll1 + roll2 + roll3 + roll4 + roll5 + roll6 + roll7 + roll8 + roll9;
        var total10 =  roll1 + roll2 + roll3 + roll4 + roll5 + roll6 + roll7 + roll8 + roll9 + roll10;
        if (dice === 1) return message.channel.send("You rolled a " + roll1 + ". Well done :slight_smile:");
        if (dice === 2) return message.channel.send("You rolled a " + roll1 + " and a " + roll2 + " making a total of " + total2 + ". Well done :slight_smile:");
        if (dice === 3) return message.channel.send("You rolled a " + roll1 + ", " + roll2 + " and a " + roll3 + " making a total of " + total3 + ". Well done :slight_smile:");
        if (dice === 4) return message.channel.send("You rolled a " + roll1 + ", " + roll2 + ", " + roll3 + " and a " + roll4 + " making a total of " + total4 + ". Well done :slight_smile:");
        if (dice === 5) return message.channel.send("You rolled a " + roll1 + ", " + roll2 + ", " + roll3 + ", " + roll4 + " and a " + roll5 + " making a total of " + total5 + ". Well done :slight_smile:");
        if (dice === 6) return message.channel.send("You rolled a " + roll1 + ", " + roll2 + ", " + roll3 + ", " + roll4 + ", " + roll5 + " and a " + roll6 + " making a total of " + total6 + ". Well done :slight_smile:");
        if (dice === 7) return message.channel.send("You rolled a " + roll1 + ", " + roll2 + ", " + roll3 + ", " + roll4 + ", " + roll5 + ", " + roll6 + " and a " + roll7 + " making a total of " + total7 + ". Well done :slight_smile:");
        if (dice === 8) return message.channel.send("You rolled a " + roll1 + ", " + roll2 + ", " + roll3 + ", " + roll4 + ", " + roll5 + ", " + roll6 + ", " + roll7 + " and a " + roll8 + " making a total of " + total8 + ". Well done :slight_smile:");
        if (dice === 9) return message.channel.send("You rolled a " + roll1 + ", " + roll2 + ", " + roll3 + ", " + roll4 + ", " + roll5 + ", " + roll6 + ", " + roll7 + ", " + roll8 + " and a " + roll9 + " making a total of " + total9 + ". Well done :slight_smile:");
        if (dice === 10) return message.channel.send("You rolled a " + roll1 + ", " + roll2 + ", " + roll3 + ", " + roll4 + ", " + roll5 + ", " + roll6 + ", " + roll7 + ", " + roll8 + ", " + roll9 + " and a " + roll10 + " making a total of " + total10 + ". Well done :slight_smile:");
    }
}
 