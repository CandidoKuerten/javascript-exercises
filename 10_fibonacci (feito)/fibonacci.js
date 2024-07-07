const fibonacci = function(num) {
    let aux = 1, somainicial = 1, somafinal = 0, aux1 = 0;
    if(num > 1){
        while(aux < num){
            aux1 = somafinal + somainicial
            somafinal = somainicial
            somainicial = aux1
        aux++
        };
    }else if(num == 0){
        return 0;
    }else if(num < 0){
        return "OOPS";
    }
    return somainicial;
};

// Do not edit below this line
module.exports = fibonacci;
