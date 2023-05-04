import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

const Guilds = sequelize.define('guilds', {
    id: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true,
    },
});

export { Guilds };
