const box = document.querySelector('.box');
const buttons = document.querySelectorAll('.btn');

function randomRGB () {
    let r = Math.floor(Math.random() * 100);
    let g = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
}
const savedColor = randomRGB()
box.style.backgroundColor = savedColor;
box.innerHTML = savedColor;

function shuffleBtns() {
    a = Math.floor(Math.random() * 100 < 4);
    b = Math.floor(Math.random() * 100 < 4);
    c = Math.floor(Math.random() * 100 < 4);
    
    // if (a > b) return "a";
    // if (b > a) return "b";
    // if (a > c) return "a";
    // if (c > a) return "c";
    // if (b > c) return "b";
    // if (c > b) return "c";
    if (a > b) console.log("a");
    if (b > a) console.log("b");
    if (a > c) console.log("a");
    if (c > a) console.log("c");
    if (b > c) console.log("b");
    if (c > b) console.log("c");
}

function assignBtns() {
    buttons.forEach(btn => {
        btn.innerHTML = randomRGB();
        let yolo = shuffleBtns();
        document.getElementById(yolo).innerText = savedColor;
    })
}

assignBtns()