import { Snappy } from '../../classes/Client.js';
import { Events, Message } from 'discord.js';

export default {
    data: {
        name: Events.MessageCreate,
        mode: 'on',
    },

    /**
     * @param {Snappy} client
     * @param {Message} interaction
     */
    run: async (client, interaction) => {},
};
