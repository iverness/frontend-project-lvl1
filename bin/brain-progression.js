#!/usr/bin/env node

import * as index from '../src/index.js';
import * as progression from '../games/progression.js';

const userName = index.hello(progression.rule);
index.game(progression.returnPair(), userName);
