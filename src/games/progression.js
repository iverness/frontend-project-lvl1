import { cons } from '@hexlet/pairs';
import getRandomInt from '../lib/getRandomInt.js';
import { numberOfRounds } from '../index.js';

const rule = 'What number is missing in the progression?';

const makeProg = (start, step) => {
  const prog = [];
  const length = getRandomInt(5, 10);
  for (let i = 0; i <= length; i += 1) {
    const val = start + i * step;
    prog.push(val);
  }
  return prog;
};
const getRoundsData = () => {
  const roundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number = getRandomInt(1, 100);
    const step = getRandomInt(1, 6);
    const progressions = makeProg(number, step);
    const index = getRandomInt(1, progressions.length);
    const correctResult = String(progressions[index]);
    progressions[index] = '..';
    const question = progressions.join(' ');
    const data = cons(question, correctResult);
    roundsData.push(data);
  }
  return roundsData;
};
export default { rule, getRoundsData };
