import { Events, Guild } from 'discord.js';
import { Snappy } from '../../classes/Client.js';
import { Guilds } from '../../database/models/Guilds.js';

export default {
    data: {
        name: Events.GuildCreate,
        mode: 'on',
    },

    /**
     * @param {Snappy} client
     * @param {Guild} guild
     */
    run: async (client, guild) => {
        await Guilds.create({
            id: guild.id,
        });
    },
};
