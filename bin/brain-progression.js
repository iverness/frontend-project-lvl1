#!/usr/bin/env node

import game from '../src/index.js';
import { returnPair, rule } from '../src/games/progression.js';

game(rule, returnPair());
