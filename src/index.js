const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const decode = expr => {
    const arr = [];
    const stack = [];

    for (let i = 0; i < expr.length; i += 10) {
        let n = expr.slice(i, i + 10);

        arr.push(n);
    };

    arr.forEach((n) => {
        let str = '';

        for (let i = 0; i < 10; i += 2) {
            let e = n.slice(i, i + 2);

            if (e === '00') {
                str += '';
            } else if (e === '10') {
                str += '.';
            } else if (e === '11') {
                str += '-';
            };
        };

        stack.push(str);
    });

    res = stack.map((n) => {
       return MORSE_TABLE[n] || ' ';
    });

    return res.join('');
};

module.exports = {
    decode
};