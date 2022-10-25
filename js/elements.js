const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')


const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonSoundForest = document.querySelector('.sound-forest')
const buttonSoundRain = document.querySelector('.sound-rain')
const buttonSoundCoffeeShop = document.querySelector('.sound-coffee-shop')
const buttonSoundFireplace = document.querySelector('.sound-fireplace')


const forestVolume = document.querySelector('#forest-volume')
const rainVolume = document.querySelector('#rain-volume')
const coffeVolume = document.querySelector('#coffee-volume')
const fireVolume = document.querySelector('#fire-volume')

const light = document.querySelector(".sun")
const dark = document.querySelector('.moon')
const theme = document.querySelector('.theme')
const body = document.querySelector('body')

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonPlus,
  buttonMinus,
  forestVolume,
  rainVolume,
  coffeVolume,
  fireVolume,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  theme,
  light,
  dark,
  body,
  minutesDisplay,
  secondsDisplay,
}