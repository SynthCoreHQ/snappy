import { join } from 'node:path';
import { readdirSync } from 'node:fs';
import { Snappy } from '../classes/Client.js';

/**
 * @param {Snappy} client
 */
export default async (client) => {
    try {
        const events = readdirSync(client.settings.paths.events);

        for (const dir of events) {
            const folders = join(client.settings.paths.events, dir);
            const folder = readdirSync(folders).filter((f) =>
                f.endsWith('.js')
            );

            for (const file of folder) {
                const files = join(folders, file);
                const event = await import(`file://${files}`).then(
                    (r) => r.default
                );
                client.events.set(event.data.name, event);
                if (event.data.mode === 'once') {
                    client.once(event.data.name, (...args) =>
                        event.run(client, ...args)
                    );
                } else {
                    client.on(event.data.name, (...args) =>
                        event.run(client, ...args)
                    );
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
};
