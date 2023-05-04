import { join } from 'node:path';
import { readdirSync } from 'node:fs';
import { Snappy } from '../classes/Client.js';
import { NotFound } from '../errors/NotFound.js';

/**
 * @param {Snappy} client
 */
export default async (client) => {
    try {
        const commands = readdirSync(client.settings.paths.interactions);

        for (const dir of commands) {
            const folders = join(client.settings.paths.interactions, dir);
            const folder = readdirSync(folders).filter((f) =>
                f.endsWith('.js')
            );

            for (const file of folder) {
                const files = join(folders, file);
                const command = await import(`file://${files}`).then(
                    (r) => r.default
                );

                if (!command.data)
                    throw new NotFound('No Command data object found.');

                if (!command.run)
                    throw new NotFound('No Command run method found.');

                client.interactions.set(command.data.name, command);
            }
        }
    } catch (error) {
        console.error(error);
    }
};
