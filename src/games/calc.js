import { cons } from '@hexlet/pairs';
import getRandomInt from './random.js';

export const rule = 'What is the result of the expression?';
const signs = ['+', '-', '*'];
const check = (n, i, m) => {
  let correctResult = 0;
  switch (i) {
    case 0:
      correctResult = n + m;
      break;
    case 1:
      correctResult = n - m;
      break;
    case 2:
      correctResult = n * m;
      break;
    default:
      correctResult = undefined;
      break;
  }
  return correctResult;
};

export const returnPair = () => {
  const pairs = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt(0, 10);
    const secondNumber = getRandomInt(0, 10);
    const index = getRandomInt(0, 3);
    const question = `${firstNumber} ${signs[index]} ${secondNumber}`;
    const correct = String(check(firstNumber, index, secondNumber));
    const pair = cons(question, correct);
    pairs.push(pair);
  }
  return pairs;
};
