import { Events } from 'discord.js';
import { Snappy } from '../../classes/Client.js';
import { Guilds } from '../../database/models/Guilds.js';

export default {
    data: {
        name: Events.ClientReady,
        mode: 'once',
    },

    /**
     * @param {Snappy} client
     */
    run: async (client) => {
        console.log(`${client.user.username} is Ready.`);
        // Guilds.sync();
    },
};
