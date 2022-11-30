export default function Controls({
  btnPlay,
  btnStop,
  minutesDisplay,
  secondsDisplay,
  soundForestCard,
  soundRainCard,
  soundCafeteriaCard,
  soundFireplaceCard,
  darkMode,
  lightMode,
}) {
  function lightmode() {
    let body = document.body
    body.classList.add('dark')
    lightMode = document.querySelector('.light-mode')
    lightMode.classList.add('hide')
    darkMode = document.querySelector('.dark-mode')
    darkMode.classList.remove('hide')
  }

  function darkmode() {
    let body = document.body
    body.classList.remove('dark')
    lightMode = document.querySelector('.light-mode')
    lightMode.classList.remove('hide')
    darkMode = document.querySelector('.dark-mode')
    darkMode.classList.add('hide')
  }

  function playTimer() {
    btnPlay.classList.add('clicked')
    btnStop.classList.remove('clicked')
  }
  
  function stopTimer() {
    btnStop.classList.add('clicked')
    btnPlay.classList.remove('clicked')
  }
  
  function resetTimer() {
    minutesDisplay.textContent = '25'
    secondsDisplay.textContent = '00'
  }
  
  function plusMinutes() {
    let minutes = Number(minutesDisplay.textContent)
    if (minutes <= 55) {
      minutes = Number(minutes) + 5
      minutesDisplay.textContent = String(minutes).padStart(2, "0");
    }
  }
  
  function minusMinutes() {
    let minutes = Number(minutesDisplay.textContent)
    if (minutes >= 10) {
      minutes = Number(minutes) - 5
      minutesDisplay.textContent = String(minutes).padStart(2, "0");
    }
  }

  function soundForestCardOn() {
    if (soundForestCard.classList.contains('sound-on')) {
     soundForestCard.classList.remove('sound-on')
     soundRainCard.classList.remove('sound-on')
     soundCafeteriaCard.classList.remove('sound-on')
     soundFireplaceCard.classList.remove('sound-on')
    } else {
     soundForestCard.classList.add('sound-on')
     soundRainCard.classList.remove('sound-on')
     soundCafeteriaCard.classList.remove('sound-on')
     soundFireplaceCard.classList.remove('sound-on')
    }
   }
   
   function soundRainCardOn() {
     if (soundRainCard.classList.contains('sound-on')) {
       soundForestCard.classList.remove('sound-on')
       soundRainCard.classList.remove('sound-on')
       soundCafeteriaCard.classList.remove('sound-on')
       soundFireplaceCard.classList.remove('sound-on')
     } else {
     soundForestCard.classList.remove('sound-on')
     soundRainCard.classList.add('sound-on')
     soundCafeteriaCard.classList.remove('sound-on')
     soundFireplaceCard.classList.remove('sound-on')
     }
   }
   
   function soundCafeteriaCardOn() {
     if (soundCafeteriaCard.classList.contains('sound-on')) {
     soundForestCard.classList.remove('sound-on')
     soundRainCard.classList.remove('sound-on')
     soundCafeteriaCard.classList.remove('sound-on')
     soundFireplaceCard.classList.remove('sound-on')
   } else {
     soundForestCard.classList.remove('sound-on')
     soundRainCard.classList.remove('sound-on')
     soundCafeteriaCard.classList.add('sound-on')
     soundFireplaceCard.classList.remove('sound-on')
     }
   }
   
   function soundFireplaceCardOn() {
     if (soundFireplaceCard.classList.contains('sound-on')) {
       soundForestCard.classList.remove('sound-on')
       soundRainCard.classList.remove('sound-on')
       soundCafeteriaCard.classList.remove('sound-on')
       soundFireplaceCard.classList.remove('sound-on')
     } else {
       soundForestCard.classList.remove('sound-on')
       soundRainCard.classList.remove('sound-on')
       soundCafeteriaCard.classList.remove('sound-on')
       soundFireplaceCard.classList.add('sound-on')
     }
   }

  return {
    playTimer,
    stopTimer,
    resetTimer,
    plusMinutes,
    minusMinutes,
    soundForestCardOn,
    soundRainCardOn,
    soundCafeteriaCardOn,
    soundFireplaceCardOn,
    lightmode,
    darkmode
  }
}