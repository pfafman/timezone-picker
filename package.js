Package.describe({
  summary: "Nicely formatted dropdown list of timezones, based on moment. Also timezone detection.",
  version: '0.1.3',
  name: "pfafman:timezone-picker",
  git: 'https://github.com/pfafman/timezone-picker'
});

Package.onUse(function(api, where) {
  api.versionsFrom("METEOR@1.0");

  api.use([
    'blaze', 
    'templating', 
    'jquery', 
    'underscore', 
    'coffeescript',
    'momentjs:moment@2.10.6', 
    'pfafman:moment-timezone@0.4.0'
  ], 'client');
  

  api.addFiles([
    'mapping.coffee',
    'picker.html',
    'picker.coffee',
    'jstz.js'
  ], 'client');

  api.export('TimezonePicker');
});


