# grunt-swc

[![npm](https://img.shields.io/npm/v/grunt-swc)](https://www.npmjs.com/package/grunt-swc)
[![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dhalenok/grunt-swc/blob/main/LICENSE)

## Install

```sh
$ npm install --save-dev grunt-swc @swc/core
# or
$ yarn add --dev grunt-swc @swc/core
```

## Usage

### Option with load-grunt-tasks

```js
require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  swc: {
    options: {
      sourceMaps: true,
    },
    dist: {
      files: {
        "dist/app.js": "src/app.js",
      },
    },
  },
});

grunt.registerTask("default", ["swc"]);
```

### Option with loadNpmTasks

```js
grunt.initConfig({
  swc: {
    options: {
      sourceMaps: true,
    },
    dist: {
      files: {
        "dist/app.js": "src/app.js",
      },
    },
  },
});

grunt.loadNpmTasks("grunt-swc");

grunt.registerTask("default", ["swc"]);
```

## Options

See the SWC [options](https://swc.rs/docs/usage/core#options).

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Code and documentation are available according to the MIT License (see [LICENSE](LICENSE)).
