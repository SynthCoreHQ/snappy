import { join } from 'node:path';
import { data } from '../config.js';
import { Client, Collection, REST, Routes } from 'discord.js';
import { Logger } from './Logger.js';

class Snappy extends Client {
    /**
     * @param {data} settings
     */
    constructor(settings) {
        super(settings.client.data);

        this.settings = settings;
        this.logger = new Logger();
        this.events = new Collection();
        this.interactions = new Collection();
        this.messages = new Collection();
        this.cooldowns = new Collection();
        this.rest = new REST({ version: '10' }).setToken(
            this.settings.client.token
        );
    }

    /**
     * The main method of this class that can be used to start the bot.
     * @param {string} token
     */
    async init(token) {
        this.load(this);
        await this.login(token).then(() => console.log('Client Logged In.'));
    }

    /**
     * A method to load all the handler functions
     * @param {this} client
     */
    async load(client) {
        ['interaction_handler', 'event_handler', 'message_handler'].forEach(
            async (file) => {
                const path = join(client.settings.paths.handlers, file);
                const handler = await import(`file://${path}.js`).then(
                    (r) => r.default
                );
                await handler(client);
            }
        );
    }
}

export { Snappy };
