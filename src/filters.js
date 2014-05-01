angular.module('useful.things.filters', [])
    .filter('log', function() {
        return function(ob, is_hide_in_template) {
            console.log('template log - ', ob);
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
            //return _.map(text.split("/\r?\n/"), function(text) { })
            
            return 'empty';
        }
    })
