function calculate() {
    var sideLength = parseFloat(document.getElementById('sideLength').value);

    if (isNaN(sideLength) || sideLength <= 0) {
        document.getElementById('error').innerHTML = 'Masukkan panjang sisi yang valid.';
        document.getElementById('result').innerHTML = '';
        return;
    } else {
        document.getElementById('error').innerHTML = '';
    }
    
    var calculationType = document.getElementById('calculationType').value;
    
    var result;
    if (calculationType === 'luas') {
        result = sideLength * sideLength;
    } else if (calculationType === 'keliling') {
        result = 4 * sideLength;
    }

    document.getElementById('result').innerHTML = 'Hasil: ' + result;
}
