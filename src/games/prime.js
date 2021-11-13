import { cons } from '@hexlet/pairs';
import getRandomInt from '../lib/getRandomInt.js';
import { numberOfRounds } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const getRoundsData = () => {
  const roundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomInt(1, 100);
    const correctResult = checkPrime(question) ? 'yes' : 'no';
    const data = cons(question, correctResult);
    roundsData.push(data);
  }
  return roundsData;
};
export default { rule, getRoundsData };
