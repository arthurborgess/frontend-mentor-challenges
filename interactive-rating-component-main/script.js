function rateValue (value) {
    document.getElementById('rate-value-note').innerText = value;
}

function submitted () {
    document.getElementsByClassName('card')[0].style.display = 'none';
    document.getElementsByClassName('submitted')[0].style.display = 'flex';
}