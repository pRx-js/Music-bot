const emotes = require ("../config/emojis.json");

module.exports.run = async (client, message) => {
  
    if(!message.member.voice.channel) return message.channel.send(`**Bir ses kanalında değilsiniz ${emotes.error}**`);

    if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`**Oynatılan bir müzik yok ${emotes.error}**`);

    client.player.clearQueue(message.guild.id);

    message.channel.send(`**Kuyruk temizlendi ${emotes.success}**`);

};

module.exports.config = {
    name: "clear-queue",
    aliases: ['kuyruktemizle','clearqueue','kuyrukboşalt','kuyruksil']
};
