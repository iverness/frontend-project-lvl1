import { cons } from '@hexlet/pairs';

export const rule = 'What is the result of the expression?';
const signs = ['+', '-', '*'];
const getRandomInt = (max) => Math.floor(Math.random() * max);
const check = (n, i, m) => {
  let correctResult = 0;
  if (i === 0) {
    correctResult = n + m;
  }
  if (i === 1) {
    correctResult = n - m;
  }
  if (i === 2) {
    correctResult = n * m;
  }
  return correctResult;
};

export const returnPair = () => {
  let n = 0;
  const pairs = [];
  while (n < 3) {
    const firstNumber = getRandomInt(10);
    const secondNumber = getRandomInt(10);
    const index = getRandomInt(3);
    const question = `${firstNumber} ${signs[index]} ${secondNumber}`;
    const correct = String(check(firstNumber, index, secondNumber));
    const pair = cons(question, correct);
    pairs.push(pair);
    n += 1;
  }
  return pairs;
};
