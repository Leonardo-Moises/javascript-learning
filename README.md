# 01 — Primeiros passos com JavaScript

> **Objetivo:** compreender variáveis, mensagens, entrada de dados, condicionais e saídas de diagnóstico por meio de um jogo do número secreto.

## Conceitos abordados

| Conceito | Finalidade | Exemplo |
|---|---|---|
| `let` | Declarar variável | `let numeroSecreto = 29;` |
| `alert()` | Mostrar mensagem no navegador | `alert('Olá!');` |
| `prompt()` | Pedir informação ao usuário | `let nome = prompt('Nome?');` |
| `if` / `else` | Tomar decisões | `if (chute === 29) { ... }` |
| `console.log()` | Exibir dados no console | `console.log(chute);` |

## O que aprendi

### Variáveis e atribuição

```javascript
let numeroSecreto = 29;
let nome = 'Lua';
```

`let` declara a variável; `=` atribui um valor. Textos como `'Lua'` precisam de aspas.

### Entrada e saída

```javascript
alert('Boas-vindas!');
let resposta = prompt('Escolha um número:');
console.log(resposta);
```

`alert()` abre uma janela de mensagem; `prompt()` recebe texto digitado (ou `null` se cancelado); `console.log()` escreve no console de desenvolvedor.

### Comparações e decisões

```javascript
let numeroSecreto = 29;
let chute = 29;

if (chute === numeroSecreto) {
  alert('Acertou!');
} else {
  alert('Tente novamente!');
}
```

- `=` atribui um valor.
- `==` compara com possível conversão de tipos.
- `===` compara valor **e tipo**; geralmente é a melhor escolha.
- `>`, `<`, `>=` e `<=` comparam grandezas.

## Erros que me ensinaram

1. **Texto sem aspas:** `let nome = lua;` não equivale a `let nome = 'Lua';`.
2. **Nome de variável entre aspas:** `alert('mensagem')` mostra o texto literal; `alert(mensagem)` usa o valor da variável.
3. **Entrada não armazenada:** `prompt('Nome?')` sozinho pergunta, mas não guarda a resposta para reutilizar; prefira `let nome = prompt('Nome?');`.
4. **Atribuição em condição:** `if (senha = senhaDoSistema)` não verifica igualdade; para comparar, use `===`.

## Projeto prático

O arquivo [`app.js`](app.js) contém uma versão funcional do **jogo do número secreto**. Abra [`index.html`](index.html) no navegador para testar.

**Complementos além do conteúdo inicial da aula:** conversão com `Number()`, checagem com `Number.isInteger()`, `.trim()` e validação de entradas. Foram incluídos para evitar que respostas vazias ou inválidas sejam tratadas como chutes válidos.

## Próximo passo

Reescrever o jogo sem consultar o exemplo e praticar `if`/`else` e captura de dados.
