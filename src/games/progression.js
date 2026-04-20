import runEngine from '../index.js'

const description = 'What number is missing in the progression?'

const getRoundData = () => {
  const length = Math.floor(Math.random() * 6) + 5 // eslint-disable-line
  const start = Math.floor(Math.random() * 20) + 1 // eslint-disable-line
  const step = Math.floor(Math.random() * 10) + 1 // eslint-disable-line
  const hiddenIndex = Math.floor(Math.random() * length) // eslint-disable-line 

  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }

  const correctAnswer = String(progression[hiddenIndex])
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')

  return [question, correctAnswer]
}

export default () => runEngine(description, getRoundData)
