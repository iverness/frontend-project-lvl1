#!/usr/bin/env node
import * as index from '../src/index.js';
import * as calc from '../games/calc.js';

const userName = index.hello(calc.rule);
index.game(calc.returnPair(), userName);
