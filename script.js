const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');
const buttons = document.querySelectorAll('.btn');
const btnA = document.getElementById('a');
const btnB = document.getElementById('b');
const btnC = document.getElementById('c');

function randomRGB() {
    let r = Math.floor(Math.random() * 100);
    let g = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}
let savedColor = '';

function initGame() {
    buttons.forEach(btn => btn.disabled= false);
    if (document.querySelector('.next-game')) {
        document.querySelector('.next-game').remove();
    }

    savedColor = randomRGB();
    box.style.backgroundColor = savedColor;
    assignBtns();
};

function assignBtns() {
    let randomizedColors = [savedColor, randomRGB(), randomRGB()]
    .sort(() => {return Math.random() - 0.5});
    let btns = [btnA, btnB, btnC]
    .sort(() => {return Math.random() - 0.5});
    
    for (let i = 0; i < 3; i++) {
        btns[i].innerHTML = randomizedColors[i];
    };
};

buttons.forEach(btn => {
    const nextGame = document.createElement('button')
    nextGame.classList.add('next-game')
    nextGame.innerHTML = `Next Game`;
    
    btn.addEventListener('click', () => {
        if (btn.innerHTML === savedColor) {
            btn.style.backgroundColor = 'green';
            box2.innerHTML = 'Winner!';
        } else {
            btn.style.backgroundColor = 'red';
            box2.innerHTML = 'Sorry, try again';
            let btns = [btnA, btnB, btnC]
            btns.forEach(btn => {
                if(btn.innerHTML === savedColor) {
                    btn.style.backgroundColor = 'green';
                }
            })
        };
        document.querySelector('body').appendChild(nextGame);
        buttons.forEach(btn => btn.disabled="true");
        document.querySelector('.next-game').addEventListener('click', () => {
            savedColor = '';
            box.style.backgroundColor = '';
            box2.innerHTML = '';
            buttons.forEach(btn => {
                btn.style.backgroundColor = '';
            });
            initGame();
        });
    });
});

initGame();