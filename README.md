## ORIENTAÇÕES PARA O DESENVOLVIMENTO DO PROJETO

## Clonagem do repositório
1. Rode o comando `git clone https://github.com/fhrsales/sveltekit.git` para clonar o repositório
2. Acesse o diretório `cd sveltekit`

## Instalação das dependências
Rode o comando `npm install` para instalar todas as dependências necessárias para rodar o projeto localmente


## Definindo o tipo de aplicação
Há dois arquivos na raiz:
MPA - svelte.config.js.MPA (Multi Page Application)
SPA - svelte.config.js.SPA (Single Page Application)

Defina o tipo de aplicação e renomeie o arquivo para `svelte.config.js`


## Desenvolvimento: inicia o servidor local e abre o app em uma aba do browser
Rode o comando `npm run dev -- --open`


## Compilamento: cria uma pasta build com o projeto pronto para produção
1. Rode o comando `npm run build`
2. Para testar localmente o projeto compilado, entre no subdiretório `(cd build)` e rode o comando: `python3 -m http.server`


## Links para páginas
Para linkar páginas coloque direto o nome do arquivo, sem a extensão `.svelte`. Ex.: `href="template-de-reportagem.html"`


2. Se este apontamento for feito no arquivo `src/routes/index.svelte` o caminho será `src="agenda-estadao/assets/nome-do-arquivo"`