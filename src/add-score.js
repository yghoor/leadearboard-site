export default async function addScore(name, score, id) {
  await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: `${name}`,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
}
