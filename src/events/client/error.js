import { Events } from 'discord.js';
import { Snappy } from '../../classes/Client.js';
import { Guilds } from '../../database/models/Guilds.js';

export default {
    data: {
        name: Events.Error,
        mode: 'on',
    },

    /**
     * @param {Snappy} client
     */
    run: async (client, info) => {
        try {
            client.logger.error(info);
        } catch (e) {
            client.logger.error(e);
        }
    },
};
