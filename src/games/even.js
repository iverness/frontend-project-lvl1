import { cons } from '@hexlet/pairs';
import getRandomInt from './random.js';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export const yesAnswer = 'yes';
export const noAnswer = 'no';

const checkEven = (value) => value % 2 === 0;
export const returnPair = () => {
  const pairs = [];
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomInt(0, 100);
    const correct = checkEven(question) ? 'yes' : 'no';
    const pair = cons(question, correct);
    pairs.push(pair);
  }
  return pairs;
};
