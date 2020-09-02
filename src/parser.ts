import * as yargs from 'yargs-parser';
import * as path from 'path';
import * as inquirer from 'inquirer';
import * as fs from 'fs-extra';

import { create, build, printUsage } from './lib';

const DEFAULT_PALETTE_PATH = './palette/index.js';
const DEFAULT_STYLE_PATH = './style/index.js';
const DEFAULT_OUTPUT_DIR = './themes';

interface ICliOptions {
  themeName: string,
  style: string | boolean,
  palette: string | boolean,
  variant?: 'light' | 'dark' | 'both',
  outputPath?: string
}

interface IBuildOptions {
  name: string,
  style: string,
  palette: string,
  variant?: 'light' | 'dark',
  outputPath: string
}

const questions = [
  {
    name: 'name',
    type: 'input',
    message: 'Theme name:'
  },
  {
    name: 'styleChoice',
    type: 'list',
    message: 'Do you want to create your own style or use a pre-existing style?',
    choices: ['Create my own', 'Use a pre-existing style module']
  },
  {
    name: 'styleModule',
    type: 'input',
    message: 'Enter in the module name of style you wish to use:',
    when: (answers) => answers.styleChoice === 'Use a pre-existing style module',
    validate: validateModule
  },
  {
    name: 'variant',
    type: 'list',
    message: 'Which type of theme will you create?',
    choices: ['both', 'dark', 'light']
  },
  {
    name: 'paletteChoice',
    type: 'list',
    message: 'Do you want to create your own color palette or use a pre-existing color palette?',
    choices: ['Create my own', 'Use a pre-existing color palette module']
  },
  {
    name: 'paletteModule',
    type: 'input',
    message: 'Enter in the module name of color palette you wish to use:',
    when: (answers) => answers.paletteChoice === 'Use a pre-existing color palette module',
    validate: validateModule
  },
  {
    name: 'outputPath',
    type: 'input',
    message: `Please enter the directory path where you want to output your theme: (${DEFAULT_OUTPUT_DIR})`
  }
];

export async function parse() {
  const args = yargs(process.argv.slice(2), {
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

  const command = args._;
  // No command specified, run question flow
  if (command.length == 0 && !args.help) {
    const cliOptions = await runPrompt();

    initialize(!!cliOptions.style, !!cliOptions.palette);
    buildFromOptions(createBuildOptions(cliOptions));
  }
  // We have a command, need to switch
  else if (command.length == 1) {
    const cliOptions = createCliOptions(args);
    switch (command[0]) {
      case 'new': {
        initialize(!!cliOptions.style, !!cliOptions.palette);
        break;
      }
      case 'create': {
        buildFromOptions(createBuildOptions(cliOptions));
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

function initialize(generateStyle: boolean, generatePalette: boolean) {
  if (generatePalette) {
    create('palette');
  }

  if (generateStyle) {
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

function buildFromOptions(options: IBuildOptions) {
  const errorLog = (input) => {
    return `A ${input} was not provided. Please provide a ${input}`;
  }

  if (!options.palette || !options.style) {
    if (!options.palette) console.log(errorLog('palette'));
    if (!options.style) console.log(errorLog('style'));
    console.log('Usage: vsctb create --style=<style path or module name> --palette=<palette path or module name>');
    return;
  }
  const palette = resolve(options.palette); 'Usage: vsctb create --style=<your style> --palette=<your palette>'
  const styleObj = resolve(options.style);
  const appName = (options.name ? options.name : path.basename(process.cwd()));
  build(palette, styleObj, appName, options.outputPath, options.variant);
}

async function runPrompt(): Promise<ICliOptions> {
  const message = "\
 /$$    /$$  /$$$$$$   /$$$$$$  /$$$$$$$$ /$$$$$$$\n\
| $$   | $$ /$$__  $$ /$$__  $$|__  $$__/| $$__  $$\n\
| $$   | $$| $$  \\__/| $$  \\__/   | $$   | $$  \\ $$\n\
|  $$ / $$/|  $$$$$$ | $$         | $$   | $$$$$$$\n\
 \\  $$ $$/  \\____  $$| $$         | $$   | $$__  $$\n\
  \\  $$$/   /$$  \\ $$| $$    $$   | $$   | $$  \\ $$\n\
   \\  $/   |  $$$$$$/|  $$$$$$/   | $$   | $$$$$$$/\n\
    \\_/     \\______/  \\______/    |__/   |_______/\n";
  console.log(message);
  const answers = await inquirer.prompt(questions);
  const { name, styleModule, paletteModule, variant, outputPath } = answers;
  const options: ICliOptions = {
    themeName: name,
    style: styleModule ?? true,
    palette: paletteModule ?? true,
    variant,
    outputPath
  }

  return options;
}

// createCliOptions is used for both create default templates and generatin the theme
// In the case that the "--all" flag is provide during the "new" command, the 
// function will set the boolean. If not, then it grabs the value from args
// which can either be a string, true, or undefined.
//
// The args object will always have 1 key, the underscore property. If length
// is one then the only command
function createCliOptions(args): ICliOptions {
  const generateAllTemplates: boolean = (args.all || Object.keys(args).length == 1 && args._[0] === 'new');
  const options: ICliOptions = {
    themeName: args.name,
    style: (generateAllTemplates ? true : args.style),
    palette: (generateAllTemplates ? true : args.palette),
    variant: args.variant,
    outputPath: args.outputPath
  }

  return options;
}

function createBuildOptions(cliOptions: ICliOptions): IBuildOptions {
  return {
    name: cliOptions.themeName,
    variant: cliOptions.variant === 'both' ? undefined : cliOptions.variant,
    palette: typeof (cliOptions.palette) === 'boolean' ? DEFAULT_PALETTE_PATH : cliOptions.palette,
    style: typeof (cliOptions.style) === 'boolean' ? DEFAULT_STYLE_PATH : cliOptions.style,
    outputPath: cliOptions.outputPath || DEFAULT_OUTPUT_DIR
  }
}

function validateModule(moduleName): boolean {
  try {
    require(moduleName);
  } catch {
    console.error(`\n  Unable to load the module ${moduleName}.`);
    console.log(`  Ensure that you have installed the module with the following command:`);
    console.log(`    npm install --save --dev ${moduleName}`);
    process.exit();
  }

  return true;
}