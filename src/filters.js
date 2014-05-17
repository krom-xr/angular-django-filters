/*global angular*/
(function() {

    angular.module('useful_things.filters', [])
        .filter('log', function() {
            return function(ob, is_hide_in_template) {
                console.log('template log - ', ob);
                if (is_hide_in_template) { return ''; }
                return ob;
            };
        })

        .filter('add', function() {
            return function(ob, value) {
                var ob_num = Number(ob), value_num = Number(value);
                ob = isNaN(ob_num) ? ob : ob_num;
                value = isNaN(value_num) ? value : value_num;
                if (ob instanceof Array && value instanceof Array) { return ob.concat(value); }
                return ob + value;
            };
        })

        .filter('addslashes', function() {
            return function(text) {
                text = text.split("'").join("\'");
                text = text.split('"').join('\"');
                text = text.split('\\').join("\\\\");
                return text;
            };
        })

        .filter('capfirst', function() {
            return function(text) {
                return text[0].toUpperCase() + text.substr(1);
            };
        })
        .filter('center', function() {
            return function(text, len) {
                if (text.length > len) { return text; }
                var diff = len - text.length;
                var half_diff = Math.floor(diff/2);

                var arr = [" "];
                arr.length = half_diff;
                var spaces = arr.join(" ");

                if (half_diff * 2 < diff) { return spaces + " " + text + spaces; }
                return spaces + text + spaces;
            };
        })
        .filter('cut', function() {
            return function(text, cut_text) {
                return text.split(cut_text).join("");
            };
        })

        .filter('date', function() {
            return function() {
                return; //TODO
            };
        })

        .filter('default', function() {
            return function(value, default_string) {
                default_string = default_string || "---";
                if (!value) { return default_string; }
                return value;
            };
        })

        .filter('default_if_none', function() {
            return function(value, default_string) {
                if (value === "") { return ""; }
                default_string = default_string || "---";
                if (!value) { return default_string; }
                return value;
            };
        })

        .filter('dictsort', function() {
            var sortdict = function(a, b) {
                if (a === b) { return 0; }
                if (a > b) { return 1; }
                return -1;
            };
            return function(dict, sortname) {
                if (!(dict instanceof Array)) { return ""; }

                var splitted = sortname.split(".");
                if (splitted.length > 1) {
                    return dict.sort(function(a, b) {
                        for (var i = 0; i < splitted.length; i++) {
                            a = a[splitted[i]];
                            b = b[splitted[i]];
                        }
                        return sortdict(a, b);
                    });
                }

                return dict.sort(function(a, b) {
                    return sortdict(a[sortname], b[sortname]);
                });
            };
        })
        .filter('dictsortreversed', function($filter) {
            return function(dict, sortname) {
                dict = $filter('dictsort')(dict, sortname);
                if (dict === "") { return ""; }
                return dict.reverse();
            };
        })

        .filter('divisibleby', function() {
            return function(num, div) {
                var res = num/div;
                return res === parseInt(res, 10);
            };
        })

        .filter('escape', function() {
            return function() {
                return; //TODO
            };
        })
        .filter('escapejs', function() {
            return function() {
                return; //TODO
            };
        })
        .filter('filesizeformat', function() {
            return function() {
                return; //TODO
            };
        })

        .filter('first', function() {
            return function(ob) {
                return ob === "" ? ob : ob[0];
            };
        })

        .filter('force_escape', function() {
            return function() {
                return; //TODO
            };
        })

        .filter('get_digit', function() {
            return function(num, index) {
                if (!index) { return num; }
                if (parseInt(num, 10).toString() !== num.toString()) { return num; }

                num = num.toString();
                num = num[num.length - index];
                if (num === undefined) { return 0; }
                return parseInt(num, 10); 
            };
        })

        .filter('iriencode', function() {
            return function() {
                return; //TODO
            };
        })

        .filter("join", function() {
            return function(ob, join_text) {
                if (!(ob instanceof Array)) { return ob; }

                join_text = join_text || "";
                return ob.join(join_text);
            };
        })

        .filter('last', function() {
            return function(ob) {
                return ob === "" ? ob : ob[ob.length - 1];
            };
        })

        .filter('length', function() {
            return function(ob) {
                return ob.length;
            };
        })

        .filter('length_is', function() {
            return function(ob, value) {
                return ob.length === value;
            };
        })

        .filter('linebreaks', function() {
            return function() {
                return; //TODO
            };
        })

        .filter('linebreaksbr', function() {
            return function() {
                return; //TODO
            };
        })


        .filter('linenumbers', function() {
            function bringToCat(num, num_cat) {
                var diff = num_cat - num.toString().length;
                if (diff) {
                    var zeros = new Array(diff + 1).join('0');
                    num = zeros + num;
                }
                return num;
            }
            return function(text) {
                text = text.split(/\r?\n/);
                var num_cat = text.length.toString().length;
                for (var i = 0; i < text.length; i++) {
                    var item = text[i];
                    text[i] = bringToCat((i + 1), num_cat) + '. ' + item;
                }

                return text.join('\n');
            };
        })

        .filter('ljust', function() {
            return function(text, len) {
                if (text.length >= len) { return text; }
                var diff = len - text.length;
                var spaces = new Array(diff + 1).join(" ");
                return text + spaces
            }
        })

        .filter('rjust', function() {
            return function(text, len) {
                if (text.length >= len) { return text; }
                var diff = len - text.length;
                var spaces = new Array(diff + 1).join(" ");
                return spaces + text;
            }
        })

        //.filter('dicsort', function() {
            //return function() {
                //return; //TODO
            //}
        //})

        //.filter('dicsort', function() {
            //return function() {
                //return; //TODO
            //}
        //})

        //.filter('dicsort', function() {
            //return function() {
                //return; //TODO
            //}
        //})

        //.filter('dicsort', function() {
            //return function() {
                //return; //TODO
            //}
        //})

        //.filter('dicsort', function() {
            //return function() {
                //return; //TODO
            //}
        //})


        .filter('linebreak', function() {
            //break_value - p, div, br
            return function(text, break_value) { 
                if (break_value === 'br') { return text.split(/\r|\n/).join("</br>"); }

                var text_arr = text.split(/\r?\n/);
                var text_arr2 = [];
                for (var i = 0; i < text_arr.length; i++) {
                    var text_item = text_arr[i];
                    text_arr2.push("<" + break_value + ">" + text_item + "</" + break_value + ">");
                }
                return text_arr2.join('');
            };
        });
})();
