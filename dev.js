var site = require("./site");
var watch = require("metalsmith-watch");
var serve = require("metalsmith-serve");

site
.use(watch())
.use(serve())

.build(function(err) {
  if (err) throw err;
});
