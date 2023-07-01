import './style.css';
import {
  updatePoint, loadPoints, resetForm, warningReport,
} from './modules/apiService.js';

document.querySelector('.refresh').addEventListener('click', (event) => {
  event.preventDefault();
  loadPoints();
});

document.querySelector('.submit').addEventListener('click', (event) => {
  event.preventDefault();
  warningReport();
  const playerName = document.querySelector('#player-name').value;
  const playerPoints = document.querySelector('#player-score').value;

  updatePoint(playerName, playerPoints);
  resetForm();
});