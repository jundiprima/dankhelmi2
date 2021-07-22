module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - lu gaa di voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - lu gaa di channel yang samaa !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - belum adaa music yang di play !`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - musiccnya **di sekippp** !`);
    },
};