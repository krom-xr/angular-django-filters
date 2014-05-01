/*global angular*/
angular.module('useful_things.filters', [])
    .filter('log', function() {
        return function(ob, is_hide_in_template) {
            console.log('template log - ', ob);
            if (is_hide_in_template) { return ''; }
            return ob;
        };
    })
    .filter('default', function() {
        return function(value, default_string) {
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
