const h1 = document.querySelector("h1");
h1.innerHTML += <i>from JavaScript!</i>;
const h1 = document.querySelectorAll("h1");
for (const h1 of allH1) {
    h1.innerHTML += <i>from JavaScript!</i>;
}


// CLOCK
function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocateTimeString();
}
setUnterval(updateClock, 1000);

//ОТЧЕТ вреени
const destructTime = new Date() + 10 * 1000;
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

function destroy () {
    document.querySelector('html').innerHTML = '';
    document.querySelector('html').style.backgroundColor = 'black';
}
const buttonDestroy = document.querySelector('.dont-click');
buttonDestroy.addEventListener('click', destroy);

// Калькулятор в JS
function dcalculate () {
    const display = document.querySelector('.calc-display');
     display.value = eval(display.value);
}
document.querySelector('.calc').addEventListener('click', calculate);