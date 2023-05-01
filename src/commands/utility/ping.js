import { CommandInteraction } from 'discord.js';
import { Snappy } from '../../classes/Client.js';

export default {
    data: {
        name: 'ping',
        description: "A command to check the bot's ping.",
        type: 1,
    },

    /**
     * @param {Snappy} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        return interaction.reply({ content: `${client.ws.ping}ms.` });
    },
};
