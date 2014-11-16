var Metalsmith = require("Metalsmith");
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var sass = require('metalsmith-sass');
var permalinks = require('metalsmith-permalinks');
var tags = require('metalsmith-tags');

module.exports = Metalsmith(__dirname)
  .use(markdown({
    smartypants: true,
    gfm: true,
    tables: true
  }))
  .use(tags({
    handle: 'tags',
    path: 'sections',
    template: './partials/tag-index.jade'
  }))
  .use(templates({
    engine: 'jade',
    directory: 'templates'
  }))
  .use(permalinks({
    pattern: ":date/:title",
    date: "YYYY"
  }))
  .use(sass());
