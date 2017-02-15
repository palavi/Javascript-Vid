(function() {
    'use strict';

    angular.module('app', [
        // Common (everybody has access to these)
        'app.core',
        'app.pulsegraph',

        // Features (listed alphabetically)
        'app.approot',
        'app.topnav',
        'app.beat'
    ]);
})();
