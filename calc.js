let a = ''; // first number
let b = ''; // second number
let sign = ''; // operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '÷','%'];

// screen
const out = document.querySelector('.screen p');

function clearAll() {
    a = ''; // first number and result
    b = ''; // second number
    sign = ''; // operation sign
    finish = false;
    out.textContent = 0;
}



document.querySelector('.AC').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return; // non-button pressed
    if (event.target.classList.contains('AC')) return; // button pressed clearAll AC

    out.textContent = ''; // I get the button pressed
    const key = event.target.textContent;


    if (digit.includes(key)) { // if the key 0-9 is pressed (or ".")
        if (b === '' && sign === '') {
            if (key === '.' && a.includes('.')) {
                a += '';
                out.textContent = a;
            } else {
                a += key;
                out.textContent = a;
            }
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            if (key === '.' && b.includes('.')) {
                b += '';
                out.textContent = b;
            } else {
                b += key;
                out.textContent = b;
            }
        }
        return;
    }

    if (action.includes(key)) { // if the key -, +, *, ÷ is pressed

        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }


    if (key === '=') { // equal pressed
        if (b === '') b = a;

        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '*':
                a = a * b;
                break;
            case '÷':
                if (b === '0') {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }


}

