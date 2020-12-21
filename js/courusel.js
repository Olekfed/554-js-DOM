{
const images = [
    'img/logistic.jpg',
    'img/drop.png',
    'img/waves.png',
    'img/soft-water.jpg'
]

let currentIdx = 0;
function showCurrent() {
    const imgElement = document.querySelector('.courusel .current-img');
    imgElement.src = images[currentIdx];
}

function showNext() {
    currentIdx++
    if (currentInd >= images.length) currentIdx = 0;
    showCurrent();
}

function showPrev() {
    currentIdx--
    if (currentInd < 0) currentIdx = images.length - 1;
    showCurrent();
}

setInterval(showNext, 3000);

document.querySelector('.courusel.next').addEventListener('click', showNext);
document.querySelector('.courusel.prev').addEventListener('click', showPrev);
showCurrent();
}