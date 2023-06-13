FROM node:lts

RUN mkdir app
WORKDIR /app
COPY *.json ./
COPY codegen.yml ./
COPY fixtures fixtures
COPY ./.env ./.env
RUN npm i
RUN npm i -g concurrently

COPY src src
RUN npm test
# CMD npm start
