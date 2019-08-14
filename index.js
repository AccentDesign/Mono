// index.js
"use strict";

const mandelbrot = require("@frctl/mandelbrot");
const _ = require("lodash");

/*
 * Required config overrides incoming options
 * Note: styles array is merged
 *
 */
const requiredConfig = {
  skin: "white",
  styles: [
    "default",
    "/mono-theme/webui.min.css",
    "/webui-overrides/overrides.css"
  ]
};

/*
 * Optional config can be overridden
 */
const optionalConfig = {
  nav: ["docs", "components"],
  panels: ["view", "context", "html"],
  favicon: "/mono-theme/favicon.ico"
};

/*
 * Export the customised theme instance so it can be used in Fractal projects
 */
module.exports = function(options) {
  /*
   * Configure the theme
   */
  const styles = _.uniq(requiredConfig.styles, options.styles || []);

  const config = _.defaultsDeep(
    {
      styles: styles
    },
    requiredConfig,
    _.clone(options || {}),
    optionalConfig
  );

  const subTheme = mandelbrot(config);

  /*
   * Specify a template directory to override any view templates
   */
  subTheme.addLoadPath(__dirname + "/webui-overrides");

  /*
   * Specify the static assets directory that contains the custom stylesheet.
   */
  subTheme.addStatic(__dirname + "/assets", "/mono-theme");

  /*
   * Provide for further configuration
   */
  return subTheme;
};
