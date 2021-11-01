#!/usr/bin/env node

import * as index from '../src/index.js';
import * as gcd from '../games/gcd.js';

const userName = index.hello(gcd.rule);
index.game(gcd.returnPair(), userName);
