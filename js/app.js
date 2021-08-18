function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        // console.log('got three pin and calling again', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}



document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const keyInput = document.getElementById('key-input');
    if (isNaN(number)) {
        if (number == 'C') {
            keyInput.value = '';
        }
    } else {
        const previousNumber = keyInput.value;
        const newNumber = previousNumber + number;
        keyInput.value = newNumber;
    }

});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const keyInputs = document.getElementById('key-input').value;
    const pinSuccessMessage = document.getElementById('notify-success');
    const pinFailedMessage = document.getElementById('notify-fail');
    if (pin == keyInputs) {
        pinSuccessMessage.style.display = 'block';
        pinFailedMessage.style.display = 'none';
    } else {
        pinSuccessMessage.style.display = 'none';
        pinFailedMessage.style.display = 'block';
    }
}