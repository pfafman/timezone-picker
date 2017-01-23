Package.describe({
  summary: "Nicely formatted dropdown list of timezones, based on moment. Also timezone detection.",
  version: '0.2.0',
  name: "pfafman:timezone-picker",
  git: 'https://github.com/pfafman/timezone-picker'
});

/*
Npm.depends({'moment': '2.12.0'});
Npm.depends({'moment-timezone': '0.5.3'});
*/

Package.onUse(function(api, where) {
  api.versionsFrom("1.3.1");

  api.use([
    'blaze', 
    'templating', 
    'jquery', 
    'underscore', 
    'coffeescript',
    'modules',
    'tmeasday:check-npm-versions@0.3.1'
  ], 'client');
  

  api.addFiles([
    'mapping.coffee',
    'picker.html',
    'picker.coffee',
    'jstz.js'
  ], 'client');

  api.export('TimezonePicker');
});


