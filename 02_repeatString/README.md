# Exercício 02 - Repetirstring

Escreva uma função que simplesmente repete a string um determinado número de vezes:

`` `JavaScript
repetição ('hey', 3) // retorna 'heyheyhey'
`` `

Esta função levará dois argumentos, `string` e` num`.

* Nota:* Os exercícios após este não terão argumentos fornecidos como este - você precisará fornecer -os a partir de agora.Portanto, leia com cuidado a leitura de cada exercício para ver que tipos de argumentos serão esperados.

Você notará neste exercício que existem vários testes (consulte no arquivo `repentString.spec.js`).Somente o primeiro teste está ativado no momento.Então, depois de garantir que este primeiro passe, ative aos outros um por um, excluindo a função `.skip` da função` test.skip () `.


## dicas

- Tome nota da chamada da função acima- Como exatamente ela está sendo chamada?

- Você vai querer usar um loop para este.

- Crie uma variável para manter a string que você retornará, crie um loop que repete o número fornecido de vezes e adicione a string fornecida ao resultado em cada loop.

- Se a execução de `npm test repentstring.spec.js` retornará resultados semelhantes aos abaixo, verifique se você ativou o restante dos testes, conforme descrito nas instruções acima.

`` `
Suítes de teste: 1 aprovado, 1 total
Testes: 6 ignorados, 1 Passado, 7 Total
`` `