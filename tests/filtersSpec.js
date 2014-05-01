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

        it('linebreak p', function() {
            expect(filter('linebreak')('text', 'p')).toBe('<p>text</p>');
            expect(filter('linebreak')('text\ntext', 'div')).toBe('<div>text</div><div>text</div>');
            expect(filter('linebreak')('text\ntext', 'br')).toBe('text</br>text');
        });
    }); 

})();