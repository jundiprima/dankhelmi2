module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - lu gaa di voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - lu gaa di channel yang samaa !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - tolong kasih judul yang beneeerrr, etdehhhhhh !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};