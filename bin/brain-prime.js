#!/usr/bin/env node

import * as index from '../src/index.js';
import * as prime from '../games/prime.js';

const userName = index.hello(prime.rule);
index.game(prime.returnPair(), userName);
