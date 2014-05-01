/*global describe, beforeEach, module, it, expect, inject */
(function() {

    describe('тестируем директиву ngWith', function () {
        var $scope, $compile;
        beforeEach(module('useful_things'));
        beforeEach(inject(function (_$rootScope_, _$compile_) {
            $scope = _$rootScope_.$new();
            $compile = _$compile_;
        }));

        it("передаем в $scope переменную foo. потом подменяем ее на переменную local. Внутри у нас local, снаружи - foo", function() {
            $scope.foo = 'global value';
            $scope.local = 'local value';
            var $element = $compile([
                '<div>',
                    '<div class="foo">{{ foo }}</div>',
                    '<div class="local" ng-with="{foo: local, bar: 1 }">{{ foo }}</div>',
                    '<div class="foo-after">{{ foo }}</div>',
                '</div>'].join('')
            )($scope);
            $scope.$apply();

            var global_value = $element.find('.foo').text();
            var local_value = $element.find('.local').text();
            var global_value_after = $element.find('.foo-after').text();

            expect(global_value).toBe('global value');
            expect(local_value).toBe('local value');
            expect(global_value_after).toBe('global value');
        });

        it("подменяем переменную foo текстом, который объявлен прямо в шаблоне", function() {
            $scope.foo = 'global value';
            var $element = $compile('<div><div class="foo">{{ foo }}</div><div class="local" ng-with="{foo: \'local value\'}">{{ foo }}</div></div>')($scope);
            $scope.$apply();
            var local_value = $element.find('.local').text();
            expect(local_value).toBe('local value');
        });
        
        it("!scope", function() {
            var $element = $compile('<div ng-with=""></div>')($scope);
            $scope.$apply();
        });


        it('в виде тэга', function() {
            $scope.foo = 'fooval';
            $scope.bar = 'barval';
            var html = "" +
                "<ng-with foo='foo' bar='bar'>" +
                    "<div>{{ foo }} {{ bar }}</div>" +
                "</ng-with>";

            var $element = $compile(html)($scope);
            $scope.$apply();
            expect($element.find('div').text()).toBe('fooval barval');
        });
    });
})();





