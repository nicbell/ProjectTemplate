# Project Template

##My project template for front-end builds.

This project uses NPM scripts for setting up. We only need to run `npm run grunt -- task:target` which will automatically run `pregrunt` and install everything we need. All available Grunt tasks can be found in Gruntfile.js

Eg:
```
npm run grunt -- start
```

To do a release build we can either run `npm run grunt -- release` or `npm run release`.