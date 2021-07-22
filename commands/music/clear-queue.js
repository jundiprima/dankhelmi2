module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - lu gaa di voice channel`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - lu gaa di voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - belum adaa now playing !`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - cuma ada satu lagu di queue.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - queue **di remove** !`);
    },
};