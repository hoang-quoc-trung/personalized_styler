#!/bin/bash#
wget https://github.com/Yash-Handa/logo-ls/releases/download/v1.3.7/logo-ls_Linux_x86_64.tar.gz
tar -xzf logo-ls_Linux_x86_64.tar.gz
cd logo-ls_Linux_x86_64
sudo cp logo-ls /usr/local/bin
sudo cp logo-ls.1.gz /usr/share/man/man1/
echo 'alias lsc="logo-ls"' >> /root/.bashrc