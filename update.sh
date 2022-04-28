#!/bin/bash
sudo git pull
sudo npm i
sudo pm2 restart ecosystem.config.js