import { cons } from '@hexlet/pairs';
import getRandomInt from '../lib/getRandomInt.js';
import { numberOfRounds } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const checkGcd = (n, m) => (!m ? n : checkGcd(m, n % m));
const getRoundsData = () => {
  const roundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomInt(0, 10);
    const secondNumber = getRandomInt(0, 10);
    const question = `${firstNumber} ${secondNumber}`;
    const correctResult = String(checkGcd(firstNumber, secondNumber));
    const data = cons(question, correctResult);
    roundsData.push(data);
  }
  return roundsData;
};

export default { rule, getRoundsData };
