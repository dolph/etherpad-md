# setup node.js for etherpad development
sudo apt-get update
sudo apt-get install curl -V -y
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install build-essential -V -y # required for npm
sudo apt-get install nodejs -V -y
sudo apt-get install mysql-server -V -y
sh bin/installDeps.sh
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
# export PATH=$HOME/local/node/bin:$PATH
# export NODE_PATH=$HOME/local/node:$HOME/local/node/lib/node_modules
