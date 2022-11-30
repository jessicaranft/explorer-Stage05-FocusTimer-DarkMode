export default function Sounds({
  soundForest,
  soundRain,
  soundCafeteria,
  soundFireplace,
}) {
  
  soundForest.loop = true
  soundRain.loop = true
  soundCafeteria.loop = true
  soundFireplace.loop = true

  soundForest.volume = 0.5
  soundRain.volume = 0.5
  soundCafeteria.volume = 0.5
  soundFireplace.volume = 0.5
  
  function soundForestOn() {
    if(soundForest.paused) {
      soundForest.play()
    } else {
      soundForest.pause()
    }
  }
  
  function soundRainOn() {
    if(soundRain.paused) {
      soundRain.play()
    } else {
      soundRain.pause()
    }
  }
  
  function soundCafeteriaOn() {
    if(soundCafeteria.paused) {
      soundCafeteria.play()
    } else {
      soundCafeteria.pause()
    }
  }
  
  function soundFireplaceOn() {
    if(soundFireplace.paused) {
      soundFireplace.play()
    } else {
      soundFireplace.pause()
    }
  }

  return {
    soundForestOn,
    soundRainOn,
    soundCafeteriaOn,
    soundFireplaceOn,
  }
}