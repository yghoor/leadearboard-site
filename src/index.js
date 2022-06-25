import './styles.css';
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

