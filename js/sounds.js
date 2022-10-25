import {
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
  forestVolume,
  rainVolume,
  coffeVolume,
  fireVolume,
} from './elements.js'

const sounds = {
  buttonPressAudio :new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"),
  kitchenTimer : new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"),
  forest: new Audio("https://github.com/madalena-rocha/focus-timer-2.0/blob/main/audio/forest.wav?raw=true"),
  rain: new Audio('https://github.com/madalena-rocha/focus-timer-2.0/blob/main/audio/rain.wav?raw=true'),
  coffee: new Audio("https://github.com/madalena-rocha/focus-timer-2.0/blob/main/audio/coffee-shop.wav?raw=true"),
  fire: new Audio("https://github.com/madalena-rocha/focus-timer-2.0/blob/main/audio/fireplace.wav?raw=true"),

  audioForest(){
    buttonSoundForest.classList.toggle('active')
    forestVolume.classList.toggle('active')
    buttonSoundForest.classList.contains('active') ? this.forest.play() : this.forest.pause()
  },

  audioRain(){
    buttonSoundRain.classList.toggle('active')
    rainVolume.classList.toggle('active')
    buttonSoundRain.classList.contains('active') ? this.rain.play() : this.rain.pause()
  },
  audioCoffee(){
    buttonSoundCoffeeShop.classList.toggle('active')
    coffeVolume.classList.toggle('active')
    buttonSoundCoffeeShop.classList.contains('active') ? this.coffee.play() : this.coffee.pause()
  },
  audioFire(){
    buttonSoundFireplace.classList.toggle('active')
    fireVolume.classList.toggle('active')
    buttonSoundFireplace.classList.contains('active') ? this.fire.play() : this.fire.pause()
  },

  resetForestVolume() {
    forestVolume.value = 0.5
  },

  resetRainVolume() {
    rainVolume.value = 0.5
  },

  resetCoffeeShopVolume() {
    coffeVolume.value = 0.5
  },

   resetFireplaceVolume() {
    fireVolume.value  = 0.5
  },

  setVolume(){
    this.forest.volume = forestVolume.value
    this.rain.volume = rainVolume.value
    this.coffee.volume = coffeVolume.value
    this.fire.volume = fireVolume.value
  
  }
  
}

  sounds.forest.loop = true
  sounds.rain.loop = true
  sounds.coffee.loop = true
  sounds.fire.loop = true

export{
  sounds,
}