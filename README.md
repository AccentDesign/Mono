# Mono

A Fractal subtheme, built upon the default Mandelbrot theme.

![Mono screenshot](screenshot.jpg "Mono screenshot")

## Features

- Minimalist & clean styling giving greater clarity
- Typography updates
- Component notes displayed more prominently
- Tabbed 'View', 'HTML', and 'Context' area made more user friendly & accessible
- More 'baked-in' styling for Documentation pages
- A solid foundation which can be used in conjunction with the [Fratomic](https://github.com/ninety-six/fratomic) starter project or inserted in your existing Fractal project

## Installing

Follow the instructions on how to [install Fractal](https://fractal.build/guide/installation.html) and ['Getting Started'](https://fractal.build/guide/getting-started.html) before installing the Mono subtheme using a command line tool from your project root directory.

Via NPM:

```Shell
npm install --save mono-fractal
```

Via the GitHub repo:

```Shell
npm install --save git+https://git@github.com/ninety-six/mono-fractal.git
```

## Setup

In the [setup file](https://fractal.build/guide/project-settings.html#the-fractal-js-file) for your project you can `require` and use the subtheme:

```Shell
// fractal.config.js
'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
const webUITheme = require('mono-fractal')({});

// ... project setup and configuration

fractal.web.theme(webUITheme); // use the sub-classed theme
```

The Mono theme can be configured using many of the same [options](https://fractal.build/guide/web/default-theme.html#configuration) as the Mandelbrot theme. Any styles and scripts added will be merged into their respective array of files so you need not specify the themes `default` stylesheet and script but they will always be included.

**Note** - On Windows, a conflicting command-line application prevents you from running Fractal commands from the project's root directory (where your `fractal.js` config file will live). To work around this you can rename your config file `fractal.config.js` and then enter the following code to your `package.json` file:

```
"fractal": {
    "main": "fractal.config.js"
}
```

## Fractal Atomic Starter Project

I have also developed a great set of folders & files that can be used as an awesome starter point for your Fractal UI component library. It's features include:

- Use of [Twig](https://twig.symfony.com/) as the templating engine
- Component folder structure based on Atomic Design principles
- Folder structure that works with Fractal
- Markup, config and markdown files for typography, buttons, form elements and tables included
- Statuses for components & documentation pages improved
- Template export function included

You can find out more about Fractal Atomic [here](https://github.com/ninety-six/Fractal-Atomic).