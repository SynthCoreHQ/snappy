import { Snappy } from '../../classes/Client.js';
import {
    CommandInteraction,
    Events,
    InteractionType,
    inlineCode,
} from 'discord.js';

export default {
    data: {
        name: Events.InteractionCreate,
        mode: 'on',
    },

    /**
     * @param {Snappy} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => {
        if (interaction.user.bot) return;
        if (!interaction.guild) return;

        if (interaction.type === InteractionType.ApplicationCommand) {
            const command = client.interactions.get(interaction.commandName);

            if (!command)
                return interaction.reply({
                    content: `${inlineCode(
                        interaction.commandName
                    )} not found.`,
                });

            try {
                command.run(client, interaction);
            } catch (e) {
                return interaction.reply({
                    content: "Couldn't respond.",
                });
            }
        }
    },
};
