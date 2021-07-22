module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - lu gaa di voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - lu gaa di channel yang samaa !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - belum adaa music yang di play !`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send(`${client.emotes.success} -musiccnya **disetop** !`);
    },
};