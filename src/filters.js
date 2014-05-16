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
            }
        })

        .filter('capfirst', function() {
            return function(text) {
                return text[0].toUpperCase() + text.substr(1);
            }
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
            }
        })
        .filter('cut', function() {
            return function(text, cut_text) {
                return text.split(cut_text).join("");
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
        })
        .filter("join", function() {
            return function(ob, join_text) {
                if (!(ob instanceof Array)) { return ob; }

                join_text = join_text || "";
                return ob.join(join_text);
            };
        });
})();
