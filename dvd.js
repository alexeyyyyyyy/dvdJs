const dvd1 = document.getElementById('dvd');
const dvdCont = document.getElementById('container');

let posX = 2;
let posY = 2;

function move() {
    let x = dvd1.offsetLeft;
    let y = dvd1.offsetTop;

    if (x + dvd1.offsetWidth >= dvdCont.offsetWidth || x <= 0) {
        posX = -posX;
    }

    if (y + dvd1.offsetHeight >= dvdCont.offsetHeight || y <= 0) {
        posY = -posY;
    }

    x += posX;
    y += posY;

    dvd1.style.left = x + 'px';
    dvd1.style.top = y + 'px';

    requestAnimationFrame(move);
}

move();