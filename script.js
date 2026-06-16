const COLORS = {
  red: { hex: "#e33d35" },
  blue: { hex: "#2f74d0" },
  yellow: { hex: "#f3c642" },
  green: { hex: "#35a56a" },
  orange: { hex: "#f28c28" },
  purple: { hex: "#8b55d9" },
  pink: { hex: "#f06aa5" },
  brown: { hex: "#8b5a3c" },
  black: { hex: "#202020" },
  white: { hex: "#ffffff" },
};

const ART = {
  apple: `
    <svg class="line-art" viewBox="0 0 360 360" role="img" aria-label="Renksiz elma">
      <path d="M211 76C245 39 291 50 309 80C271 103 235 106 211 76Z" fill="#fff" stroke="#1c2220" stroke-width="8" stroke-linejoin="round" />
      <path d="M190 92C194 66 203 44 221 25" fill="none" stroke="#1c2220" stroke-width="12" stroke-linecap="round" />
      <path class="paintable" d="M180 105C151 77 83 82 60 143C36 205 82 314 145 326C164 330 175 319 181 319C187 319 198 330 217 326C280 314 326 205 300 143C276 82 209 77 180 105Z" fill="#fff" stroke="#1c2220" stroke-width="9" stroke-linejoin="round" />
      <path d="M139 132C118 143 103 163 97 189" fill="none" stroke="#1c2220" stroke-width="7" stroke-linecap="round" opacity=".32" />
    </svg>
  `,
  sun: `
    <svg class="line-art" viewBox="0 0 360 360" role="img" aria-label="Renksiz gunes">
      <g fill="none" stroke="#1c2220" stroke-width="9" stroke-linecap="round">
        <path d="M180 30v45" /><path d="M180 285v45" /><path d="M30 180h45" /><path d="M285 180h45" />
        <path d="M74 74l32 32" /><path d="M254 254l32 32" /><path d="M286 74l-32 32" /><path d="M106 254l-32 32" />
      </g>
      <circle class="paintable" cx="180" cy="180" r="92" fill="#fff" stroke="#1c2220" stroke-width="9" />
      <circle cx="145" cy="163" r="8" fill="#1c2220" /><circle cx="215" cy="163" r="8" fill="#1c2220" />
      <path d="M145 205C163 222 197 222 215 205" fill="none" stroke="#1c2220" stroke-width="7" stroke-linecap="round" />
    </svg>
  `,
  car: `
    <svg class="line-art" viewBox="0 0 360 360" role="img" aria-label="Renksiz araba">
      <path class="paintable" d="M58 198L91 135H219L270 198H302C317 198 329 210 329 225V257H31V225C31 210 43 198 58 198Z" fill="#fff" stroke="#1c2220" stroke-width="9" stroke-linejoin="round" />
      <path d="M107 149H166V198H82L107 149Z" fill="#fff" stroke="#1c2220" stroke-width="7" stroke-linejoin="round" />
      <path d="M179 149H212L252 198H179V149Z" fill="#fff" stroke="#1c2220" stroke-width="7" stroke-linejoin="round" />
      <circle cx="103" cy="258" r="31" fill="#fff" stroke="#1c2220" stroke-width="9" />
      <circle cx="258" cy="258" r="31" fill="#fff" stroke="#1c2220" stroke-width="9" />
    </svg>
  `,
  ball: `
    <svg class="line-art" viewBox="0 0 360 360" role="img" aria-label="Renksiz top">
      <circle class="paintable" cx="180" cy="180" r="124" fill="#fff" stroke="#1c2220" stroke-width="9" />
      <path d="M76 153C132 177 209 122 248 72" fill="none" stroke="#1c2220" stroke-width="7" stroke-linecap="round" />
      <path d="M112 283C124 213 226 178 304 193" fill="none" stroke="#1c2220" stroke-width="7" stroke-linecap="round" />
      <path d="M174 57C205 118 196 244 164 303" fill="none" stroke="#1c2220" stroke-width="7" stroke-linecap="round" />
    </svg>
  `,
  flower: `
    <svg class="line-art" viewBox="0 0 360 360" role="img" aria-label="Renksiz cicek">
      <path d="M180 211V326" fill="none" stroke="#1c2220" stroke-width="10" stroke-linecap="round" />
      <path d="M180 274C143 238 101 249 76 290C116 306 153 303 180 274Z" fill="#fff" stroke="#1c2220" stroke-width="8" stroke-linejoin="round" />
      <g class="paintable" fill="#fff" stroke="#1c2220" stroke-width="8" stroke-linejoin="round">
        <ellipse cx="180" cy="92" rx="38" ry="57" />
        <ellipse cx="116" cy="145" rx="38" ry="57" transform="rotate(-58 116 145)" />
        <ellipse cx="244" cy="145" rx="38" ry="57" transform="rotate(58 244 145)" />
        <ellipse cx="140" cy="215" rx="38" ry="57" transform="rotate(35 140 215)" />
        <ellipse cx="220" cy="215" rx="38" ry="57" transform="rotate(-35 220 215)" />
      </g>
      <circle cx="180" cy="166" r="34" fill="#fff" stroke="#1c2220" stroke-width="8" />
    </svg>
  `,
};

const tasks = [
  { text: "Male den Apfel rot.", answer: "red", art: "apple" },
  { text: "Male die Sonne gelb.", answer: "yellow", art: "sun" },
  { text: "Male das Auto blau.", answer: "blue", art: "car" },
  { text: "Male den Ball gr\u00fcn.", answer: "green", art: "ball" },
  { text: "Male die Blume rot.", answer: "red", art: "flower" },
  { text: "Male den Apfel orange.", answer: "orange", art: "apple" },
  { text: "Male das Auto lila.", answer: "purple", art: "car" },
  { text: "Male die Blume rosa.", answer: "pink", art: "flower" },
  { text: "Male den Ball braun.", answer: "brown", art: "ball" },
  { text: "Male das Auto schwarz.", answer: "black", art: "car" },
  { text: "Male die Sonne orange.", answer: "orange", art: "sun" },
  { text: "Male das Auto gr\u00fcn.", answer: "green", art: "car" },
  { text: "Male den Ball gelb.", answer: "yellow", art: "ball" },
];

const artStage = document.querySelector("#artStage");
const canvasZone = document.querySelector(".canvas-zone");
const feedback = document.querySelector("#feedback");
const taskText = document.querySelector("#taskText");
const scoreEl = document.querySelector("#score");
const nextButton = document.querySelector("#nextButton");
const chips = [...document.querySelectorAll(".color-chip")];

let activeTaskIndex = 0;
let score = 0;
let selectedColor = null;
let solvedCurrentTask = false;
let paintTarget = null;

function currentTask() {
  return tasks[activeTaskIndex];
}

function setFeedback(message, tone = "") {
  feedback.textContent = message;
  feedback.className = `feedback ${tone}`.trim();
}

function promptAgain(tone = "") {
  setFeedback(currentTask().text, tone);
}

function setSelectedColor(colorName) {
  selectedColor = colorName;
  chips.forEach((chip) => {
    chip.classList.toggle("is-selected", chip.dataset.color === colorName);
  });
  promptAgain();
}

function paintPicture(colorName) {
  const task = currentTask();

  paintTarget.classList.add("flash");
  window.setTimeout(() => paintTarget.classList.remove("flash"), 220);

  if (colorName !== task.answer) {
    setFeedback(`Tekrar dene: ${task.text}`, "bad");
    return;
  }

  paintTarget.setAttribute("fill", COLORS[colorName].hex);

  if (!solvedCurrentTask) {
    score += 1;
    scoreEl.textContent = score;
    solvedCurrentTask = true;
  }

  setFeedback("Sehr gut!", "good");
}

function bindPaintTarget() {
  paintTarget = artStage.querySelector(".paintable");
  paintTarget.addEventListener("click", () => {
    if (!selectedColor) {
      promptAgain("bad");
      return;
    }
    paintPicture(selectedColor);
  });
}

function resetTask(index = activeTaskIndex) {
  activeTaskIndex = index;
  solvedCurrentTask = false;
  selectedColor = null;
  taskText.textContent = currentTask().text;
  artStage.innerHTML = ART[currentTask().art];
  bindPaintTarget();
  chips.forEach((chip) => chip.classList.remove("is-selected"));
  promptAgain();
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => setSelectedColor(chip.dataset.color));

  chip.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", chip.dataset.color);
    event.dataTransfer.effectAllowed = "copy";
    setSelectedColor(chip.dataset.color);
  });
});

canvasZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  canvasZone.classList.add("is-over");
});

canvasZone.addEventListener("dragleave", () => {
  canvasZone.classList.remove("is-over");
});

canvasZone.addEventListener("drop", (event) => {
  event.preventDefault();
  canvasZone.classList.remove("is-over");
  const colorName = event.dataTransfer.getData("text/plain");
  if (COLORS[colorName]) {
    paintPicture(colorName);
  }
});

nextButton.addEventListener("click", () => {
  const nextIndex = (activeTaskIndex + 1) % tasks.length;
  resetTask(nextIndex);
});

resetTask(0);
