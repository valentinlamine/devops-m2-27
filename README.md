# Docker - Démo API Starter (Base de données)

Ce dépôt contient la solution de la quête de découverte de Docker. 
L'objectif est de manipuler une base de données PostgreSQL dans un conteneur.

## Prérequis
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) ou Orbstack d'installé et démarré.
- Un terminal avec `git` installé.

## 1. Lancement du conteneur
Lancement de l'image officielle PostgreSQL 16 Alpine en tâche de fond :

```bash
docker run -d \
  --name demo-db \
  -e POSTGRES_USER=demo \
  -e POSTGRES_PASSWORD=demo \
  -e POSTGRES_DB=demo \
  postgres:16-alpine
```
