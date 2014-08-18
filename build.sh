#!/bin/bash

jekyll build
gulp css js

mkdir -p build/assets/font/
cp src/_assets/modules/icon/icon.woff build/assets/font/
