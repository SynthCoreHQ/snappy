import { join } from 'node:path';
import { cwd } from 'node:process';
import 'dotenv/config';
import { GatewayIntentBits, Partials, ActivityType, Colors } from 'discord.js';
import chalk from 'chalk';

const data = {
    client: {
        // Client Auth Token
        token: process.env['CLIENT_AUTH_TOKEN'] || '',
        // Client Auth Secret
        secret: process.env['CLIENT_AUTH_SECRET'] || '',
        // Client Id
        id: process.env['CLIENT_ID'] || '',
        // Bot Support Server Link
        guildInvite: process.env['CLIENT_GUILD_INVITE'] || '',
        // User Id of the Developers of the Bot
        developers: [],
        // An Object of Client Options
        data: {
            // shards: 'auto',
            // closeTimeout: 5_000,
            // shardCount: 1,
            // makeCache: undefined,
            partials: [
                Partials.User,
                Partials.Channel,
                Partials.GuildMember,
                Partials.Message,
                // Partials.Reaction,
                // Partials.GuildScheduledEvent,
                // Partials.ThreadMember,
            ],
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                // GatewayIntentBits.AutoModerationConfiguration,
                // GatewayIntentBits.AutoModerationExecution,
                // GatewayIntentBits.DirectMessageReactions,
                // GatewayIntentBits.DirectMessageTyping,
                // GatewayIntentBits.DirectMessages,
                // GatewayIntentBits.GuildEmojisAndStickers,
                // GatewayIntentBits.GuildIntegrations,
                // GatewayIntentBits.GuildInvites,
                // GatewayIntentBits.GuildMessageReactions,
                // GatewayIntentBits.GuildMessageTyping,
                // GatewayIntentBits.GuildModeration,
                // GatewayIntentBits.GuildPresences,
                // GatewayIntentBits.GuildScheduledEvents,
                // GatewayIntentBits.GuildVoiceStates,
                // GatewayIntentBits.GuildWebhooks,
            ],
            allowedMentions: {
                parse: ['roles', 'users', 'everyone'],
                users: [],
                roles: [],
                repliedUser: true,
            },
            // failIfNotExists: true,
            presence: {
                status: 'idle' /* online, idle, invisible, dnd */,
                // afk: false,
                activities: [
                    {
                        name: 'SynthCore Development',
                        type: ActivityType.Listening,
                        // url: '',
                    },
                ],
                // shardId: [],
            },
            // waitGuildTimeout: 15_000,
            // sweepers: {},
        },
    },
    interactions: {
        // Wether the interaction commands should be registered globally or locally
        global: false,
        // Bot Testing Server Id (will be used for registering commands locally)
        guildId: process.env['CLIENT_GUILD_ID'] || '',
    },
    message: {
        prefix: '!',
        isMentionable: false,
    },
    icons: {
        success: '<:right:924338814632202290> ',
        alert: '<:alert:924338956517138452>',
        error: '<:wrong:924338872043851817>',
    },
    embeds: {
        color: {
            info: Colors.Blurple,
            warn: Colors.Yellow,
            error: Colors.Red,
        },
    },
    paths: {
        root: join(cwd(), 'src'),
        classes: join(cwd(), 'src', 'classes'),
        interactions: join(cwd(), 'src', 'interactions'),
        messages: join(cwd(), 'src', 'messages'),
        events: join(cwd(), 'src', 'events'),
        handlers: join(cwd(), 'src', 'handlers'),
        database: join(cwd(), 'src', 'database'),
    },
};

export { data };
