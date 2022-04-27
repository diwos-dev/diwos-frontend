#!/bin/bash
sudo git pull
sudo npm i
sudo pm2 start npm --name "frontendDiwos" -- serve