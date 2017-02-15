(function () {
    'use strict';

    angular
        .module('app.core')
        .directive('pulseGraph', pulseGraph)
        .controller('PulseGraphController', PulseGraphController);

    pulseGraph.$inject = [];

    function pulseGraph() {
        var directive = {
            restrict: 'E',
            templateUrl: 'components/pulse-graph/pulse-graph.html',
            scope: {
            },
            controller: 'PulseGraphController',
            controllerAs:'vm'
        };

        return directive;
    }

    PulseGraphController.$inject = [];

    function PulseGraphController() {
        _activate();

        function _activate() {

        }
    }
})();
