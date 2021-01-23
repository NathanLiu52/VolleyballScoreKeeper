const t1 = {
    score: 0,
    button: document.querySelector('#t1Button'),
    display: document.querySelector('#t1Display')
}
const t2 = {
    score: 0,
    button: document.querySelector('#t2Button'),
    display: document.querySelector('#t2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(team, opponent) {
    if (!isGameOver) {
        team.score += 1;
        team.display.textContent = team.score;
    }
    if (team.score === winningScore) {
        isGameOver = true;
        team.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        team.button.disabled = true;
        opponent.button.disabled = true;
    }
}


t1.button.addEventListener('click', function () {
    updateScores(t1, t2)
})
t2.button.addEventListener('click', function () {
    updateScores(t2, t1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let t of [t1, t2]) {
        t.score = 0;
        t.display.textContent = 0;
        t.display.classList.remove('has-text-success', 'has-text-danger');
        t.button.disabled = false;
    }
}
