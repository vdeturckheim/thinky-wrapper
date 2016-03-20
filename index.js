'use strict';
const Thinky = require('thinky');
let instance;

module.exports = function (opt) {

    if (!instance) {
        instance = Thinky(opt);
    }

    return instance;
};
