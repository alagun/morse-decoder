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

//console.log(expr.replace(/.{10}/g, word  =>  ((word === '**********') ? ' ' : (MORSE_TABLE[word.replace(/.{2}/g, symbol => MORSE_KEYS[symbol])]))));
    
function decode(expr) {
    const MORSE_KEYS = {
        '10' : '.', 
        '11': '-',
        '00': '',
    };
// ----идем по 10 символов строки -- сравниваем с пробелом --- проверям 10 символов по 2 на соответствие с заменяе согласно нашей таблицы и вызываем замену по ключу    
return expr.replace(/.{10}/g, word  =>  ((word === '**********') ? ' ' : (MORSE_TABLE[word.replace(/.{2}/g, symbol => MORSE_KEYS[symbol])])));  
      
}

module.exports = {
    decode
}