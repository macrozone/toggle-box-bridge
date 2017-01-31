#!/usr/bin/env node
/* eslint-disable no-console */

const path = require('path');
const util = require('util');
const childProcess = require('child_process');

const processes = [];
const baseDir = path.resolve(__dirname, '..');
const chimpBin = path.resolve(baseDir, 'node_modules/.bin/chimp');

const appOptions = {
  settings: 'settings.json',
  port: 3000,
  env: {
    ROOT_URL: 'http://localhost:3000',
  },
};

const meteorOptions = {
  name: 'Meteor App',
  command: `meteor --settings ${appOptions.settings} --port ${appOptions.port}`,
  waitForMessage: 'App running at',
  options: {
    cwd: baseDir,
    env: util._extend(appOptions.env, process.env),
  },
};

const chimpOptions = {
  name: 'Chimp',
  command: `${chimpBin} --mocha --ddp=http://localhost:3000 --path=tests`,
  options: {
    env: Object.assign({}, process.env, {
      NODE_PATH: `${process.env.NODE_PATH +
      path.delimiter + baseDir +
      path.delimiter + baseDir}/node_modules`,
    }),
  },
};

function startProcess(opts) {
  return new Promise((resolve) => {
    const proc = childProcess.exec(
     opts.command,
     opts.options);
    if (opts.waitForMessage) {
      proc.stdout.on('data', function waitForMessage(data) {
        if (data.toString().match(opts.waitForMessage)) {
          resolve();
        }
      });
    }
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on('close', function (code) {
      console.log(opts.name, `exited with code ${code}`);
      processes.map(item => item.kill());
      process.exit(code);
    });
    processes.push(proc);
  });
}

startProcess(meteorOptions)
  .then(() => {
    startProcess(chimpOptions);
  });
