module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - lu gaa di voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - lu gaa di channel yang samaa !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - belum adaa now playing !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - masukin filter yang valid buat enable atau disable !`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - filter itu ga adaaa, cobaa yang ini (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - guaa **tambahin** filter ke musiccnyaa, tunggu bentar... ingpo : semakin panjang musiccnyaa semakin lamaaaaaa`);
        else message.channel.send(`${client.emotes.music} - gua	a **matiin** filter ke musiccnyaa, tunggu bentar... ingpo : semakin panjang musiccnyaa semakin lamaaaaaa`);
    },
};