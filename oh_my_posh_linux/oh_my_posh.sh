#!/bin/bash
# oh my posh (https://ohmyposh.dev/docs/installation/linux)

# Install into /usr/local/bin, which is already on $PATH. The upstream installer
# used to default there but now targets /root/.local/bin, which is not on $PATH,
# so the shell could no longer find the binary afterwards.
curl -s https://ohmyposh.dev/install.sh | bash -s -- -d /usr/local/bin

# Append the init line only once, so re-running this script does not stack
# duplicate entries in .bashrc.
INIT_LINE='eval "$(oh-my-posh init bash --config '"$PWD"'/multiverse-neon_ubuntu.omp.json)"'
grep -qxF "$INIT_LINE" /root/.bashrc 2>/dev/null || echo "$INIT_LINE" >> /root/.bashrc
