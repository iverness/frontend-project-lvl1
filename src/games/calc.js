import { cons } from '@hexlet/pairs';
import getRandomInt from '../lib/getRandomInt.js';
import { numberOfRounds } from '../index.js';

const signs = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

const check = (n, m, operation) => {
  switch (operation) {
    case '+':
      return n + m;
    case '-':
      return n - m;
    case '*':
      return n * m;
    default:
      return undefined;
  }
};
const getRoundsData = () => {
  const roundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomInt(0, 10);
    const secondNumber = getRandomInt(0, 10);
    const index = getRandomInt(0, signs.length);
    const question = `${firstNumber} ${signs[index]} ${secondNumber}`;
    const correctResult = String(check(firstNumber, secondNumber, signs[index]));
    const data = cons(question, correctResult);
    roundsData.push(data);
  }
  return roundsData;
};
export default { rule, getRoundsData };
