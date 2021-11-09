import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

const numberOfGames = 3;
const hello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const game = (rule, pairs) => {
  const name = hello();
  console.log(`${rule}`);
  for (let i = 0; i < numberOfGames; i += 1) {
    const pair = pairs[i];
    console.log(`Question: ${car(pair)}`);
    const answer = readlineSync.question('Answer: ');
    if (answer !== cdr(pair)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${cdr(pair)}.
        Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
