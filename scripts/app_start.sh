#!/bin/bash
cd /home/deployuser/
sudo pm2 kill
sudo pm2 start index.js