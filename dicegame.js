const diceElement = document.getElementById('dice');
const rollButton = document.getElementById('rollBtn');

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    return randomNumber;
}

function updateDiceDisplay(result) {
    diceElement.textContent = result;
}

rollButton.addEventListener('click', function () {
    const result = rollDice();
    updateDiceDisplay(result);
});

updateDiceDisplay('Roll the Dice');
