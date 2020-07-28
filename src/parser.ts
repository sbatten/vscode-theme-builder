const parseArgs = require('minimist');

const { create, build, printUsage } = require('./lib');
const colors = require('../templates/palette/index');
const createTheme = require('../templates/style/index');


export function parse() {
  const args = parseArgs(process.argv.slice(2), {
    alias: {
      h: 'help',
      p: 'palette',
      s: 'style',
      a: 'all'
    },
  });

  const mode = args._
  if (mode.length != 1) {
    printUsage();
    return
  }

  console.log(mode)
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
  const style = (args.style ? require(args.style) : createTheme);
  build(palette, style) 
}