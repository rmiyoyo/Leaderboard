export const createGame = async (game) => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games');
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      name: game,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updatePoint = async (playerName, playerPoints) => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:Ap5r9JLwcoQWUSe6hYvx/scores/');
  await fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      user: playerName,
      score: playerPoints,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const loadPoints = async () => {
  const request = new Request('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:Ap5r9JLwcoQWUSe6hYvx/scores/');
  const response = await fetch(request);
  const data = await response.json();
  const competitionBoard = document.querySelector('.competition-board');
  competitionBoard.innerHTML = '';
  data.result.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${element.user} : </span><span> ${element.score}</span>`;
    competitionBoard.appendChild(li);
  });
};

export const resetForm = () => {
  const load = document.querySelectorAll('input');
  load.forEach((element) => {
    element.value = '';
  });
};

export const warningReport = () => {
  const load = document.querySelectorAll('input');
  load.forEach((element) => {
    if (!element.value) {
      const p = document.createElement('p');
      p.textContent = 'Cannot be empty';
      p.style.color = 'red';
      p.style.fontSize = '25px';
      element.after(p);
    }
  });
};