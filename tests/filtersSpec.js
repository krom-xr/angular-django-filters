/*global describe, beforeEach, module, it, iit, expect, inject */
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
            expect(filter('addslashes')('\\ : backslashes, too')).toBe('\\\\ : backslashes, too');

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

        describe('dictsort', function() {
            it('dictsort', function() {

                var unsorted = [{'age': 23, 'name': 'Barbara-Ann'},
                                {'age': 63, 'name': 'Ra Ra Rasputin'},
                                {'age': 18, 'name': 'Jonny B Goode'}];

                var age_sorted = filter('dictsort')(unsorted, 'age');

                expect(age_sorted[0].age).toBe(18);
                expect(age_sorted[1].age).toBe(23);
                expect(age_sorted[2].age).toBe(63);

                expect(filter('dictsort')([1, 2, 3], 'age'), '');
                expect(filter('dictsort')('Hello!', 'age'), '');
                expect(filter('dictsort')({'a': 1}, 'age'), '');
                expect(filter('dictsort')(1, 'age'), '');
            });

            it('complex sorting', function() {
                var data = [
                    {'foo': {'bar': 1, 'baz': 'c'}},
                    {'foo': {'bar': 2, 'baz': 'b'}},
                    {'foo': {'bar': 3, 'baz': 'a'}},
                ];
                
                var sorted_data = filter("dictsort")(data, 'foo.baz');
                expect(sorted_data[0].foo.baz).toBe('a');
                expect(sorted_data[1].foo.baz).toBe('b');
                expect(sorted_data[2].foo.baz).toBe('c');
            });

            it('dictsortreversed', function() {
                var unsorted = [{'age': 23, 'name': 'Barbara-Ann'},
                                {'age': 63, 'name': 'Ra Ra Rasputin'},
                                {'age': 18, 'name': 'Jonny B Goode'}];

                var age_sorted = filter('dictsortreversed')(unsorted, 'age');
                expect(age_sorted[0].age).toBe(63);
                expect(age_sorted[1].age).toBe(23);
                expect(age_sorted[2].age).toBe(18);

                expect(filter('dictsort')([1, 2, 3], 'age'), '');
            });
        });

        it('divisibleby', function() {
            expect(filter('divisibleby')(4, 2)).toBe(true);
            expect(filter('divisibleby')(4, 3)).toBe(false);
            expect(filter('divisibleby')("abc", 3)).toBe(false);
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
            expect(filter('first')([0, 1, 2])).toBe(0);
            expect(filter('first')('')).toBe('');
            expect(filter('first')('test')).toBe('t');
        });

        it('force_escape', function() {
            expect(true).toBe(false);
        });

        it('get_digit', function() {
            expect(filter('get_digit')(129, 1)).toBe(9);
            expect(filter('get_digit')(129, 2)).toBe(2);
            expect(filter('get_digit')(129, 3)).toBe(1);
            expect(filter('get_digit')(129, 4)).toBe(0);
            expect(filter('get_digit')(123, 0)).toBe(123);
            expect(filter('get_digit')('xyz', 2)).toBe('xyz');
        });

        it('iriencode', function() {
            expect(true).toBe(false);
        });

        it('join', function() {
            expect(filter('join')([1,2,3], ", ")).toBe("1, 2, 3");
            expect(filter('join')("one two theree", ", ")).toBe("one two theree");
        });

        it('last', function() {
            expect(filter('last')([0, 1, 2])).toBe(2);
            expect(filter('last')('')).toBe( '');
            expect(filter('last')('foobar')).toBe('r');
        });

        it('length', function() {
            expect(filter('length')('test')).toBe(4);
            expect(filter('length')([1, 2, 3, 4])).toBe(4);
        });
        it('length_is', function() {
            expect(filter('length_is')('test', 4)).toBe(true);
            expect(filter('length_is')([1, 2, 3, 4], 10)).toBe(false);
        });


        it('linebreaks', function() {
            expect(true).toBe(false);
        });

        it('linebreaksbr', function() {
            expect(true).toBe(false);
        });

        it('linenumbers', function() {
            expect(filter('linenumbers')('line 1\nline 2\nline 3')).toBe('1. line 1\n2. line 2\n3. line 3');
            var str = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'].join("\n");
            var res = ['01. x', '02. x', '03. x', '04. x', '05. x', '06. x', '07. x', '08. x', '09. x', '10. x'].join("\n");
            expect(filter('linenumbers')(str)).toBe(res);
        });

        it('ljust', function() {
            expect(filter('ljust')('test', 10)).toBe('test      ');
            expect(filter('ljust')('test', 3)).toBe('test');
            expect(filter('rjust')('test', 10)).toBe('      test');
            expect(filter('rjust')('test', 3)).toBe('test');
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
