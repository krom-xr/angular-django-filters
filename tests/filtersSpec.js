/*global describe, beforeEach, module, it, expect, inject */
(function() {
    describe('Фильтры', function () {
        var filter;
        beforeEach(module('useful_things'));
        beforeEach(inject(function ( $injector) {
            filter = $injector.get('$filter')
        }));

        it('default', function() {
            expect(filter('default')('')).toBe('---');
            expect(filter('default')(false)).toBe('---');
            expect(filter('default')()).toBe('---');
            expect(filter('default')(null)).toBe('---');
            expect(filter('default')('', 'default_value')).toBe('default_value');
            expect(filter('default')('have value', 'default_value')).toBe('have value');
        });

        it('linebreak', function() {
            expect(filter('linebreak')('text', 'p')).toBe('<p>text</p>');
            expect(filter('linebreak')('text\ntext', 'div')).toBe('<div>text</div><div>text</div>');
            expect(filter('linebreak')('text\ntext', 'br')).toBe('text</br>text');
        });
        
        it('log', function() {
            filter('log')('test log filter');
            expect(filter('log')('test log filter', true), '');
        })
        it('join', function() {
            expect(filter('join')([1,2,3], ", ")).toBe("1, 2, 3");
            expect(filter('join')("one two theree", ", ")).toBe("one two theree");
        })

    }); 

})();
