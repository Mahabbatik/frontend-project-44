import runEngine from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getGCD = (a, b) => {
  let num1 = a
  let num2 = b
  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return num1
}

const getRoundData = () => {
  const num1 = Math.floor(Math.random() * 100) + 1 // eslint-disable-line
  const num2 = Math.floor(Math.random() * 100) + 1 // eslint-disable-line

  const question = `${num1} ${num2}`
  const correctAnswer = String(getGCD(num1, num2))

  return [question, correctAnswer]
}

export default () => runEngine(description, getRoundData)
