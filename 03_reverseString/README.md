# Exercício 03 - reverter uma string

Muito simples, escreva uma função chamada `reverrestring` que retorne sua entrada, revertida!

`` `JavaScript
reverrestring ('olá lá') // retorna 'ereht olleh'
`` `

Você notará neste exercício que existem vários testes (no arquivo `reversestring.spec.js`).Atualmente, apenas o primeiro teste está ativado.Depois de garantir que o primeiro teste passe, ative os testes restantes um por um, removendo o `.skip` da função` test.skip () `.


## dicas
As strings em JavaScript não podem ser revertidas diretamente, então você terá que dividi -lo em outra coisa primeiro. Faça a reversão e depois junte -a novamente em uma string.