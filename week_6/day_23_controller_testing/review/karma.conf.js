// Karma configuration
<<<<<<< HEAD
// Generated on Wed Jun 15 2016 14:25:10 GMT-0700 (Pacific Daylight Time)
=======
// Generated on Wed Jun 15 2016 14:18:54 GMT-0700 (PDT)
>>>>>>> 0ae7ee0ccc908ba2d88f535b6200e5c3d201c50b

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
<<<<<<< HEAD
=======
      'test/test_bundle.js'
>>>>>>> 0ae7ee0ccc908ba2d88f535b6200e5c3d201c50b
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
<<<<<<< HEAD
    singleRun: false,
=======
    singleRun: true,
>>>>>>> 0ae7ee0ccc908ba2d88f535b6200e5c3d201c50b

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
