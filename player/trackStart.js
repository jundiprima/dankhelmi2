module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} -sekarang mengeplay ${track.title} ke channel ${message.member.voice.channel.name} ...`);
};