module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} ditambahin ke queue (**${playlist.tracks.length}** laguu) !`);
};