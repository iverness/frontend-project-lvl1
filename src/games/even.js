import { cons } from '@hexlet/pairs';
import getRandomInt from '../lib/getRandomInt.js';
import { numberOfRounds } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkEven = (value) => value % 2 === 0;

const getRoundsData = () => {
  const roundsData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomInt(0, 100);
    const correctResult = checkEven(question) ? 'yes' : 'no';
    const data = cons(question, correctResult);
    roundsData.push(data);
  }
  return roundsData;
};

export default { rule, getRoundsData };
