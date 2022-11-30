import {
  btnPlay,
  btnStop,
  btnPlusMinutes,
  btnMinusMinutes,
  soundForestCard,
  soundRainCard,
  soundCafeteriaCard,
  soundFireplaceCard,
  lightMode,
  darkMode,
  soundForest,
  soundRain,
  soundCafeteria,
  soundFireplace,
  volume
} from "./elements.js"

export default function Events ({controls, timer, sounds}) {
  lightMode.addEventListener('click', function(){
    controls.lightmode()
  })

  darkMode.addEventListener('click', function(){
    controls.darkmode()
  })

  btnPlay.addEventListener('click', function() {
    controls.playTimer()
    timer.timerCountdown()
  })
  
  btnStop.addEventListener('click', function() {
    controls.stopTimer()
    timer.pause()
    controls.resetTimer()
    soundRain.pause()
    soundCafeteria.pause()
    soundFireplace.pause()
    soundForest.pause()
  })
  
  btnPlusMinutes.addEventListener('click', function() {
    controls.plusMinutes()
  })
  
  btnMinusMinutes.addEventListener('click', function(){
    controls.minusMinutes()
  })
  
  soundForestCard.addEventListener('click', function() {
    controls.soundForestCardOn()
    sounds.soundForestOn()
    soundRain.pause()
    soundCafeteria.pause()
    soundFireplace.pause()
  })
  
  soundRainCard.addEventListener('click', function() {
    controls.soundRainCardOn()
    sounds.soundRainOn()
    soundForest.pause()
    soundCafeteria.pause()
    soundFireplace.pause()
  })
  
  soundCafeteriaCard.addEventListener('click', function() {
    controls.soundCafeteriaCardOn()
    sounds.soundCafeteriaOn()
    soundForest.pause()
    soundRain.pause()
    soundFireplace.pause()
  })
  
  soundFireplaceCard.addEventListener('click', function() {
    controls.soundFireplaceCardOn()
    sounds.soundFireplaceOn()
    soundForest.pause()
    soundRain.pause()
    soundCafeteria.pause()
  })

  volume.addEventListener('input', function(e) {
    let changeVolume = e.currentTarget.value / 100
    soundForest.volume = changeVolume
    soundRain.volume = changeVolume
    soundCafeteria.volume = changeVolume
    soundFireplace.volume = changeVolume
  })
}