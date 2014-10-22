#!/bin/sh

wintersmith build -c config.production.json && \
cd build && \
rsync -vrzhe ssh --delete --progress . rhay@russellhay.com:/home/www/comingsoon/_/
