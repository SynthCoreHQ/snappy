import { Message } from 'discord.js';
import { Snappy } from '../../classes/Client.js';

export default {
    data: {
        name: 'support',
        description: 'A command to support.',
    },

    /**
     * @param {Snappy} client
     * @param {Message} message
     */
    run: async (client, message) => {
        message.reply({ content: 'We are here!' });
    },
};
