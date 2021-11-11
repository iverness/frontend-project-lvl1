import { cons } from '@hexlet/pairs';
import getRandomInt from '../lib/getRandomInt.js';
import { numberOfGames } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const returnPair = () => {
  const pairs = [];
  for (let i = 0; i < numberOfGames; i += 1) {
    const question = getRandomInt(1, 100);
    const correct = checkPrime(question) ? 'yes' : 'no';
    const pair = cons(question, correct);
    pairs.push(pair);
  }
  return pairs;
};
export default { rule, returnPair };
