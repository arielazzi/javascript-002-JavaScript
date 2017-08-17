# javascript-002-JavaScript

(elemento).querySelector(); - Retorna o primeiro elemento dentro do documento

(elemento).textContent - pega o conteúdo do elemento

(elemento).querySelectorAll - Essa função nos retorna um array com todos os elementos que possuem a mesma classe


(elemento).toFixed(qtd) -  e ela recebe por parâmetro a quantidade de casas decimais que queremos exibir do número.

(elemento).style.(prop css com camelCase) - Altera as propriedades do css (não é bem visto misturar os mundos de js com css)

(elemento).classList.add("nome classe") - adiciona uma nova classe 

------------------------

Diferença entre : 
```js
botao.addEventListener('click', botaoHandler());
```
e
```js
botao.addEventListener('click', botaoHandler);
```

Com os parenteses é associando o retorno da função, e sem é executado a função;

------------------------

## Função anônima 
 - Função declarada diretamente no parametro do evento

```js
titulo.addEventListener('click', function(){
   
});

```
------------------------

## Função Nomeada 
 - Levam um nome em sua criação e que podem ser invocadas posteriormente

```js
function mostraMensagem(){
    console.log("Fui clicado");
}
```

---------

## PreventDefault

 - prevenir o comportamento padrão do evento

```js

botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
});
```
-----
## createElement

- Cria um elemento HTML em Javascript
```js
var nomeTd = document.createElement("td");
```
-----
## value

- Seleciona um valor de um input
 ```js
 var nome = form.nome.value;
 ```
-----
## appendChild

 - Insere um elemento como o último filho de um outro elemento.
 ```js
 pacienteTr.appendChild(nomeTd);
 ```
-----
## event shortcut

Para cada evento existente no JavaScript, há a propriedade on + nomeDoEvent. No caso, temos onclick para o evento click, onmouseover para o evento mouseover e assim por diante. Nesse caso, a função que desejamos executar é atribuída direto na propriedade. No entanto, essa forma tem uma limitação, como estamos guardando a função em uma propriedade, se adicionarmos outra função, essa sobrescreverá a anterior. Sendo assim, a boa prática é trabalhar com addEventListener() mesmo que você só queria adicionar um único evento.

```js
<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Botão clicado');
    }

     function outroHandler() {

        alert('Botão clicado também!');
    }


    botao.onclick = botaoHandler;
    botao.onclick = outroHandler; // substitui botaoHandler
</script>
```

-----
## innerHTML

 - Altera o conteúdo HTML
 ```js
 var mensagemErro = document.querySelector("#mensagens-erro");
 mensagemErro.innerHTML = "";
 ```
 -----
## dblclick

 - Evento de clique duplo
 ```js
 tabela.addEventListener("dblclick", function(event) {
 });
 ```

 -----
## target

 - Seleciona o "alvo" que sofreu o evento
 ```js
 event.target
 ```
 
 -----
## parentNode

 - Retorna o pai do elemento selecionado
 ```js
 event.target.parentNode
 ```
