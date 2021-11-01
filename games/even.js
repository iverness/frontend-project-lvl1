import { cons } from '@hexlet/pairs';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export const yesAnswer = 'yes';
export const noAnswer = 'no';

export const getRandomInt = (max) => Math.floor(Math.random() * max);
export const checkEven = (value) => {
  if (value % 2 === 0) {
    return yesAnswer;
  }
  return noAnswer;
};
export const returnPair = () => {
  let n = 0;
  const pairs = [];
  while (n < 3) {
    const question = getRandomInt(100);
    const correct = checkEven(question);
    const pair = cons(question, correct);
    pairs.push(pair);
    n += 1;
  }
  return pairs;
};
