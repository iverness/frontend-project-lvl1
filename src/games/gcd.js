import { cons } from '@hexlet/pairs';
import getRandomInt from './random.js';

export const rule = 'Find the greatest common divisor of given numbers.';

const checkGcd = (n, m) => {
  if (!m) {
    return n;
  }
  return checkGcd(m, n % m);
};
export const returnPair = () => {
  const pairs = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt(0, 10);
    const secondNumber = getRandomInt(0, 10);
    const question = `${firstNumber} ${secondNumber}`;
    const correct = String(checkGcd(firstNumber, secondNumber));
    const pair = cons(question, correct);
    pairs.push(pair);
  }
  return pairs;
};
