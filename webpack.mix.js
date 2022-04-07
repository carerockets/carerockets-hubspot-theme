let mix = require('laravel-mix');

const tailwindcss = require('tailwindcss');

mix.js('src/js/vendors.js', 'carerocket-hubspot-theme/assets/js')
    .js('src/js/app.js', 'carerocket-hubspot-theme/assets/js')
    .sass('src/scss/vendors.scss', 'carerocket-hubspot-theme/assets/css')
    .sass('src/scss/plugins/tailwind.scss', 'carerocket-hubspot-theme/assets/css/plugins')
    .sass('src/scss/main.scss', 'carerocket-hubspot-theme/assets/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    });
