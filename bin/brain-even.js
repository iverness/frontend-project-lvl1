#!/usr/bin/env node
import { returnPair, rule } from '../src/games/even.js';
import game from '../src/index.js';

game(rule, returnPair());
