import Timer from "./timer.js"
import Controls from "./controls.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
import {
  btnPlay,
  btnStop,
  soundForestCard,
  soundRainCard,
  soundCafeteriaCard,
  soundFireplaceCard,
  minutesDisplay,
  secondsDisplay,
  soundForest,
  soundRain,
  soundCafeteria,
  soundFireplace,
  soundAlarm
} from "./elements.js"

const controls = Controls({
  btnPlay,
  btnStop,
  minutesDisplay,
  secondsDisplay,
  soundForestCard,
  soundRainCard,
  soundCafeteriaCard,
  soundFireplaceCard
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sounds = Sounds({
  soundForest,
  soundRain,
  soundCafeteria,
  soundFireplace,
})

Events({controls, timer, sounds})