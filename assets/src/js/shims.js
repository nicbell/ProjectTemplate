/*! 
Included shims: Function.bind
*/

/*
    Function.prototype.bind()
*/
if (!Function.prototype.bind) {
    Function.prototype.bind = function(t) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        }
        var o = Array.prototype.slice.call(arguments, 1), n = this, r = function() {}, i = function() {
            return n.apply(this instanceof r && t ? this : t, o.concat(Array.prototype.slice.call(arguments)));
        };
        r.prototype = this.prototype;
        i.prototype = new r();
        return i;
    };
}