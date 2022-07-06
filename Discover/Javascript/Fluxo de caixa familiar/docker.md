- Criar um documento com o nome de "dockerfile" com as seguintes linhas:

FROM node:16

WORKDIR /usr/src/app

COPY script.js ./

RUN node script.js

- Para criar imagem do docker utilize o comando: "docker build -t fluxodecaixa:1 ." no terminal do documento "dockerfile".