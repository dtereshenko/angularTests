angular.module('myApp').directive('tab', function () {
    return {
        restrict: 'E',
        require: '^^tabsContainer',
        transclude: true,
        scope: {
            title: '@'
        },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addTab(scope);

        },
        template: '<div ng-show="selected"> <h2>{{title}}</h2>' +
        '<p ng-transclude></p>' +
        '</div>'
    }

});