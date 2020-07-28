const parseArgs = require('minimist');
import * as path from 'path';
import * as fs from 'fs-extra';

const { create, build, printUsage } = require('./lib');
const colors = require('../templates/palette/index');
import * as style from '../templates/style/index';


export function parse() {
  const args = parseArgs(process.argv.slice(2), {
    alias: {
      h: 'help',
      p: 'palette',
      s: 'style',
      a: 'all',
      n: 'name'
    },
  });

  const mode = args._
  if (mode.length != 1) {
    printUsage();
    return
  }

  switch(mode[0]) {
    case 'new': {
      _initialize(args);
      break;
    }
    case 'create': {
      _build(args);
      break;
    }
    default: {
      printUsage();
      break;
    }
  }
}

function _initialize(args) {
  let style = args.style;
  let palette = args.palette;
  if (args.all) {
    style = palette = true;
  }
  if (palette) {
    create('palette');
  }
  if (style) {
    create('style');
  }
}

function resolve(pathOrModule: string) {
  const fullPath = path.join(process.cwd(), pathOrModule);
  if (fs.existsSync(fullPath)) {
    return require(fullPath);
  }

  return require(pathOrModule);
}

function _build(args) {
  const palette = (args.palette ? resolve(args.palette) : colors);
  const styleObj = (args.style ? resolve(args.style) : style);
  const appName = (args.name ? args.name : path.basename(process.cwd()));
  build(palette, styleObj, appName); 
}