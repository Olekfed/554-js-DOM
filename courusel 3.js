const images = [
    'img/logistic.jpg',
    'img/drop.png'
]

let currentInx = 0;
function showCurrent() {
    const imgElement1 = document.querySelector('.courusel3 .img1');
    const imgElement2 = document.querySelector('.courusel3 .img2');
    const imgElement3 = document.querySelector('.courusel3 .img3');
    imgElement1.src = images[currentIdx];
      const idx2 = currentIdx + 1 >= images.length ? 0 : currentIdx + 1;
        const idx3 = idx2 + 1 > images.length ? 0 : idx2 + 1;
        imgElement1.src = images[currentIdx];
        imgElement2.src = images[idx2];
        imgElement3.src = images[idx3];
 }
function showNext() {
        currentIdx++;
        if (currentIdx >= images.length) currentIdx = 0;
        showCurrent();
    }
 function showPrev() {
        currentIdx--;
        if (currentIdx < 0) currentIdx = images.length - 1;
        showCurrent();
    }

setInterval(showNext, 3000);

document.querySelector('.courusel.next').addEventListener('click', showNext);
document.querySelector('.courusel.prev').addEventListener('click', showNext);
showCurrent();
