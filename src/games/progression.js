import { cons } from '@hexlet/pairs';
import getRandomInt from '../lib/getRandomInt.js';
import { numberOfGames } from '../index.js';

const rule = 'What number is missing in the progression?';

const makeProg = (start, step) => {
  const prog = [];
  for (let i = 0; i <= getRandomInt(5, 10); i += 1) {
    const val = start + i * step;
    prog.push(val);
  }
  return prog;
};
const returnPair = () => {
  const pairs = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const number = getRandomInt(1, 100);
    const step = getRandomInt(1, 6);
    const progressions = makeProg(number, step);
    const index = getRandomInt(1, progressions.length);
    const correct = String(progressions[index]);
    progressions[index] = '..';
    const question = progressions.join(' ');
    const pair = cons(question, correct);
    pairs.push(pair);
  }
  return pairs;
};
export default { rule, returnPair };
