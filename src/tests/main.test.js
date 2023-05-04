import { data } from '../config.js';
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

console.log(getFiles(data.paths.interactions));
