#!/bin/sh

wintersmith build && \
cd build && \
rsync -vrzhe ssh --delete --progress . rhay@russellhay.com:/home/www/comingsoon/_/
