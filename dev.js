var site = require("./site");
var watch = require("metalsmith-watch");
var serve = require("metalsmith-serve");

site
.use(serve())
.use(watch())

.build(function(err) {
  if (err) throw err;
});
