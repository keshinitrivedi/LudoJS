import { Ludo } from './ludo/Ludo.js';

document.getElementById('start-game-btn').addEventListener('click', () => {
    const player1Name = document.getElementById('player1-name').value || 'Player 1';
    const player2Name = document.getElementById('player2-name').value || 'Player 2';

    const ludo = new Ludo(player1Name, player2Name);

    // Hide the input fields and start button after starting the game
    document.querySelector('.player-inputs').style.display = 'none';

    // Enable the dice and reset buttons
    document.getElementById('dice-btn').removeAttribute('disabled');
    document.getElementById('reset-btn').removeAttribute('disabled');
});
