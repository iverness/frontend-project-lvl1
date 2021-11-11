import { cons } from '@hexlet/pairs';
import getRandomInt from '../lib/getRandomInt.js';
import { numberOfGames } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const checkGcd = (n, m) => (!m ? n : checkGcd(m, n % m));
const returnPair = () => {
  const pairs = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const firstNumber = getRandomInt(0, 10);
    const secondNumber = getRandomInt(0, 10);
    const question = `${firstNumber} ${secondNumber}`;
    const correct = String(checkGcd(firstNumber, secondNumber));
    const pair = cons(question, correct);
    pairs.push(pair);
  }
  return pairs;
};

export default { rule, returnPair };
