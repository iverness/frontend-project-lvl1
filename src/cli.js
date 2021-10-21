import readlineSync from 'readline-sync';

export const ask = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}
