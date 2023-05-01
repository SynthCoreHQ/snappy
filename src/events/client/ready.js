import { Snappy } from '../../classes/Client.js';
import { Events } from 'discord.js';

export default {
    data: {
        name: Events.ClientReady,
        mode: 'on',
    },

    /**
     * @param {Snappy} client
     */
    run: async (client) => {
        console.log(`${client.user.username} is Ready.`);
    },
};
