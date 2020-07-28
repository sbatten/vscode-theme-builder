import * as fs from 'fs-extra';
import * as path from 'path';


export function create(type: 'style' | 'palette' | 'all') {
  switch (type) {
    case 'style':
      fs.copySync(path.join(__dirname, 'templates/style'), path.join(process.cwd(), 'style/'));
      break;
    case 'palette':
      fs.copySync(path.join(__dirname, 'templates/palette'), path.join(process.cwd(), 'palette/'));
      break;
    default:
      fs.copySync(path.join(__dirname, 'templates/'), process.cwd(), { recursive: true });
  }
}

export function build(palette: any, style: any, name: string, outDir: string) {
  const theme = style.createTheme(palette, "light");
  const outputPath = path.join(outDir, `vsctb-theme-${name}.json`);

  fs.writeFileSync(outputPath,
    JSON.stringify({
      name,
      colors: theme.colors
    }, null, 2)
  );
}

export function printUsage() {

}