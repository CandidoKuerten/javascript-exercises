const sumAll = function(num1, num2) {
    let soma = 0;
    
    if(num1 > num2 && num1 >= 0 && num2 >= 0 && typeof num1 === 'number' && typeof num2 === 'number'){
        for(let aux = num1; aux >= num2; aux--){
            soma += aux;
        }
    }else if(num2 > num1 && num1 >= 0 && num2 >= 0 && typeof num1 === 'number' && typeof num2 === 'number'){
        for(let aux = num1; aux <= num2; aux++){
            soma += aux;
        }
    }else{
        return 'ERROR';
    }

    return soma;
};

// Do not edit below this line
module.exports = sumAll;
