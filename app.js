'use strict';

// document.addEventListener('DOMContentLoaded', function () {
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const defaultText_Player = document.getElementById('default-text--player');
const defaultText_AI = document.getElementById('default-text--ai');

const contentContainer = document.getElementById('content-container');
const btnsContainer = document.getElementById('btns-container');
const popUpWindowPlayer = document.getElementById('pop-up-window-player');
const popUpWindowAI = document.getElementById('pop-up-window-ai');

const rpsIcon_Player = document.getElementById('rps-icon-player');
const rpsIcon_AI = document.getElementById('rps-icon-ai');

const score_Player = document.getElementById('player-score');
const score_AI = document.getElementById('ai-score');

const retryBtnPlayer = document.getElementById('retry-btn-player');
const retryBtnAI = document.getElementById('retry-btn-ai');

const hintInfo = document.getElementById('hint-info');

let counterScore_Player = 0;
let counterScore_AI = 0;

// PART 1: DONE!
// AI random options
const aiChosesRock = () => {
  rpsIcon_AI.classList.add('fa-hand-back-fist');
  rpsIcon_AI.classList.remove('fa-hand');
  rpsIcon_AI.classList.remove('fa-hand-scissors');
  defaultText_AI.classList.add('hidden-default-text');
  rpsIcon_AI.classList.add('ai-after-click-styles');
};
const aiChosesPaper = () => {
  rpsIcon_AI.classList.add('fa-hand');
  rpsIcon_AI.classList.remove('fa-hand-back-fist');
  rpsIcon_AI.classList.remove('fa-hand-scissors');
  defaultText_AI.classList.add('hidden-default-text');
  rpsIcon_AI.classList.add('ai-after-click-styles');
};
const aiChosesScissors = () => {
  rpsIcon_AI.classList.add('fa-hand-scissors');
  rpsIcon_AI.classList.remove('fa-hand');
  rpsIcon_AI.classList.remove('fa-hand-back-fist');
  defaultText_AI.classList.add('hidden-default-text');
  rpsIcon_AI.classList.add('ai-after-click-styles');
};

// Player options if Rock, Paper or Scissors button get clicked
const playerChosesRock = () => {
  rpsIcon_Player.classList.add('fa-hand-back-fist');
  rpsIcon_Player.classList.remove('fa-hand');
  rpsIcon_Player.classList.remove('fa-hand-scissors');
  defaultText_Player.classList.add('hidden-default-text');
  rpsIcon_Player.classList.add('player-after-click-styles');
  hintInfo.classList.add('hint-info-styles-almost-hidden');
};
const playerChosesPaper = () => {
  rpsIcon_Player.classList.add('fa-hand');
  rpsIcon_Player.classList.remove('fa-hand-back-fist');
  rpsIcon_Player.classList.remove('fa-hand-scissors');
  defaultText_Player.classList.add('hidden-default-text');
  rpsIcon_Player.classList.add('player-after-click-styles');
  hintInfo.classList.add('hint-info-styles-almost-hidden');
};
const playerChosesScissors = () => {
  rpsIcon_Player.classList.add('fa-hand-scissors');
  rpsIcon_Player.classList.remove('fa-hand');
  rpsIcon_Player.classList.remove('fa-hand-back-fist');
  defaultText_Player.classList.add('hidden-default-text');
  rpsIcon_Player.classList.add('player-after-click-styles');
  hintInfo.classList.add('hint-info-styles-almost-hidden');
};

const popUpWinFunctionality = () => {
  contentContainer.classList.add('grid-container-hidden');
  btnsContainer.classList.add('btns-container-hidden');
};
const popUpWin = () => {
  if (counterScore_AI === 3) {
    popUpWinFunctionality();
    popUpWindowAI.classList.remove('pop-up-window-styles-visible');
    popUpWindowAI.classList.add('pop-up-window-styles-ai');
    hintInfo.classList.add('hint-info-styles-hidden');
    // Edge case: If 'i'; 'o'; 'p' keys got clicked after pop-up window it will trigger another 'AI' or 'Player' window to pop up in front of players screen.
  } else if (counterScore_Player === 3) {
    popUpWinFunctionality();
    popUpWindowPlayer.classList.remove('pop-up-window-styles-visible');
    popUpWindowPlayer.classList.add('pop-up-window-styles-player');
    hintInfo.classList.add('hint-info-styles-hidden');
  }
};

// PART 4: DONE!
window.addEventListener('keyup', function (e) {
  if (e.key === 'i') {
    e.preventDefault();
    rockBtn.click();
  }
  if (e.key === 'o') {
    e.preventDefault();
    paperBtn.click();
  }
  if (e.key === 'p') {
    e.preventDefault();
    scissorsBtn.click();
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    retryBtnAI.click();
    retryBtnPlayer.click();
  }
});

// PART 2: DONE!
rockBtn.addEventListener('click', function () {
  playerChosesRock();
  const randomIndex = Math.floor(Math.random() * 3);
  if (randomIndex == 0) {
    aiChosesRock();
  } else if (randomIndex == 1) {
    aiChosesPaper();
    counterScore_AI += 1;
    score_AI.textContent = counterScore_AI;
    if (counterScore_AI === 3 || counterScore_Player === 3) popUpWin();
  } else if (randomIndex == 2) {
    aiChosesScissors();
    counterScore_Player += 1;
    score_Player.textContent = counterScore_Player;
    if (counterScore_AI === 3 || counterScore_Player === 3) popUpWin();
  }
});
paperBtn.addEventListener('click', function () {
  playerChosesPaper();
  const randomIndex = Math.floor(Math.random() * 3);
  if (randomIndex == 0) {
    aiChosesRock();
    counterScore_Player += 1;
    score_Player.textContent = counterScore_Player;
    if (counterScore_AI === 3 || counterScore_Player === 3) popUpWin();
  } else if (randomIndex == 1) {
    aiChosesPaper();
  } else if (randomIndex == 2) {
    aiChosesScissors();
    counterScore_AI += 1;
    score_AI.textContent = counterScore_AI;
    if (counterScore_AI === 3 || counterScore_Player === 3) popUpWin();
  }
});
scissorsBtn.addEventListener('click', function () {
  playerChosesScissors();
  const randomIndex = Math.floor(Math.random() * 3);
  if (randomIndex == 0) {
    aiChosesRock();
    counterScore_AI += 1;
    score_AI.textContent = counterScore_AI;
    if (counterScore_AI === 3 || counterScore_Player === 3) {
      popUpWin();
    }
  } else if (randomIndex == 1) {
    aiChosesPaper();
    counterScore_Player += 1;
    score_Player.textContent = counterScore_Player;
    if (counterScore_AI === 3 || counterScore_Player === 3) popUpWin();
  } else if (randomIndex == 2) {
    aiChosesScissors();
  }
});

// PART 3: DONE!
const resetGameFunctionality = () => {
  defaultText_Player.classList.remove('hidden-default-text');
  rpsIcon_Player.classList.remove('player-after-click-styles');
  defaultText_AI.classList.remove('hidden-default-text');
  rpsIcon_AI.classList.remove('ai-after-click-styles');
  contentContainer.classList.remove('grid-container-hidden');
  btnsContainer.classList.remove('btns-container-hidden');

  rpsIcon_AI.classList.remove('fa-hand');
  rpsIcon_AI.classList.remove('fa-hand-back-fist');
  rpsIcon_AI.classList.remove('fa-hand-scissors');
  rpsIcon_Player.classList.remove('fa-hand');
  rpsIcon_Player.classList.remove('fa-hand-back-fist');
  rpsIcon_Player.classList.remove('fa-hand-scissors');

  // hintInfo.classList.remove('hint-info-styles-almost-hidden');
  hintInfo.classList.remove('hint-info-styles-hidden');

  counterScore_Player = 0;
  counterScore_AI = 0;
  score_Player.textContent = counterScore_Player;
  score_AI.textContent = counterScore_AI;
};
retryBtnPlayer.addEventListener('click', function () {
  resetGameFunctionality();
  popUpWindowPlayer.classList.add('pop-up-window-styles-visible');
  popUpWindowPlayer.classList.remove('pop-up-window-styles-player');
});
retryBtnAI.addEventListener('click', function () {
  resetGameFunctionality();
  popUpWindowAI.classList.add('pop-up-window-styles-visible');
  popUpWindowAI.classList.remove('pop-up-window-styles-ai');
});

// I added this comment because I want to test if actual GitHub repository file be updted once I save this file