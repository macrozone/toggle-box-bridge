#!/usr/bin/env node

/**
 * Copied from https://github.com/xolvio/qualityfaster
 * Refactor to ES6
 */

var path = require('path'),
   fs = require('fs'),
   extend = require('util')._extend,
   exec = require('child_process').exec,
   processes = [], 
   baseDir = path.resolve(__dirname, '..'),
   chimpBin = path.resolve(baseDir, 'node_modules/.bin/chimp');

var appOptions = {
  settings: 'settings.json',
  port: 3000,
  env: {
    ROOT_URL: 'http://localhost:3000'
  }
};

start();

function start() {
  appOptions.waitForMessage = 'App running at';
  startApp(startAppCallback);
}

function startAppCallback(){
  startChimp('--ddp=' + appOptions.env.ROOT_URL);
}

function startApp(callback) {
  var opts = {
    name: 'Meteor App',
    command: 'meteor --settings ' + appOptions.settings + ' --port ' + appOptions.port,
    waitForMessage: appOptions.waitForMessage,
    options: {
      cwd: baseDir,
      env: extend(appOptions.env, process.env)
    }
  };
  startProcess(opts, callback);
}

function startChimp(command) {
  startProcess({
    name: 'Chimp',
    command: chimpBin + ' --mocha --ddp=http://localhost:3000 --path=tests',
    options: {
      env: Object.assign({}, process.env, {
        NODE_PATH: process.env.NODE_PATH +
          path.delimiter + baseDir +
          path.delimiter + baseDir + '/node_modules',
      }),
    },
  });
}

function startProcess(opts, callback) {
  var proc = exec(
     opts.command,
     opts.options
  );
  if (opts.waitForMessage) {
    proc.stdout.on('data', function waitForMessage(data) {
      if (data.toString().match(opts.waitForMessage)) {
        if (callback) {
          callback();
        }
      }
    });
  }
  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);
  proc.on('close', function (code) {
    console.log(opts.name, 'exited with code ' + code);
    for (var i = 0; i < processes.length; i += 1) {
      processes[i].kill();
    }
    process.exit(code);
  });
  processes.push(proc);
}
