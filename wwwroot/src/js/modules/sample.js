/*
	Description: Sample class
*/


class Sample {   
    constructor(element) {
        this.options = {
            defaultValue1: null,
            defaultValue2: null
        };

        //if using jQuery..
        //this.$element = $(element);
        //this.options = $.extend(true, {}, this.options, this.$element.data('sample-options') || {});

        //if native ES6 or babel
        this.element = element;
        this.options = Object.assign(this.options, JSON.parse(this.element.dataset.sampleOptions || {}));

        this.addEvents();
    }

    addEvents() {

    }   
}


module.exports = Sample;