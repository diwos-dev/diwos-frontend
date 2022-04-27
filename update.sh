#!/bin/bash
sudo git pull
sudo npm i
pm2 start npm --name "frontendDiwos" --namespace "frontendDiwos" -- run serve