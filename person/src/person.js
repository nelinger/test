/**
 *
 * @author Eran Nelinger
 *
 *
 * @class Person
 *
 *
 *
 * @constructor
 * Creates a new Person instance.
 * @param {Object} config Configuration (set of key-value pairs)
 */
var Person = function (config) {

    for (var i in config) {
        this._bindAccessors(this, i, config[i]);
    }

};



/**
 * @method _bindAccessors
 * @private
 * Automatically attach getters and setters for a given hash of properties
 * @param {Object} o The object to attach property to
 * @param {Object} property property key
 * @param {Object} value property value
 */
Person.prototype._bindAccessors = function (o, property, value) {
    var _value = value;
    o["get" + property.capitalize()] = function () {
        return _value;
    };
    o["set" + property.capitalize()] = function (v) {
        _value = v;
    };
};
