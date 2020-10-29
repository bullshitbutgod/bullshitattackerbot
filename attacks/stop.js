const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
    message.channel.send('**Tüm Saldırılar Başarıyla Durduruldu!**').then(message => {
		process.exit(1);
	}
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['durdur'],
  permLevel: 0
};

exports.help = {
  name: 'stop',
  description: '[YAPIMCI]',
  usage: 'reboot'
};