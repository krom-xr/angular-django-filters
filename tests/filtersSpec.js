/*global describe, beforeEach, module, it, expect, inject */
(function() {
    describe('Фильтры', function () {
        var filter;
        beforeEach(module('useful_things'));
        beforeEach(inject(function ( $injector) {
            filter = $injector.get('$filter');
        }));

        it('log', function() {
            filter('log')('test log filter');
            expect(filter('log')('test log filter', true), '');
        });

        describe('add', function() {
            it('add', function() {
                expect(filter('add')('4', 2)).toBe(6);
            });

            it('add', function() {
                expect(filter('add')('4', '2')).toBe(6);
            });

            it('add', function() {
                expect(filter('add')('4ab', '2')).toBe('4ab2');
            });

            it('add', function() {
                var a = [1,2,3];
                var b = [4,5,6];
                var result = filter('add')(a, b);
                expect(result.length).toBe(6);
                var i;
                for (i = 0; i < a.length; i++) {
                    expect(a[i]).toBe(result[i]);
                }
                for (i = 3; i < b.length; i++) {
                    expect(b[i]).toBe(result[i]);
                }
            });
        });

        it('addslashes', function () {
            expect(filter('addslashes')("I'm using Django")).toBe("I\'m using Django");
            expect(filter('addslashes')('I"m using Django')).toBe('I\"m using Django');
            expect(filter('addslashes')('\\ : backslashes, too')).toBe('\\\\ : backslashes, too')

        });

        it('capfirst', function() {
            expect(filter('capfirst')('hello world')).toBe('Hello world');
        });

        it('center', function() {
            expect(filter('center')('Django', 15)).toBe('     Django    ');
            expect(filter('center')('Django', 18).length).toBe(18);
        });

        it('cut', function() {
            expect(filter('cut')('String with spaces', ' ')).toBe('Stringwithspaces');
        });

        it('date', function() {
            expect(true).toBe(false);
        });

        it('default', function() {
            expect(filter('default')('')).toBe('---');
            expect(filter('default')(false)).toBe('---');
            expect(filter('default')()).toBe('---');
            expect(filter('default')(null)).toBe('---');
            expect(filter('default')('', 'default_value')).toBe('default_value');
            expect(filter('default')('have value', 'default_value')).toBe('have value');
        });
        it('default_if_none', function() {
            expect(filter('default_if_none')('')).toBe('');
            expect(filter('default')(null)).toBe('---');
        });



        it('dictsort', function() {
            expect(true).toBe(false);
        });

        it('dictsortreversed', function() {
            expect(true).toBe(false);
        });

        it('divisibleby', function() {
            expect(true).toBe(false);
        });

        it('escape', function() {
            expect(true).toBe(false);
        });

        it('escapejs', function() {
            expect(true).toBe(false);
        });

        it('filesizeformat', function() {
            expect(true).toBe(false);
        });

        it('first', function() {
            expect(true).toBe(false);
        });

        it('force_escape', function() {
            expect(true).toBe(false);
        });

        it('get_digit', function() {
            expect(true).toBe(false);
        });

        it('iriencode', function() {
            expect(true).toBe(false);
        });

        it('join', function() {
            expect(filter('join')([1,2,3], ", ")).toBe("1, 2, 3");
            expect(filter('join')("one two theree", ", ")).toBe("one two theree");
        });

        it('last', function() {
            expect(true).toBe(false);
        });

        it('length', function() {
            expect(true).toBe(false);
        });

        it('length_is', function() {
            expect(true).toBe(false);
        });

        it('linebreaks', function() {
            expect(true).toBe(false);
        });

        it('linebreaksbr', function() {
            expect(true).toBe(false);
        });

        it('linenumbers', function() {
            expect(true).toBe(false);
        });

        it('ljust', function() {
            expect(true).toBe(false);
        });

        it('lower', function() {
            expect(true).toBe(false);
        });

        it('make_list', function() {
            expect(true).toBe(false);
        });

        it('phone2numeric', function() {
            expect(true).toBe(false);
        });

        it('pluralize', function() {
            expect(true).toBe(false);
        });

        it('pprint', function() {
            expect(true).toBe(false);
        });

        it('random', function() {
            expect(true).toBe(false);
        });

        it('removetags', function() {
            expect(true).toBe(false);
        });

        it('rjust', function() {
            expect(true).toBe(false);
        });

        it('safe', function() {
            expect(true).toBe(false);
        });

        it('safeseq', function() {
            expect(true).toBe(false);
        });

        it('slice', function() {
            expect(true).toBe(false);
        });

        it('slugify', function() {
            expect(true).toBe(false);
        });

        it('stringformat', function() {
            expect(true).toBe(false);
        });


        it('striptags', function() {
            expect(true).toBe(false);
        });


        it('time', function() {
            expect(true).toBe(false);
        });

        it('timesince', function() {
            expect(true).toBe(false);
        });


        it('timeuntil', function() {
            expect(true).toBe(false);
        });

        it('title', function() {
            expect(true).toBe(false);
        });

        it('truncatechars', function() {
            expect(true).toBe(false);
        });

        it('truncatechars_html', function() {
            expect(true).toBe(false);
        });

        it('truncatewords', function() {
            expect(true).toBe(false);
        });

        it('truncatewords_html', function() {
            expect(true).toBe(false);
        });

        it('unordered_list', function() {
            expect(true).toBe(false);
        });

        it('upper', function() {
            expect(true).toBe(false);
        });

        it('urlencode', function() {
            expect(true).toBe(false);
        });

        it('urlize', function() {
            expect(true).toBe(false);
        });

        it('urlizetrunc', function() {
            expect(true).toBe(false);
        });

        it('wordcount', function() {
            expect(true).toBe(false);
        });

        it('wordwrap', function() {
            expect(true).toBe(false);
        });

        it('yesno', function() {
            expect(true).toBe(false);
        });

        it('i18n', function() {
            expect(true).toBe(false);
        });

        it('l10n', function() {
            expect(true).toBe(false);
        });

        it('tz', function() {
            expect(true).toBe(false);
        });

        it('linebreak', function() {
            expect(filter('linebreak')('text', 'p')).toBe('<p>text</p>');
            expect(filter('linebreak')('text\ntext', 'div')).toBe('<div>text</div><div>text</div>');
            expect(filter('linebreak')('text\ntext', 'br')).toBe('text</br>text');
        });
        

    }); 

})();
