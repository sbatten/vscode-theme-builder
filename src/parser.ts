const parseArgs = require('minimist');
import * as path from 'path';

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

function _build(args) {
  const palette = (args.palette ? require(args.palette) : colors);
  const styleObj = (args.style ? require(args.style) : style);
  const appName = (args.name ? args.name : path.basename(process.cwd()));
  build(palette, styleObj, appName); 
}