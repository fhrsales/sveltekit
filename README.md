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
1. A linha 23 deve conter o subdiretório onde o projeto vai rodar. Ex.: `https://arte.estadao.com.br/politica/eleicoes/agenda-estadao/`. Colocar na chave `base` o subdiretório, sem o nome do servidor. Ex.: `'/politica/eleicoes/agenda-estadao/'`
2. Rode o comando `npm run build`
3. Para testar localmente o projeto compilado, entre no subdiretório `(cd build)` e rode o comando: `python3 -m http.server`


## Links para páginas
Para linkar páginas coloque direto o nome do arquivo, sem a extensão `.svelte`. Ex.: `href="template-de-reportagem.html"`


## Links para arquivos estáticos utilizados na programação do app
Há duas configurações de endereço para apontar para arquivos estáticos que ficam na pasta `static`:
1. Se for apontar para um arquivo que está na pasta `assets` o caminho será `src="./assets/nome-do-arquivo"`. Veja que `assets` é uma pasta dentro de `static`. O arquivo está configurado para criar uma pasta na compilação chamada `assets` com todo o conteúdo desta pasta. Se for criada uma outra pasta, por exemplo, `styles`, será criada uma pasta na compilação com o mesmo nome, `styles`.

2. Se este apontamento for feito no arquivo `src/routes/index.svelte` o caminho será `src="agenda-estadao/assets/nome-do-arquivo"`

3. SVGs:
Salve o arquivo na pasta `src/svg`
Para utilizar o SVG em um componente:
`<script>`
  `import nome-svg from "$svg/nome-svg.svg";`
`</script>`
Insira no ponto do HTMl a comando:
`{@html nome-svg}`

4. É possível utilizar imagens e vídeos do Arc no Google Docs. Há markups específicas para estes dois componentes. No template do Google Docs há um comentário com orientações sobre como utilizá-lo.


## Arquivos com link para documentos do Google parseados em arquivos JSON
`src/components/header&footer/Rodape.svelte`
`src/components/swiper/Indice.svelte`
`src/components/routes/index.svelte`
`src/components/routes/template-de-reportagem.html.svelte`
Fique atento se o documento não está cacheando