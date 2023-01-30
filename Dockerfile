FROM node:lts

RUN mkdir app
WORKDIR /app
COPY *.json ./
COPY codegen.yml ./

RUN npm i

COPY src src

CMD npm start
