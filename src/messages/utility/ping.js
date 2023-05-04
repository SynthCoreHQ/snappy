import { Message } from 'discord.js';
import { Snappy } from '../../classes/Client.js';

export default {
    data: {
        name: 'ping',
        description: "A command to check the bot's ping.",
    },

    /**
     * @param {Snappy} client
     * @param {Message} message
     */
    run: async (client, message) => {
        message.reply({ content: 'Pong!' });
    },
};
