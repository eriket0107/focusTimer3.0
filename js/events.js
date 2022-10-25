import {
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
  light,
  dark,
  theme
} from "./elements.js"
import {sounds} from "./sounds.js"
import { changeTheme } from "./theme.js"

export default function Events({
    controls, 
    timer,
  }){
    buttonPlay.addEventListener('click', ()=>{
    controls.play()
    timer.countdown()
    sounds.buttonPressAudio.play()
  })

  buttonPause.addEventListener('click', ()=>{
    controls.pause()
    timer.hold()
    sounds.buttonPressAudio.play()

  })

  buttonStop.addEventListener('click', ()=>{
    controls.stop()
    timer.reset()
    sounds.buttonPressAudio.play()
  })

  buttonPlus.addEventListener('click', ()=>{
    timer.plus()
    sounds.buttonPressAudio.play()
  })

  buttonMinus.addEventListener('click', ()=>{
  timer.minus()
    sounds.buttonPressAudio.play()
  })

  buttonSoundForest.addEventListener('click',()=>{
    sounds.audioForest()
    sounds.buttonPressAudio.play()
    sounds.resetForestVolume()
    
  })
  buttonSoundRain.addEventListener('click',()=>{
    sounds.audioRain()
    sounds.buttonPressAudio.play()
    sounds.resetRainVolume()
  })

  buttonSoundCoffeeShop.addEventListener('click',()=>{
    sounds.audioCoffee()
    sounds.buttonPressAudio.play()
    sounds.resetCoffeeShopVolume()
  })

  buttonSoundFireplace.addEventListener('click',()=>{
   sounds.audioFire()
   sounds.buttonPressAudio.play()
   sounds.resetFireplaceVolume
  })

  forestVolume.addEventListener('input',()=>{
    sounds.setVolume()
  })

  rainVolume.addEventListener('input',()=>{
    sounds.setVolume()
  })

  coffeVolume.addEventListener('input',()=>{
    sounds.setVolume()
  })

  fireVolume.addEventListener('input',()=>{
    sounds.setVolume()
  })

  theme.addEventListener('click', ()=>{
    changeTheme()
    sounds.buttonPressAudio.play()
    
  })
}