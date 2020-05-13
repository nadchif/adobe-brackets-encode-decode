@echo off
eslint ./src/*  & "./node_modules/.bin/babel" src -d . & "./node_modules/.bin/jasmine" --random=false & npm install
@echo on