#!/usr/bin/env node
import * as even from '../games/even.js';
import * as index from '../src/index.js';

const userName = index.hello(even.rule);
index.game(even.returnPair(), userName);
