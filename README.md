# WINTERENT BACK

##Sommaire
1. [Initialisation du back](#initialisation-du-back)
    - [Docker](#Docker)

## Initialisation du back

### Installation
prérequis : 
- Node ^v16.17.0
- Docker

Cloner le repo
Lancer la commande `npm i` pour installer les dépendances
Lancer la commande `docker compose up --build`

### Commandes Docker
**docker compose up --build** : à lancer en cas de modification dans le docker file ou docker-compose 
**docker compose up**


### Appolo/GraphQL
```
ports:
      - "5050:80"
    networks:
      postgres:
```
où 5050 correspond au port d'entrée du localhost et 80 correspont au port de l'image docker de PGAdmin

### DataBase:
PgAdmin : http://localhost:5050
http://localhost:8000/graphql

### Tests
Lancement de tests avec Jest : **npm test**