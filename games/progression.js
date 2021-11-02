import { cons } from '@hexlet/pairs';

export const rule = 'What number is missing in the progression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const makeProg = (number, step) => {
  const prog = [];
  let value = number;
  for (let i = 0; i <= 9; i += 1) {
    value += step;
    prog.push(value);
  }
  return prog;
};
const makeReplace = (p, index) => {
  p.splice(index, 1, '..');
  const replaced = p.join(' ');
  return replaced;
};

export const returnPair = () => {
  let n = 0;
  const pairs = [];
  while (n < 3) {
    const index = getRandomInt(0, 10);
    const number = getRandomInt(0, 100);
    const step = getRandomInt(1, 6);
    const progressions = makeProg(number, step);
    const correct = String(progressions[index]);
    const question = `${makeReplace(progressions, index)}`;
    const pair = cons(question, correct);
    pairs.push(pair);
    n += 1;
  }
  return pairs;
};
