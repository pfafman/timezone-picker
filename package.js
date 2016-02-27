Package.describe({
  summary: "Nicely formatted dropdown list of timezones, based on moment. Also timezone detection.",
  version: '0.1.4',
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
    'momentjs:moment@2.11.2', 
    'risul:moment-timezone@0.5.0'
  ], 'client');
  

  api.addFiles([
    'mapping.coffee',
    'picker.html',
    'picker.coffee',
    'jstz.js'
  ], 'client');

  api.export('TimezonePicker');
});


