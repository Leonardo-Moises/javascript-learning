# Variáveis em JavaScript

## O que são?
Variáveis armazenam valores utilizados pelo programa.

## Exemplo

```javascript
let nome = "Leonardo";
const idade = 20;

O que aprendi?
- let permite reatribuir valores.
- const impede a reatribuição da variável.
- var é uma forma mais antiga de declaração.


Nesse exemplo, a idade é apenas ilustrativa. Você substituiria pelos exemplos que realmente criou durante a aula.

O ideal é manter o mesmo padrão em todos os arquivos: **conceito, sintaxe, exemplo, quando utilizar e observações pessoais**.

## 6. O que você deve e não deve publicar

| <icon name="check-circle" color="success" inline/> Pode publicar | <icon name="x-circle" color="danger" inline/> Evite publicar |
|---|---|
| Exercícios resolvidos por você | Respostas copiadas sem compreensão |
| Exemplos de JavaScript | Senhas, tokens e chaves de API |
| Explicações escritas por você | Dados pessoais ou de clientes |
| Erros e soluções encontradas | Arquivos internos da empresa |
| Pequenos projetos de lógica | Dependências como `node_modules/` |
| Referências e links de estudo | Material pago do curso reproduzido sem autorização |

**Atenção à segurança:** nunca publique credenciais reais. O `.gitignore` ajuda a impedir o rastreamento de determinados arquivos, mas não protege segredos que já foram publicados no histórico. <Cite refs={["turn239887search0","turn239887search6"]}/>

Também não é necessário publicar todo exercício trivial. Priorize aqueles que demonstram um conceito, um raciocínio ou uma dificuldade superada.

## 7. Quando começar a usar Git de verdade?

Depois de criar o repositório e entender a interface do GitHub, recomendo aprender o fluxo básico pelo VS Code.

| Comando | Finalidade |
|---|---|
| `git clone` | Copia um repositório para seu computador. |
| `git status` | Mostra arquivos modificados. |
| `git add` | Prepara alterações para o próximo commit. |
| `git commit` | Registra alterações no histórico local. |
| `git push` | Envia os commits ao GitHub. |
| `git pull` | Traz atualizações do repositório remoto. |

Não precisa decorar tudo agora. Primeiro vamos colocar seu repositório no ar, depois praticaremos esses comandos com alterações reais.

## 8. Nosso plano de execução

{@body const steps = ["Criar o repositório público no GitHub","Personalizar o README.md","Criar a primeira pasta e documentação","Aprender a fazer commits","Configurar Git e VS Code no computador","Publicar os próximos estudos pelo VS Code"]}
{@body const [done,setDone] = DIL.useState([])}
<box border radius="lg" padding={3} gap={3}>
  <row align="center" justify="between">
    **Checklist do projeto**
    <text color="secondary" size="xs" tabularNums>{done.length} de {steps.length}</text>
  </row>
  <box background="surface-tertiary" height="6px" radius="full" clip>
    <box background="rgba(35,135,95,0.9)" height="100%" width={`${done.length/steps.length*100}%`} radius="full"/>
  </box>
  {#each steps as step,i}
    <checkbox key={i} checked={done.includes(i)} onChange={v=>setDone(old=>v?[...old,i]:old.filter(x=>x!==i))}>{step}</checkbox>
  {/each}
</box>

Minha sugestão é **não tentar concluir tudo hoje**. Faça a criação do repositório e do README primeiro. Depois vamos construir os conteúdos com base no que você realmente estudou.

E uma recomendação importante: não quero que você dependa de mim para escrever todas as explicações. Quero que você tente escrever primeiro e me utilize para revisar, corrigir e melhorar tecnicamente. Isso vai contribuir muito mais para seu desenvolvimento.

**Para começarmos juntos:** você já possui uma conta no GitHub ou vamos criar uma do zero?
