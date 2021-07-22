module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - lu gaa di voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - lu gaa di channel yang samaa !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} -belum adaa now playing !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - musiccnyaa udah di pause pele !`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - laguu ${client.player.getQueue(message).playing.title} di pause !`);
    },
};