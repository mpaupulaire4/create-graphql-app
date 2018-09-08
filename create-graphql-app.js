#!/usr/bin/env node
const execSync = require('child_process').execSync;
const path = require('path');
const shell = require('shelljs');

const SEPERATOR = process.platform === 'win32' ? ";" : ':';
const env = Object.assign({}, process.env);

env.PATH = path.resolve('./node_modules/.bin') + SEPERATOR + env.PATH

function exec(cmd) {
  shell.exec(cmd)
}

shell.exec('PATH=$(npm bin):$PATH; mtml ./mtml/scenario.json')
