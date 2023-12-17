let text = document.getElementById('text');
let recolorValue = document.getElementById('recolor');
let changeText = document.getElementById('changeText');
let textValue = document.getElementById('inputText');
let changeColor = document.getElementById('changeColor');
let textRange = document.getElementById('textRange');
let arabCheckBox = document.getElementById('arab');
let englishCheckBox = document.getElementById('english');
let size = document.getElementById('size');
size.onclick = function () {
    text.style.fontSize = '50px' ;
}
englishCheckBox.onchange = function () {
    if (englishCheckBox.checked) {
        text.style.fontFamily ='BRENZA';
        text.textContent = 'hello world';
    }else {
        text.style.fontFamily ='lemonada';
        text.textContent = 'مرحبا بالعالم';
    }
}
arabCheckBox.onchange = function () {
    if (arabCheckBox.checked) {
        text.style.fontFamily ='lemonada';
        text.textContent = 'مرحبا بالعالم';
    }
    else {
        text.style.fontFamily ='BRENZA';
        text.textContent = 'hello world';
    }
}
changeText.onclick = function () {
    text.textContent = textValue.value;
}
changeColor.onclick = function () {
    text.style.color = recolorValue.value;
    if (recolorValue.value == '' ) {
        text.style.color = '#AD1E00';
    }
}

textRange.oninput = function () {
    let rangeValue = textRange.value;
    text.style.fontSize = rangeValue + "px";
}

window.onload = function () {
    arabCheckBox.checked = true ;
    text.style.fontSize = '50px';
    textRange.max = 66;
    text.max = '100px' ;
    text.style.color = '#AD1E00';
}