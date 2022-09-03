"use strict";
const path = require("path");

let swc;
try {
  swc = require("@swc/core");
} catch (err) {
  if (err.code === "MODULE_NOT_FOUND") {
    err.message += "\n grunt-swc requires SWC (the package '@swc/core').";
  }
  throw err;
}

module.exports = function (grunt) {
  grunt.registerMultiTask("swc", "Compile JavaScript via SWC", function () {
    const done = this.async();

    const options = Object.assign({}, this.options());
    delete options.filename;
    delete options.filenameRelative;
    options.caller = Object.assign(
      {
        name: "grunt-swc",
      },
      options.caller
    );

    // Async reduce so that the files are written and logged in order.
    this.files
      .reduce((acc, el) => {
        const filename = el.src[0];

        const opts = Object.assign({}, options);

        opts.sourceFileName = path.relative(path.dirname(el.dest), el.src[0]);

        if (process.platform === "win32") {
          opts.sourceFileName = opts.sourceFileName.replace(/\\/g, "/");
        }

        return acc
          .then(() => swc.transformFile(filename, opts))
          .then((res) => {
            let sourceMappingURL = "";

            if (res.map) {
              sourceMappingURL =
                "\n//# sourceMappingURL=" + path.basename(el.dest) + ".map";
            }

            grunt.file.write(el.dest, res.code + sourceMappingURL + "\n");

            if (res.map) {
              const map = JSON.parse(res.map);
              map.file = path.basename(el.dest);
              grunt.file.write(el.dest + ".map", JSON.stringify(map));
            }
          });
      }, Promise.resolve())
      .then(
        () => done(),
        (err) => done(err)
      );
  });
};
