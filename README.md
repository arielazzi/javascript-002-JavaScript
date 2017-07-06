# javascript-002-JavaScript

(elemento).querySelector(); - Retorna o primeiro elemento dentro do documento

(elemento).textContent - pega o conteúdo do elemento

(elemento).querySelectorAll - Essa função nos retorna um array com todos os elementos que possuem a mesma classe


(elemento).toFixed(qtd) -  e ela recebe por parâmetro a quantidade de casas decimais que queremos exibir do número.

(elemento).style.(prop css com camelCase) - Altera as propriedades do css (não é bem visto misturar os mundos de js com css)

(elemento).classList.add("nome classe") - adiciona uma nova classe 

------------------------

Diferença entre : 
 - botao.addEventListener('click', botaoHandler());

e

 - botao.addEventListener('click', botaoHandler);

Com os parenteses é associando o retorno da função;

------------------------

## Função anônima 
 - Função declarada diretamente no parametro do evento

```js
titulo.addEventListener('click', function(){
   
});

```

---------

## PreventDefault

 - prevenir o comportamento padrão do evento

```js

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
});
```