const Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    .setOutputPath('public/build/front')
    .setPublicPath('/build/front')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    //.addEntry()
    // css entry
    .addStyleEntry('css/components', './assets/front/sass/demos/index/components.scss')
    .addStyleEntry('css/plugins', './assets/front/sass/demos/index/plugins.scss')
    .enableSassLoader()
    //.enableLessLoader()
    // allows legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()
    .enableSourceMaps(!Encore.isProduction())
    .enableSourceMaps(true)
    .enableVersioning(Encore.isProduction())
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/front/static', to: 'static' }
    ]))
;

const firstConfig = Encore.getWebpackConfig();
firstConfig.name = 'firstConfig';

Encore.reset();

Encore
    .setOutputPath('public/build/back')
    .setPublicPath('/build/back')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .addEntry('js/script/editor', './assets/back/js/script/editor.js')
    .addStyleEntry('css/core', [
        './assets/back/vendor/bootstrap/css/bootstrap.min.css',
        './assets/back/vendor/font-awesome/css/font-awesome.min.css',
        './assets/back/vendor/themify-icons/css/themify-icons.css',
        './assets/back/vendor/animsition/css/animsition.min.css',
        './assets/back/vendor/perfect-scrollbar/css/perfect-scrollbar.min.css'
    ])
    .addStyleEntry('css/app', [
        './assets/back/css/scss/app.scss',
        './assets/back/css/style.scss'
    ])
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableSourceMaps(true)
    .enableVersioning(Encore.isProduction())
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/back/static', to: 'static' }
    ]))
;

const secondConfig = Encore.getWebpackConfig();
secondConfig.name = 'secondConfig';

module.exports = [firstConfig, secondConfig];