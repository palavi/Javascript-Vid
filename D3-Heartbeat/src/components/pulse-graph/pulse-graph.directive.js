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
            controllerAs: 'vm'
        };

        return directive;
    }

    PulseGraphController.$inject = ['d3', '$timeout'];

    function PulseGraphController(d3, $timeout) {
        var bodySelection = d3.select('body');
        var svgElement = bodySelection.append('svg')
                                       .attr('width', 100)
        .attr('height', 100);
        _activate();

        function _activate() {


            var circleElem = svgElement.append('circle')
            .attr('cx', 25)
            .attr('cy', 25)
            .attr('r', 15)
            .style('fill', 'green')
            .each(pulse);
        }

        function pulse() {
            var circle = svgElement.select('circle');
            setInterval(function () {
                circle = circle.transition()
                .duration(500)
                .attr('r', 20)
                .transition()
                .duration(500)
                .attr('r', 15);
                //.ease('sine')
            }, 1000)
            //(function repeat() {
                
            //    .each('end', repeat);
            //})();
        }
    }
})();
