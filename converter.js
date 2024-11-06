let el = document.getElementById('cmNumber');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');


function converterUnit() {

    let cmNumber = new Number(el.value);

    let unit = cmNumber / 2.54;

    elResult.innerText = `${unit.toFixed(6)}`;

    return unit;
}

elSubmit.addEventListener('click', converterUnit);
