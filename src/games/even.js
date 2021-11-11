import { cons } from '@hexlet/pairs';
import getRandomInt from '../lib/getRandomInt.js';
import { numberOfGames } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkEven = (value) => value % 2 === 0;

const returnPair = () => {
  const pairs = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const question = getRandomInt(0, 100);
    const correct = checkEven(question) ? 'yes' : 'no';
    const pair = cons(question, correct);
    pairs.push(pair);
  }
  return pairs;
};

export default { rule, returnPair };
