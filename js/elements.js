const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')
const btnPlusMinutes = document.querySelector('.plus-minutes')
const btnMinusMinutes = document.querySelector('.minus-minutes')
const soundForestCard = document.querySelector('.sound-forest')
const soundRainCard = document.querySelector('.sound-rain')
const soundCafeteriaCard = document.querySelector('.sound-cafeteria')
const soundFireplaceCard = document.querySelector('.sound-fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const lightMode = document.querySelector('.light-mode')
const darkMode = document.querySelector('.dark-mode')

const soundForest = new Audio("./assets/forest.wav")
const soundRain = new Audio("./assets/rain.wav")
const soundCafeteria = new Audio("./assets/cafeteria.wav")
const soundFireplace = new Audio("./assets/fireplace.wav")
const soundAlarm = new Audio("./assets/medium-bowl.wav")

const volume = document.querySelector('#sound-volume')

export {
  btnPlay,
  btnStop,
  btnPlusMinutes,
  btnMinusMinutes,
  soundForestCard,
  soundRainCard,
  soundCafeteriaCard,
  soundFireplaceCard,
  minutesDisplay,
  secondsDisplay,
  lightMode,
  darkMode,
  soundForest,
  soundRain,
  soundCafeteria,
  soundFireplace,
  soundAlarm,
  volume
}