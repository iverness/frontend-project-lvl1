import { cons } from '@hexlet/pairs';

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const yesAnswer = 'yes';
export const noAnswer = 'no';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const checkPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return noAnswer;
  }
  return yesAnswer;
};
export const returnPair = () => {
  let n = 0;
  const pairs = [];
  while (n < 3) {
    const question = getRandomInt(1, 100);
    const correct = checkPrime(question);
    const pair = cons(question, correct);
    pairs.push(pair);
    n += 1;
  }
  return pairs;
};
