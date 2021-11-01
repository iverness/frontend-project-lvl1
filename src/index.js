import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

export const hello = (rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${rule}`);
  return userName;
};

export const game = (pairs, userName) => {
  let counter = 0;
  while (counter < 3) {
    const pair = pairs[counter];
    console.log(`Question: ${car(pair)}`);
    const answer = readlineSync.question('Answer: ');
    if (answer === cdr(pair)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${cdr(pair)}. 
                Let's try again, ${userName}!`);
      break;
    }
  }

  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
