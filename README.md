# grunt-swc

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
