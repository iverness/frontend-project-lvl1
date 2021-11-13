import readlineSync from 'readline-sync';
import {
  car, cdr,
} from '@hexlet/pairs';

export const numberOfRounds = 3;

export const game = (play) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const description = play.rule;
  console.log(`${description}`);
  const roundsData = play.getRoundsData();
  for (let i = 0; i < roundsData.length; i += 1) {
    const roundData = roundsData[i];
    console.log(`Question: ${car(roundData)}`);
    const correctResult = cdr(roundData);
    const playerAnswer = readlineSync.question('Answer: ');
    if (playerAnswer !== correctResult) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctResult}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
