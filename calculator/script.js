let display = document.getElementById('display');
let memory = 0;

document.addEventListener('keydown', function(event) {
    if ((event.key >= 0 && event.key <= 9) || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%') {
        addToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else {
        alert('Only numbers and basic operators (+, -, *, /, %) are allowed!');
    }
});

function addToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid input!');
        display.value = '';
    }
}

function addToMemory() {
    memory += parseFloat(display.value) || 0;
    display.value = '';
}

function subtractFromMemory() {
    memory -= parseFloat(display.value) || 0;
    display.value = '';
}

function clearMemory() {
    memory = 0;
}
