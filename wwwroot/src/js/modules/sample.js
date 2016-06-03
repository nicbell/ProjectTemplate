/*
	Description: Sample class
*/

class Sample {   
    constructor(element) {
        this.options = {
            defaultValue1: null,
            defaultValue2: null
        };

        this.element = element;
        this.options = Object.assign(this.options, JSON.parse(this.element.dataset.sampleOptions || {}));

        this.addEvents();
    }

    addEvents() {

    }   
}

module.exports = Sample;