//Determining default language and available languages, which is to be done for the package "martino:iron-router-i18n" to work
Router.configure({
   layoutTemplate: 'layout'
});

//"landingBody" is the main template, called through {{> yield}} in my layout template
Router.route('/', {
   name: 'landingBody'
});

Router.route('/terms', {
   name: 'terms'
});

Router.route('/businesses', {
   name: 'businesses'
});

Router.route('/blog', {
   name: 'blog'
});

Router.route('/privacy', {
   name: 'privacy'
});

Router.route('/faqs', {
   name: 'faqs'
});

Router.route('/forum', {
   name: 'forum'
});

Router.route('/support', {
   name: 'support'
});

Router.route('/about', {
   name: 'about'
});