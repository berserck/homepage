#!/bin/bash
# Script Name: update-site.sh
# Description: Script to update website files
#
# Coded by <pedro.parracho@cern.ch>
#

DEST=/var/www/pgp_website

declare -a SERVERS=("185.212.226.88")

for server in ${SERVERS[@]}; do
    echo copying to server $server
    rsync -vaP \
--exclude=.git --exclude=.idea --exclude=.DS_Store \
--exclude=README.md --exclude=LICENSE --exclude=update-site.sh \
--perms --chmod=u+rw,o+r,g+r \
. ${server}:${DEST}
done
