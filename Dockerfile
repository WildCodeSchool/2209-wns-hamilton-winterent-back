FROM node:lts

RUN mkdir app
WORKDIR /app
COPY index.ts ./
COPY *.json ./

RUN npm i

COPY src src

CMD npm start
