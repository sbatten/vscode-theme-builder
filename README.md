# VS Code Theme Builder

A standardization of VS Code theme creation workflow with reusable components.

## Goals

The goal of VS Code Theme Builder is to standardize two separate concepts during VS Code theme authoring, palettes and styles. Today, writing a theme involves specifying color values for over a hundred different keys. Many authors will take an existing theme and modify it, but if you want to replace blue with green, you must find all shades of blue and replace theme with similar shades of green which is quite tedious to do for a variety of colors. VSCTB seeks to split the color palette from the style of the theme to create reusable modules that can be swapped and replaced.

## Palettes and Styles

Palettes are a predefined shape that define the full color spectrum as well as primary shades and accent colors. Styles map color palette colors to VS Code Theme keys. They should do so with few assumptions about the colors in the palette allowing the style to be used with multiple palettes. Assumptions include: 

* Shades range from darkest to lightest and are intended for the background and foreground colors
* The color spectrum is used for ensuring the output is a specific color. e.g. tokenization and errors/warnings
* The accent colors should not be used on top of each other. Accent colors may conflict so they should be used in different areas.

## Chroma JS

We use [chroma-js](https://gka.github.io/chroma.js/) in our sample style to darken, brighten, or peform other color operations on the palette. VSCTB also automatically passes `chroma-js` object from the palette into the style so you don't have to do this for every color. Additionally, we call `.hex()` on all colors returned in the them so that isn't necessary in the style either.

## How to use VSCTB

If you are starting from scratch and want to create a VS Code theme, we recommend to start with a fresh theme folder using VS Code's `yo code`. After that, simply run inside your theme extension directory:

```
vsctb
```

This command will ask a few questions and help scaffold the project. After making any changes to the palette or style, the command to generate the theme is typically:

```
vsctb create --palette=palette/index.js --style=style/index.js
```


### Creating just a style or palette

If you just want to create a new palette or style, try:

```
vsctb new --palette
```

or

```
vsctb new --style
```

### Generating a theme from a style and palette

If you want to generate a theme from a style and palette, first install the style and palette with:

```
npm install --save --dev <palette-module-name> <style-module-name>
```

Then run:
```
vsctb create --palette=<palette-module-name> --style=<style-module-name> --name=<theme-name>
```

Or, if you want to use your local palette:
```
vsctb create --palette=<path/to/palette/index.js> --style=<style-module-name> --name=<theme-name>
```

Or, local style:
```
vsctb create --palette=<path/to/palette/index.js> --style=<path/to/style/index.js> --name=<theme-name>
```


