#!/bin/bash

set -eup pipefail

docker compose down --rmi all -v
yes | docker volume prune
yes | docker image prune -a
yes | docker system prune
docker compose build --no-cache
