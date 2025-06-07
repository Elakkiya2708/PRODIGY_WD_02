let [hr, min, sec, ms] = [0, 0, 0, 0];

let timer = null;

let darkTheme = true;

function updateDisplay() {

  document.getElementById("stopwatch").innerText =

    `${String(hr).padStart(2, '0')} : ${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')} : ${String(ms).padStart(2, '0')}`;

}

function stopwatch() {

  ms++;

  if (ms == 100) {

    ms = 0;

    sec++;

  }

  if (sec == 60) {

    sec = 0;

    min++;

  }

  if (min == 60) {

    min = 0;

    hr++;

  }

  updateDisplay();

}

function start() {

  if (timer !== null) return;

  timer = setInterval(stopwatch, 10);

}

function pause() {

  clearInterval(timer);

  timer = null;

}

function reset() {

  clearInterval(timer);

  timer = null;

  [hr, min, sec, ms] = [0, 0, 0, 0];

  updateDisplay();

}

function restart() {

  reset();

  start();

}

function lap() {

  const lapTime = document.getElementById("stopwatch").innerText;

  const lapItem = document.createElement("li");

  lapItem.innerText = `Lap - ${lapTime}`;

  document.getElementById("laps").appendChild(lapItem);

}

function resetLaps() {

  document.getElementById("laps").innerHTML = '';

}

function toggleTheme() {

  const root = document.documentElement;

  darkTheme = !darkTheme;

  if (darkTheme) {

    root.style.setProperty('--bg', '#0f2233');

    root.style.setProperty('--text', '#ffffff');

    root.style.setProperty('--button-bg', '#1c3b4d');

    root.style.setProperty('--button-hover', '#33d9b2');

    root.style.setProperty('--lap-bg', '#1c2e3b');

  } else {

    root.style.setProperty('--bg', '#f4f4f4');

    root.style.setProperty('--text', '#000000');

    root.style.setProperty('--button-bg', '#dcdcdc');

    root.style.setProperty('--button-hover', '#27ae60');

    root.style.setProperty('--lap-bg', '#eeeeee');

  }

}
