module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - pilihannya di cancel !`);
    } else message.channel.send(`${client.emotes.error} - masukin angka yang beneerr dari **1** sampe **${tracks.length}** !`);
};