const Discord = require('discord.js');
const moment = require('moment');


exports.run = (client, message, args) => {
	var i;
	for(i = 0; i < 250; i++) {
		message.channel.send("@everyone & @here https://discord.gg/VTfQgtK")
	}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot','botat'],
  permLevel: 0
};

exports.help = {
  name: 'spambot',
  description: 'Özel',
  usage: 'spambot'
};