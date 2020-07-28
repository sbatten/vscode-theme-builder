const parseArgs = require('minimist');
import * as path from 'path';
<<<<<<< HEAD
import * as inquirer from 'inquirer';
=======
import * as fs from 'fs-extra';
>>>>>>> a0f6b5418a7b2da32331eddb3b776bbc5ba7582a

const { create, build, printUsage } = require('./lib');
const colors = require('../templates/palette/index');
import * as style from '../templates/style/index';

interface ICliOptions {
  themeName: string,
  style: string,
  palette: string,
  outputPath: string
}

const questions = [
{
  name: 'name',
  type: 'input',
  message: 'Project name:'
},
{
  name: 'style',
  type: 'list',
  message: 'Do you want to use the default style?',
  choices: ['yes', 'no']
},
{
  name: 'palette',
  type: 'list',
  message: 'Do you want to use the default palette?',
  choices: ['yes', 'no']
},
{
  name: 'customStyle',
  type: 'input',
  message: 'Enter in the style you wish to use',
  when: (answers) => answers.style === 'no'
},
{
  name: 'customPalette',
  type: 'input',
  message: 'Enter in the palette you wish to use',
  when: (answers) => answers.palette === 'no'
}
];

export async function parse() {
  const args = parseArgs(process.argv.slice(2), {
    alias: {
      h: 'help',
      p: 'palette',
      s: 'style',
      a: 'all',
      n: 'name'
    },
  });

  const mode = args._;
  console.log(args);
  if (mode.length == 0) {
    const config = await _runPrompt();
    console.log(`propmt with config ${JSON.stringify(config)}`)
    _initialize({
      ...config,
      style: true,
      palette: true
    });
    _build(config);
  } else if (mode.length == 1) {
    const config = _buildConfig(args);
    console.log(config);
    switch(mode[0]) {
      case 'new': {
        _initialize(config);
        break;
      }
      case 'create': {
        _build(config);
        break;
      }
      default: {
        printUsage();
        break;
      }
    }
  } else {
    printUsage();
  }
}

function _initialize(config) {
  const style = config.style;
  const palette = config.palette;
  console.log('initalizing repo');
  console.log(style);
  console.log(palette);
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

async function _runPrompt() {
  const answers = await inquirer.prompt(questions);
  const {name, customStyle, customPalette} = answers;
  const options: ICliOptions = {
    themeName: name,
    style: customStyle,
    palette: customPalette,
    outputPath: './'
  }
  return options;
}

// _buildConfig is used for both create default templates and generatin the theme
// In the case that the "--all" flag is provide during the "new" command, the 
// function will set the boolean. If not, then it grabs the value from args
// which can either be a string, true, or undefined.
function _buildConfig(args) {
  const vsctbProvidesAll: boolean = args.all;
  const options: ICliOptions = {
    themeName: args.name,
    style: (vsctbProvidesAll ? true : args.style),
    palette: (vsctbProvidesAll ? true : args.palette),
    outputPath: './'
  }
  return options;
}