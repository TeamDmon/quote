const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {    
    
    msg = message.content.toLowerCase();

    if (msg.includes('nigger') || msg.includes('niggers')) {
        message.delete(message);
        // message.reply('Watch your profanity');
        // message.channel.sendMessage('no fuckin salt');
    }

    if (message.content == '!bunkerlink') {
        message.delete(message);
        message.channel.sendMessage('https://piratesbunker.tumblr.com/');
    }

    if (message.content == 'ping') {
        message.channel.sendMessage('pong');
    }

    if (message.content == '!id') {
        // message.reply('Your current username is ' + '\'' + message.author.username + '\'');
        message.reply("Your discord is " + message.author.username + "#" + message.author.discriminator);
    }
});

bot.login('MzU3MzQ0NjA0MTcxMDEwMDQ4.DWqJcw.SJA1FkLubE5lqEb43sjKzdKLsPk');