import { CommandInteraction } from 'discord.js';
import { Snappy } from '../../classes/Client.js';

export default {
    data: {
        name: '',
        description: '',
        type: 1,
    },

    /**
     * @param {Snappy} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        // ...
    },
};
