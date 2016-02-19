angular.module('myApp').directive('tabsContainer', function () {
    return {
        restrict: 'E',
        template: '<div><p>Hello and welcome</p><p id="tabs-content" ng-transclude></p></div>',
        transclude: true,
        controller: ['$scope', function (scope) {
            scope.tabs = [];


            this.addTab = function (tab) {

                if (scope.tabs.length == 0) {
                    tab.selected = true;
                }
                scope.tabs.push(tab);
            }
        }]

    }

});