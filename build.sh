#!/bin/bash

echo "running postcss processes..."
postcss -c postcss-lib.js -l 
postcss -c postcss-nano.js -l 
postcss -c postcss-example -l 

echo "creating docs folder if it does not exist..."
mkdir -p docs 

echo "copying index.html..."
cp example/index.html docs 

echo "copying build.css..."
cp example/build.css docs

echo "copying images..."
cp example/bison.png docs 
cp example/trees.png  docs

echo "browserifying..."
browserify -t babelify example/index.js | uglifyjs > docs/index.js

