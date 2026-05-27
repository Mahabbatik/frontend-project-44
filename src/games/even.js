import runEngine from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const getRoundData = () => {
  const number = Math.floor(Math.random() * 100) + 1 // eslint-disable-line
  const question = String(number)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return [question, correctAnswer]
}

export default () => runEngine(description, getRoundData)
