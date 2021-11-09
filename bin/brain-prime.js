#!/usr/bin/env node

import game from '../src/index.js';
import { returnPair, rule } from '../src/games/prime.js';

game(rule, returnPair());
