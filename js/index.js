const h1 = document.querySelector('h1');
for (const h1 of allH1) {
h1.innerHTML +=' <i>from JavaScript!</i>';
}

// CLOCK
function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocateTimeString();
}
setInterval(updateClock, 1000);

// Відлік
const startTime = new Date();
function updateTimer() {
    const currTime = new Date();
    const diffSecs = Math.round((currTime - startTime) / 1000);
    document.querySelector('.timer').innerText = diffSecs;
}
setInterval(updateTimer, 1000);

//ОТЧЕТ вреmени
const destructTime = Number (new Date()) + 10 * 1000;
function updateSelfDistruct() {
    const currTime = new Date();
    const diffSecs = Math.round((destructTime - currTime) / 1000); 
    document.querySelector('.self-distruct').innerText = diffSecs;
    if (diffSecs <= 0) {
        document.querySelector('html').innerHTML = '';
        document.querySelector('html').style.backgroundColor = 'black';

    }
}
//setInterval(updateTimer, 1000);

// Нажатие кнопочки
function destroy () {
    document.querySelector('html').innerHTML = '';
    document.querySelector('html').style.backgroundColor = 'black';
}
const buttonDestroy = document.querySelector('.dont-click');
buttonDestroy.addEventListener('click', destroy);

// Калькулятор в JS
function calculate () {
    const display = document.querySelector('.calc-display');
     display.value = eval(display.value);
}
document.querySelector('.calc').addEventListener('click', calculate);