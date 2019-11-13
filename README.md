# IoT
Aplicação web do projeto final  da matéria de IoT

## Instalação do projeto com Docker
- Primeiramente, rode o comando:
```
make build
``` 
## Instalação do projeto sem docker
- Primeiramente, instale o Node.js e o NPM
- Após isso, execute: 
```
npm install
``` 

## Rodar o projeto com docker
- Execute o comando:
```
make up
```
- Verifique que o projeto estará rodando em [http://localhost:3000](http://localhost:3000)

**OBS.:** caso tenha acabado de executar o comando `make build`, a aplicação já estará rodando.

## Rodar o projeto sem docker
- Execute o comando:
```
npm start
```