const palindromes = function (name) {
    let nome = name.replace(/[\W_]/g, '').toLowerCase().split("").join("");
    let reverse = nome.split('').reverse().join('');
    return nome === reverse;
};

// Do not edit below this line
module.exports = palindromes;
