import { REST, Routes } from 'discord.js';
import { data } from './config.js';
import fs from 'fs';

function getFiles(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    let commandFiles = [];

    for (const file of files) {
        if (file.isDirectory())
            commandFiles = [
                ...commandFiles,
                ...getFiles(`${dir}/${file.name}`),
            ];
        else if (file.name.endsWith('.js'))
            commandFiles.push(`${dir}/${file.name}`);
    }

    return commandFiles;
}

let interactions = [];
const files = getFiles(data.paths.interactions);
for (const file of files) {
    const command = await import(`file://${file}`).then((r) => r.default);
    interactions.push(command.data);
}

const rest = new REST({ version: '10' }).setToken(data.client.token);

switch (data.interactions.global) {
    case true:
        await rest
            .put(Routes.applicationCommands(data.client.id), {
                body: interactions,
            })
            .then((d) =>
                console.log(`${d.length} interactions loaded globally.`)
            );
        break;
    case false:
        await rest
            .put(
                Routes.applicationGuildCommands(
                    data.client.id,
                    data.interactions.guildId
                ),
                {
                    body: interactions,
                }
            )
            .then((d) =>
                console.log(`${d.length} interactions loaded locally.`)
            );
        break;
    default:
        await rest
            .put(
                Routes.applicationGuildCommands(
                    data.client.id,
                    data.interactions.guildId
                ),
                {
                    body: interactions,
                }
            )
            .then((d) =>
                console.log(`${d.length} interactions loaded locally.`)
            );
        break;
}
