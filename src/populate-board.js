const scoreList = document.getElementById('score-list');

export default function populateBoard(scoresArray) {
  scoreList.innerHTML = '';
  scoresArray.forEach((score, counter) => {
    const playerScore = document.createElement('li');
    playerScore.className = 'score-item';

    if (counter % 2 !== 0) {
      playerScore.classList.add('grey-background');
    }

    playerScore.innerHTML = `${score.user}: ${score.score}`;
    scoreList.appendChild(playerScore);
  });
}
