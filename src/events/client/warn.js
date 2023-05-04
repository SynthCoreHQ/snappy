import { Events } from 'discord.js';
import { Snappy } from '../../classes/Client.js';
import { Guilds } from '../../database/models/Guilds.js';

export default {
    data: {
        name: Events.Warn,
        mode: 'on',
    },

    /**
     * @param {Snappy} client
     */
    run: async (client, info) => {
        try {
            client.logger.warn(info);
        } catch (e) {
            client.logger.error(e);
        }
    },
};
