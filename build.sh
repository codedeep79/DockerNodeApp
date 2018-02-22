#!/bin/sh

docker stop node_app
docker rm node_app
docker build -t nodeapp .
docker run --name node_app -d -p 80:3000 nodeapp
sleep 1
curl http://localhost