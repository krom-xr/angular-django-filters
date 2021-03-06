// Karma configuration
module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '..',

        frameworks: ['jasmine'],
        preprocessors: { 
            'src/*': ['coverage'],
        },

        // list of files / patterns to load in the browser
        files: [
            'http://code.jquery.com/jquery-1.11.0.min.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js',
            'https://code.angularjs.org/1.2.16/angular-mocks.js',
            'http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.js',

            'src/angular-useful-things.js',
            'src/directives.js',
            'src/directives.repeat-order.js',
            'src/filters.js',

            'tests/directivesSpec.js',
            'tests/filtersSpec.js',
        ],

        //frameworks = ["jasmine"]

        // list of files to exclude
        exclude: [],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit'
        reporters: ['dots', 'coverage'],


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        //browsers = ['Chrome', 'Firefox'];
        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

    });
};




