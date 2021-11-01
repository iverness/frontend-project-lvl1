import { cons } from '@hexlet/pairs';

export const rule = 'Find the greatest common divisor of given numbers.';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const checkGcd = (n, m) => {
  if (!m) {
    return n;
  }
  return checkGcd(m, n % m);
};
export const returnPair = () => {
  let n = 0;
  const pairs = [];
  while (n < 3) {
    const firstNumber = getRandomInt(10);
    const secondNumber = getRandomInt(10);
    const question = `${firstNumber} ${secondNumber}`;
    const correct = String(checkGcd(firstNumber, secondNumber));
    const pair = cons(question, correct);
    pairs.push(pair);
    n += 1;
  }
  return pairs;
};
