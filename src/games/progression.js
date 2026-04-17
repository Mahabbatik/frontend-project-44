import runEngine from '../index.js';

const description = 'What number is missing in the progression?';


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const generateProgression = () => {
 
  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);
  
  
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  
  
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  
  
  const progressionWithGap = [...progression];
  progressionWithGap[hiddenIndex] = '..';
  

  const question = progressionWithGap.join(' ');
  
  return [question, correctAnswer];
};

export default () => runEngine(description, generateProgression);