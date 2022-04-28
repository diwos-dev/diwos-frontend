#!/bin/bash
sudo git pull
sudo npm i
pm2 start ecosystem.config.js