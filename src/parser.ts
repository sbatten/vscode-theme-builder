import * as parseArgs from 'minimist';
import * as path from 'path';
import * as inquirer from 'inquirer';
import * as fs from 'fs-extra';

import { create, build, printUsage } from './lib';
import * as colors from '../templates/palette/index';
import * as style from '../templates/style/index';

interface ICliOptions {
  themeName: string,
  style: string,
  palette: string,
  variant?: 'light' | 'dark',
  outputPath?: string
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
  name: 'customStyle',
  type: 'input',
  message: 'Enter in the style you wish to use',
  when: (answers) => answers.style === 'no'
},
{
  name: 'variantProvided',
  type: 'list',
  message: 'Do you want to provide a variant',
  choices: ['yes', 'no']
},
{
  name: 'variant',
  type: 'list',
  message: 'Please select a variant of the style you wish to use',
  choices: ['light', 'dark'],
  when: (answers) => answers.variantProvided === 'yes'
},
{
  name: 'palette',
  type: 'list',
  message: 'Do you want to use the default palette?',
  choices: ['yes', 'no']
},
{
  name: 'customPalette',
  type: 'input',
  message: 'Enter in the palette you wish to use',
  when: (answers) => answers.palette === 'no'
},
{
  name: 'outputPath',
  type: 'input',
  message: 'Please enter the path where you want to output your theme(leave blank for default)'
}
];

export async function parse() {
  const args = parseArgs(process.argv.slice(2), {
    alias: {
      h: 'help',
      p: 'palette',
      s: 'style',
      a: 'all',
      v: 'variant',
      n: 'name',
      o: 'output'
    },
  });

  const mode = args._;
  console.log(args);
  if (mode.length == 0 && !args.help) {
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
  const errorLog = (input) => {
    return `A ${input} was not provided. Please provide a ${input}\n`;
  }
  if (!args.palette || !args.style) {
    if (!args.palette) console.log(errorLog('palette'));
    if (!args.style) console.log(errorLog('sytle'));
    console.log('Usage: vsctb create --style=<your style> --palette=<your palette>');
    return;
  }
  const palette = resolve(args.palette);'Usage: vsctb create --style=<your style> --palette=<your palette>'
  const styleObj = resolve(args.style);
  const appName = (args.name ? args.name : path.basename(process.cwd()));
  build(palette, styleObj, appName, args.outputPath || './themes', args.variant); 
}

async function _runPrompt() {
  const answers = await inquirer.prompt(questions);
  const {name, customStyle, customPalette, variant, outputPath} = answers;
  const options: ICliOptions = {
    themeName: name,
    style: customStyle,
    palette: customPalette,
    variant,
    outputPath

  }
  return options;
}

// _buildConfig is used for both create default templates and generatin the theme
// In the case that the "--all" flag is provide during the "new" command, the 
// function will set the boolean. If not, then it grabs the value from args
// which can either be a string, true, or undefined.
//
// The args object will always have 1 key, the underscore property. If length
// is one then the only command
function _buildConfig(args) {
  const vsctbProvidesAll: boolean = (args.all || Object.keys(args).length == 1);
  const options: ICliOptions = {
    themeName: args.name,
    style: (vsctbProvidesAll ? true : args.style),
    palette: (vsctbProvidesAll ? true : args.palette),
    variant: args.variant,
    outputPath: args.outputPath
  }
  return options;
}