# testDev Application and restAPI files

## Introdução
O repositório possui dois branches:
- Master-1 está com os arquivos do aplicativo.
- Master-2 está com os arquivos da restAPI.

### API:
Nesta API, foi utilizado o banco de dados MongoDB, o Express.js e o Node.js. Essa API tem três rotas:
- *Primeira rota (Post):* Essa rota serve apenas para popular o banco no MongoDB.
- *Segunda rota (Get):* Essa rota serve para uma lista de todos os produtos que estão cadastrados no banco de dados.
- *Terceira rota (Get):* Essa rota serve para listar apenas os produtos que tem o nome igual a entrada pesquisada pelo usuário no front-end da aplicação.

### Aplicativo Ionic:
O projeto foi todo desenvolvido utilizando a linguagem Typescript.
Na proposta passada, o front-end deveria ter uma lista como todos os produtos, uma barra de pesquisa e uma paginação. A paginação no Ionic estava bem complicada de fazer, por conta de frameworks e etc, e foi deixada de lado no primeiro momento. Para buscar um produto, basta inserir o nome completo do mesmo na barra de pesquisa e aguardar a atualização da página. Para mostrar todos os produtos listados novamente, basta limpar a barra de pesquisa.

## Para buildar localmente (CORS habilitado):
### Aplicação web Ionic:

Instale o Ionic 3\
`npm install -g ionic cordova` 

Com a instalação concluída, vá até a pasta raiz do projeto e execute o app localmente\
`ionic serve` 


Como o projeto foi desenvolvido em um ambiente rodando Linux, pode ser que haja algum problema de compatibilidade do projeto para rodar em outros SOs, mas o próprio Ionic já propõe um comando a ser executado para correção desses conflitos.

### Serviço REST:
Siga o tutorial de instação do mongoDB no link a seguir: https://docs.mongodb.com/manual/installation. 

Realizada a instalação, basta dar um start no serviço do mongoDB\
`mongod`

Instale node usando nvm\
`nvm install node`

No diretório raíz do projeto instale o express.js\
`npm install express --save`

Para executar o serviço localmente, execute o comando `node index.js` e acesse `http://localhost/<port>`, com o port informado no terminal. 


## Para acessar o serviço e o aplicativo (CORS habilitado):
O banco de dados está trabalhando de forma online no mongoLab, e pode ser acessado através do link: (https://mlab.com/login/?r=%2Fdatabases%2Ftestdev#collections) (mateuspaduan, 44599351Ma). Foi feito o deploy do serviço diretamente do repositório do GitHub no Heroku, que também pode ser acessado através do link: (https://test-dev-ammo.herokuapp.com/tasks). O deploy da aplicação foi feito utilizando o Firebase Hosting, que também pode ser acessado através do link: (https://ammo-e17ab.firebaseapp.com)

Todos os deploys foram realizados nos serviços especificados acima por serem free.
