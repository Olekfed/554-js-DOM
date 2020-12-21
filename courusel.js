const images = [
    'img/logistic.jpg',
    'img/drop.png'
]

let currentInx = 0;
function showCurrent() {
    const imgElement = document.querySelector('.courusel .current-img');
    imgElement.src = images[currentIdx];
}

function nextIdx() {
    currentIdx++
    if (currentInd < 0) currentIdx = images.length - 1;
    showCurrent()
}

setInterval(showNext, 3000);

document.querySelector('.courusel.next').addEventListener('click', showNext);
document.querySelector('.courusel.prev').addEventListener('click', showNext);
