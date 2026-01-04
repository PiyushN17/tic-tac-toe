const buttons = document.querySelectorAll("button");
const winMsg = document.getElementById('winMsg');
const restart = document.getElementById('restart');
let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"]
];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent !== "" || !gameActive) return;

        button.textContent = currentPlayer;

        if (checkWinner()) {
            winMsg.innerText = `${currentPlayer} wins!`;
            restart.hidden = false;
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});

function checkWinner() {
    return winPatterns.some(pattern => {
        return pattern.every(id => {
            return document.getElementById(id).textContent === currentPlayer;
        });
    });
}

restart.addEventListener('click', function() {
    window.location.reload();
})