import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    CommandInteraction,
    ComponentType,
    EmbedBuilder,
} from 'discord.js';
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
        const _pingEmbed = new EmbedBuilder()
            .setTitle('Ping')
            .setDescription(`> ${client.ws.ping / 1000}ms`)
            .setColor(client.settings.embeds.color.info);

        const _uptimeEmbed = new EmbedBuilder()
            .setTitle('Uptime')
            .setDescription(
                `> <t:${Math.round(client.readyTimestamp / 1000)}:R>`
            )
            .setColor(client.settings.embeds.color.info);

        const _ping = new ButtonBuilder()
            .setCustomId('ping')
            .setEmoji('1102627646942232727')
            .setLabel('Ping')
            .setStyle(ButtonStyle.Primary);

        const _uptime = new ButtonBuilder()
            .setCustomId('uptime')
            .setEmoji('1102626732214857748')
            .setLabel('Uptime')
            .setStyle(ButtonStyle.Primary);

        // const _delete = new ButtonBuilder()
        //     .setCustomId('delete')
        //     .setEmoji('1102627186214719498')
        //     .setStyle(ButtonStyle.Primary);

        const row = new ActionRowBuilder().addComponents(
            _ping,
            _uptime
            // _delete
        );

        const res = await interaction.reply({
            content: `What do you want to see.`,
            components: [row],
        });

        const collector = res.createMessageComponentCollector({
            componentType: ComponentType.Button,
            time: 60_000,
        });

        collector.on('collect', async (i) => {
            if (i.user.id !== interaction.user.id)
                await interaction.reply({
                    content: "You can't use this!",
                    ephemeral: true,
                });

            if (i.customId === 'ping')
                await i.update({
                    content: '',
                    embeds: [_pingEmbed],
                    components: [row],
                });

            if (i.customId === 'uptime') {
                await i.update({
                    content: '',
                    embeds: [_uptimeEmbed],
                    components: [row],
                });
            }

            // if (i.customId === 'delete') await res.delete();
        });
    },
};
