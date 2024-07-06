const repeatString = function(nome,aux) {
    let cont = 0, name = "";
    if(aux >= 0){
    while(cont < aux){
        name += nome
        cont++
    };
    }else{
        name = 'ERROR'
    };
    return name
};

// Do not edit below this line
module.exports = repeatString;
