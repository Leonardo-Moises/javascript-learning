# 01 — Primeiros Passos com JavaScript

> Trilha: Lógica de Programação  
> Status: Concluído

## Sobre este tópico

Neste primeiro módulo, estudei os fundamentos da lógica de programação utilizando JavaScript, desenvolvendo os primeiros conceitos de variáveis, entrada e saída de dados, operadores de comparação e estruturas condicionais.

Os conceitos foram aplicados durante o desenvolvimento de um jogo de adivinhação de número secreto.

## Conceitos estudados

### 1. Variáveis — `let`

Utilizadas para armazenar valores que podem ser alterados durante a execução do programa.

```javascript
let numeroSecreto = 29;
let nome = "Lua";
```

### 2. Exibição de mensagens — `alert()`

Exibe uma caixa de diálogo com uma mensagem no navegador.

```javascript
alert("Boas-vindas ao jogo do número secreto!");
```

### 3. Entrada de dados — `prompt()`

Solicita uma informação ao usuário e retorna a resposta como texto, ou `null` caso seja cancelado.

```javascript
let chute = prompt("Escolha um número entre 1 e 30");
```

### 4. Estruturas condicionais — `if` e `else`

Permitem executar diferentes ações dependendo do resultado de uma condição.

```javascript
let idade = 18;

if (idade >= 18) {
    alert("Pode tirar a habilitação!");
} else {
    alert("Ainda não pode tirar a habilitação.");
}
```

### 5. Operadores de comparação

| Operador | Descrição |
|---|---|
| `===` | Igualdade estrita |
| `==` | Igualdade com conversão de tipos |
| `!==` | Diferença estrita |
| `>` | Maior que |
| `<` | Menor que |
| `>=` | Maior ou igual |
| `<=` | Menor ou igual |

### 6. Console — `console.log()`

Permite exibir mensagens e valores no console do navegador, sendo útil para acompanhar a execução e investigar problemas no código.

```javascript
console.log("Parabéns! Você acertou!");
```

## Aprendizados importantes

Durante os exercícios, identifiquei alguns erros que contribuíram para meu aprendizado:

- Utilizar `=` no lugar de um operador de comparação.
- Esquecer as aspas ao atribuir valores de texto.
- Não armazenar o retorno de `prompt()` em uma variável.
- Confundir o nome de uma variável com uma string literal.

## Prática desenvolvida

**Jogo do Número Secreto**

Aplicação simples em JavaScript na qual o usuário informa um número e o programa verifica se ele corresponde ao número secreto.

Conceitos aplicados: variáveis, entrada de dados, condicionais e comparação de valores.

---

**Próxima etapa:** continuar praticando lógica de programação e desenvolver novos exercícios com JavaScript.
