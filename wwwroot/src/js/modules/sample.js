/*
	Description: Sample class
*/

var klass = require('klass');

var Sample = klass({

    options: {
        defaultValue1: null,
        defaultValue2: null
    },

    initialize: function (element) {
        //if using jQuery..
        //this.$element = $(element);
        //this.options = $.extend(true, {}, this.options, this.$element.data('sample-options') || {});

        //if native ES6 or shimming Object.assign
        this.element = element;
        this.options = Object.assign(this.options, JSON.parse(this.element.dataset.sampleOptions || {}));

        this.addEvents();
    },

    addEvents: function () {

    }
});


module.exports = Sample;