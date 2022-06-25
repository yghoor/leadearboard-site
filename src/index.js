/* eslint-disable no-unused-vars */
import './styles.css';
import addScore from './add-score.js';
import populateBoard from './populate-board.js';

const refreshButton = document.querySelector('.refresh-btn');
const addScoreForm = document.getElementById('add-score-form');

const gameId = 'cU6kSZmLm0gdLbJiJL4f';

async function populate(id) {
  let scores;

  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
  )
    .then((response) => response.json())
    .then((result) => {
      scores = result.result;
    });

  populateBoard(scores);
}

refreshButton.addEventListener('click', () => {
  populate(gameId);
});

addScoreForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const currentName = addScoreForm.elements['user-name'].value;
  const currentScore = addScoreForm.elements['user-score'].value;

  addScore(currentName, currentScore, gameId);
  refreshButton.click();
  addScoreForm.reset();
});

populate(gameId);
