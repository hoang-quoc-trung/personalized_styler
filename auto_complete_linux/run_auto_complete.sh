#!/bin/bash#
git clone --recursive https://github.com/akinomyoga/ble.sh.git
cd ble.sh
sudo apt-get update
sudo apt-get install gawk -y
make install
make install INSDIR=/path/to/blesh
make install DESTDIR=/tmp/blesh-package PREFIX=/usr/local
echo '[[ $- == *i* ]] && source '"$PWD"'/out/ble.sh --noattach' >> /root/.bashrc
echo '[[ ${BLE_VERSION-} ]] && ble-attach' >> /root/.bashrc