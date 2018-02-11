#!/usr/bin/env bash
docker build -t auth-angular2-05-token-siennsoft .
docker run -p 3000:3000 -it auth-angular2-05-token-siennsoft
