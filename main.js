// Add the player's choice event listener
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', function (e) {
    startGame(e.target.parentElement.id);
  });
});

function startGame(playerItem) {
  const computerGuessedNum = Math.floor(Math.random() * 3) + 1;
  const itemArray = ['rock', 'paper', 'scissors']
  const computerItem = itemArray[computerGuessedNum - 1]

  return (playerItem === 'rock' && computerItem === 'paper' || playerItem === 'paper' && computerItem === 'scissors' || playerItem === 'scissors' && computerItem === 'rock') ? renderItems(playerItem, computerItem, 'lost')
    : playerItem === computerItem ? renderItems(playerItem, computerItem, 'draw')
      : renderItems(playerItem, computerItem, 'won')
};

const renderItems = function (playerItem, computerItem, resultsClass) {
  const result = document.getElementById('result-container')
  const div = document.createElement('div');
  div.classList = 'result'

  result.innerHTML = `
  <h2 class="choice player-choice">You have chosen ${playerItem}</h2>
  <h2 class="choice computer-choice">Computer has chosen ${computerItem}</h2>
  <h1 class="result ${resultsClass}"></h1>
  `;

  addScore(resultsClass);
}

const playerCount = document.getElementById('player-count');
const computerCount = document.getElementById('computer-count');
const addScore = function (score) {
  if (score === 'won') playerCount.innerText++;
  if (score === 'lost') computerCount.innerText++;
}

// Reseting score and deleting score message
document.getElementById('restart-btn').addEventListener('click', function () {
  playerCount.innerText = 0;
  computerCount.innerText = 0;
  document.getElementById('result-container').textContent = '';
});
