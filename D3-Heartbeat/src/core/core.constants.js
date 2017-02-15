/* global _ */

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('_', _)
        .constant('d3', window.d3)
        .constant('api', 'http://localhost:7203/api');
})();
