var selectors = ['X', 'O'];
var selectShifter = 0;

function play(square){
    square.innerText = selectors[selectShifter];
    if (selectShifter) selectShifter = 0; else selectShifter = 1;
    square.attributes[0].nodeValue = '';
}