#!/bin/bash

echo "running postcss processes..."
postcss -c postcss/lib.js -l 
postcss -c postcss/nano.js -l 

echo "creating docs folder if it does not exist..."
mkdir -p docs 

echo "copying index.html..."
cp index.html docs 

echo "copying build.css..."
cp build.css docs

echo "copying images..."
cp -R images docs

echo "browserifying..."
browserify -t babelify index.js | uglifyjs > docs/index.js

