//Determining default language and available languages, which is to be done for the package "martino:iron-router-i18n" to work
Router.configure({
   layoutTemplate: 'layout'
});

//"landingBody" is the main template, called through {{> yield}} in my layout template
Router.route('/', {
   name: 'landingBody'
});