// Add the user's choice event listener
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', function (e) {
    startGame(e.target.id);
  });
});

function startGame(userItem) {
  const computerGuessedNum = Math.floor(Math.random() * 3) + 1;
  const itemArray = ['rock', 'paper', 'scissors']
  const computerItem = itemArray[computerGuessedNum - 1]

  renderItems(userItem, computerItem)

  if ((userItem === 'rock' && computerItem === 'paper' || userItem === 'paper' && computerItem === 'scissors' || userItem === 'scissors' && computerItem === 'rock')) renderResult('lost')

  if (userItem === 'rock' && computerItem === 'scissors' || userItem === 'paper' && computerItem === 'rock' || userItem === 'scissors' && computerItem === 'paper') renderResult('won')

  if (userItem === 'rock' && computerItem === 'rock' || userItem === 'paper' && computerItem === 'paper' || userItem === 'scissors' && computerItem === 'scissors') renderResult('draw');
};

function addScore(score) {
  const userCount = document.getElementById('user-count');
  const computerCount = document.getElementById('computer-count');

  if (score === 'won') userCount.innerText++;
  if (score === 'lost') computerCount.innerText++;
}

function renderItems(userItem, computerItem) {
  const resultList = document.getElementById('game-message')
  const div = document.createElement('div');
  div.classList = 'result'

  resultList.innerHTML = `<h1 class="versus-message">${userItem} vs. ${computerItem} !!</h1>`;
}

function renderResult(resultsClass) {
  const choiceHeader = document.getElementById('choice-header');
  choiceHeader.innerText = ''
  choiceHeader.classList = resultsClass

  addScore(resultsClass);
}

