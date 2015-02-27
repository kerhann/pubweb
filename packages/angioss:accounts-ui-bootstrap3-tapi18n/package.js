Package.describe({
  name: 'angioss:accounts-ui-bootstrap3-tapi18n',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A package based on accouts-ui-unstyled, with bootstrap3 css and working with tap:i18n internationalization package.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  
  api.use(['tracker', 'service-configuration', 'accounts-base',
           'underscore', 'templating', 'session', 'less', 'twbs:bootstrap@3.3.2', 'mrt:ionicons'], 'client');
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use(["tap:i18n@1.4.0"], ["client", "server"]);

  // Allow us to call Accounts.oauth.serviceNames, if there are any OAuth
  // services.
  api.use('accounts-oauth', {weak: true});
  // Allow us to directly test if accounts-password (which doesn't use
  // Accounts.oauth.registerService) exists.
  api.use('accounts-password', {weak: true});

  api.addFiles(["package-tap.i18n"], ["client", "server"]);
  
   
  
  api.addFiles([
    'angioss:accounts-ui-bootstrap3-tapi18n.js',

    'login_buttons.html',
    'login_buttons_single.html',
    'login_buttons_dropdown.html',
    'login_buttons_dialogs.html',

    'login_buttons_session.js',
    'i18n/pre-templates.en.i18n.json', 
    'i18n/pre-templates.fr.i18n.json',
    'login_buttons.js',
    'login_buttons_single.js',
    'login_buttons_dropdown.js',
    'login_buttons_dialogs.js'], 'client');

  api.addFiles(["i18n/en.i18n.json", "i18n/fr.i18n.json"], ["client", "server"]);  
  //api.addFiles(["i18n/pre-templates.en.i18n.json", "i18n/pre-templates.fr.i18n.json"], ["client", "server"]); 
  
  //api.addFiles(['login_buttons.js'], 'client');
  
  api.addFiles(['css/accounts-ui.less'], 'client');
  
});




Package.onTest(function(api) {
  api.use('tinytest');
  api.use('angioss:accounts-ui-bootstrap3-tapi18n');
  api.addFiles('angioss:accounts-ui-bootstrap3-tapi18n-tests.js');
});
