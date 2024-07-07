const getTheTitles = function(value) {
    let filmes = [];
    value.forEach(index => {
        filmes.push(index.title);
    });
    return filmes;
};

// Do not edit below this line
module.exports = getTheTitles;
