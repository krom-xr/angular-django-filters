/*global angular, _*/
angular.module('useful_things.directives', [])
    .directive('ngWith', function ngWith() {
        var createScopes = function(scope, scope_vars_ob) {
            if (!scope_vars_ob) { return; }
            var keys = Object.keys(scope_vars_ob);
            while(keys.length) {
                var key = keys.pop();
                var value = scope_vars_ob[key];
                scope[key] = value;
            }
        };

        return {
            priority: 1000,
            restrict: 'AE',
            scope: true,
            compile: function (tElement, tAttr) {
                return function(scope, element, attrs) {
                    scope.$watch(function() {
                        if (element[0].tagName !== 'NG-WITH') {
                            var scope_vars_ob = scope.$eval(attrs.ngWith);
                            createScopes(scope, scope_vars_ob);
                        }
                    });

                };
            }
        };
    });
