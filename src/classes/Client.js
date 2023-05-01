import { join } from 'node:path';
import { data } from '../config.js';
import { Client, Collection, REST, Routes } from 'discord.js';

class Snappy extends Client {
    /**
     * @param {data} settings
     */
    constructor(settings) {
        super(settings.client.data);

        this.settings = settings;
        this.commands_array = [];
        this.events = new Collection();
        this.commands = new Collection();
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
        await this.login(token).then(() => console.log('Client Logged In.'));
        this.load(this);
    }

    /**
     * A method to load all the handler functions
     * @param {this} client
     */
    async load(client) {
        ['event_handler', 'command_handler'].forEach(async (file) => {
            const path = join(client.settings.paths.handlers, file);
            const handler = await import(`file://${path}.js`).then(
                (r) => r.default
            );
            await handler(client);
        });
    }
    /**
     * A method to deploy interactions commands to the guilds.
     * @param {Array<object>} data
     */
    async deploy(data) {
        switch (this.settings.interactions.global) {
            case true:
                this.rest
                    .put(Routes.applicationCommands(this.settings.client.id), {
                        body: data,
                    })
                    .then((res) =>
                        console.log(`${res.length} commands loaded globally.`)
                    );
                break;

            case false:
                this.rest
                    .put(
                        Routes.applicationGuildCommands(
                            this.settings.client.id,
                            this.settings.interactions.guildId
                        ),
                        {
                            body: data,
                        }
                    )
                    .then((res) =>
                        console.log(`${res.length} commands loaded globally.`)
                    );
                break;

            default:
                this.rest
                    .put(
                        Routes.applicationGuildCommands(
                            this.settings.client.id,
                            this.settings.interactions.guildId
                        ),
                        {
                            body: data,
                        }
                    )
                    .then((res) =>
                        console.log(`${res.length} commands loaded globally.`)
                    );
                break;
        }
    }
}

export { Snappy };
