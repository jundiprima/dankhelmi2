module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - lu gaa di voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - lu gaa di channel yang samaa !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - belum adaa music yang di play!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - musiccnya udah di play !`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - lagu ${client.player.getQueue(message).playing.title} udah di resume !`);
    },
};