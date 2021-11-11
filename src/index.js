import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

export const numberOfGames = 3;

export const game = (play) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const description = play.rule;
  console.log(`${description}`);
  for (let i = 0; i < numberOfGames; i += 1) {
    const pairs = play.returnPair();
    const pair = pairs[i];
    console.log(`Question: ${car(pair)}`);
    const answer = readlineSync.question('Answer: ');
    if (answer !== cdr(pair)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${cdr(pair)}.
        Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
