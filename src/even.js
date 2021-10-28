import readlineSync from 'readline-sync';

const yesAnswer = 'yes';
const noAnswer = 'no';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const checkEven = (value) => {
  if (value % 2 === 0) {
    return yesAnswer;
  }
  return noAnswer;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  while (counter < 3) {
    const someNumber = getRandomInt(100);
    const correct = checkEven(someNumber);
    console.log(`Question: ${someNumber}`);
    const answer = readlineSync.question('Answer: ');
    if (answer === correct) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correct}. 
            Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default game;
