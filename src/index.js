import 'dotenv/config';
import { data } from './config.js';
import 'colors';

import { Snappy } from './classes/Client.js';

const snappy = new Snappy(data);

snappy.init(data.client.token);
