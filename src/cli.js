import readlineSync from 'readline-sync';

const ask = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default ask;
