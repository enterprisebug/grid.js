'use strict';

angular.module('gridjsSampleApp', [])
    .controller('gridjsSampleController', function ($scope) {
        $scope.config = {
            distance: 30,
            lineWidth: 1,
            caption: true,
            gridColor: "#66ff00",
            horizontalLines: true,
            verticalLines: true
        };

        $scope.updateSample = function (config) {
            config.distance = parseFloat(config.distance);
            config.lineWidth = parseFloat(config.lineWidth);

            var canvas = document.getElementById("myCanvas");
            var context = canvas.getContext("2d");

            // clear stage
            context.clearRect(0, 0, canvas.width, canvas.height);

            new Grid(config).draw(context);
        };
    });
