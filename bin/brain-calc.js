#!/usr/bin/env node
import game from '../src/index.js';
import { returnPair, rule } from '../src/games/calc.js';

game(rule, returnPair());
