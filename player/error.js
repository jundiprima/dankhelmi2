module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - gada musicc yang di play disinii !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - lu gaa konek ke voice channel !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} -gua gabisa join, cek permission cobaa !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} ga adaa di negara kitaa, mengsekip...`);
            break;
        case 'MusicStarting':
            message.channel.send(`mengmulai musicc, tunggu...!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - adaa yang salaaah, error....: ${error}`);
    };
};
