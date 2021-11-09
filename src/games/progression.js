import { cons } from '@hexlet/pairs';
import getRandomInt from './random.js';

export const rule = 'What number is missing in the progression?';

const makeProg = (start, step) => {
  const prog = [];
  for (let i = 0; i <= 9; i += 1) {
    const val = start + i * step;
    prog.push(val);
  }
  console.log(prog);
  return prog;
};
export const returnPair = () => {
  const pairs = [];
  for (let i = 0; i < 3; i += 1) {
    const index = getRandomInt(1, 10);
    const number = getRandomInt(1, 100);
    const step = getRandomInt(1, 6);
    const progressions = makeProg(number, step);
    const correct = String(progressions[index]);
    progressions[index] = '..';
    const question = progressions.join(' ');
    const pair = cons(question, correct);
    pairs.push(pair);
  }
  return pairs;
};
