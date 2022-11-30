import { soundAlarm } from "./elements.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
}) {
  let timerTimeOut

  function timerCountdown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
   
      if(isFinished) {
      timeEnd()
      return
      }
     
      if(seconds <= 0) {
        seconds = 60
        --minutes
      }
   
      updateTimerDisplay(minutes, String(seconds - 1))
   
      timerCountdown()
    }, 1000)
  }
  
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function pause() {
    clearTimeout(timerTimeOut)
  }

  function timeEnd() {
    soundAlarm.play()
  }

  return {
    timerCountdown,
    updateTimerDisplay,
    pause,
    timeEnd
  }
}